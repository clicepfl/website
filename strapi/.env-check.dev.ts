/**
 * This script checks and populates the local environment variables files
 * SHOULD ONLY BE USED IN DEVELOPMENT ENVIRONMENTS!
 */

import crypto from "crypto";
import deepEqual from "deep-equal";
import { parse, stringify } from "envfile";
import fs from "fs";
import Joi, { Root as JoiInstance } from "joi";
import { exit } from "process";

// https://nodejs.org/api/process.html#process_exit_codes
const FATAL_ERROR = 1;

// Only run this script in development environments
if (process.env.NODE_ENV !== "development") {
  console.error(
    "Error:",
    "\n The env checker script should only be run in development environments!",
    "\n Never run it in production!"
  );
  exit(FATAL_ERROR);
}

// Parses an env file and exits on error
function readEnv(
  filepath: string,
  adviceOnError: string,
  crashIfNotExists?: string
): Record<string, string> {
  if (!fs.existsSync(filepath)) {
    if (crashIfNotExists) {
      console.error(
        `Error: the file ${filepath} does not exist`,
        `\n ${crashIfNotExists}`
      );
      return exit(FATAL_ERROR);
    } else {
      return {};
    }
  }
  try {
    return parse(fs.readFileSync(filepath, "utf8"));
  } catch (err) {
    console.error(
      `Error while reading the file ${filepath}: \n`,
      err,
      `\n ${adviceOnError}`
    );
    return exit(FATAL_ERROR);
  }
}

// Generates n random bytes of data
function randomBytes(n: number): string {
  return crypto.randomBytes(n).toString("base64");
}

// Generates a string of n comma-separated values
function commaSeparated(n: number, factory: (() => any) | Array<() => any>) {
  if (Array.isArray(factory)) {
    if (factory.length !== n) {
      console.error(
        "Error:",
        `\n Expected ${n} factory functions but got ${factory.length} instead`
      );
      exit(FATAL_ERROR);
    }
    return factory.map((f) => f());
  } else {
    return Array.from({ length: n }, () => factory());
  }
}

// Extend Joi to validate comma-separated strings as arrays
const joi = Joi.extend((joi) => ({
  type: "stringArray",
  base: joi.array(),
  coerce: (value) => ({ value: value.split ? value.split(",") : value }),
})) as JoiInstance & { stringArray(): Joi.ArraySchema };

// .env file schema
const schema = joi
  .object({
    HOST: joi.string().ip({ version: "ipv4" }).default("0.0.0.0"),
    PORT: joi.number().greater(1024).default(8001),
    APP_KEYS: joi
      .stringArray()
      .items(joi.string().base64())
      .length(4)
      .default(commaSeparated(4, () => randomBytes(16))),
    API_TOKEN_SALT: joi.string().base64().default(randomBytes(16)),
    ADMIN_JWT_SECRET: joi.string().base64().default(randomBytes(16)),
    JWT_SECRET: joi.string().base64().default(randomBytes(16)),
  })
  .unknown(true);

// Reads .env
const env = readEnv(
  ".env",
  "If you do not have local changes in your .env file, try removing it and running this script again"
);

// Ensures that .env.example is up-to-date with .env (the opposite may not be true yet)
if (process.argv.includes("--with-example")) {
  // Reads .env.example
  const example = readEnv(
    ".env.example",
    "Make sure that you did not modify the .env.example file, and compare it to the file on the remote repository",
    "Make sure that you did not remove the .env.example file, and check that the file exists on the remote repository"
  );

  if (!Object.keys(env).every((key) => example.hasOwnProperty(key))) {
    console.error(
      "Error: some environment variables defined in .env do not have a corresponding entry in .env.example"
    );
    exit(FATAL_ERROR);
  }
}

// Completes schema
const validation = schema.validate(env);
if (validation.error) {
  console.error(
    "Validation of .env file was unsucessful: \n ",
    validation.error.message,
    "\n If you do not have local changes in your .env file, try removing it and running this script again"
  );
  exit(FATAL_ERROR);
}

// Writes to .env
const original = schema.validate(env, { noDefaults: true });
if (
  process.argv.includes("--write") &&
  !deepEqual(original.value, validation.value, { strict: true })
) {
  fs.writeFileSync(".env", stringify(validation.value));
  console.log(
    "The following configuration was written to .env:",
    validation.value
  );
}

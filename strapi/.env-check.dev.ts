
import Joi, { array } from "joi";
import { parse, stringify } from "envfile";
import fs from "fs";
import { exit } from "process"
import crypto from "crypto"

if (process.env.NODE_ENV !== "development") {
    exit(1)
}

// Adds default and failover values
function defaultValue(schema, value) {
    return schema.default(value)
}

function randomBytes(): string {
    return crypto.randomBytes(16).toString('base64')
}

// .env file schema
const schema = Joi.object({
    HOST: defaultValue(Joi.string().ip({version: 'ipv4'}), '0.0.0.0'),
    PORT: defaultValue(Joi.number().greater(1024), 1337),
    APP_KEYS: defaultValue(Joi.string().base64(), [randomBytes(), randomBytes(), randomBytes(), randomBytes()].join(',')),
    API_TOKEN_SALT: defaultValue(Joi.string().base64(), randomBytes()),
    ADMIN_JWT_SECRET: defaultValue(Joi.string().base64(), randomBytes()),
    JWT_SECRET: defaultValue(Joi.string().base64(), randomBytes())
}).unknown(true);



// Reads .env
let env = {}
if (fs.existsSync('.env')) {
    try {
        const data = fs.readFileSync('.env', 'utf8');
        env = parse(data);
    } catch (err) {
        console.error(err);
        exit(-2) // TBD: set env to {} and continue ?
    }
} else {
    env = {}
}

// Completes schema
const validation = schema.validate(env)
if (validation.error){
    console.error(validation.error.message)
    exit(-1)
}


// Write to .env
fs.writeFileSync('.env', stringify(validation.value))
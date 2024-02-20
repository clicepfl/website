"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_docker_1 = __importDefault(require("is-docker"));
const path_1 = __importDefault(require("path"));
exports.default = ({ env }) => {
    const dbClient = env("DATABASE_CLIENT", "sqlite");
    const dbConnectionSettings = dbClient === "sqlite"
        ? {
            filename: path_1.default.join(__dirname, "..", "..", env("DATABASE_FILENAME", ".tmp/data.db")),
        }
        : {
            host: env("DATABASE_HOST"),
            port: env("DATABASE_PORT"),
            database: env("DATABASE_NAME"),
            user: env("DATABASE_USER"),
            password: env("DATABASE_PASSWORD"),
        };
    return {
        connection: {
            client: dbClient,
            connection: dbConnectionSettings,
            useNullAsDefault: true,
            pool: {
                // When using Docker, change the pool min value to 0 as Docker will kill any idle connections
                // https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/required/databases.html#database-pooling-options
                min: (0, is_docker_1.default)() ? 0 : undefined, // with undefined, strapi will grab its default value
            },
        },
    };
};

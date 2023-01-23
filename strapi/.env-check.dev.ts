
import Joi from "joi";
import envfile from "envfile";
import fs from "fs";
import { exit } from "process"

if (process.env.NODE_ENV !== "development") {
    exit(1)
}

// Adds default and failover values
function defaultValue(schema, value) {
    return schema.default(value)
}


// .env file schema
const schema = Joi.object({
    HOST: defaultValue(Joi.string().ip({version: 'ipv4'}), '0.0.0.0'),
    PORT: defaultValue(Joi.number().greater(1024), 1337),
    APP_KEYS: defaultValue(Joi.string().pattern(RegExp('(\w+,)*\w+')), 'key1,key2'),
    API_TOKEN_SALT: defaultValue(Joi.string(), 'best salt ever'),
    ADMIN_JWT_SECRET: defaultValue(Joi.string(), 'best admin secret ever'),
    JWT_SECRET: defaultValue(Joi.string(), 'best secret ever')
}).unknown(true);


function readEnv(name: string) {
    let env = {}
    if (fs.existsSync(name)) {
        try {
            const data = fs.readFileSync('.env', 'utf8');
            env = envfile.parse(data);
        } catch (err) {
            console.error(err);
            exit(-2) // TBD: set env to {} and continue ?
        }
    } else {
        env = {}
    }
    return env
}

// Reads .env
let env = readEnv('.env')
let example = readEnv('.env.example')

// Completes schema
const validation = schema.validate(env)
if (validation.error){
    console.error(validation.error.message)
    exit(-1)
}

const err = schema.validate(example).error
if (err !== undefined) {
    console.error(err.message)
    exit(-1)
}

// Write to .env
fs.writeFileSync('.env', envfile.stringify(validation.value))
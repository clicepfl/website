const Joi = require("joi");
const envfile = require('envfile')
const fs = require('fs');
const { exit } = require("process");

// Adds default and failover values
function defaultValue(schema, value) {
    return schema.default(value).failover(value)
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


// Reads .env
if (fs.existsSync('.env')) {
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

// Completes schema
let env = schema.validate(env)['value']

// Write to .env
fs.writeFileSync('.env', envfile.stringify())
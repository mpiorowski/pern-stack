import knex = require('knex');
import knexfile = require('./knexfile');
const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];
export = knex(configOptions);

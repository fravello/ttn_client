var config = {};

config.debug = process.env.DEBUG || false;

config.ttn  = {};
config.ttn.appID = process.env.TTN_APPID || 'samd21';
config.ttn.accessKey  = process.env.TTN_ACCESSKEY  || 'ttn-account-v2.opL3JvYztHyM4xWGyjFgMT8IlQ1W38PZIaGFbJqswVI';

config.mongodb = {};
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || '127.0.0.1';
config.mongodb.port       = process.env.MONGODB_PORT       || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE   || 'iotdb';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'ttn_msg';

module.exports = config;

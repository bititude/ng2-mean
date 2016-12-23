'use strict';

module.exports = {
  ip: process.env.ip
    || undefined,

  port: process.env.PORT
    || 8080,

  mongo: {
    uri: process.env.MONGODB_URI
      || 'mongodb://localhost/slap'
  }
};
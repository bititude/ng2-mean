'use strict';

import path from 'path';
import _ from 'lodash';

var all = {
  env: process.env.NODE_ENV,

  root: path.normalize(`${__dirname}/../../..`),

  port: process.env.PORT || 9000,

  ip: process.env.IP || '0.0.0.0',

  seedDB: false,

  secrets: {
    session: 'slap-secret'
  },

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

module.exports = _.merge(
  all,
  require('./shared'),
  require(`./${process.env.NODE_ENV}.js`) || {});
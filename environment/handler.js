'use strict';
require('dotenv').config()


module.exports.environment = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `env1: ${process.env.env1}\n env2: ${process.env.env2}`,
        input: event,
      },
      null,
      2
    ),
  };
};

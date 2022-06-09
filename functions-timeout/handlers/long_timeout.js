'use strict';

module.exports.long = async (event) => {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await sleep(5000)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'short timeout!',
        input: event,
      },
      null,
      2
    ),
  };
};

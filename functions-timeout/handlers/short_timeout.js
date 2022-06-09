'use strict';

module.exports.short = async (event) => {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await sleep(2000)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'long timeout!',
        input: event,
      },
      null,
      2
    ),
  };
};

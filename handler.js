"use strict";

const emojis = ["1", "2", "3", "4", "5"];

module.exports.rank = async (event) => {
  const rank = event.queryStringParameters.emojirank;
  // pass the rank in query string parameter to get the emoji
  // For example: someURL.com/prod/rank?emojirank=5
  const rankEmoji = emojis[rank > emojis.length ? emojis.length - 1 : rank];
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: rankEmoji,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

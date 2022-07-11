const http = {
  error: (error, statusCode = 500) => ({
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1;mode=block",
      "Strict-Transport-Security": "max-age=63072000",
    },
    error: JSON.stringify(error),
  }),
  success: (message, statusCode = 200) => ({
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "X-Content-Type-Options": "nosniff",
      "X-XSS-Protection": "1;mode=block",
      "Strict-Transport-Security": "max-age=63072000",
    },
    body: JSON.stringify(message),
  }),
};

module.exports = {
  http,
};

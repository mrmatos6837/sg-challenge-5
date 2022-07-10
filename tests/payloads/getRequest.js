module.exports = {
  version: "2.0",
  routeKey: "GET /{itemType}/{itemId}",
  rawPath: "/test/123",
  rawQueryString: "",
  cookies: [],
  headers: {
    host: "localhost:4000",
    "user-agent": "insomnia/2022.4.2",
    accept: "*/*",
  },
  queryStringParameters: null,
  requestContext: {
    accountId: "offlineContext_accountId",
    apiId: "offlineContext_apiId",
    authorizer: { jwt: [Object] },
    domainName: "offlineContext_domainName",
    domainPrefix: "offlineContext_domainPrefix",
    http: {
      method: "GET",
      path: "/test/123",
      protocol: "HTTP/1.1",
      sourceIp: "127.0.0.1",
      userAgent: "insomnia/2022.4.2",
    },
    operationName: undefined,
    requestId: "offlineContext_resourceId",
    routeKey: "GET /{itemType}/{itemId}",
    stage: "$default",
    time: "10/Jul/2022:12:44:34 -0300",
    timeEpoch: 1657467874180,
  },
  body: null,
  pathParameters: { itemType: "test", itemId: "123" },
  isBase64Encoded: false,
  stageVariables: undefined,
};
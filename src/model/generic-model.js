const REGION = process.env.AWS_REGION ? process.env.AWS_REGION : "us-east-1";

const AWS = require("aws-sdk");
AWS.config.update({ region: REGION });
const DocumentClient = new AWS.DynamoDB.DocumentClient();

const { Table, Entity } = require("dynamodb-toolbox");
// Instantiate a table
const GenericTable = new Table({
  // Specify table name (used by DynamoDB)
  name: process.env.TABLE_NAME ? process.env.TABLE_NAME : "generic-table-dev",

  // Define partition and sort keys
  partitionKey: "pk",
  sortKey: "sk",

  // Add the DocumentClient
  DocumentClient,
});

const Item = new Entity({
  // Specify entity name
  name: "Item",

  // Define attributes
  attributes: {
    id: { partitionKey: true }, // flag as partitionKey
    sk: { sortKey: true }, // flag as sortKey and mark hidden
    someAttribute: { type: "string" },
  },

  // Assign it to our table
  table: GenericTable,
});

module.exports = {
  Item,
};

const { http } = require("../utils/httpHelper");
const { Item } = require("../model/generic-model");

module.exports.handler = async (event) => {
  console.log(event);

  const { itemType } = event.pathParameters;
  const { itemId } = JSON.parse(event.body);

  const params = {
    pk: String(itemType),
    sk: String(itemId),
  };

  try {
    // Improvemet: check if item already exists
    await Item.put(params);
    const returnMessage = `Created item '${itemType}' with id '${itemId}'.`;
    return http.success(returnMessage);
  } catch (error) {
    console.log(error);
    const returnMessage = {
      message: "Could not create user",
      error: error.message,
    };
    return http.error(returnMessage);
  }
};

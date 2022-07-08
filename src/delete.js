const { http } = require("./utils/httpHelper");
const { Item } = require("./model/generic-model");

module.exports.handler = async (event) => {
  console.log(event);

  const { itemType, itemId } = event.pathParameters;

  const params = {
    pk: String(itemType),
    sk: String(itemId),
  };

  try {
    await Item.delete(params);
    const returnMessage = `Deleted item '${itemType}' with id '${itemId}'.`;
    return http.success(returnMessage);
  } catch (error) {
    console.log(error);
    const returnMessage = {
      message: "Could not create user",
      error: error.message,
    };
    return http.serverError(returnMessage);
  }
};

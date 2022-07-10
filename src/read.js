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
    const response = await Item.get(params);
    console.log(response);

    return http.success(response.Item);
  } catch (error) {
    console.log(error);
    const returnMessage = {
      message: "Could not create user",
      error: error.message,
    };
    return http.error(returnMessage);
  }
};

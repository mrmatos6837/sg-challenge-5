const { http } = require("./utils/httpHelper");
const { Item } = require("./model/generic-model");

module.exports.handler = async (event) => {
  console.log(event);

  const { itemType } = event.pathParameters;

  try {
    const response = await Item.query(itemType);
    console.log(response);
    // Improvemet: check if response is empty
    return http.success(response.Items);
  } catch (error) {
    console.log(error);
    const returnMessage = {
      message: "Could not create user",
      error: error.message,
    };
    return http.serverError(returnMessage);
  }
};

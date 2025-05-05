const store = require("./todosStore");

exports.handler = async function (event) {
  try {
    const id = parseInt(event.pathParameters?.id, 10);

    if (isNaN(id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid ID" }),
      };
    }

    const success = store.deleteTodo(id);

    if (!success) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Todo not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Todo deleted" }),
    };
  } catch (err) {
    console.error("Error in deleteTodo:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

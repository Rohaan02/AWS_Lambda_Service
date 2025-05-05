const store = require("./todosStore");

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const { id, title, completed } = body;

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "id is required" }),
      };
    }

    const updatedTodo = store.updateTodo(id, title, completed);

    if (!updatedTodo) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Todo not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(updatedTodo),
    };
  } catch (err) {
    console.error("Error in updateTodo:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

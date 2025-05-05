const store = require("./todosStore");

exports.handler = async function (event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const { title } = body;

    if (!title) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "title is required" }),
      };
    }

    const newTodo = store.addTodo(title);

    return {
      statusCode: 201,
      body: JSON.stringify(newTodo),
    };
  } catch (err) {
    console.error("Error in postTodo:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

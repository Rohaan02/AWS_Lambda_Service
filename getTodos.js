const store = require("./todosStore");

exports.handler = async function () {
  try {
    const todos = store.getTodos();
    return {
      statusCode: 200,
      body: JSON.stringify(todos),
    };
  } catch (err) {
    console.error("Error in getTodos:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};

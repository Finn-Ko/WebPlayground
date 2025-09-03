import express from "express";

const app = express();
const port = process.env.PORT ?? "9001";

app.get("/", (req, res) => {
  console.log(`Connection at ${new Date().toISOString()}`);
  res.send("Hello World! This is a test server.");
});

app.listen(port, () => {
  console.log(`Node server listening on port ${port}`);
});

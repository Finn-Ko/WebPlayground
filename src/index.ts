import cors from "cors";
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT ?? "9001";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the Vue app
app.use(express.static(path.join(__dirname, "..", "dist", "client")));

// Redirect all requests to the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "client", "index.html"));
});

// Api routes
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Start server
app.listen(port, () => {
  console.log(`Node server listening on port ${port}`);
});

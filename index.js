import express from "express";
import InfisicalClient from "infisical-node";
const app = express();
const PORT = 3000;

const client = new InfisicalClient({
  token: "ak.653b93f2fef89b1de0fee717.828da31cc6eaeaa35f70f37ede50dab9",
});

app.get("/", async (req, res) => {
  // access value
  const name = await client.getSecret("NAME", {
    environment: "dev",
    path: "/",
    type: "shared",
  });
  res.send(`Hello! My name is: ${name.secretValue}`);
});

app.listen(PORT, async () => {
  // initialize client
  console.log(`App listening on port ${port}`);
});

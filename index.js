import express from "express";
import InfisicalClient from "infisical-node";
const app = express();
const PORT = 3000;

const client = new InfisicalClient({
  token: "st.653c9f61fef89b1de0fefdaf.7688e48c2fb9edebc3fc656109ab3653.7fa666892f965e95ea9b2b1da1d8bd21"
,
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

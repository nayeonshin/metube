import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("Hello, World!");
};

const handleSignIn = (req, res) => {
  return res.send("Sign in here.");
};

app.get("/", handleHome);
app.get("/signin", handleSignIn);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

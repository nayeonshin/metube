import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => res.send("Hello!");
const handleSignIn = (req, res) => res.send("Sign in");

app.use(logger);
app.get("/", handleHome);
app.get("/signin", handleSignIn);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);

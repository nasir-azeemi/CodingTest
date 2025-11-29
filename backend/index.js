import express from "express";
import axios from "axios";

const app = express();

const PORT = 3000;

app.use(express.json()); // So Express know you're using JSON

app.get("/", (request, response) => {
  return response.send("here");
});

app.get("/api/users", async (request, response) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  const users = res.data;

  return response.send(users);
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Runninand App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

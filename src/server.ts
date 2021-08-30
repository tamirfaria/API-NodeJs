import express, { response } from "express";

const app = express();

app.get("/test-get", (request, response) => {
  return response.send("GET is work")
});

app.post("/test-post", (request, response) => {
  return response.send("POST is work")
});

app.listen(3000, () => console.log("Server is running"));
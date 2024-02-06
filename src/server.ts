import express, { request, response } from "express";


const app = express();

app.get("/test", (request, response) => {
 return response.send("Olá mundo");
});


app.post("/test-post", (request, response) => {
  return response.send("Olá Mundo test-post");
});

app.listen(3000, () => console.log("server is running"));

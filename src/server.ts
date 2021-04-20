import express, { request, response } from "express";

import "./database";

const app = express();

const PORT : number = 3333;


app.get("/", (request, response) => {
    return response.json({
        message: "OLÁ NLW 05!"
    });
});

app.post("/users", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
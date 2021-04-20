import express from "express";

import "./src/database";
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

const PORT : number = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
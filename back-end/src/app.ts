import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { clientRoutes } from "./routes/client.routes";
import { loginRoutes } from "./routes/login.routes";
import { handleError } from "./errors/handleError";

const app = express();
app.use(express.json());

app.use("/client", clientRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;

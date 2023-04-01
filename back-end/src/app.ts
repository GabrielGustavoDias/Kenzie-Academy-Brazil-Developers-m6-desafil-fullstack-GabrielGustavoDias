import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { clientRoutes } from "./routes/client.routes";
import { contactRoutes } from "./routes/contact.routes";
import { loginRoutes } from "./routes/login.routes";
import { handleError } from "./errors/handleError";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/client", clientRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;

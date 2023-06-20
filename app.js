import session from "express-session";
import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
);
app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000","https://adorable-horse-cee909.netlify.app","https://a5--adorable-horse-cee909.netlify.app"]
    })
);
app.use(express.json());
AuthController(app);
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);
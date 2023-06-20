import session from "express-session";
import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
console.log("---------CONNECTION_STRING--------")
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
const app = express();
app.use(
    session({
      secret: "any string",
      resave: false,
      proxy: true,
      saveUninitialized: true,
      cookie: {
        sameSite: "none",
        secure: true,
      },
    })
);
app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:3000","https://a6--capable-dodol-7ac34a.netlify.app"]
    })
);
app.use(express.json());
AuthController(app);
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);
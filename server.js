import app from "./app.js";
import { connectDB } from "./config/database.js";
import Razorpay from "razorpay";
connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZOROAY_API_KEY,
  key_secret: process.env.RAZOROAY_API_SECRET,
});

app.get("/", (req, res, next) => {
  res.send("<h1>working</h1>");
});

app.listen(process.env.PORT, () =>
  console.log(
    `server is working on PORT: ${process.env.PORT},in ${process.env.NODE_ENV}`
  )
);

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

// import authRouter from "./routes/auth.js";
// import productRouter from "./routes/product.js";
// import orderRouter from "./routes/order.js";
import eventRouter from "./routes/event.js";

// import colorRouter from "./routes/color.js";
// import sizeRouter from "./routes/size.js";
// import categoryRouter from "./routes/category.js";
// import reviewRouter from "./routes/review.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  res.send("MNMLFM backend");
});

app.use("/api/event", eventRouter);
// app.use("/api/products", productRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/payment", stripeRouter);
// app.use("/api/order", orderRouter);
// //admin || dashboard
// app.use("/api/color", colorRouter);
// app.use("/api/size", sizeRouter);
// app.use("/api/review", reviewRouter);

//db connection
mongoose.set("strictQuery", true);
mongoose
  .connect(
    process.env.MONGODB_URL || {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`server port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(`${err} : did not connect`));
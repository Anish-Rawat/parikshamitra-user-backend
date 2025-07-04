import dotenv from "dotenv";
import app from "./app";
import connectDb from "./db";

dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT ?? 8000, () => {
      console.log(`Server is running at port number ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Server is not running`, error);
  });

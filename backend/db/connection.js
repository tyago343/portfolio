import mongoose from "mongoose";
function connectDB() {
  mongoose
    .connect("mongodb://localhost/portfolio", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => console.log("DDBB conection"))
    .catch(e => console.log("Error in DDBB conection", e));
}

export default connectDB;

import mongoose from "mongoose";

const dbConnection = async () => {
  const connectUri = process.env.MONGO_DB_URI as string;
  await mongoose
    .connect(connectUri)
    .then(() => {
      console.log("Database Is connected.................");
    })
    .catch((error) => {
      console.error("Something Goes Wrong..", error);
    });
};

export default dbConnection;

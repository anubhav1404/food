import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const username = encodeURIComponent(process.env.MONGO_DB_USERNAME);
    const password = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
    const cluster = process.env.MONGO_DB_CLUSTER;
    const options = process.env.MONGO_DB_OPTIONS;

    const uri = `mongodb+srv://${username}:${password}@${cluster}/?${options}`;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1); // Exit process with failure
  }
};

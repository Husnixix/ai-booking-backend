import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not set");
        }

        await mongoose.connect(MONGO_URI);
        console.log("Connected to the database...");
    } catch (error) {
        console.log("Error connecting to the database...");
        console.log(error);
    }
};

export default connectDatabase;
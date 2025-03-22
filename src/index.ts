import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import hotelsRouter from "./api/hotel";
import connectDatabase from "./infrastructure/database";
import bookingsRouter from "./api/booking";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handler";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

connectDatabase();

app.use("/api/hotels", hotelsRouter);
app.use("/api/bookings", bookingsRouter);

app.use(globalErrorHandlingMiddleware);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});



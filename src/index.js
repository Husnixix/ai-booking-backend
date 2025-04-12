"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const hotel_1 = __importDefault(require("./api/hotel"));
const database_1 = __importDefault(require("./infrastructure/database"));
const booking_1 = __importDefault(require("./api/booking"));
const global_error_handler_1 = __importDefault(require("./api/middleware/global-error-handler"));
const express_2 = require("@clerk/express");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({ origin: "https://aidf-le-luxe-frontend-husni.netlify.app" }));
app.use(express_1.default.json());
app.use((0, express_2.clerkMiddleware)());
(0, database_1.default)();
app.use("/api/hotels", hotel_1.default);
app.use("/api/bookings", booking_1.default);
app.use(global_error_handler_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    },
    guests: {
        adults: {
            type: Number,
            required: true,
            min: 1, // At least 1 adult is required
        },
        children: {
            type: Number,
            required: true,
            min: 0, // Can be 0
        },
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
    },
    noOfRooms: {
        type: Number,
        required: true,
    },
    bookingStatus: {
        type: String,
        enum: ["PENDING", "CONFIRMED", "CANCELLED"],
        default: "PENDING",
    },
}, { timestamps: true }); // Adds createdAt & updatedAt fields

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;

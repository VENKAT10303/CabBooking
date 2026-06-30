import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        required: true,
    },

    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver",
        default: null
    },

    pickupLocation: {
        type: String,
        required: true,
    },

    dropLocation: {
        type: String,
        required: true,
    },

    distance: {
        type: Number,
        required: true,
    },

    fare: {
        type: Number,
        required: true,
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid"],
        default: "Pending"
    },

    paymentMethod: {
        type: String,
        enum: ["Cash", "Card", "UPI"],
        default: "Cash"
    },

    bookingDate: {
        type: Date,
        default: Date.now,
    },

    isRated: {
        type: Boolean,
        default: false
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Accepted",
            "Started",
            "Completed",
            "Cancelled"
        ],
        default: "Pending",
    }
},
{
    timestamps: true,
});

export default mongoose.model("Booking", bookingSchema);
import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        licenseNumber: {
            type: String,
            required: true,
            unique: true
        },

        car: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Car"
        },

        isAvailable: {
            type: Boolean,
            default: true
        },

        totalEarnings: {
            type: Number,
            default: 0
        },

        ratings: [
            {
                type: Number,
                min: 1,
                max: 5
            }
        ],

        averageRating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);
const Driver = mongoose.models.Driver || mongoose.model("Driver", driverSchema);

export default Driver;
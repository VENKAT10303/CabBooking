import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Car from "../models/CarSchema.js";
import Driver from "../models/Driver.js";

// Get All Users
export const getAllUsers = async (req, res) => {
    try {

        const users = await User.find().select("-password");

        res.status(200).json({
            success: true,
            count: users.length,
            users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Delete User
export const deleteUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });

        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Dashboard
export const getDashboard = async (req, res) => {

    try {

        const totalUsers = await User.countDocuments();

        const totalCars = await Car.countDocuments();

        const totalBookings = await Booking.countDocuments();

        res.status(200).json({

            success: true,

            dashboard: {

                totalUsers,

                totalCars,

                totalBookings

            }

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get All Bookings
export const getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find()

            .populate("user", "-password")

            .populate("car");

        res.status(200).json({

            success: true,

            count: bookings.length,

            bookings

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

// Get All Cars
export const getAllCars = async (req, res) => {

    try {

        const cars = await Car.find();

        res.status(200).json({
            success: true,
            count: cars.length,
            cars
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Drivers
export const getAllDrivers = async (req, res) => {

    try {

        const drivers = await Driver.find().select("-password");

        res.status(200).json({
            success: true,
            count: drivers.length,
            drivers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete Driver
export const deleteDriver = async (req, res) => {

    try {

        const driver = await Driver.findById(req.params.id);

        if (!driver) {
            return res.status(404).json({
                success: false,
                message: "Driver Not Found"
            });
        }

        await Driver.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Driver Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};
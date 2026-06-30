import express from "express";
import {
    getAllUsers,
    deleteUser,
    getDashboard,
    getBookings,
    getAllCars,
    getAllDrivers,
    deleteDriver
} from "../controllers/adminController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Dashboard
router.get("/dashboard", authMiddleware, adminMiddleware, getDashboard);
// Users
router.get("/users", authMiddleware, adminMiddleware, getAllUsers);
router.delete("/users/:id", authMiddleware, adminMiddleware, deleteUser);
router.get("/cars", authMiddleware, adminMiddleware, getAllCars);
// Bookings
router.get("/bookings", authMiddleware, adminMiddleware, getBookings);
router.get("/drivers", authMiddleware, adminMiddleware, getAllDrivers);
router.delete("/driver/:id", authMiddleware, adminMiddleware, deleteDriver);

export default router;
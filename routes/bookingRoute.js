import express from "express";
import {
    bookRide,
    getMyBookings,
    cancelBooking,
    getAllBookings,
    getBookingById,
    rateDriver
} from "../controllers/bookingController.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

// User Routes
router.post("/book", authMiddleware, bookRide);
router.get("/my-bookings", authMiddleware, getMyBookings);
router.put("/cancel/:id", authMiddleware, cancelBooking);
router.put("/rate/:id", authMiddleware, rateDriver);
// Admin Route (we'll protect it with adminMiddleware later)
router.get("/", authMiddleware, adminMiddleware, getAllBookings);
router.get("/:id", authMiddleware, getBookingById);

export default router;
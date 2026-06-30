import express from "express";
import {
    registerDriver,
    loginDriver,
    getDriverProfile,
    updateDriverProfile,
    acceptRide,
    rejectRide,
    startRide,
    completeRide,
    getRideHistory,
    getDriverEarnings,
} from "../controllers/driverController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Driver Authentication
router.post("/register", registerDriver);
router.post("/login", loginDriver);
// Driver Profile
router.get("/profile", authMiddleware, getDriverProfile);
router.put("/profile", authMiddleware, updateDriverProfile);
router.put("/accept/:id", authMiddleware, acceptRide);
router.put("/reject/:id", authMiddleware, rejectRide);
router.put("/start/:id", authMiddleware, startRide);
router.put("/complete/:id", authMiddleware, completeRide);
router.get("/ride-history", authMiddleware, getRideHistory);
router.get("/earnings", authMiddleware, getDriverEarnings);

export default router;
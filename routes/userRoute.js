import express from "express";
import {
    registerUser,
    loginUser,
    getProfile,
    updateProfile
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// User Authentication
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
});
// User Profile
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);

export default router;
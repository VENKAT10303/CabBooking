import express from "express";
import {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
} from "../controllers/carController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
// adminMiddleware will be added later
import adminMiddleware from "../middlewares/adminMiddleware.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Public Routes
router.get("/", getAllCars);
router.get("/:id", getCarById);
// Admin Routes
router.post("/add", authMiddleware, adminMiddleware, upload.single("image"), addCar);
router.put("/update/:id", authMiddleware, adminMiddleware, upload.single("image"), updateCar);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteCar);

export default router;
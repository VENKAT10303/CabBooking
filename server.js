import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/config.js";
import userRoutes from "./routes/userRoute.js";
import driverRoutes from "./routes/driverRoutes.js";
import carRoutes from "./routes/carRoute.js";
import bookingRoutes from "./routes/bookingRoute.js";
import adminRoutes from "./routes/adminRoute.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/users", userRoutes);
app.use("/api/drivers", driverRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to UCab Backend API");
});

const PORT = process.env.PORT || 8000;

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API Route Not Found"
    });
});

app.listen(PORT, () => {
    console.log(`🚀 UCab Backend Server is running at http://localhost:${PORT}`);
});
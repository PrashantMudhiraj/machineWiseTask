const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Function to generate random sensor data
const generateSensorData = () => {
    return {
        temperature: Math.random() * 100, // 0-100°C
        vibration: Math.random() * 30, // 0-30 mm/s
        current: Math.random() * 20 + 10, // 10-30 Amperes
        voltage: Math.random() * 50 + 200, // 200-250 Volts
        timestamp: new Date().toISOString(),
    };
};

// Function to calculate machine status
const calculateMachineStatus = (temperature, vibration) => {
    if (temperature > 80 && vibration > 20) {
        return "Critical";
    } else if (temperature > 80 || vibration > 20) {
        return "Warning";
    }
    return "Healthy";
};

// API endpoint for sensor data
app.get("/api/sensor-data", (req, res) => {
    const sensorData = generateSensorData();
    const status = calculateMachineStatus(
        sensorData.temperature,
        sensorData.vibration
    );

    res.json({
        ...sensorData,
        status,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

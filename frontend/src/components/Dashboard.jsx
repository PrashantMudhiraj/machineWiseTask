import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
    const [sensorData, setSensorData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/sensor-data"
            );
            setSensorData(response.data);
            setError(null);
        } catch (err) {
            setError("Failed to fetch sensor data");
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    if (!sensorData) {
        return <div className="dashboard">Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Machine Status Dashboard</h1>

            {error && <div className="error">{error}</div>}

            <div className="status-indicator">
                <h2>Status:</h2>
                <div className={`status-badge ${sensorData.status}`}>
                    {sensorData.status}
                </div>
            </div>

            <div className="sensor-grid">
                {[
                    {
                        label: "Temperature",
                        value: sensorData.temperature.toFixed(1),
                        unit: "°C",
                    },
                    {
                        label: "Vibration",
                        value: sensorData.vibration.toFixed(1),
                        unit: "mm/s",
                    },
                    {
                        label: "Current",
                        value: sensorData.current.toFixed(1),
                        unit: "A",
                    },
                    {
                        label: "Voltage",
                        value: sensorData.voltage.toFixed(1),
                        unit: "V",
                    },
                ].map((sensor) => (
                    <div className="sensor-card" key={sensor.label}>
                        <div className="sensor-label">{sensor.label}</div>
                        <div className="sensor-value">{sensor.value}</div>
                        <div className="sensor-unit">{sensor.unit}</div>
                    </div>
                ))}
            </div>

            <div className="timestamp">
                Last updated: {new Date(sensorData.timestamp).toLocaleString()}
            </div>
        </div>
    );
};

export default Dashboard;

# MachineWise IoT Dashboard

A real-time dashboard application for monitoring industrial machine sensors, built with React.js and Node.js/Express.

## Approach and Implementation Details

### Architecture and Design Decisions

The application is split into two main components:

1. **Backend (Node.js + Express)**

    - Implements a mock sensor data API that generates realistic machine data
    - Calculates machine status based on temperature and vibration thresholds
    - Updates data every request to simulate real-time sensor readings
    - Uses CORS to allow frontend access

2. **Frontend (React.js)**
    - Real-time dashboard with Material-UI components for a clean, professional look
    - Auto-refreshes every 5 seconds to fetch latest sensor data
    - Visual status indicators with color coding (Green/Orange/Red)
    - Responsive design that works on various screen sizes

### Production Improvements

For a production-grade version, I would implement the following improvements:

1. **Data Management & Security**

    - Implement proper authentication and authorization
    - Use WebSocket/MQTT for real-time data instead of polling
    - Add data validation and sanitization
    - Implement error boundaries and proper error handling

2. **Performance & Reliability**

    - Add data caching and historical data storage
    - Implement retry mechanisms for failed API calls
    - Add load balancing and horizontal scaling capabilities
    - Implement proper logging and monitoring

3. **Features & UX**
    - Add historical data visualization with charts
    - Implement configurable thresholds and alerts
    - Add email/SMS notifications for critical states
    - Include machine learning for predictive maintenance

## Setup and Running

1. Backend Setup:

    ```bash
    cd backend
    npm install
    npm run dev
    ```

2. Frontend Setup:
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

The dashboard will be available at `http://localhost:5173`, and the backend API will run on `http://localhost:5000`.
"# machineWiseTask" 

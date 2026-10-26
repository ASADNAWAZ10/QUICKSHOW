### Movie Ticket Booking Website

A full-stack Movie Ticket Booking application built using the MERN stack (MongoDB, Express.js, React via Vite, and Node.js) and deployed live on Vercel. 

### 🚀 Live Demo

Check out the live application here: [Live Link]
(https://quickshow-client-git-main-asadnawaz10s-projects.vercel.app)

### ✨ Features

* **User Authentication:** Secure signup and login using JWT.
* **Movie Browsing:** View current and upcoming movies with filters for genre and language.
* **Interactive Seat Selection:** Real-time seat layout to choose preferred seats.
* **Ticket Booking:** Seamless booking flow with instant confirmation.
* **Admin Dashboard:** Manage movies, showtimes, theaters, and view booking statistics.
* **Responsive Design:** Optimized for mobile, tablet, and desktop screens.

### 🛠️ Tech Stack

* **Frontend:** React.js (Vite), Tailwind CSS, Redux Toolkit / Context API
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, MERN Object Modeling via Mongoose
* **Deployment:** Vercel (Frontend & Backend configured via vercel.json)

### 📁 Project Structure

text

├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Route logic
│   ├── models/          # Mongoose schemas (User, Movie, Booking)
│   ├── routes/          # API endpoints
│   └── app.js         # Backend entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI elements
│   │   ├── pages/       # Page views (Home, MovieDetail, Booking)
│   │   ├── App.jsx      # Main application component
│   │   └── main.jsx     # Frontend entry point
└── vercel.json          # Vercel deployment configuration

Use code with caution.

### ⚙️ Installation and Setup

### Prerequisites

Make sure you have Node.js and MongoDB installed on your system. 

### 1. Clone the Repository

bash

git clone https://github.com/ASADNAWAZ10/QUICKSHOW

Use code with caution.

### 2. Backend Setup

Navigate to the backend directory, install dependencies, and set up your environment variables. 

bash

cd backend
npm install

Use code with caution.

Create a .env file in the backend folder and add: 

env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Use code with caution.

Start the backend server: 

bash

npm start

Use code with caution.

### 3. Frontend Setup

Navigate to the frontend directory, install dependencies, and configure your API URL. 

bash

cd ../frontend
npm install

Use code with caution.

Create a .env file in the frontend folder and add: 

env

VITE_API_URL=http://localhost:5000/api

Use code with caution.

Start the frontend development server: 

bash

npm run dev

Use code with caution.

### 🌐 Deployment on Vercel

To deploy this project seamlessly on Vercel, ensure you have a vercel.json file in your root directory configured to route your API requests and serve the frontend static files properly. 

Remember to add your production environment variables (MONGODB_URI, JWT_SECRET, etc.) directly in your Vercel Project Settings. 

### 📄 License

This project is licensed under the MIT License.
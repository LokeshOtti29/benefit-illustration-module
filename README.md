## Benifit Illustration Module
**This is a full-stack web application that allows users to register, log in, and generate policy illustrations based on input parameters like age, premium, sum assured, and policy term. The app also calculates bonuses and benefits dynamically and displays them in a detailed tabular format.**

## Features
- User Registration & Login with JWT (stored in cookies)
- Protected Routes via Middleware
- Dynamic Policy Illustration Table
- Bonus Calculation with Varying Rates
- Data saved per user (MongoDB)
- Form validation using Zod
- Full-stack: React + Node.js + Express + MongoDB

## Tech stack
1) Frontend: 
   - React, Axios, React Router DOM, Bootstrap, Zod (for schema validation)
2) Backend:
   - Node.js, Express.js, MongoDB (with Mongoose), JWT for authentication, Cookie-based session management, dotenv for environment configs

## Setup Instructions
1) Clone the repository
2) Setup Backend:
   - npm install
   - env file:
      - PORT=5000
      - MONGO_URI=your_mongodb_connection_string
      - JWT_SECRET=your_jwt_secret
3) Start the server:
    - npm start
4) Setup Frontend
   - npm install
   - npm run dev
   

import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`SERVER CONNECTED SUCCFLY http://localhost: ${PORT}`);
    
})

// //2. Difference between Node and Express

// Node.js → A runtime environment to run JavaScript on the server.

// Express.js → A framework built on Node.js to make server and API creation easier.

//  Node = Engine
//  Express = Tool built on Node

// 3. What is .env?

// .env is a file used to store secret or environment variables.

// Example: PORT number, database password.

// Example:

// PORT=5000
// DB_PASSWORD=12345

// 4. What is listen()?

// app.listen() is used to start the server.

// It tells the server to run on a specific port.

// Example:

// app.listen(5000)

// 5. What is Express?

// Express is a Node.js framework.

// It helps to build servers and APIs easily.

// 6. Why do we use Express?

// Makes server creation simple

// Easy routing

// Middleware support

// Faster API development

// 7. What is Nodemon?

// Nodemon is a tool that automatically restarts the server when you change the code.

// No need to stop and restart manually.

// Run:

// nodemon server.js

// 8. What is Port Number and Localhost?

// Port Number → A door number where the server runs (3000, 5000, etc.)

// Localhost → Your own computer.

// Example:

// http://localhost:5000

// 9. What is API?

// API (Application Programming Interface) connects frontend and backend.

// It sends and receives data.

// 10. Flow of Express + Frontend

// User clicks button

// Frontend sends request

// Express server receives request

// Server gets data from database

// Server sends JSON response

// Frontend displays data

// 11. What is package.json?

// package.json is a project information file.

// It contains:

// Project name

// Dependencies (express, nodemon)

// Scripts

// Version

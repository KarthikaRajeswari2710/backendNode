import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import RespRoute from "./routes/RespRoute.js"

dotenv.config()
const startapp = express()





const PORT = process.env.PORT || 5000

startapp.use(cors())
startapp.use(express.json())

// // task 1 GET route
// startapp.get("/success", (req, res) => {
//   res.status(200).send("Operation Successful");
// });
 
//2)task 2

//http://localhost:5000/profile
startapp.get("/profile", (req, res) => {
  res.status(200).json({
    name: "Karthi",
    role: "Full Stack Developer",
    experience: "1 Year"
  });
});

//3 task
//http://localhost:5000/create-user
startapp.post("/create-user",(req,res)=>{
    console.log(req.body);
    res.status(201).json({
        message: "user created succsfully"
    })
    
})



// Run on port 5000
startapp.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});




// startapp.use("/api/senddata",RespRoute)



// startapp.listen(PORT,()=>{
//     console.log(`server running succesfully http://localhost:${PORT}`);
    
// })


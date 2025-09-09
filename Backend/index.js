import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./util/db.js";


dotenv.config();

const PORT = process.env.PORT;

connectDB();

// SERVER

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
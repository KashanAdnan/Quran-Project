import express from "express";
import cors from "cors"
import cloudinary from "cloudinary"
import {
    connectDatabase
} from "./database/connection.DB.mjs"
import dotenv from "dotenv";
import {
    UserRoute
} from "./routes/user.routes.mjs";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}))
dotenv.config()
app.use(cookieParser())

const password = process.env.password;
connectDatabase(`mongodb+srv://dbuser:${password}@cluster0.zttuzw8.mongodb.net/?retryWrites=true&w=majority`)

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});


app.use("/api/v1", UserRoute)


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is Listening on PORT : http://localhost:${PORT} `);
})
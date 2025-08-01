import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// .use is used for middlewares or configs
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// now data can come in form of json, url so we need to config that how we will receive data and what is its limit
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit:"16kb"}));
// some data for public excess
app.use(express.static("public"));
app.use(cookieParser());

export default app
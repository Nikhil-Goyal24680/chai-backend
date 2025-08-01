import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()


// one method to connect database to atlas
/*
import express from "express";
const app = express()

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // even after connecting data, sometime app has not been able to listen to database causing error
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on post ${process.env.PORT}`);
        })
        throw err
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/
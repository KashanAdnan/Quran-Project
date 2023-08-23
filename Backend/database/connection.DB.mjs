import mongoose from "mongoose";

const connectDatabase = (url) => {
    mongoose.connect(url)
        .then((data) => {
            console.log(`MongoDB Connected With ${data.connection.host}`);
        })
}

export { connectDatabase } 
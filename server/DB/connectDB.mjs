import mongoose from "mongoose";

const connectDatabase = (url) => {
    mongoose.connect(url).then((res) => {
        console.log(`MongoDb Connected ${res.connection.host} `);
    }).catch((err) => {
        console.log(`MongoDb Disconnected`);
    })
}

export default connectDatabase
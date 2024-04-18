import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-list-cluster.wsldva6.mongodb.net/?retryWrites=true&w=majority&appName=Todo-list-cluster`

    mongoose.connect(MONGO_URL, { useNewUrlParser: true })
        .then(() => console.log("Mongo connected"))
        .catch((err) => console.log(`Mongo error: ${err}`))
}

export default Connection;
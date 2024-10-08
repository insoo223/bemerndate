// mongoose related codes
// Set up mongoose connection
import mongoose from 'mongoose';

const dev_db_url = "mongodb+srv://insoo:lkLsZxo6R6UsSY7m@democluster.js58dt3.mongodb.net/merndate?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_URI || dev_db_url;

const connectDB = async () => {
    await mongoose.connect(mongoDB);
}

export default connectDB
// module.exports = connectDB


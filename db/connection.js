import mongoose from 'mongoose'
import chalk from 'chalk'

const connectionString = process.env.DB_URL || "mongodb://127.0.0.1:27017/activities"

mongoose.connect(connectionString)


const db = mongoose.connection


mongoose.set("returnOriginal", false)

db.once("disconnected", () => {

  console.log(chalk.bold("Disconnected from MongoDB!"));
});


db.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default db;
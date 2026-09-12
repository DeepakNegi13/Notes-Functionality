const dns = require("dns");
require("dotenv").config();
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");

const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/notes";

async function connect() {
	try {
		await mongoose.connect(mongoURI);
		console.log("connected to database");
	} catch (error) {
		console.error("MongoDB connection error:", error.message);
		throw error;
	}
}

module.exports = connect;

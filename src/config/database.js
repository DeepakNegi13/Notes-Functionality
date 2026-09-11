const dns = require('dns');
require("dotenv").config();
dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoose = require("mongoose");
function connect(){
    mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log("connected to database")
        })
}

module.exports = connect;
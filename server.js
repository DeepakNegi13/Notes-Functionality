const app = require("./src/app");
const connect = require("./src/config/database");
connect();




app.listen(3000,()=>{
    console.log("server is running")
})
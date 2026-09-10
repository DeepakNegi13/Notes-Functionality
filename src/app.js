const express = require("express");
const app = express();
const notes = [];
app.use(express.json())
app.delete("/notes/:id",(req,res)=>{
    const id = req.params.id;
    delete notes[id];
    res.status(200).json({
        message : "Note deleted successfully"
    })
})
app.get("/notes",(req,res)=>{
    res.status(200).json({
        remarks:"notes send successfully",
        notes:notes
    })
})
app.patch("/notes/:id",(req,res)=>{
    const idx = req.params.id;
    const description = req.description;
    notes[idx].description = description;
    res.status(200).json({
        message:"note updated successfully"
    })

})
app.post("/notes",(req,res)=>{
    console.log(req.body)
    res.send("hello")
    notes.push(req.body)
    console.log(notes)
    // res.send(req.body)
})






module.exports = app;
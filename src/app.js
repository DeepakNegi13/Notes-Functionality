const express = require("express");
const app = express();
const note = require("./models/notes.models")
const notes = []
app.use(express.json())
app.delete("/notes/:id",(req,res)=>{
    note.deleteOne({_id:req.params.id}).then(()=>{
        res.status(200).json({
            message : "Note deleted successfully"
        })
    })
})
app.get("/notes",(req,res)=>{
    note.find().then((notes) => res.status(200).json({
        remarks:"notes send successfully",
        notes
    }))
})

app.patch("/notes/:id",(req,res)=>{
    const idx = req.params.id;
    const description = req.description;
    notes[idx].description = description;
    res.status(200).json({
        message:"note updated successfully"
    })

})
app.post("/notes",async (req,res)=>{
    const {title, description} = req.body;
    const newNote = await note.create({title, description});
    res.status(201).json({
        message:"note created successfully",
        note: newNote
    })
})






module.exports = app;
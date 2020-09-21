const e = require("express");

const route = e.Router();
const projectDB = require("../data/helpers")

route.get("/", (req, res) =>{
    projectDB.find("Project")
        .then(projects => {
            res.status(200).json(projects)
        })
})

route.get("/resources", (req, res) => {
    projectDB.find("Resource")
        .then(resources =>{
            res.status(200).json(resources)
        })
})

route.get("/tasks", (req, res) => {
    projectDB.find("Task")
        .then(tasks =>{
            res.status(200).json(tasks)
        })
})

route.post("/", (req, res) =>{
    if(req.body !== undefined){
        projectDB
            .add("Project", req.body)
            .then(project => {
                res.status(201).json(project)
            })
    } else {
        res.status(500).json({"error":"no body"})
    }
})

route.post("/resources", (req, res) =>{
    if(req.body !== undefined){
        projectDB
            .add("Resource", req.body)
            .then(project => {
                res.status(201).json(project)
            })
    } else {
        res.status(500).json({"error":"no body"})
    }
})

route.post("/tasks", (req, res) =>{
    if(req.body !== undefined){
        projectDB
            .add("Task", req.body)
            .then(project => {
                res.status(201).json(project)
            })
    } else {
        res.status(500).json({"error":"no body"})
    }
})

module.exports = route;
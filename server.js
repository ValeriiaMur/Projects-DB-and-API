const e = require("express");
const projectRoute = require("./API/projectRoute")

const server = e();

server.use(e.json());
server.use("/projects", projectRoute)

const port = process.allowedNodeEnvironmentFlags.PORT || 3000;

server.listen(port, () =>{
    console.log(`The server is running on port ${port}`)
})

module.export = server;
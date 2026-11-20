import {fork} from 'child_process'
const process = fork("new.js");

process.on("message",(data)=>{
    console.log(data)
})
process.send("message from parent")


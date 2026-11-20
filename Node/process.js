import {fork} from 'child_process';

const child= fork("./Child.js");

child.send("hello child");

child.on("message",(msg)=>{
    console.log("From child",msg)
})
// import {fork} from 'child_process';
 
// const Child = fork("./Child.js");

// Child.send("hello from parent")
// Child.on("message",(msg)=>{
//     console.log(`message from child : ${msg}`)
// });

import {spawn} from 'child_process';

const child = spawn("node",['App.js']);

child.stdout.on("data",(data)=>{
    console.log(data.toString())
})
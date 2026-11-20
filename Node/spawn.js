import {spawn} from 'child_process';

const child =spawn("node", ["test.js"]);

child.stdout.on("data",(data)=>{
    console.log(data.toString());
    
})
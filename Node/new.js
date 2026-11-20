process.on("message",(data)=>{
    console.log(data);
    process.send("message from child")
})
import cluster from 'cluster';
import os from 'os';
import express from 'express'

const count = os.cpus().length;

console.log(count);
if(cluster.isPrimary){
    for(let i=0;i<count;i++){
        cluster.fork();

    }
}else{

  
    const app = express();

    app.get("/", (req, res) => {
        res.send(`Handled by Worker ${process.pid}`);
    });

    app.listen(3000, () => {
        console.log(`Worker ${process.pid} started`);
    });
}
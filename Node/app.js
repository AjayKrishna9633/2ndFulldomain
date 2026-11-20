import express from 'express';
import a from 'fs'
a.w
const app = express();
const products = [
    { id: 1, name: "Samsung TV", category: "tv", price: 35000 },
    { id: 2, name: "LG TV", category: "tv", price: 50000 },
    { id: 3, name: "iPhone 16", category: "mobile", price: 90000 },
    { id: 4, name: "OnePlus 13", category: "mobile", price: 60000 },
    { id: 5, name: "Dell Laptop", category: "laptop", price: 70000 }
];
app.get('/:id/:md',(req,res)=>{
    let a=Number(req.params.id)
    let b = Number(req.params.md);
    let ans = a+b;
    res.send(`hi  ${ans}`)
})
app.get('/price',(req,res)=>{
    let result =[]
    let a = req.query.category
    for(let i=0;i<products.length;i++){
       if( products[i].category==a){
        result.push(products[i])
       }
    }
    res.send(result,"hello")
    
})

app.listen(3000)
console.log("server running")
const http=require("http")
const fs=require("fs")
const port=3003
const server=http.createServer((req,res)=>{
let data=""
    req.on("data",(x)=>{
       data+=x
       console.log(data)
    fs.readFile("add.js","utf-8",(err,edata)=>{
       if(err){
        res.write(err)
        res.end()
       }
       else{
         let ndata=JSON.parse(edata)
    
        if(!ndata.includes(JSON.parse(data))){
            ndata.push(JSON.parse(data))   
        }    
          console.log(data)
       fs.writeFile("add.js", JSON.stringify(ndata), (err)=>{
       if(err){
        res.end(err)
       }
       else{
        console.log(ndata)
        res.end(ndata)
       }
    })
   }
   })
    })
    res.end()
})
server.listen(port,()=>{
    console.log("server is running")
})

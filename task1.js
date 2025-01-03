const http=require("http")
port=3009
const server=http.createServer((req,res)=>{
    if(req.url=="/pushpa"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.write(JSON.stringify({page:"movies",message: "welcome to pushpa" }))
        res.end()
        }
    else if(req.url=="/kalki"){
            res.writeHead(200,{"content-type":"text/plain"})
            res.write(JSON.stringify({page:"movies",message: "welcome to kalki" }))
            res.end()
            }
    else if(req.url=="/kha"){
                res.writeHead(200,{"content-type":"text/plain"})
                res.write(JSON.stringify({page:"movies",message: "welcome to kha" }))
                res.end()
             }
    else if(req.url=="/AAa"){
            res.writeHead(200,{"content-type":"text/plain"})
            res.write(JSON.stringify({page:"movies",message: "welcome to AAa" }))
            res.end()
            }
    else if(req.url=="/seetharamam"){
                res.writeHead(200,{"content-type":"text/plain"})
                res.write(JSON.stringify({page:"movies",message: "welcome to seetharamam" }))
                res.end()
            }
    else if(req.url=="/bahubali"){
                res.writeHead(200,{"content-type":"text/plain"})
                res.write(JSON.stringify({page:"movies",message: "welcome to bahubali" }))
                res.end()
    }
        
        else{
            res.write("page not found")
            res.end()
        }
})
server.listen(port,()=>{
    console.log("server is running")
})
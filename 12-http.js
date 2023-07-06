const { log } = require('console');
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end('home page')
    }
    if(req.url ==='/about'){
        res.end('about page')
    }
    res.end(`<h1>sorry not found</h1>
<a href="/">backtohome</a>)`)
})
server.listen(1000)
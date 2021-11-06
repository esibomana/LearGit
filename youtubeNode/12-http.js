const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to our page')
    }
 if (req.url === '/about'){
     res.end('welcome to our company information and History')
 }
 else if(req.url === '/err'){
 res.end(`
 <h1>Oops!</h1>
 <h1> we can't see your page plze try again</h1>
 <a href='/'>back home</a>
 `)
 }
})
server.listen(5000)
const http = require('http')
const fs = require('fs')
const server = http.createServer()
server.on('request', (request, response) => {
  const stream =
    fs.createReadStream('./big_file.txt')
    stream.on('data', (chunk) => {
      console.log('读取了一次数据')
      console.log(chunk.toString())
    })
    stream.on('end', () =>{
      console.log('全部读完了')
    })
    stream.pipe(response)
  // stream.pause()
  // setTimeout(()=>{
  //   stream.resume()
  // },3000)

  // stream.on('drain', () => {
    //go on write
  //})
})

server.listen(8888)
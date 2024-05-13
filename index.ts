import fastify from 'fastify'
const process = require("child_process");

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.get('/build', async (request, reply) => {
  //开一个新进程执行build脚本
  process.exe
  return 'true'
})

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

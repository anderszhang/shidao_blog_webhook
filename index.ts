import fastify from 'fastify'
import process from 'child_process';

//处理标识

const server = fastify({
  logger: true
})

server.get('/ping', async (request, reply) => {
  return 'ping done\n'
})

server.get('/build', async (request, reply) => {
  //开一个新进程执行build脚本
  process.exec('./build.sh',(err,stdout)=>{
    if(err){
      server.log.error(err)
    }
  })

  return '编译进行中...'
})

server.listen({
  port:3000,
  host: '0.0.0.0'
}, (err, address) => {
  if (err) {
    console.error(err)
    // process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

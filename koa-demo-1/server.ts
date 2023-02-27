import Koa from "koa"

const app = new Koa()

app.use(async (ctx: { body: string }, next) => {
  ctx.body = 'hello'
  await next()
})

app.use(async (ctx: { body: string }, next: () => any) => {
  ctx.body = 'hello'
  await next()
  ctx.body += 'ma'
})

app.use(async (ctx: { body: string }, next: () => any) => {
  ctx.body += 'world'
  await next()
})

app.use(async (ctx: { set: (arg0: string, arg1: string) => void }, next: () => any) => {
  ctx.set('Content-Type', 'text/html; charset=utf-8')
  await next()
})


app.listen(3000)

const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// 获取db数据
const db = require('./db.js')
// 需要加在 server.use(router) 前
server.use(jsonServer.rewriter({
  '/home/admin': '/home_admin',
  '/home/teach': '/home_teach',
  '/detail/:id': '/teacher/:id',
  '/detail/teacher/:id': '/teacher/:id',
  '/detail/student/:id': '/student/:id',
  '/detail/parent/:id': '/parent/:id',
}))

// Use router
server.use(jsonServer.router(db))

server.listen(3001, () => {
  console.log('JSON Server is running on 3001')
})

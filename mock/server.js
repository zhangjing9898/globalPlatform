const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
router.get('/', (ctx,next) => {
  ctx.body = 'hello world'
});
//首页 超值特惠
router.get('/api/1', (ctx,next) => {
  ctx.body = 'test data'
});
const homeAdData = require('./home/ad');
router.get('/api/homead',(ctx,next) => {
  ctx.body = homeAdData
})
//首页 猜你喜欢
const homeListData = require('./home/list');
router.get('/api/homelist/:city/:page',(ctx,next) => {
  //获取参数
  const params = ctx.params
  const city = params.city
  const page = params.page
  ctx.body = homeListData
})
// 详情页面
const detailData = require('./detail/info')
router.get('/api/detail/info/:id',(ctx,next) => {
  //获取参数
  const params = ctx.params
  const id = params.id
  ctx.body = detailData
})

//User界面中 订单列表
const orderList = require('./orderlist/orderlist')
router.get('/api/orderlist/:username',(ctx,next) => {
  const params = ctx.params
  const username= params.username
  ctx.body = orderList
})
//用户评论
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', (ctx,next) => {
  console.log('详情页 - 用户点评')
  const params = this.params
  const page = params.page
  const id = params.id

  console.log('商户id: ' + id)
  console.log('当前页数: ' + page)

  this.body = detailComment
})

// 提交评论
router.post('/api/submitComment',(ctx,next)=> {
  console.log('提交评论');
  // 获取参数
  ctx.body = {
    errno:0,
    msg: 'ok'
  }
})

// 开始服务并生产路由
app.use(router.routes())
  .use(router.allowedMethods)
app.listen(3000)
console.log("app run at http://localhost:3000")

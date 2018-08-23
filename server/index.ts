declare function require(x: string): any

const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const logger = require("koa-logger")
const route = require("koa-route")
const cors = require("koa2-cors")

const app = new Koa()

app.use(bodyParser())
app.use(logger())
app.use(cors())

const originURL = "http://localhost:1234"

app.use(route.get("/ping", async ctx => {
	ctx.origin = originURL
	ctx.body = "pong"
}))

app.listen(3000)

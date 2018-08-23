declare function require(x: string): any

const axios = require("axios")

const server = "http://localhost:3000"

class Main {
	msg: string
	constructor() {
		console.log("class works!")
		this.msg = "TypeScript"
		this.greet()
		this.ping()
	}
	// オーバーロードがクソダサい
	greet(): void
	greet(msg: string): void
	greet(msg?: string) {
		if(msg) {
			console.log(`Hello, ${ msg }!`)
		} else {
			this.greet(this.msg)
		}
		return
	}
	async ping() {
		const res = await axios.get(`${ server }/ping`)
		console.log(res.data)
	}
}

new Main()

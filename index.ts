class Main {
	msg: string
	constructor() {
		console.log("class works!")
		this.msg = "TypeScript"
		this.greet()
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
}

new Main()

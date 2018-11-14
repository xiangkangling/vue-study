new Vue({
	el: "#vue-app",
	data: {
		name: "sandy",
		age: 18,
		src: "https://www.baidu.com",
		step: 10,
		X: 0,
		Y: 0,
		html: "<a href='https://www.baidu.com'>百度一下</a>",
		sayHello: function () {
			return "Good Morning!";
		},
	},
	methods: {
		add: function () {
			this.age += this.step;
		},
		substract: function () {
			this.age -= this.step;
		},
		calcXY: function (e) {
			this.X = e.offsetX;
			this.Y = e.offsetY;
		}
	}
});
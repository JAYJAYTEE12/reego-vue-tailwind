new Vue({
	el: "#vue-one",
	data:{
		money: 0,
		mpc: 1,
	},
	methods: {
		foo: function(){
			this.money += this.mpc;
		}
	},
	computed:{
		
	}
});
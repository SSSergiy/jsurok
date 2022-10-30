let ladder = {
    step: 0,
    up: function () {
			this.step++;
			return this;
    },
    down: function () {
        this.step--;
			return this;
	},
    showStep: function () { 
			console.log(this.step);
			return this.step;
    }
};
console.log(ladder.up().up().up().up().up().up().down().down().showStep());


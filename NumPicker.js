module.exports = {
	increment: function(){ this.Number.value += 1; }.bind(this),

	decrement: function(){
	if (this.Number.value === 0)
		return;
	this.Number.value -= 1;
	}.bind(this),

	label : this.Number.map(function(x){ return x + ""; }),

	showMinus : this.Number.map(function(x){ return x > 0; })
};

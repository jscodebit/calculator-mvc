function CalculatorModel (width, height, ele) {
	this.currentOperator = '';
	this.curVal          = '';
	this.width 			 = width;
	this.height          = height;
	this.btnArray        = [];
	this.$ele            = ele;
	this.inputEle        = {'element': undefined, 'setInput': undefined, 'clearInput': undefined};
	this.prevVal   	     = '';
	this.newVal			 = '';
}

CalculatorModel.prototype = {
	'setOperator' : function (operator) {
		this.prevVal = this.curVal;
		this.curVal  = '';
		this.inputEle.clearInput(this.inputEle.element);
		this.currentOperator = operator;
	},
	'getOperator' : function () {
		return this.currentOperator;
	},
	'setVal' : function (val) {
		this.curVal = parseFloat(val);
		this.inputEle.setInput(this.inputEle.element, val);
	},
	'getVal' : function () {
		return this.curVal;
	}
}

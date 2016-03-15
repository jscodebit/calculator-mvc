function CalculatorModel (width, height, ele) {
	this.currentOperator = '';
	this.curVal          = '';
	this.width 			 = width;
	this.height          = height;
	this.btnArray        = [];
	this.$ele            = ele;
	this.inputEle        = {'element': undefined, 'setInput': undefined, 'clearInput': undefined};
}

CalculatorModel.prototype = {
	'setOperator' : function (operator) {
		this.curVal += operator;
		this.inputEle.setInput(this.inputEle.element, operator);
	},
	'getOperator' : function () {
		return this.currentOperator;
	},
	'setVal' : function (val) {
		this.curVal += val;
		this.inputEle.setInput(this.inputEle.element, val);
	},
	'getVal' : function () {
		return this.curVal;
	}
}

function CalculatorController(model, view){
	this.view     = view;
	this.model    = model;
}

CalculatorController.prototype = {
	'evaluate' : function () {

	},
	'clearInput': function () {
		this.model.setVal('');
		this.model.inputEle.clearInput(this.model.inputEle.element);
		this.model.setOperator('');
	},
	'handleClick' : function (event) {
		switch (event.srcElement.innerHTML) {
			case '+':
				this.model.setOperator(event.srcElement.innerHTML);
			case '-':
				this.model.setOperator(event.srcElement.innerHTML);
			case '*':
				this.model.setOperator(event.srcElement.innerHTML);
			case '/':
				this.model.setOperator(event.srcElement.innerHTML);
				break;
			case '=':
				this.evaluate();
				break;
			case 'C':
				this.clearInput();
				break;
			default: 
			    this.model.setVal(event.srcElement.innerHTML);
			    break;
		}
	},
	'drawCalc'    : function (ele) {
		var btnArray;
		this.view.drawCalc(ele, this.model.btnArray, this.model.inputEle);
		btnArray    = this.model.btnArray,
		handleClick = this.handleClick
		self        = this;
		for (var i = 0; i < btnArray.length - 1; i++) {
			btnArray[i].addEventListener('click', function (event) {
				handleClick.call(self, event);
			});
		}
	}
}




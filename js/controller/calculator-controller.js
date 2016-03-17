function CalculatorController(model, view){
	this.view     = view;
	this.model    = model;
}

CalculatorController.prototype = {
	'evaluate' : function (leftoperand,rightOperand) {
		try{
			var result='',opr='';
			opr = this.model.getOperator();

			result=eval(leftoperand+opr+rightOperand);
			console.log("result : "+result);

			this.clearInput();
			this.model.setVal(result);
			
		} catch(e){			
			//throw e; // pass exception object to error handler
			//throw new Error(e+"Please provide input");
		}

	},
	'clearInput': function () {
		this.model.setVal('');
		this.model.inputEle.clearInput(this.model.inputEle.element);
		this.model.setOperator('');
	},
	'handleClick' : function (event) {
		var btnText = event.srcElement.innerHTML;
		switch (btnText) {
			case '+':
				this.model.setOperator(btnText);
				break;
			case '-':
				this.model.setOperator(btnText);
				break;
			case '*':
				this.model.setOperator(btnText);
				break;
			case '/':
				this.model.setOperator(btnText);
				break;
			case '=':
				this.evaluate(this.model.prevVal,this.model.curVal);
				break;
			case 'C':
				this.clearInput();
				break;
			default:
			    this.model.setVal(btnText);
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




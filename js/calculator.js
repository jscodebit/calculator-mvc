function Calculator(input){
	console.log('!input : ' + input);
	if (!input) {
		console.log(input);
		console.log(document.querySelector(input));
		throw new Error("Please provide valid dom reference.");
		return ; 
	} 

	if(!document.querySelector(input)){
		console.log(document.querySelector(input)); 
		return ;
	}
	var calcModel = new CalculatorModel('500', '400');
	var calc      = new CalculatorController(calcModel, new CalculatorView(calcModel.btnArray));			
	calc.drawCalc(input);
}


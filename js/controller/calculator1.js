function Calculator(input){
	//console.log('!input : '+!input);
	if (!input) {
		throw new Error("Please provide valid dom reference.");
		return ; 
	} 

	if(!document.querySelector(input)){ 
		return ;
	}

	var calcC = new CalculatorController(new CalculatorModel(),new CalculatorView(new CalculatorModel(),document.querySelector(input)));			
	console.log("hello");

	var calcView = new CalculatorView(new CalculatorModel(), document.querySelector(input));
	console.log(calcView);

}


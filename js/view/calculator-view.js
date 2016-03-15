function CalculatorView (model) {
	var ele,
	numBtn = ['1', '2', '3','4','5','6','7','8','9','0','.','00'],
	oprBtn = ['/','*','+','-','=','C','DLT'];

	this.createCalcMarkup = function (element, btnArray, inputEle) {
		var outerCon = createDOMElement('div','container'),
		btnElement,
		btnController,
		displayController,
		numBtnContainer,
		oprBtnContainer,
		inputWrapper = createDOMElement('div', 'input-wrap');
		
		//Extending Display Class
		ele                 = document.querySelector(element);
		displayController   = new DisplayController(new DisplayModel('100%','auto'), new DisplayView());
		displayElement      = displayController.getDisplayElement();
		inputEle.element    = displayElement;
		inputEle.setInput   = displayController.setDisplayValue;
		inputEle.clearInput = displayController.clearDisplayValue;
		inputWrapper.appendChild(displayElement);
		
		outerCon.appendChild(inputWrapper);// Appending 'input-wrap' Element to Container		

		//Extending Button Class for rendering NumberButtons

		numBtnContainer = createDOMElement('div','numBtnContainer');

		for(var i = 0; i <= numBtn.length - 1; i++) {
			btnController = new ButtonController(new ButtonModel('40px', '30px', numBtn[i]), new ButtonView());
			btnElement    = btnController.getButton(numBtn[i]);
			btnElement.addEventListener('click', function (event) {

			});
			numBtnContainer.appendChild(btnElement);
			btnArray.push(btnElement);
		}

		outerCon.appendChild(numBtnContainer);

		//Extending Button Class for rendering OperatorButtons

		oprBtnContainer = createDOMElement('div','oprBtnContainer');

		for(var i = 0; i <= oprBtn.length - 1; i++) {
			btnController = new ButtonController(new ButtonModel('300', '200', oprBtn[i]), new ButtonView());
			btnElement    = btnController.getButton(oprBtn[i]);
			oprBtnContainer.appendChild(btnElement);
			btnArray.push(btnElement);
		}

		outerCon.appendChild(oprBtnContainer);

		ele.appendChild(outerCon);

	}

	function createDOMElement(type, style) {
		var childNode = document.createElement(type);
		childNode.className += style;
		return childNode;
	}
}

CalculatorView.prototype = {
	'drawCalc' : function (ele, btnArray, inputEle) {
		this.createCalcMarkup(ele, btnArray, inputEle);
	}
}
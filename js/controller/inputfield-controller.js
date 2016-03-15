function DisplayController(model,view){
  this.model = model;
  this.view  = view;
}

DisplayController.prototype = {
	// body...
	'getDisplayElement' : function (){
		this.model.inputEle = this.view.drawDisplayElement(this.model);
		return this.model.inputEle;
	},
	'setDisplayValue'   : function (element, val) {
		element.value += val;
	},
	'clearDisplayValue' : function (element) {
		element.value = '';
	}
}
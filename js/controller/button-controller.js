function ButtonController(model, view){
	this.view  = view;
	this.model = model;
}

ButtonController.prototype = {
	'getButton' : function () {
		return this.view.drawButton(this.model);
	},
	'handleClick' : function (value, callback) {
		callback(value);
	} 
}
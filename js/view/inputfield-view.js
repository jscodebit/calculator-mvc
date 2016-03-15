function DisplayView(model){
  this.model = model;

  this.render = function(model) {
    var input;
    input = createInputField('text', model);
    return input;
  }


  function createInputField(type, model) {
  	var inputEle = document.createElement('input');
  	inputEle.setAttribute("type", type);
    inputEle.style.height = model.height;
    inputEle.style.width  = model.width;
    inputEle.setAttribute('class', 'input-ele');
  	return inputEle;		
  }
}

DisplayView.prototype = {
  // body...
  'drawDisplayElement' : function(model){
    return this.render(model);
  }
}
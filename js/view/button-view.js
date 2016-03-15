function ButtonView (){
  this.html="<div class='btn-wrap'></div>"
  this.createButton = function (model){
    var btnEle = document.createElement('button');
    btnEle.innerHTML = model.value;
    return btnEle;
  }

  function toHTML(html){
    var div=document.createElement('div');
    div.innerHTML=html;
    return div.children[0];
  }
}

  ButtonView.prototype = {
    'drawButton' : function (model) {
      return this.createButton(model);
  }
}
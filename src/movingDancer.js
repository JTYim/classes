var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("movingDancer");
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step= function(){
  var maxX = $('body').width() - 110; 
  var maxY = $('body').height() - 110;
  
  if(this.suspend!==true){
    this.x <= 0 && (this.xDirection = 'add');
    this.x >= maxX && (this.xDirection = 'minus');
    this.xDirection==='add' && ( this.x = this.x + 5 );
    this.xDirection==='minus' && ( this.x = this.x - 5 );

    this.y <= 0 && (this.yDirection = 'add');
    this.y >= maxY && (this.yDirection = 'minus');
    this.yDirection==='add' && ( this.y = this.y + 5 );
    this.yDirection==='minus' && ( this.y = this.y - 5 );
  }else{
    this.x=0;
  }
  this.setPosition(this.y,this.x);
  Dancer.prototype.step.call(this);
  this.prox(this.y,this.x);
};

MovingDancer.prototype.prox=function(currentY, currentX){
  var self = this;
  window.dancers.forEach( function(element, i){
    var zz = Math.sqrt( (Math.pow((currentX-element.x),2)) + (Math.pow((currentY-element.y),2)) );
    // debugger;
    if( !(element instanceof MovingDancer) && zz <= 50){
      $(element.$node).css({ display : 'none' });
    }
  })
};



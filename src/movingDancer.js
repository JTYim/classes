var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("movingDancer");
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step= function(){
  // Add conditional to reverse direction upon reaching $(window).width() || 0
  this.x = this.x + 5;
  // this.y = this.y + 50;
  this.setPosition(this.x, this.y);
  
  Dancer.prototype.step.call(this);
  
  // debug
  window.dancers.forEach(function(e){
    var prox = Dancer.prototype.distance.call(this, e);
    if(prox < 50){
      $(e).css("display : hidden")
    }
  })

};



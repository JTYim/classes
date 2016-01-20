var SlugDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var self = this.$node;
  self.addClass("slugDancer");

  self.mouseover(function(){
    var color = {
      border:"10px solid gold"
    };
    self.css(color);
  });      
};

SlugDancer.prototype = Object.create(Dancer.prototype);
SlugDancer.prototype.constructor = SlugDancer;
SlugDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);

  this.$node.toggle().animate({
      width: "90%"
    }, {
      queue: false,
      duration: 3000
    })
    .animate({ fontSize: "24px" }, 1500 )
    .animate({ borderRightWidth: "15px" }, 1500 );

};



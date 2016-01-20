var SlugDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  var node = this.$node;
  node.addClass("slugDancer");

  node.mouseover(function(){
    node.css({ border : '10px solid gold' });
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



var PurpleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("purpleDancer");
};
PurpleDancer.prototype = Object.create(Dancer.prototype);
PurpleDancer.prototype.constructor = PurpleDancer;

PurpleDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle()
}


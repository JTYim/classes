// Creates and returns a new dancer object that can step

var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.x=left;
  this.xDirection='add';
  this.y=top;
  this.yDirection='add';
  this.suspend=false;  
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.time = timeBetweenSteps;
};

// use jQuery to create an HTML <span> tag
Dancer.prototype.step = function (){
  // the basic dancer doesn't do anything interesting at all on each step, it just schedules the next step
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  this.$node.animate({ left: '0px'}, 1300);
  this.$node.css({ left: '0px'});
  this.suspend=true;
};




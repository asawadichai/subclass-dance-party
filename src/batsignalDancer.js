var BatSignalDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('batsignal');
};

BatSignalDancer.prototype = Object.create(Dancer.prototype);
BatSignalDancer.prototype.constructor = BatSignalDancer;

BatSignalDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

//empty methods
BatSignalDancer.prototype.lineUp = function() {

};

BatSignalDancer.prototype.interact = function() {
  console.log('signal interact');
};
var SpidermanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spiderman');
};

SpidermanDancer.prototype = Object.create(Dancer.prototype);
SpidermanDancer.prototype.constructor = SpidermanDancer;

SpidermanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

SpidermanDancer.prototype.lineUp = function() {
  $('.spiderman').css({top: '90%', position: 'absolute'});
};

SpidermanDancer.prototype.interact = function() {
  var xDistance = function(batmanLeft, spidermanLeft) {
    return Math.abs(batmanLeft - spidermanLeft);
  };
  var closestBatman;
  var closestBatmanDistance = 9999999;
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof BatmanDancer) {
      var distance = xDistance(window.dancers[i].left, this.left);
      if (distance < closestBatmanDistance) {
        closestBatmanDistance = distance;
        closestBatman = window.dancers[i];
      }
    }
  }
  this.setPosition('90%', closestBatman.left);
  $('.spiderman').css({animation: 'none'});
  setTimeout(function() {
    $('.spiderman').css({animation: 'spidermanAnimation 5s infinite alternate'});
  }, 1);
};

// Pythagorean theorem
// c^2 = a^2 + b^
// c = Math.sqrt((this.top * this.top) + (this.left * this.left))
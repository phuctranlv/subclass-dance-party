var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.animate({height: '300px'}, 5000);
};
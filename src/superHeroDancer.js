var SuperHeroDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="superHeroDancer"><img src="https://www.pinclipart.com/picdir/big/150-1500325_download-homer-simpson-transparent-background-clipart.png" style="max-height:100px;    max-width: 80%;"></span>');

  Dancer.call(this, top, left, timeBetweenSteps);
  // this.SuperHeroDancerMove();
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;

SuperHeroDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({height: '300px'}, 5000);
};
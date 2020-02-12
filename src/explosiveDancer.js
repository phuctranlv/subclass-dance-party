var ExplosiveDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="explosiveDancer"><img src="images/dancer2.png" style="max-height:100px;    max-width: 80%;"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);

};

ExplosiveDancer.prototype = Object.create(Dancer.prototype);
ExplosiveDancer.prototype.constructor = ExplosiveDancer;
ExplosiveDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  this.$node.animate({
    width: "70%",
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
  this.$node.css({
    width: "",
    marginLeft: "",
    fontSize: "",
    borderWidth: ""
  });
  // this.$node.toggle();
};
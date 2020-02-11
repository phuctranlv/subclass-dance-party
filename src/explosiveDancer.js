var ExplosiveDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ExplosiveDancer.prototype = Object.create(Dancer.prototype);
ExplosiveDancer.prototype.constructor = ExplosiveDancer;
ExplosiveDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  this.$node.on('mouseover', function() {
    this.styleSettings = {
      background: '#000000'
    };
  });
  //   width: "toggle",
  //   height: "toggle"
  // }, {
  //   duration: 5000,
  //   specialEasing: {
  //     width: "linear",
  //     height: "easeOutBounce"
  //   },
  //   complete: function() {
  //     $( this ).after( "<div>Animation complete.</div>" );
  //   }
  // });
  // this.$node.show('explode', {pieces: 5}, 2000);
};
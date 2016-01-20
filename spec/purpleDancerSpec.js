describe("purpleDancer", function() {

  var purpleDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    purpleDancer = new PurpleDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(purpleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(purpleDancer.$node, 'toggle');
    purpleDancer.step();
    expect(purpleDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(purpleDancer, "step");
      expect(purpleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(purpleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(purpleDancer.step.callCount).to.be.equal(2);
    });
  });
});
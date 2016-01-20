describe("SlugDancer", function() {

  var slugDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slugDancer = new SlugDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(slugDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(slugDancer.$node, 'toggle');
    slugDancer.step();
    expect(slugDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(slugDancer, "step");
      expect(slugDancer.step.callCount).to.be.equal(0);
     // clock.tick(timeBetweenSteps); 
      clock.tick(timeBetweenSteps);

      expect(slugDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slugDancer.step.callCount).to.be.equal(2);
    });
  });
});
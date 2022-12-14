describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('spidermanDancer', function() {

  var spidermanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spidermanDancer = new SpidermanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spidermanDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spidermanDancer, 'step');
      expect(spidermanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spidermanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spidermanDancer.step.callCount).to.be.equal(2);
    });

    it('should return spiderman class', function() {
      expect(Array.from(spidermanDancer.$node[0].classList).includes('spiderman')).to.be.true;
    });
  });
});

describe('batmanDancer', function() {

  var batmanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    batmanDancer = new BatmanDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(batmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(batmanDancer, 'step');
      expect(batmanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(batmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(batmanDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should return batman class', function() {
    expect(Array.from(batmanDancer.$node[0].classList).includes('batman')).to.be.true;
  });

});

describe('batsignalDancer', function() {

  var batsignalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    batsignalDancer = new BatSignalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(batsignalDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(batsignalDancer, 'step');
      expect(batsignalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(batsignalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(batsignalDancer.step.callCount).to.be.equal(2);
    });
  });

  it('should return batsignal class', function() {
    expect(Array.from(batsignalDancer.$node[0].classList).includes('batsignal')).to.be.true;
  });

});
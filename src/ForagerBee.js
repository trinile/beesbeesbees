var ForagerBee = function() {
  HoneyMakerBee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.treasureChest = [];
  this.canFly = true;
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(value) {
  this.treasureChest.push(value);
}
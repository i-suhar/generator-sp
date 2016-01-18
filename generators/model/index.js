var util = require('util');
var yeoman = require('yeoman-generator');
var capitalize = function (name) {
  return name[0].toUpperCase() + name.slice(1, name.length);
};

var ModelGenerator = module.exports = function ModelGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
  console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);
ModelGenerator.prototype.files = function files() {
  this.normalize_name = capitalize(this.name) + 'Model';
  this.copy('model.coffee', 'app/scripts/model/' + this.normalize_name + '.coffee');
};

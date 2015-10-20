/* jshint ignore:start */

define('ember-blog/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-blog';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ember-blog/tests/test-helper");
} else {
  require("ember-blog/app")["default"].create({"name":"ember-blog","version":"0.0.0+388d5ab6"});
}

/* jshint ignore:end */

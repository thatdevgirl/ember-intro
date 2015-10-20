define('ember-blog/services/firebase', ['exports', 'emberfire/services/firebase', 'ember-blog/config/environment'], function (exports, Firebase, config) {

	'use strict';

	Firebase['default'].config = config['default'];

	exports['default'] = Firebase['default'];

});
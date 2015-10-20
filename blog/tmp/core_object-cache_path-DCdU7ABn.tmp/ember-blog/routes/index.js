define('ember-blog/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('post');
		},

		actions: {
			createPost: function createPost(model) {
				var post = this.store.createRecord('post', {
					title: model.title,
					author: model.author,
					text: model.text,
					createdDate: new Date()
				});

				post.save();
			}
		}
	});

});
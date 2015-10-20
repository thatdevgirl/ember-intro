define('ember-blog/components/create-new-post/component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({
		actions: {
			createPost: function createPost(model) {
				// Send model to index route.
				this.sendAction('createPost', model);

				// Clear the input fields.
				this.set('newPost.title', null);
				this.set('newPost.author', null);
				this.set('newPost.text', null);
			}
		}
	});

});
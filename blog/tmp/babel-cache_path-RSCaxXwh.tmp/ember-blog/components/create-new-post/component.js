import Ember from 'ember';

export default Ember.Component.extend({
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
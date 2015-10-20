import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('post');
	},

	actions: {
		createPost: function(model) {
			let post = this.store.createRecord('post', {
				title: model.title,
				author: model.author,
				text: model.text,
				createdDate: new Date()
			});

			post.save();
		}
	}
});

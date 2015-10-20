import Ember from 'ember';

export default Ember.Route.extend({
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
import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return [ 
			{ id: 1, name: 'Your mom'},
			{ id: 2, name: 'Your dad'}
			].findBy('id', params.order_id);
	}
});

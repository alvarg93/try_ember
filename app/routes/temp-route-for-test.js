import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    	return Ember.$.getJSON('https://api.github.com/repos/emberjs/ember.js/pulls?page=1&per_page=3');
  	}
});

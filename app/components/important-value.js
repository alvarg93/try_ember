import Ember from 'ember';

export default Ember.Component.extend({
	isExpensive: Ember.computed.gte('totalSum', 100),
	itemPrices: Ember.computed.mapBy('items', 'price'),
	totalSum: Ember.computed.sum('itemPrices'),
});

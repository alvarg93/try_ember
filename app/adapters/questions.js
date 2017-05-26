import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://api.stackexchange.org',
	namespace: '2.2',
});

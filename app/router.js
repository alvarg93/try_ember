import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('orders', function() {
      this.route('order', { path: '/:order_id' });
  });
  this.route('temp-route-for-test');
});

export default Router;
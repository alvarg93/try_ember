import Ember from 'ember';
import LineItem from 'stack-preview/models/line-item';
import Order from 'stack-preview/models/order';
import Product from 'stack-preview/models/product';

const products = [
	Product.create({title: 'Tent', price: 10, description: 'A waterproof tent.', image_url: "http://lorempixel.com/200/200/"}),
	Product.create({title: 'Sleeping bag', price: 4, description: 'A 2-season sleeping bag.', image_url: "http://lorempixel.com/200/200/"}),
	Product.create({title: 'Flashlight', price: 10, description: 'Bright as fuck.', image_url: "http://lorempixel.com/200/200/"}),
	Product.create({title: 'First-Aid kit', price: 10, description: 'You better not bleed.', image_url: "http://lorempixel.com/200/200/"}),
];

const placeholder_lineitems = [
	LineItem.create({product: products[0], quantity: 1}),
	LineItem.create({product: products[1], quantity: 1}),
	LineItem.create({product: products[2], quantity: 0}),
	LineItem.create({product: products[3], quantity: 1}),
];

const orders = [
	Order.create({ id: '0001', name: 'Jimmy Petarda', items: placeholder_lineitems }),
	Order.create({ id: '0002', name: 'Jimmy Petarda', items: placeholder_lineitems }),
	Order.create({ id: '0003', name: 'Jimmy Petarda', items: placeholder_lineitems }),
	Order.create({ id: '0004', name: 'Jimmy Petarda', items: placeholder_lineitems }),
];

export default Ember.Service.extend({
	getOrderById(id) {
		const orders = this.getOrders();
		return orders.findBy('id', id);
	},
	getOrders() {
		return orders;
	},
	getProducts() {
		return products;
	}
});

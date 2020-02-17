/*function submit() {
	var fullName = document.getElementById("fullname").value;
	var streetName = document.getElementById("street").value;
	var houseNumber = document.getElementById("house").value;
	var paymentList = document.getElementById("payment");
	var paymentOption = paymentList.options[paymentList.selectedIndex].text;

	var genders = document.getElementsByName('gender');
	var selectedGender;
	for (var i = 0; i < genders.length; i++) {
		if (genders[i].checked) {
			selectedGender = genders[i].value;
			break;
		}
	}

	console.log(fullName);
	console.log(streetName);
	console.log(houseNumber);
	console.log(paymentOption);
	console.log(selectedGender);

	var array = [fullName, streetName, houseNumber, paymentOption, selectedGender];
	return array;
}
*/

'use strict';
const socket = io();

const vueMenu = new Vue({
	el: "#menuGrid",
	data: {
		menu: food,
		selectedBurgers: []
	},
});

const vueDelivery = new Vue({
	el: "#delivery",
	data: {
		orders: {},
		fullname: "",
		email: "",
		/*streetname: "",
		housenumber: "",*/
		gender: "Undisclosed",
		payment: "Credit Card",
		order: "",
	},
	created: function () {
		/* When the page is loaded, get the current orders stored on the server.
		 * (the server's code is in app.js) */
		socket.on('initialize', function (data) {
			this.orders = data.orders;
		}.bind(this));

		/* Whenever an addOrder is emitted by a client (every open map.html is
		 * a client), the server responds with a currentQueue message (this is
		 * defined in app.js). The message's data payload is the entire updated
		 * order object. Here we define what the client should do with it.
		 * Spoiler: We replace the current local order object with the new one. */
		socket.on('currentQueue', function (data) {
			this.orders = data.orders;
		}.bind(this));
	},
	methods: {
		markDone: function () {
			this.order = '\n' + this.fullname + '\n' + this.email + '\n' + this.gender + '\n' + this.payment + '\n' + vueMenu.selectedBurgers
		},
    getNext: function () {
			/* This function returns the next available key (order number) in
			 * the orders object, it works under the assumptions that all keys
			 * are integers. */
			let lastOrder = Object.keys(this.orders).reduce(function (last, next) {
				return Math.max(last, next);
			}, 0);
			return lastOrder + 1;
		},
		addOrder: function (event) {
			/* When you click in the map, a click event object is sent as parameter
			 * to the function designated in v-on:click (i.e. this one).
			 * The click event object contains among other things different
			 * coordinates that we need when calculating where in the map the click
			 * actually happened. */
			let offset = {
				x: event.currentTarget.getBoundingClientRect().left,
				y: event.currentTarget.getBoundingClientRect().top,
			};
			socket.emit('addOrder', {
				orderId: this.getNext(),
				details: {
					x: event.clientX - 10 - offset.x,
					y: event.clientY - 10 - offset.y,
				},
				orderItems: ['Beans', 'Curry'],
			});
		},
	}
})

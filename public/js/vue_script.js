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
		localOrder: {
			orderId: "T",
			details: {
				x: 0,
				y: 0,
			},
			orderItems: [],
		},
		fullname: "",
		email: "",
		/*streetname: "",
		housenumber: "",*/
		gender: "Undisclosed",
		payment: "Credit Card",
		order: "",
	},
	methods: {
		markDone: function () {
			this.order = '\n' + this.fullname + '\n' + this.email + '\n' + this.gender + '\n' + this.payment + '\n' + vueMenu.selectedBurgers;
			this.addOrder();
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
		addOrder: function () {
			/* When you click in the map, a click event object is sent as parameter
			 * to the function designated in v-on:click (i.e. this one).
			 * The click event object contains among other things different
			 * coordinates that we need when calculating where in the map the click
			 * actually happened. */
			socket.emit('addOrder', {
				orderId: this.getNext(),
				details: {
					x: this.localOrder.details.x,
					y: this.localOrder.details.y,
				},
				orderItems: vueMenu.selectedBurgers,
			});
		},
		displayOrder: function (event) {
			/* When you click in the map, a click event object is sent as parameter
			 * to the function designated in v-on:click (i.e. this one).
			 * The click event object contains among other things different
			 * coordinates that we need when calculating where in the map the click
			 * actually happened. */
			let offset = {
				x: event.currentTarget.getBoundingClientRect().left,
				y: event.currentTarget.getBoundingClientRect().top,
			};
			this.localOrder.details.x = event.clientX - 10 - offset.x;
			this.localOrder.details.y = event.clientY - 10 - offset.y;
		}
	}
})

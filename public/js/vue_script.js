function submit() {
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

const vueMenu = new Vue({
	el: "#menuGrid",
	data: {
		menu: food
	},
});

const vueDelivery = new Vue({
	el: "#delivery",
	data: {
		fullname: "hej",
		email: "fgsg",
		streetname: "sfdg",
		housenumber: "sdfg",
		gender: "dsfg",
		payment: "sdfg",
		order: "sgf",
	},
	methods: {
		markDone: function () {
			console.log(fullname);
			console.log(email);
			console.log(streetname);
			console.log(housenumber);
			console.log(gender);
			console.log(payment);
			console.log(order);
		}
	}
})

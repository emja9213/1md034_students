/*let button = document.getElementById("placeOrderButton");

function functionClick() {
	console.log("Button clicked!");
}

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
*/
/*
button.addEventListener("click", submit)
*/


/*
for (var i = 0; i < menu.length; i++) {
	let burger = menu[i];

	let paragraph = document.createElement("P");

	let image = document.createElement("IMG");
	image.setAttribute("src", burger.imagePath);
	image.setAttribute("width", "200");
	paragraph.appendChild(image);
		
	let list = document.createElement("ul");

	let name = document.createTextNode(burger.name);
	let h3 = document.createElement("h3");
	h3.appendChild(name);
	list.appendChild(h3);

	let kCal = document.createTextNode(burger.kCal + " kCal");
	let listItem1 = document.createElement("li");
	listItem1.appendChild(kCal);
	list.appendChild(listItem1);

	if (burger.gluten == true) {
		let listItem2 = document.createElement("li");
		let gluten = document.createTextNode("Contains gluten");
		listItem2.appendChild(gluten);
		list.appendChild(listItem2);
	}
	if (burger.lactose == true) {
		let listItem3 = document.createElement("li");
		let lactose = document.createTextNode("Contains lactose");
		listItem3.appendChild(lactose);
		list.appendChild(listItem3);
	}
	paragraph.appendChild(list);
	document.getElementById("menuGrid").appendChild(paragraph);
}*/
function menuItem(name, gluten, lactose, kCal, imagePath) {
	this.name = name;
	this.gluten = gluten;
	this.lactose = lactose;
	this.kCal = kCal;
	this.imagePath = imagePath;

	this.getName = function () {
		return this.name;
	}
	this.getkCal = function () {
		return this.kCal;
	}
}

let crispyNoChicken = new menuItem("Crispy No Chicken", true, false, 600, "https://www.max.se/contentassets/ff1439a7a1624cf4a6b068c37d0db25f/product_crispy-no-chicken2.jpg");

let bbqSandwich = new menuItem("BBQ Sandwich", true, false, 440, "https://www.max.se/contentassets/10aac66bde484d38bbf6e8b37c0e6e36/product_bbq-sandwich2.jpg");

let crispyNuggets = new menuItem("Crispy Nuggets", false, false, 470, "https://www.max.se/contentassets/8c0ab650367341b988b9de30c99769f3/product_crispy-nuggets.jpg");

let delifreshPlantBeef = new menuItem("Delifresh Plant Beef", true, true, 870, "https://www.max.se/contentassets/359fcb7f236247a7a4a41cdf2ddf36b0/product_delifresh-signature-plant-beef.jpg");

let smokeyChipotlePlantBeef = new menuItem("Smokey Chipotle Plant Beef", true, true, 920, "https://www.max.se/contentassets/32f727872e644cf1803605d39bacd581/product_gdl-smokey-chipotle-plant-beef.jpg");

/*
var h = document.createElement("H1");
var t = document.createTextNode("Välj en burgare.");
h.appendChild(t);
document.body.appendChild(h);
*/

let menu = [crispyNoChicken, bbqSandwich, crispyNuggets, delifreshPlantBeef, smokeyChipotlePlantBeef];

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
}
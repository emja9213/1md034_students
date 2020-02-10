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

new Vue({
	el: "#app",
	data: {
		menu: [
			{ name: crispyNoChicken.name, kCal: crispyNoChicken.kCal, gluten: crispyNoChicken.gluten, lactose: crispyNoChicken.lactose },
			{ name: bbqSandwich.name, kCal: bbqSandwich.kCal, gluten: bbqSandwich.gluten, lactose: bbqSandwich.lactose },
			{ name: crispyNuggets.name, kCal: crispyNuggets.kCal, gluten: 		crispyNuggets.gluten, lactose: crispyNuggets.lactose },
			{ name: delifreshPlantBeef.name, kCal: delifreshPlantBeef.kCal, gluten: delifreshPlantBeef.gluten, lactose: delifreshPlantBeef.lactose },
			{ name: smokeyChipotlePlantBeef.name, kCal: smokeyChipotlePlantBeef.kCal, gluten: smokeyChipotlePlantBeef.gluten, lactose: smokeyChipotlePlantBeef.lactose }
		]
	}
})
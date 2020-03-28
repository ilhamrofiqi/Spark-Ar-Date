const Scene = require('Scene');
const Materials = require('Materials');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// Text good
const text1 = Scene.root.find('txt1');
const text2 = Scene.root.find('txt2');
const text3 = Scene.root.find('txt3');

const rectangle1 = Scene.root.find('icon1');
const rectangle2 = Scene.root.find('icon2');
const rectangle3 = Scene.root.find('icon3');
const rectangle4 = Scene.root.find('icon4');

var date = new Date();
var jam = date.getHours();

if (jam >=4 && jam < 11) {
	text1.text = "Good Morning";
	text2.text = "Good Morning";
	text3.text = "Morning";

	rectangle1.material = Materials.get('morning');
	rectangle2.material = Materials.get('morning');
	rectangle3.material = Materials.get('morning');
	rectangle4.material = Materials.get('morning');
}

else if (jam >=4 && jam < 11) {
	text1.text = "Good Morning";
	text2.text = "Good Morning";
	text3.text = "Morning";

	rectangle1.material = Materials.get('morning');
	rectangle2.material = Materials.get('morning');
	rectangle3.material = Materials.get('morning');
	rectangle4.material = Materials.get('morning');
}

else if (jam >=11 && jam < 15) {
	text1.text = "Good Afternoon";
	text2.text = "Good Afternoon";
	text3.text = "Afternoon";

	rectangle1.material = Materials.get('afternoon');
	rectangle2.material = Materials.get('afternoon');
	rectangle3.material = Materials.get('afternoon');
	rectangle4.material = Materials.get('afternoon');
}

else if (jam >=15 && jam < 18) {
	text1.text = "Good Evening";
	text2.text = "Good Evening";
	text3.text = "Evening";

	rectangle1.material = Materials.get('evening');
	rectangle2.material = Materials.get('evening');
	rectangle3.material = Materials.get('evening');
	rectangle4.material = Materials.get('evening');
}

else if (jam >=18 && jam < 24) {
	text1.text = "Good Night";
	text2.text = "Good Night";
	text3.text = "Night";

	rectangle1.material = Materials.get('night');
	rectangle2.material = Materials.get('night');
	rectangle3.material = Materials.get('night');
	rectangle4.material = Materials.get('night');
}

else if (jam >=0 && jam < 4) {
	text1.text = "Good Night";
	text2.text = "Good Night";
	text3.text = "Night";

	rectangle1.material = Materials.get('night');
	rectangle2.material = Materials.get('night');
	rectangle3.material = Materials.get('night');
	rectangle4.material = Materials.get('night');
}
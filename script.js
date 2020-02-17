var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function paintBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
	var style = document.createTextNode("background: linear-gradient(to right, " + color1.value + " , " + color2.value + ");");
	while (css.hasChildNodes()) {  
		css.removeChild(css.firstChild);
	}
	css.appendChild(style);
}

color1.addEventListener("input", function() {
	paintBackground();
})

color2.addEventListener("input", function() {
	paintBackground();
})



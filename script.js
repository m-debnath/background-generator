var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function paintBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
	var style = document.createTextNode("background: linear-gradient(to right, " + color1.value + " , " + color2.value + ");");
	css.textContent = "background: " + body.style.background + ";"
}

color1.addEventListener("input", paintBackground)

color2.addEventListener("input", paintBackground)



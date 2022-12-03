/*******************************************************************/
/*       Web del proyecto  - JavaScript página principal           */
/*           Autor : Javier Miguel Martín Gallardo                 */
/*                 Versión : 1.0 - 01/12/2022                      */
/*******************************************************************/


/*********************** Función hamb ******************************/
//Para hacer el menú responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/************************* Ir arriba *******************************/
const $btnUp = document.getElementById("arriba");

//Hace aparecer el botón a 300px
window.addEventListener(
	"scroll",
	function (event) {
		var x = document.getElementById("arriba");
		var top = this.scrollY;
		if (top > 300) x.style.display = "block";
		else x.style.display = "none";
	},
	false
);

//Para que haga un scroll up el botón
window.addEventListener("scroll", (e)=>{
	let y = document.documentElement.scrollTop;
	if(y === 0){
		$btnUp.classList.add("hide");
		$btnUp.classList.add("active");
	} else if(y>=300){
		$btnUp.classList.add("active");
		$btnUp.classList.add("hide");
	}
})
window.addEventListener("click", (e)=>{
	if(e.target === $btnUp || e.target.matches("fa fa-angle-up")){
		window.scrollTo({
			behavior:"smooth",
			top:0
		})
	}
})

/*************************  Modales  *******************************/
var modaltor = document.getElementById("modtor");

var btntor = document.getElementById("Btntor");

var spantor = document.getElementById("closetor");

btntor.onclick = function() {
	modaltor.style.display = "block";
}

spantor.onclick = function() {
	modaltor.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modaltor) {
    modaltor.style.display = "none";
	}
}


var modalgal = document.getElementById("modgal");

var btngal = document.getElementById("Btngal");

var spangal = document.getElementById("closegal");

btngal.onclick = function() {
	modalgal.style.display = "block";
}

spangal.onclick = function() {
	modalgal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modalgal) {
		modalgal.style.display = "none";
	}
}

/*************************  Galería  ******************************/
var elements = document.getElementsByClassName("column");
var i;

function one() {
	for (i = 0; i < elements.length; i++) {
	elements[i].style.msFlex = "100%";  // IE10
	elements[i].style.flex = "100%";
}
}

function two() {
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "50%";  // IE10
		elements[i].style.flex = "50%";
	}
}

function four() {
	for (i = 0; i < elements.length; i++) {
		elements[i].style.msFlex = "25%";  // IE10
		elements[i].style.flex = "25%";
	}
}

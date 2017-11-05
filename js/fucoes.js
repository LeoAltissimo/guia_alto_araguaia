function hideSearshIco(){
	var ico = document.getElementById("searchButton");
	ico.style.color = "rgba(255,255,255,0)";
	ico.style.left = "100%";
}

function unhideSearshIco(){
	var ico = document.getElementById("searchButton");
	ico.style.color = "white";
	ico.style.left = "88%";
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000);
}

function slideAnt(){
	var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex--;
    if (slideIndex< 1) {slideIndex = slides.length}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

}

function slideProx(){
	var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

var imgs = [
	"img/EmpresasDestaque1.jpg",
	"img/EmpresasDestaque2.jpg",
	"img/EmpresasDestaque3.jpg",
	"img/EmpresasDestaque4.jpg",
	"img/EmpresasDestaque5.jpg",
	"img/EmpresasDestaque6.jpg",
	"img/EmpresasDestaque7.jpg"];
var elem = document.getElementsByClassName("destaqueCidade");

randDestaque();

function randDestaque(){
	var randImg = Math.floor(Math.random() * imgs.length);
	var randElem = Math.floor(Math.random() * elem.length);

	animaDestaque( elem[randElem] );
	
	elem[randElem].innerHTML = "<img src=\"" + imgs[randImg] + "\">";

	setTimeout(randDestaque, Math.floor(Math.random() * 5000));
}

function animaDestaque(e) {
	
    if (e.style.AnimationName !== 'mudaDestaque') {
        e.style.animation = "mudaDestaque 1s";

        setTimeout(function() {
            e.style.webkitAnimationName = '';
        }, 1000);
    }
}



function checkScrollMenu(){
	var menuScroll = document.getElementById("MenuScroll");
	var menuCategoria = document.getElementById("containerMenu");

	if(window.pageYOffset > 250){
		menuScroll.style.top = "0px";

		if(statusMenuScroll == true)
			menuCategoria.style.top = "55px";
	}else{
		menuScroll.style.top = "-55px";

		if(statusMenuScroll == true)
			menuCategoria.style.top = "0";
	}
}

var statusMenuScroll = false;

function closeMenuCate(){
	var menuCategoria = document.getElementById("containerMenu");
	menuCategoria.style.top = "-800px";

	statusMenuScroll = false;
}

function openMenuCate(){
    var menuCategoria = document.getElementById("containerMenu");
    menuCategoria.style.top = "55px";
    statusMenuScroll = true;
}

function openMenuCateIndex(){
	statusMenuScroll = true;
	checkScrollMenu();
}
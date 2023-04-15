/* ------------SPLASH SCREEN--------------- */
const splash = document.querySelector(".splash");

window.addEventListener("load", event =>
{
    setTimeout(() =>
    {
        splash.classList.add("display-none");
    }, 2000);
})
/* ------------PROJECT IMAGE BROWSER--------------- */
var project1 = document.getElementById("pj1");
var project2 = document.getElementById("pj2");
var project3 = document.getElementById("pj3");
var project4 = document.getElementById("pj4");
var project5 = document.getElementById("pj5");
var project6 = document.getElementById("pj6");
var project7 = document.getElementById("pj7");
var project8 = document.getElementById("pj8");
var project9 = document.getElementById("pj9");

/* Get the text containers */

var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var txt3 = document.getElementById("txt3");
var txt4 = document.getElementById("txt4");
var txt5 = document.getElementById("txt5");
var txt6 = document.getElementById("txt6");
var txt7 = document.getElementById("txt7");
var txt8 = document.getElementById("txt8");
var txt9 = document.getElementById("txt9");

function event1()
{
    txt1.style.display = "block";
}
function event2()
{
    txt2.style.display = "block";
}
function event3()
{
    txt3.style.display = "block";
}
function event4()
{
    txt4.style.display = "block";
}
function event5()
{
    txt5.style.display = "block";
}
function event6()
{
    txt6.style.display = "block";
}
function event7()
{
    txt7.style.display = "block";
}
function event8()
{
    txt8.style.display = "block";
}
function event9()
{
    txt9.style.display = "block";
}
project1.onclick = function(event)
{
    if(project1.onclick)
    {
        project1.className = "project project-1 move";
        setTimeout(event1, 1000);
        
    }
}
project2.onclick = function(event)
{
    if(project2.onclick)
    {
        project2.className = "project project-2 move";
        setTimeout(event2, 1000);
        
    }
}
project3.onclick = function(event)
{
    if(project3.onclick)
    {
        project3.className = "project project-3 move";
        setTimeout(event3, 1000);
        
    }
}
project4.onclick = function(event)
{
    if(project4.onclick)
    {
        project4.className = "project project-4 move";
        setTimeout(event4, 1000);
        
    }
}
project5.onclick = function(event)
{
    if(project5.onclick)
    {
        project5.className = "project project-5 move";
        setTimeout(event5, 1000);
        
    }
}
project6.onclick = function(event)
{
    if(project6.onclick)
    {
        project6.className = "project project-6 move";
        setTimeout(event6, 1000);
        
    }
}
project7.onclick = function(event)
{
    if(project7.onclick)
    {
        project7.className = "project project-7 move";
        setTimeout(event7, 1000);
        
    }
}
project8.onclick = function(event)
{
    if(project8.onclick)
    {
        project8.className = "project project-8 move";
        setTimeout(event8, 1000);
        
    }
}
project9.onclick = function(event)
{
    if(project9.onclick)
    {
        project9.className = "project project-9 move";
        setTimeout(event9, 1000);
        
    }
}
/* ------------SLIDESHOW--------------- */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) 
    {
        slideIndex = 1
    }  

    if (n < 1) 
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}





















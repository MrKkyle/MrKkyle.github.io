/* ------------SPLASH SCREEN--------------- */
const splash = document.querySelector(".splash");

window.addEventListener("load", event =>
{
    setTimeout(() =>
    {
        splash.classList.add("display-none");
    }, 2000);
})

/* ------------INTERESTS--------------- */

let osaka = document.getElementById("t-o");
let sapporo = document.getElementById("t-s");
let tokyo = document.getElementById("t-ty");
let sengen = document.getElementById("t-ss");
let shirakawa = document.getElementById("t-sv");
let kanagawa = document.getElementById("t-kp");

let kanagawa_main = document.getElementById("1");
let osaka_main = document.getElementById("2");
let shirakawa_main = document.getElementById("3");
let sapporo_main = document.getElementById("4");
let tokyo_main = document.getElementById("5");
let sengen_main = document.getElementById("6");


kanagawa.onmouseover = function(event)
{
    kanagawa_main.style.filter = "blur(0px)";
    kanagawa.onmouseleave = function(event)
    {
        kanagawa_main.style.filter = "blur(2px)";
    }
}
osaka.onmouseover = function(event)
{
    osaka_main.style.filter = "blur(0px)";
    osaka.onmouseleave = function(event)
    {
        osaka_main.style.filter = "blur(2px)";
    }
}
sapporo.onmouseover = function(event)
{
    sapporo_main.style.filter = "blur(0px)";
    sapporo.onmouseleave = function(event)
    {
        sapporo_main.style.filter = "blur(2px)";
    }
}
sengen.onmouseover = function(event)
{
    sengen_main.style.filter = "blur(0px)";
    sengen.onmouseleave = function(event)
    {
        sengen_main.style.filter = "blur(2px)";
    }
}
shirakawa.onmouseover = function(event)
{
    shirakawa_main.style.filter = "blur(0px)";
    shirakawa.onmouseleave = function(event)
    {
        shirakawa_main.style.filter = "blur(2px)";
    }
}
tokyo.onmouseover = function(event)
{
    tokyo_main.style.filter = "blur(0px)";
    tokyo.onmouseleave = function(event)
    {
        tokyo_main.style.filter = "blur(2px)";
    }
}

/* Collapsible elements */

var coll = document.querySelectorAll(".interest-holder");
var i;
console.log(coll);
for (i = 0; i < coll.length; i++) 
{
    /* make variable before-hand */
    let c = coll[i];
    coll[i].addEventListener("click", (event) =>
    {
        if(c.style.height === "30%")
        {
            c.style.height = "15%";
        }
        else 
        {
            c.style.height = "30%";
        }
    });
}





















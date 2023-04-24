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
var h_s = document.querySelectorAll(".h-i-text");
var i;
const array = [
    "A theme park in Yokohama, Kanagawa Prefecture, Japan. It contains the Cosmo Clock Ferris wheel - formerly the tallest in the world. It is home to a dive coaster and many other fun tourist attractions to visit.", 
    "The castle tower is surrounded by secondary citadels, gates, turrets, impressive stone walls and moats. The Nishinomaru Garden, encompassing the former 'western citadel', is a lawn garden with over 600 cherry trees", 
    "Shirakawa-go's largest village and main attraction, a good day trip from Takayama, or a stop on the bus journey between Takayama and Kanazawa. The best way to experience the town, however, is to stay overnight at one of the farmhouses.", 
    "This chilled-out city is the capital of Hokkaidō, Japan's northern island which has 22 percent of the country's landmass but only five percent of its population. Your reward for heading so far from Tokyo is a completely different vision of Japan",
    "Tokyo is the second-largest urban economy worldwide by gross domestic product after New York City, and is categorized as an Alpha+ city by the Globalization and World Cities Research Network. It is also Japan's leading business hub as part of an industrial region that includes the cities of Yokohama, Kawasaki, and Chiba.", 
    "This scenic park located on the mountainside of Mt. Arakura and in front of Mt .Fuji, offers a panoramic view of the city. A lot of people enjoy cherry blossoms in the park in spring, and also enjoy hiking."
];
const array2 = ["Yokohama Cosmoworld", "Osaka Castle", "Shirakawa Village", "Sapporo", "Tokyo", "Sengen Shrine"];
for (i = 0; i < coll.length; i++) 
{
    /* make variable before-hand */
    let a = array[i];
    let a2 = array2[i];
    let c = coll[i];
    let hide = h_s[i];
    coll[i].addEventListener("click", (event) =>
    {
        if(c.style.height === "35%")
        {
            c.style.height = "15%";
            c.lastElementChild.innerHTML = a2;
            c.lastElementChild.style.backgroundColor = "rgba(0,0,0, 0.2)";
            c.lastElementChild.style.textDecoration = "underline";
            hide.style.display = "none";

        }
        else 
        {
            c.style.height = "35%";
            c.lastElementChild.innerHTML = a;
            c.lastElementChild.style.backgroundColor = "rgba(0,0,0, 0.55)";
            c.lastElementChild.style.textDecoration = "none";
            hide.style.display = "block";
            hide.onmouseover = function(event)
            {
                if(hide.onmouseover)
                {
                    c.lastElementChild.innerHTML = "";
                    c.firstElementChild.style.filter = "blur(0px)";
                    c.lastElementChild.style.backgroundColor = "rgba(0,0,0,0)";
                    
                }
                hide.onmouseleave = function(event)
                {
                    c.lastElementChild.innerHTML = a;
                    c.firstElementChild.style.filter = "blur(2px)";
                    c.lastElementChild.style.backgroundColor = "rgba(0,0,0,0.55)";
                }
            }
        }
    });
}





















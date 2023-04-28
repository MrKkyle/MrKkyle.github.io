/* Splash Screen */
const splash = document.querySelector(".splash-screen");
window.addEventListener("load", event =>
{
    setTimeout(() =>
    {
        splash.classList.add("display-none");
    }, 2000);
})

/* Video Player Script */
let vidPlayer = document.getElementById("vidPlayer");
let videos = document.querySelectorAll(".videos");
let text = document.querySelectorAll(".vid-text");
let loader = document.querySelector(".loader");
var i;

let array = ["https://www.youtube.com/embed/SOUK-YgFi6o", "https://www.youtube.com/embed/yK4aAYHKAjg", "https://www.youtube.com/embed/1cncN37SLuI", 
"https://www.youtube.com/embed/4flSBiC5edI", "https://www.youtube.com/embed/pfiGoGyPsCg", "https://www.youtube.com/embed/nTCZUZQCZ8Q"];

for(i = 0; i < videos.length; i++)
{
    let vid = videos[i];
    let a = array[i];
    let txt = text[i];
    videos[i].onclick = function(event)
    {
        if(vid.onclick)
        {
            loader.style.display = "none";
            vidPlayer.src = a;
        }    
    }
    vid.onmouseover = function(event)
    {
        txt.style.color = "black";
        txt.style.backgroundColor = "aliceblue";
        vid.onmouseleave = function(event)
        {
            txt.style.color = "white";
            txt.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }
    }
}

/* Video Player Script */
vidPlayer = document.getElementById("vidPlayer");
videos = document.querySelectorAll(".videos");
var i;

let array = ["https://www.youtube.com/embed/SOUK-YgFi6o", "https://www.youtube.com/embed/yK4aAYHKAjg", "https://www.youtube.com/embed/1cncN37SLuI", 
"https://www.youtube.com/embed/4flSBiC5edI", "https://www.youtube.com/embed/pfiGoGyPsCg", "https://www.youtube.com/embed/nTCZUZQCZ8Q"];

for(i = 0; i < videos.length; i++)
{
    let vid = videos[i];
    let a = array[i];
    videos[i].onclick = function(event)
    {
        if(vid.onclick)
        {
            vidPlayer.src = a;
        }    
    }
}

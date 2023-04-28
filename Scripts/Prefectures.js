/* Prefecture onclick javascript */
let prefecture = document.querySelectorAll(".prefecture");
let modal = document.querySelectorAll(".modal-prefecture");
let span = document.querySelectorAll(".close");
var main = document.getElementById("cm0");
var i;
for(i = 0; i < prefecture.length; i++)
{
	let mp = modal[i];
	let sp = span[i];
	let pf = prefecture[i];
	prefecture[i].onclick = function(event)
	{
		if(pf.onclick)
		{
			mp.style.display = "block";
			main.style.display = "none";
		}
		sp.onclick = function(event)
		{
			if(sp.onclick)
			{
				mp.style.display = "none";
				main.style.display = "block";
			}
		}
	}
}

/* Navigation Bar */
function openNav() 
{
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() 
{
  document.getElementById("myNav").style.width = "0%";
}

function HideContainers()
{
	let navi = document.getElementById("navi");
	let container_main = document.getElementById("cm0");
	let close_btn = document.getElementById("close-btn");
	navi.onclick = function(event)
	{
		if(navi.onclick)
		{
			openNav();
			container_main.style.display = "none";
		}
		close_btn.onclick = function(event)
		{
			if(close_btn.onclick)
			{
				closeNav();
				setTimeout(()=>
				{
					container_main.style.display = "block";
				}, 500);
				
			}
		}
	}
}

HideContainers();
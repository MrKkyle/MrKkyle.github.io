/* Projects JS */
/* Get the prefecture modals */
var mp01 = document.getElementById("mp01");
var mp02 = document.getElementById("mp02");
var mp03 = document.getElementById("mp03");
var mp04 = document.getElementById("mp04");
var mp05 = document.getElementById("mp05");
var mp06 = document.getElementById("mp06");
var mp07 = document.getElementById("mp07");
var mp08 = document.getElementById("mp08");

var p1 = document.getElementById("prefecture01");
var p2 = document.getElementById("prefecture02");
var p3 = document.getElementById("prefecture03");
var p4 = document.getElementById("prefecture04");
var p5 = document.getElementById("prefecture05");
var p6 = document.getElementById("prefecture06");
var p7 = document.getElementById("prefecture07");
var p8 = document.getElementById("prefecture08");

var main = document.getElementById("cm0");
var sp1 = document.getElementById("sp1");
var sp2 = document.getElementById("sp2");
var sp3 = document.getElementById("sp3");
var sp4 = document.getElementById("sp4");
var sp5 = document.getElementById("sp5");
var sp6 = document.getElementById("sp6");
var sp7 = document.getElementById("sp7");
var sp8 = document.getElementById("sp8");

p1.onclick = function(event)
{
	if(p1.onclick)
	{
		mp01.style.display = "block";
		main.style.display = "none";

	}
	sp1.onclick = function(event)
	{
		if(sp1.onclick)
		{
			{
				mp01.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p2.onclick = function(event)
{
	if(p2.onclick)
	{
		mp02.style.display = "block";
		main.style.display = "none";
	}
	sp2.onclick = function(event)
	{
		if(sp2.onclick)
		{
			{
				mp02.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p3.onclick = function(event)
{
	if(p3.onclick)
	{
		mp03.style.display = "block";
		main.style.display = "none";
	}
	sp3.onclick = function(event)
	{
		if(sp3.onclick)
		{
			{
				mp03.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p4.onclick = function(event)
{
	if(p4.onclick)
	{
		mp04.style.display = "block";
		main.style.display = "none";
	}
	sp4.onclick = function(event)
	{
		if(sp4.onclick)
		{
			{
				mp04.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p5.onclick = function(event)
{
	if(p5.onclick)
	{
		mp05.style.display = "block";
		main.style.display = "none";
	}
	sp5.onclick = function(event)
	{
		if(sp5.onclick)
		{
			{
				mp05.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p6.onclick = function(event)
{
	if(p6.onclick)
	{
		mp06.style.display = "block";
		main.style.display = "none";
	}
	sp6.onclick = function(event)
	{
		if(sp6.onclick)
		{
			{
				mp06.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p7.onclick = function(event)
{
	if(p7.onclick)
	{
		mp07.style.display = "block";
		main.style.display = "none";
	}
	sp7.onclick = function(event)
	{
		if(sp7.onclick)
		{
			{
				mp07.style.display = "none";
				main.style.display = "block";		
			}
		}
	}
}
p8.onclick = function(event)
{
	if(p8.onclick)
	{
		mp08.style.display = "block";
		main.style.display = "none";
	}
	sp8.onclick = function(event)
	{
		if(sp8.onclick)
		{
			{
				mp08.style.display = "none";
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
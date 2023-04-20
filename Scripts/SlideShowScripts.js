
/* Fetch the Container-text */
var Ct1 = document.getElementById("id01");
var Ct2 = document.getElementById("id02");
var Ct3 = document.getElementById("id03");
var Ct4 = document.getElementById("id04");
var Ct5 = document.getElementById("id05");
var Ct6 = document.getElementById("id06");
var Ct7 = document.getElementById("id07");

/* Fetch the Container */
var c1 = document.getElementById("c01");
var c2 = document.getElementById("c02");
var c3 = document.getElementById("c03");
var c4 = document.getElementById("c04");
var c5 = document.getElementById("c05");
var c6 = document.getElementById("c06");
var c7 = document.getElementById("c07");

/* Fetch the buttons */ 
var button1 = document.getElementById("bt01");
var button2 = document.getElementById("bt02");
var button3 = document.getElementById("bt03");
var button4 = document.getElementById("bt04");
var button5 = document.getElementById("bt05");
var button6 = document.getElementById("bt06");
var button7 = document.getElementById("bt07");

/* Fetch the close buttons */

var span1 = document.getElementById("span01");
var span2 = document.getElementById("span02");
var span3 = document.getElementById("span03");
var span4 = document.getElementById("span04");
var span5 = document.getElementById("span05");
var span6 = document.getElementById("span06");
var span7 = document.getElementById("span07");


button1.onclick = function(event)
{
	if(button1.onclick)
	{
		Ct1.style.display = "block";
		c1.style.display = "block";
		button1.style.display = "none";
	}
	span1.onclick = function(event)
	{
		if(span1.onclick)
		{
			Ct1.style.display = "none";
			c1.style.display = "none";
			button1.style.display = "block";	
		}
		
	}
}

button2.onclick = function(event)
{
	if(button2.onclick)
	{
		Ct2.style.display = "block";
		c2.style.display = "block";
		button2.style.display = "none";
	}
	span2.onclick = function(event)
	{
		if(span2.onclick)
		{
			Ct2.style.display = "none";
			c2.style.display = "none";
			button2.style.display = "block";	
		}
		
	}
}

button3.onclick = function(event)
{
	if(button3.onclick)
	{
		Ct3.style.display = "block";
		c3.style.display = "block";
		button3.style.display = "none";
	}
	span3.onclick = function(event)
	{
		if(span3.onclick)
		{
			Ct3.style.display = "none";
			c3.style.display = "none";
			button3.style.display = "block";	
		}
		
	}
}
button4.onclick = function(event)
{
	if(button4.onclick)
	{
		Ct4.style.display = "block";
		c4.style.display = "block";
		button4.style.display = "none";
	}
	span4.onclick = function(event)
	{
		if(span4.onclick)
		{
			Ct4.style.display = "none";
			c4.style.display = "none";
			button4.style.display = "block";	
		}
		
	}
}
button5.onclick = function(event)
{
	if(button5.onclick)
	{
		Ct5.style.display = "block";
		c5.style.display = "block";
		button5.style.display = "none";
	}
	span5.onclick = function(event)
	{
		if(span5.onclick)
		{
			Ct5.style.display = "none";
			c5.style.display = "none";
			button5.style.display = "block";	
		}
		
	}
}
button6.onclick = function(event)
{
	if(button6.onclick)
	{
		Ct6.style.display = "block";
		c6.style.display = "block";
		button6.style.display = "none";
	}
	span6.onclick = function(event)
	{
		if(span6.onclick)
		{
			Ct6.style.display = "none";
			c6.style.display = "none";
			button6.style.display = "block";	
		}
		
	}
}
button7.onclick = function(event)
{
	if(button7.onclick)
	{
		Ct7.style.display = "block";
		c7.style.display = "block";
		button7.style.display = "none";
	}
	span7.onclick = function(event)
	{
		if(span7.onclick)
		{
			Ct7.style.display = "none";
			c7.style.display = "none";
			button7.style.display = "block";	
		}
		
	}
}
/* Slide Show */
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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function talksAbout(node, string)
{
	if(node.nodeType == Node.ELEMENT_NODE)
	{
		for(let i = 0; i < node.childNodes.length; i++)
		{
			if(talksAbout(node.hildNodes[i], string))
			{
				return true;
			}
		}
		return false;
	}
	else if(node.nodeType == Node.TEXT_NODE)
	{
		return node.nodeValue.indexOf(string) > -1;
	}
}


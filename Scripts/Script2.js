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
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
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


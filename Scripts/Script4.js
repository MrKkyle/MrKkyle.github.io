//Get the modal
var modal = document.getElementById('id01');

//When the user clicks anywhere outside of the modal , close it 
window.onclick = function(event)
{
	if(event.target == modal)
	{
		modal.style.display = "none";
	}
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) 
	{
	document.getElementById("navigation").style.top = "0";
	} 
	else 
	{
	document.getElementById("navigation").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
}


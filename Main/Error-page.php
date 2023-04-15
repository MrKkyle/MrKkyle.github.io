<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
<meta name = "viewport" content = "width = device-width, initial-scale = 1" charset="utf-8">
<link rel = "stylesheet" type = "text/css" href = "../Login.css" ></link> 
<body>

<div class = "container">
	<div class = "bg-img">
		<div class = "modal1">
            <form class = "modal-content animate">
                <div class = "imgcontainer">
                    <img src = "../Images/Simple.gif" alt = "Avatar" class = "avatar">
                </div>
                
                <div class = "modal-container">
                    <div class = "text">Error: Incorrect login credentials</div>
                </div>
                <button class = "button3" type = "button" onclick = "window.location.href = '../Login.html';">Submit</button>
            </form>
		</div>
	</div>
</div>


</body>
</html>
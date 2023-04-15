<?php 
session_start(); 
?>
<head>
<link rel = "stylesheet" type = "text/css" href = "../CSS/submit.css" ></link> 
<style>

</style>

<?php
/* variables */
$w = $_POST["name"];
$x = $_POST["psw"];
$y = $_POST["email"];
$z = $_POST["comment"];

/* default variables */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database1"; //name of your database needs to be the same as the one iniside phpMyAdmin

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection 
if($conn->connect_error)
{
	die("Connection failed: " . $conn->connect_error);
}
//uname refers to database value
//user is the table inside database1
$query = mysqli_query($conn, "SELECT * FROM user WHERE uname = '$w'");
if(mysqli_num_rows($query) > 0)
{	//Error Message
	echo "
			<div class = 'omega-container'>
				<div class = 'bg-img'>
				<div class = 'modal1'>
				<div class = 'modal-content'>
					<img src = '../Images/Simple.gif' alt = 'Avatar' class = 'avatar'>
					<br>
					<br>
					<br>
					<br>
				<div class = 'text'>Error Username already exists!</div>
			<button class = 'button3' id = 'rtn'>Return</button>
			
				
	";
		
}

else
{
	//Connected successfully 
	//as learnt in sql the INSERT INTO function has the VALUES keyword that goes with it
	
	$sql = "INSERT INTO user (uname, email, psw, comment) VALUES ('$w', '$x', '$y', '$z')";
	if($conn->query($sql) === TRUE)
	{
		echo "New record created successfully";
	}
	
	else
	{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	//closes Connection
	$conn->close();
}

?>

<script>
	var returnButton = document.getElementById("rtn");
	returnButton.addEventListener("click", () =>
	{
		window.location.href = "MyWebsite.html";
	});
	
</script>
</head>
<body>

</body>



<?php session_start();?>
<head>
<style>
</style>

<?php
$w = $_POST["name"];
$x = $_POST["psw"];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database1";

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check connection 
if($conn->connect_error)
{
	die("Connection failed: " . $conn->connect_error);
}
//uname refers to database value
$query = mysqli_query($conn, "SELECT * FROM user WHERE uname = '$w' AND psw = '$x'");

if(mysqli_num_rows($query) > 0)
{
	header("location: Main/MyWebsite.html");
	
}
else
{
	header("location: Main/Error-page.php");
}
 
?>


</head>
<body>

</body>

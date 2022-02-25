<?php
$server =  "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server, $username, $password);
if (!$con){
    die("connection to this database failed due to ".mysqli_connect_error());
}
// echo "Succesfuly connected!!";
$name = $_POST['fullName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$gender = $_POST['gender'];
$message = $_POST['message'];




$sql = "INSERT INTO `premiumdatabase`.`suggestions` (`Name`, `Email`, `Subject`,`Gender`,`Message`) 
VALUES ('$name', '$email', '$subject', '$gender','$message')";

if($con->query($sql)== true){
    // echo "successfully submit";

}
else{
    echo "error: $sql <br> $con->error";
}
$con-> close();
?>



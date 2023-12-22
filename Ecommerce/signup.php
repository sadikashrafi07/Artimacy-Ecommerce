 <?php

     $name = $_POST['fullname'];
     $email = $_POST['email'];
     $username = $_POST['username'];
     $password = $_POST['password'];
     $accountType = $_POST['accountType'];
     $address = $_POST['address'];
 
     //Database Connection
     $conn = new mysqli('localhost','root','','test');
     if($conn->connect_error){
         echo "$conn->connect_error";
         die("Connection Failed : ". $conn->connect_error);
     } else {
         $stmt = $conn->prepare("insert into registration(fullname, email, username, password, accountType, address) values(?, ?, ?, ?, ?, ?)");
         $stmt->bind_param("ssssss", $fullname, $email, $username, $password, $accountType, $address);
         $execval = $stmt->execute();
         echo $execval;
         echo "Registration successfully...";
         $stmt->close();
         $conn->close();
     }
    
 
 ?>

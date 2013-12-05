<?php
    $host = "localhost"; 
    $user = "root"; 
    $pass = ""; 
    $database = "fafa";
    $con = mysql_connect($host,$user,$pass);
    if (!$con) {
        die('Could not connect: ' . mysql_error());
    }
    mysql_select_db($database,$con);  
     //select
    $query = "SELECT * FROM `products`"; 
    $result = mysql_query($query) OR die(mysql_error()); 
    $arr = array();
    //now we turn the results into an array and loop through them. 

    while ($row = mysql_fetch_array($result)) { 
        $name = $row['prod_name']; 
        $description = $row['description']; 
        // add the results in the array
        $arr[] = array('name' => $name, 'description' => $description);
    } 
    echo json_encode($arr);
?>
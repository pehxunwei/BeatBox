<?php
    $servername = "localhost";
    $username = "root";
    $password = "1a2b3c4d";
    $dbname = "Heartrate1";
    
    //  Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    //  Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    $sql = "SELECT ind, voltage FROM data";
    //,Heartrate
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo $row['ind']. "/" . $row['voltage']. "/";
            //. $row['Heartrate']. "/"
        }
    } else {
        echo "0 results";
    }
    $conn->close();
    ?>


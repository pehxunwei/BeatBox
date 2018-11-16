<html>


<head>
<title>PPG Group 5</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script type="text/javascript" src="datalog.js" ></script>
<script type="text/javascript" src="heartratelogger.js" ></script>
<style>
header {
    text-align: center;
    font-size: 35px;
}

h1.ex1 {
    border: 4px solid red;
    padding: 60px;
}
article {
padding: 100px;
width: 70%;

}

body {font-family: Arial, Helvetica, sans-serif;}


.column{
    float: left;
    width: 33.33%;
    padding-left: 113px;
    height: 300px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

body {font-family: Arial, Helvetica, sans-serif;}

.btn {
padding: 100px 65px;
    
    
}
/* The Modal (background) */
.modal {
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.3); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;
}

/* The Close Button */
.close {
color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
color: #000;
    text-decoration: none;
cursor: pointer;
}
</style>


</head>
<body>
<header>
<h1 class="ex1" style="background-color: Tomato" font-family="Helvetica">

Welcome to BeatBox </h1>
</header>
<script>
//let hrc= 0;
setInterval(function(){
            const countertext = document.getElementById('counter-text');
            var hrc = localStorage.getItem("heart");

            //  for (i = 0; i<=10; i += 1) {
            // count= parseFloat(y_values[i]);
            // let hrc =0;
           // hrc+=1;
            // hrc = hrc * 6 ;
            countertext.textContent = hrc;
            
            }, 1000);

</script>
<article>
<div id="chart" style="height: 400px; width: 800px" align="center"></div>
</article>

<div class="row">
    <div class="column">
        <p id ='counter-text' style="font-size:120" align="center">0</p>
    </div>
    <div class="column">
        <p style="font-size:120" font-family=Helvetica align="center">BPM</p>
    </div>
</div>
</script>


<!-- Trigger/Open The Modal -->
<button id="myBtn">Refresh</button>

<script>
window.localStorage;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
btn.style.height = '200px';
btn.style.width = '500px';
btn.style.backgroundColor = 'tomato';
btn.style.left = '200px';
btn.style.border = '2px solid red';
btn.style.fontSize = 'xx-large';
btn.style.marginTop = '100px';
btn.style.marginLeft = '235px';

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    //location.reload(true);
    yes2 = 88;
    hrc= 0;
    
//    window.alert(yes2);
}

</script>
</body>
</html>

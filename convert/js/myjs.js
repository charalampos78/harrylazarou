//temperature conversion
//function temperature(){
//var report = function (celsius, fahrenheit) {
//    document.getElementById("result").innerHTML =
//        celsius + "xb0C = " + fahrenheit + "\xb0F";
//};
//
//document.getElementById("f_to_c").onclick = function () {
//    var f = document.getElementById("temperature").value;
//    report((f - 32) / 1.8, f);
//};
//
//document.getElementById("c_to_f").onclick = function () {
//    var c = document.getElementById("temperature").value;
//    report(c, 1.8 * c + 32);
//   
//};
//}
//
//function convertion(){
//document.getElementById("temperature").onclick = function () {
//document.getElementById("temperature").value = " ";
//
//};
//}



//global variable for swap
var onoff = 0;

//swap values in text boxes
function swap(){
	
var temp  = document.getElementById("conversion").innerHTML;

    
    if (temp == "Meters to Inches")
        {
			   document.getElementById("conversion").innerHTML = "Inches to Meters";
			   convert();

        }
	else if ( temp == "Inches to Meters")
        {
			document.getElementById("conversion").innerHTML = "Meters to Inches";		   
            convert();
        }
	
    else if (temp == "Meters to Feet")
        {
			document.getElementById("conversion").innerHTML = "Feet to Meters";
			convert();

        }
    else if (temp == "Feet to Meters" )
        {
			document.getElementById("conversion").innerHTML = "Meters to Feet";
			convert();
        }
	else if ( temp == "Meters to Miles")
        {
			document.getElementById("conversion").innerHTML = "Miles to Meters";		   
            convert();
        }
	
    else if (temp == "Miles to Meters")
        {
			document.getElementById("conversion").innerHTML = "Meters to Miles";
			convert();

        }
    else if (temp == "Feet to Inches" )
        {
			document.getElementById("conversion").innerHTML = "Inches to Feet";
			convert();
        }
	else if (temp == "Inches to Feet" )
        {
			document.getElementById("conversion").innerHTML = "Feet to Inches";
			convert();
        }
	else if (temp == "Feet to Miles" )
        {
			document.getElementById("conversion").innerHTML = "Miles to Feet";
			convert();
        }
	else if (temp == "Miles to Feet" )
        {
			document.getElementById("conversion").innerHTML = "Feet to Miles";
			convert();
        }
    else if (temp == "F° To C°" )
        {
			document.getElementById("conversion").innerHTML = "C° To F°";
			convert();
        }
    else if (temp == "C° To F°" )
        {
			document.getElementById("conversion").innerHTML = "F° To C°";
			convert();
        }

};


function convert(){
	
var temp  = document.getElementById("conversion").innerHTML;

    //Meters to Inches
    if (temp == "Meters to Inches")
        {	   
               var par1 = document.getElementById("parameter1").value;
			   var par2 = par1 * 39.3701;
               document.getElementById("result").style.visibility = "visible";
               document.getElementById("result").innerHTML = par1 + " meter(s) converts to " + par2.toFixed(3) + " inches.";	
             
        }
	if (temp == "Inches to Meters")
        {
			var par1 = document.getElementById("parameter1").value;
			var par2 = par1 * 0.0254;
			document.getElementById("result").style.visibility = "visible";
    		document.getElementById("result").innerHTML = par1 + " inch(es) convert to " + par2.toFixed(3) + " meters.";		   
            
        }
    
	//Meters to Feet
    if (temp == "Meters to Feet" )
        {
			
            var par1 = document.getElementById("parameter1").value;
			var par2 = par1 * 3.28084;
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("result").innerHTML = par1 + "  meter(s) convert to " + par2.toFixed(3) + " feet.";
          
        }
    if (temp == "Feet to Meters" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 0.3048;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " feet(foot) converts to " + par2.toFixed(3) + " meters.";
			
        }
	
	//Meters To Miles
	if (temp == "Meters to Miles" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 0.000621371;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " meter(s) converts to " + par2.toFixed(5) + " miles.";
			
        }
	
    if (temp == "Miles to Meters" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 1609.34;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + "  mile(s) convert to " + par2.toFixed(2) + " meters.";
			
        }
	
	
	//Feet to Inches
	if (temp == "Feet to Inches" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 12;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " feet(foot) convert to " + par2.toFixed(2) + " inches.";
			
        }
	if (temp == "Inches to Feet" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 0.0833333;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " Inch(es) convert to " + par2.toFixed(2) + " feet.";
			
        }
		
		//Feet to Miles
	    if (temp == "Feet to Miles" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 0.000189394;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " feet(foot) convert to " + par2.toFixed(5) + " miles.";
			
        }
	    if (temp == "Miles to Feet" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = par1 * 5280;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " mile(s) convert(s) to " + par2.toFixed(2) + " feet .";
			
        }
        if (temp == "F° To C°" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = (par1 - 32) / 1.8;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " Fahrenheit converts to " + par2.toFixed(2) + " Celsius .";
			
        }
            if (temp == "C° To F°" )
        {	
            var par1 = document.getElementById("parameter1").value;
		    var par2 = 1.8 * par1 + 32;
	        document.getElementById("result").style.visibility = "visible";
	    	document.getElementById("result").innerHTML = par1 + " Celsius converts to " + par2.toFixed(2) + " Fahrenheit .";
			
        }


  
};







//JQuery to update button label with selection 
$('.dropdown-inverse li > a').click(function(e){
    $('.status').text(this.innerHTML);
});




//calclulation functions




function select3(){
    var par1 = document.getElementById("parameter1").value;
	var par2 = par1 * 0.000621371;
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerHTML = par1 + " meter(s) converts to " + par2 + " miles.";	
};

function select4(){
	document.getElementById("parameter2").value = document.getElementById("parameter1").value * 12;	
};

function select5(){
	document.getElementById("parameter2").value = document.getElementById("parameter1").value * 0.000189394;	
};

function select6(){
	document.getElementById("parameter2").value = document.getElementById("parameter1").value * 63360;	
};



function select8(){

    var par1 = document.getElementById("parameter1").value;
	var par2 = par1 * 0.3048;
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerHTML = par1 + " feet(foot) convert to " + par2 + " meters.";
};

function select9(){

    var par1 = document.getElementById("parameter1").value;
	var par2 = par1 * 1609.34;
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("result").innerHTML = par1 + " mile(s) convert to " + par2 + " meters.";
};








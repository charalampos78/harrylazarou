//total item counter
    var $itemNo = $("#itemNo");
    var itemNo = 0;
    $itemNo.text("Total: " + itemNo);

	//completed counter
	var $tobeDel = $("#tobeDel");
    var tobeDel = 0;
	$tobeDel.text("Completed: " + tobeDel);

	//variables
	var $list = $("ul");
	var $listnode = $("li");
	var $add = $("#add");
    var $remove = $("#remove");

    //initial state of delete icon
    remove();
    function remove(){
    $remove.hide();
    };



//initialize list, load items from localstorage
$(document).ready(function(){
    
    //initialize counter
    itemNo = localStorage.length;
    
    //loop through localstorage and add dynamic elements
    for (var i = 0; i < localStorage.length; i++)
        {
                var thekey = localStorage.key(i);
                var valu = localStorage[thekey];
            
                var line1 = "<li id = \"" + thekey + "\"><input type = \"checkbox\" class = \"checkbox checkbox-inline\">";
                var line2 = "<input title = \"Double Click To Edit\" class = \"textbox\" type = \"text\" value = \"" + valu + "\" disabled>" ;  
                var line4 = "<div id =\"wordwrap\"><em> added: " + completedOn(new Date) + "</em></div> </li>" ;
                $list.append(line1 + line2 +  line4);
                $itemNo.text("Total " + itemNo);
        }
});


// create added date format
function completedOn(g){
    var d = g;
    var day = d.getDate();
    var m = d.getMonth()+1;
    var y = d.getYear();

    var completedOn = (m<10 ? '0' : '') + m + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear() ;

    return completedOn;

};


//add item in the list on enter of add button
$("#itemDescription").keypress(function (t){
 
        if(t.which == 13)
        {
           addition();
          // $("#itemDescription").val(""); 
           
       
        }
  
});

//give focus on main text field for #itemDescription
$("#itemDescription").focus();

//add item in the list on click of add button
$add.on('click', function add(){
           
addition(); 

//$("#itemDescription").val(""); 
    
});


// add new item in list and local storage
function addition(){
    
    var $itemDesc = $('#itemDescription').val();
    var line1 = "<li id = \"" + new Date + "\"><input type = \"checkbox\" class = \"checkbox checkbox-inline\">";
    var line2 = "<input class = \"textbox\" type = \"text\" value = \" " + $itemDesc + " \" disabled>" ;
    var line4 = "<div id =\"wordwrap\"><em> added: " + completedOn(new Date) + "</em></div> </li>" ;
        
    if ($itemDesc != "")
	{
	itemNo++;
    localStorage.setItem(new Date, $itemDesc); 
    $list.append(line1 + line2 + line4);
	$itemNo.text("Total " + itemNo);
    $("#itemDescription").val(""); 
	}    
    
}



//edit existing items and update locastorage
$list.on('dblclick', '.textbox' ,  function(){
   
   
     $(this).attr("disabled", false);
    
     $(this).keypress(function(a){
      
         if (a.which == 13)
             {
                var w =  $(this).val();
                var toupdate = $(this).parent();
                var hid = toupdate.attr("id");  
                 
                $(this).attr("value", w);
                $(this).attr("disabled", true);      
                 
                 localStorage.setItem(hid,w);
             }
     });
});
    
//remove completed items and update localstorage
$remove.on('click',  function(){
    
    
    $('input[type=checkbox]:checked').each(function(){
        
            localStorage.removeItem($(this).parent().attr("id"));
            $(this).parent().slideUp();   
        
            });
    
	itemNo = itemNo - tobeDel;
	tobeDel = 0;
  
	$itemNo.text("Total: " + itemNo);
	$tobeDel.text("Completed: " + tobeDel);
    
    remove();

});


//mark completed based on the state of the checkbox
$list.on('click', '.checkbox' ,  function(){
    
    
   
    if  ($(this).is(':checked') == true)
    {
    tobeDel++;
    $tobeDel.text("Completed: " + tobeDel);
    $remove.show();
    
    }
    else if  ($(this).is(':checked') == false)
    {
    tobeDel--;
    $tobeDel.text("Completed: " + tobeDel);
    $remove.hide();     
    }
});




	

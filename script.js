$(document).ready(function(){
$("#deleterow").hide();
$("#deleterow1").hide();
$("#magicbox").fadeOut(3000);

$("#invisible1").hide();
$("#invisible2").hide();
$("#arrowdow4").hide();



$("#checkBox").click(function(){
	   $("#deleterow").show();
	   $("#deletetext2").hide();
	});

$("#checkBox2").click(function(){
	   $("#deleterow").show();
	   $("#deletetext2").hide();
    $("#footerimage").hide();
	});

    
$("#checkBox3").click(function(){
 $("#deleterow1").show();
	  $("#deletetext2").hide();
	});


$('input[type="checkbox"]').click(function(){
	if($('#checkBox').is(':checked') && $('#checkBox2').is(':checked'))
	{
	   $("#deleterow").show();
	   $("#deletetext").hide();
	   $("#deletetext2").show();
	  
	}

});

	$("#x").click(function(){
	   $("#deleterow").hide();
	   $("#deletetext2").hide();
	});

	$("#x3").click(function(){
		   $("#deleterow1").hide();
		   
		});

	$("#arrowdow5").click(function(){
        
        event.preventDefault();
            $("#footerimage").hide();
		   	$("#arrowdow5").hide();
		   	$("#invisible1").show();
			$("#invisible2").show();
			$("#arrowdow4").show();
            
		   
		});

	$("#arrowdow4").click(function(){
         event.preventDefault();
            $("#footerimage").show();
		   	$("#arrowdow4").hide();
		   	$("#invisible1").hide();
			$("#invisible2").hide();
			$("#arrowdow5").show();
		  
		});



});
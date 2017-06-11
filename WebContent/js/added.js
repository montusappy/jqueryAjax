$(function() {   
	$( "#tabs" ).tabs(); 
	$("#payment1").hide();
	$("#payment2").hide();
	
	if(!$('#termsandconditions').is(':checked')){
		$("#buy").attr("disabled", "disabled");
	}
	
	$('#termsandconditions').click(function(){
		if($('#termsandconditions').is(':checked')){
			$("#buy").removeAttr("disabled");
		}
		else{
			$("#buy").attr("disabled", "disabled");
		}
		/* if($('#termsandconditions').is(':checked')){
			
		} */
	});

	
$("#register").click(function(){

	
	var age = 18;
	
	var day = $("#cday").val();
	var month = $("#cmonth").val();
	var year = $("#cyear").val();
	
	var password1 = $("#c1password").val();
	var password2 = $("#c2password").val();
	
	$('input').each(function(){
		if($(this).val() == "")
			$(this).css("border","2px solid red");
		else
			$(this).css("border","2px solid #00F5FF");
	});
	
	if (!(password1).match(password2)) {
		 alert("Your passwords don't match. Try again?");
	} 
	
	var currentdate = new Date();

	
	var mydate = new Date();
	mydate.setFullYear(year,month-1,day);

 	if((currentdate.getFullYear() - mydate.getFullYear()) < age){
		alert("Sorry..Your age must be of "+age+" or more to register");
		return false;
	}

	return true; 
			
	
	});
	
	$("#cday").keydown(function(){
		if($(this).val().length == 2){
			$("#cmonth").focus();
	}
	
	});

	$("#cmonth").keydown(function(){
		if($(this).val().length == 2){
			$("#cyear").focus();
	}
	});

	$("#cyear").keydown(function(){
		if($(this).val().length == 4){
			$("#mobileno").focus();
	}
	});
	
	$('#payment1 input').each(function(){
		 
	    this.value = $(this).attr('title');
	    $(this).addClass('text-label');
	 
	    $(this).focus(function(){
	        if(this.value == $(this).attr('title')) {
	            this.value = '';
	            $(this).removeClass('text-label');
	        }
	    });
	 
	    $(this).blur(function(){
	        if(this.value == '') {
	            this.value = $(this).attr('title');
	            $(this).addClass('text-label');
	        }
	    });
	});
	
	 $('#logo').hover(  
			   function(){  
			      $(this).find('img').stop().fadeTo('slow', 1);  
			   },  
			   function(){  
			      $(this).find('img').stop().fadeTo('slow', 0.4);  
	}); 
	 
	 function CommaFormatted(total_amount) {
		    
			var de_limiter = ","; 
			var final_amount = parseInt(total_amount);
			
			if(isNaN(final_amount)) { return ''; }
			
			final_amount = Math.abs(final_amount);
			
			var minus = '';
			if (final_amount < 0) { minus = '-'; }
			
			var n = new String(final_amount);
			var a = [];
			
			while(n.length > 3)
			{
				var nn = n.substr(n.length-3);
				a.unshift(nn);
				n = n.substr(0,n.length-3);
			}
			
			if (n.length > 0) { a.unshift(n); }
			
			n = a.join(de_limiter);
			
			amount = "$" + minus + n;
			
			return amount;
			
		} 
		function calcProdSubTotal() {
		    
		    var prodSubTotal = 0;

		    $(".row-total-input").each(function() {
		    
		        var valString = $(this).val() || 0;
		        
		        prodSubTotal += parseInt(valString);
		                    
		    });
		        
		    $("#product-subtotal").val( CommaFormatted(prodSubTotal));

		}
	
	$('.num-pallets-input').bind("focus blur change keyup", function(){
		
		var qty = $(this).val();
		
		var price = $(this).parent().parent().find("td.price-per-pallet span").text();
		
		var total = qty * price;
		
		$(this).parent().parent().find("td.row-total input").val(total);
		
		calcProdSubTotal();
		
	});
	
	$("#debitcardpayment").click(function(){
		$("#payment2").hide();
		$("#payment1").show();
	});
	
	$("#creditcardpayment").click(function(){
		$("#payment2").hide();
		$("#payment1").hide();
		$("#payment1").show();
	});
	
	$("#netbankingpayment").click(function(){
		$("#payment1").hide();
		$("#payment2").show();
	});
	
	$("#feedbacksubmit").click(function(){
		alert("hi");
		
		var customerEmail = $("#cemail").val();
		var customerMessage = $("#message").val();		
		var jsonData = {"emailid":customerEmail,"message":customerMessage};
		
		 $.ajax({ 
             url:'FeedbackServlet', 
             type:'GET', 
             async: false,
             data : jsonData,
             contentType: 'application/json',
             dataType: 'json', 
             success: function(data) { 
                                         $("#divData").html("<p>"+jsonData.customer_emailid+"</p>");
             },
                           error: function(e) {
                                  alert(e.status);
                           }
         });
		
	});
	
	

	});
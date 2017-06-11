$(document).ready(
		function() {

			$("#register").click(
					function() {
						alert("Hello");
						var jsonData = "";
						var customerEmail = $("#cemail").val();
						var customerName = $("#cname").val();
						var customerPassword = $("#c1password").val();

						var jsonData = {
							"cname" : customerName,
							"customerpassword" : customerPassword,
							"customeremail" : customerEmail
						};
						$.ajax({
							url : 'RegisterServlet1',
							type : 'GET',
							async : false,
							data : jsonData,
							contentType : 'application/json',
							dataType : 'json',
							success : function(data) {
								//var obj = JSON.parse(data);
								$("#divData").html(
										"<p>Your Feedback Recorded Successfully. We Will reach back at "
												+ data.cname + "</p>");
							},
							error : function(e) {
								alert(e.status);
							}
						});
					});
		});
$(document).ajaxComplete(function(event, request, settings) {
	$("#divData").append("<li>Request Complete.</li>");
});
$( document ).ajaxError(function() {
	$("#divData").append("<li>Error Occured</li>" );
});
$( document ).ajaxSend(function( event, request, settings ) {
	$("#divData").append("<li>Request Send</li>" );
});
$( document ).ajaxStart(function() {
	$("#divData").append("<li>Starting to make request</li>");
});
$( document ).ajaxStop(function() {
	$("#divData").append("<li>Ajaox call stoped....</li>");
});
$( document ).ajaxSuccess(function() {
	$("#divData").append("<li>Success acheived.....</li>");
});
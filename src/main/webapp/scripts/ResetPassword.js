function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
include("scripts/MainJs.js");


document.getElementById("sendOtp").addEventListener("click", resetPassword);

function resetPassword(){
		let email=document.getElementById("registeredEmail").value;	
		// use validation logic here
		let mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if(!mailformat.test(email)){
			document.getElementById("errorEmail").innerHTML="Please enter valid email";
			//alert("email is not formatted")
			return ;
		}
	auth.sendPasswordResetEmail(email).then(
		function() {
			document.getElementById("errorEmail").innerHTML="";
 	 alert("email is sent");
		})
	.catch(
		function(err){
	//alert(err.message);
	document.getElementById("errorEmail").innerHTML="Mail is not registered";
        });
}

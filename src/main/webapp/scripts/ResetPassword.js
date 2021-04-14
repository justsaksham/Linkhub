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
		if(email==''){
			alert("email is not formatted")
			return ;
		}
	auth.sendPasswordResetEmail(email).then(
		function() {
 	 alert("email is sent");
		})
	.catch(
		function(err){
	alert(err.message);
        });
}

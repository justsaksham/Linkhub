console.log("hello saksham")
var newPassword=document.getElementById("newPassword");
var confirmNewPassword=document.getElementById("confirmNewPassword");
var btnChangePassword=document.getElementById("btnChangePassword");
var btnUpdateDetailsView=document.getElementById("btnUpdateDetailsView");
var btnChangePasswordView=document.getElementById("btnChangePasswordView");
var changePasswordDiv=document.getElementById("changePassword");
var changeDetailsDiv=document.getElementById("changeDetails");
var btnUpdateDetails=document.getElementById("btnUpdateDetails");
changePasswordDiv.style.display="none";
changeDetailsDiv.style.display="none";
var userInfo={};
btnChangePasswordView.onclick=function(){
	if(changePasswordDiv.style.display === "none"){
	changePasswordDiv.style.display = '';
	changeDetailsDiv.style.display="none";
	console.log("hello");
	}
	else if(changePasswordDiv.style.display === ""){
		console.log(changePasswordDiv.style+" heloo");
		changePasswordDiv.style.display="none";
	}
}
btnUpdateDetailsView.onclick=function(){
//	console.log(document.getElementsByClassName("changePassword")[0]);
//	console.log(document.getElementsByClassName("changePassword")[0].style.display);
//	
	if(changeDetailsDiv.style.display === "none"){
		changeDetailsDiv.style.display = '';
	changePasswordDiv.style.display="none";
	console.log("hello");
	}
	else if(changeDetailsDiv.style.display === ""){
		console.log(changePasswordDiv.style+" heloo");
		changeDetailsDiv.style.display="none";
	}
}
btnUpdateDetails.onclick=function(){
	//console.log("hellodjjjx");
	let FirstName=document.getElementById("firstName").value;
	let LastName=document.getElementById("lastName").value;
	let email=document.getElementById("email").value;
	let address=document.getElementById("address").value;
	let option1=document.getElementById('male').checked;
	let option2=document.getElementById('female').checked;
	console.log(option1);
	console.log(option2);
	let gender='';
	if(option1){
		gender='male';
	}
	else if(option2){
		gender='female';
	}
	var profile={
	"Name":userInfo.Name,
	"Email":userInfo.Email,
	"FirstName":FirstName,
	"LastName":LastName,
	"Contact_Email":email,
	"Address":address,
	"Gender":gender
	};
	database.ref("users/"+currentUser.uid+"/profile").set(profile).then(function(snap){
		console.log("profile Updated");
	});
	
}
var firebaseConfig = {
    apiKey: "AIzaSyAZiaQmuDACRF06fIAAE44l_HlpGrZ4Q24",
    authDomain: "linkhub-a8589.firebaseapp.com",
    databaseURL: "https://linkhub-a8589.firebaseio.com",
    projectId: "linkhub-a8589",
    storageBucket: "linkhub-a8589.appspot.com",
    messagingSenderId: "38716836402",
    appId: "1:38716836402:web:eee2b7dbf3992586bf0a2b",
    measurementId: "G-JTYE8501D3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var auth=firebase.auth();
  var currentUser={};
  var database=firebase.database();
try{
	  firebase.auth().onAuthStateChanged(function(user) {
	   let newuser = firebase.auth().currentUser;
	    if (newuser) {
	      currentUser=user;
	      console.log('auth state changed');
	      console.log('auth state changed'); 
	      LoadProfileData();
	    } else {
	      // No user is signed in.
	    	currentUser={};
	      console.log('user signout from onAuthStateChanged');
	      
	         }
	  });

	  }
	  catch(err){
	    console.log(err.code);
	      console.log(err.message);
	    
	  }
btnChangePassword.onclick=function(){
	console.log("button is clicked");
	let password=newPassword.value;
	let conPassword=confirmNewPassword.value;
	console.log(password);
	if(password===conPassword){
	firebase.auth().currentUser.updatePassword(password).then(function() {
		 console.log("Password is changed");
	}).catch(function(error) {
	  
	});
			}
	else{
	console.log("password and confirm pass does not match")
	}
}
function LoadProfileData(){
database.ref("users/"+currentUser.uid+"/profile").on('value',function(child){
		let val=child.val();
		if(val!=null){
			console.log(val);
			userInfo=val;
			displayUserInfo(userInfo);
		}
			});
}
var UserName=document.getElementById("UserName");
var Firstname=document.getElementById("Firstname");
var Lastname=document.getElementById("Lastname");
var  Gender=document.getElementById("Gender");
var Email=document.getElementById("Email");
var Address=document.getElementById("Address");
function displayUserInfo(userInfo){
	if(userInfo.Name!=null){
		UserName.innerHTML=userInfo.Name;
	}
	else{
		UserName.innerHTML="NA";
	}
	if(userInfo.Contact_Email!=null){
		Email.innerHTML=userInfo.Contact_Email;
	}
	else{
		Email.innerHTML="NA";
	}
	if(userInfo.FirstName!=null){
		FirstName.innerHTML=userInfo.FirstName;
	}
	else{
		FirstName.innerHTML="NA";
	}
	if(userInfo.LastName!=null){
		LastName.innerHTML=userInfo.LastName;
	}
	else{
		LastName.innerHTML="NA";
	}
	if(userInfo.Gender!=null){
		Gender.innerHTML=userInfo.Gender;
	}
	else{
		Gender.innerHTML="NA";
	}
	if(userInfo.Address!=null){
		Address.innerHTML=userInfo.Address;
	}
	else{
		Address.innerHTML="NA";
	}
}
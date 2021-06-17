//console.log("hello saksham")
//var newPassword=document.getElementById("newPassword");
//var confirmNewPassword=document.getElementById("confirmNewPassword");
//var btnChangePassword=document.getElementById("btnChangePassword");
//var btnUpdateDetailsView=document.getElementById("btnUpdateDetailsView");
//var btnChangePasswordView=document.getElementById("btnChangePasswordView");
//var changePasswordDiv=document.getElementById("changePassword");
//var changeDetailsDiv=document.getElementById("changeDetails");
//var btnUpdateDetails=document.getElementById("btnUpdateDetails");
//changePasswordDiv.style.display="none";
//changeDetailsDiv.style.display="none";
//var userInfo={};
//btnChangePasswordView.onclick=function(){
//	if(changePasswordDiv.style.display === "none"){
//	changePasswordDiv.style.display = '';
//	changeDetailsDiv.style.display="none";
//	console.log("hello");
//	}
//	else if(changePasswordDiv.style.display === ""){
//		console.log(changePasswordDiv.style+" heloo");
//		changePasswordDiv.style.display="none";
//	}
//}
//btnUpdateDetailsView.onclick=function(){
////	console.log(document.getElementsByClassName("changePassword")[0]);
////	console.log(document.getElementsByClassName("changePassword")[0].style.display);
////	
//	if(changeDetailsDiv.style.display === "none"){
//		changeDetailsDiv.style.display = '';
//	changePasswordDiv.style.display="none";
//	console.log("hello");
//	}
//	else if(changeDetailsDiv.style.display === ""){
//		console.log(changePasswordDiv.style+" heloo");
//		changeDetailsDiv.style.display="none";
//	}
//}
//btnUpdateDetails.onclick=function(){
//	//console.log("hellodjjjx");
//	let FirstName=document.getElementById("firstName").value;
//	let LastName=document.getElementById("lastName").value;
//	let email=document.getElementById("email").value;
//	let address=document.getElementById("address").value;
//	let option1=document.getElementById('male').checked;
//	let option2=document.getElementById('female').checked;
//	console.log(option1);
//	console.log(option2);
//	let gender='';
//	if(option1){
//		gender='male';
//	}
//	else if(option2){
//		gender='female';
//	}
//	var profile={
//	"Name":userInfo.Name,
//	"Email":userInfo.Email,
//	"FirstName":FirstName,
//	"LastName":LastName,
//	"Contact_Email":email,
//	"Address":address,
//	"Gender":gender
//	};
//	database.ref("users/"+currentUser.uid+"/profile").set(profile).then(function(snap){
//		console.log("profile Updated");
//	});
//	
//}
//var firebaseConfig = {
//    apiKey: "AIzaSyAZiaQmuDACRF06fIAAE44l_HlpGrZ4Q24",
//    authDomain: "linkhub-a8589.firebaseapp.com",
//    databaseURL: "https://linkhub-a8589.firebaseio.com",
//    projectId: "linkhub-a8589",
//    storageBucket: "linkhub-a8589.appspot.com",
//    messagingSenderId: "38716836402",
//    appId: "1:38716836402:web:eee2b7dbf3992586bf0a2b",
//    measurementId: "G-JTYE8501D3"
//  };
//  // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
//  firebase.analytics();
//  var auth=firebase.auth();
//  var currentUser={};
//  var database=firebase.database();
//try{
//	  firebase.auth().onAuthStateChanged(function(user) {
//	   let newuser = firebase.auth().currentUser;
//	    if (newuser) {
//	      currentUser=user;
//	      console.log('auth state changed');
//	      console.log('auth state changed'); 
//	      LoadProfileData();
//	    } else {
//	      // No user is signed in.
//	    	currentUser={};
//	      console.log('user signout from onAuthStateChanged');
//	      
//	         }
//	  });
//
//	  }
//	  catch(err){
//	    console.log(err.code);
//	      console.log(err.message);
//	    
//	  }
//btnChangePassword.onclick=function(){
//	console.log("button is clicked");
//	let password=newPassword.value;
//	let conPassword=confirmNewPassword.value;
//	console.log(password);
//	if(password===conPassword){
//	firebase.auth().currentUser.updatePassword(password).then(function() {
//		 console.log("Password is changed");
//	}).catch(function(error) {
//	  
//	});
//			}
//	else{
//	console.log("password and confirm pass does not match")
//	}
//}
//function LoadProfileData(){
//database.ref("users/"+currentUser.uid+"/profile").on('value',function(child){
//		let val=child.val();
//		if(val!=null){
//			console.log(val);
//			userInfo=val;
//			displayUserInfo(userInfo);
//		}
//			});
//}
//var UserName=document.getElementById("UserName");
//var Firstname=document.getElementById("Firstname");
//var Lastname=document.getElementById("Lastname");
//var  Gender=document.getElementById("Gender");
//var Email=document.getElementById("Email");
//var Address=document.getElementById("Address");
//function displayUserInfo(userInfo){
//	if(userInfo.Name!=null){
//		UserName.innerHTML=userInfo.Name;
//	}
//	else{
//		UserName.innerHTML="NA";
//	}
//	if(userInfo.Contact_Email!=null){
//		Email.innerHTML=userInfo.Contact_Email;
//	}
//	else{
//		Email.innerHTML="NA";
//	}
//	if(userInfo.FirstName!=null){
//		FirstName.innerHTML=userInfo.FirstName;
//	}
//	else{
//		FirstName.innerHTML="NA";
//	}
//	if(userInfo.LastName!=null){
//		LastName.innerHTML=userInfo.LastName;
//	}
//	else{
//		LastName.innerHTML="NA";
//	}
//	if(userInfo.Gender!=null){
//		Gender.innerHTML=userInfo.Gender;
//	}
//	else{
//		Gender.innerHTML="NA";
//	}
//	if(userInfo.Address!=null){
//		Address.innerHTML=userInfo.Address;
//	}
//	else{
//		Address.innerHTML="NA";
//	}
//}
console.log("hello saksham")
window.onload = function refresh(){
setTimeout(()=>{	
k=document.getElementsByClassName('values');
for(i=0;i<k.length;i++)
{
  k[i].setAttribute('class','values appear-values');
}
},1900);

}
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
	changeDetailsDiv.setAttribute('class','');
	changePasswordDiv.setAttribute('class','move-right');
	changeDetailsDiv.style.display="none";
	console.log("hello");
	}
	else if(changePasswordDiv.style.display === ""){
		console.log(changePasswordDiv.style+" heloo");
		changePasswordDiv.setAttribute('class','move-left');
		changeDetailsDiv.setAttribute('class','');
		setTimeout(()=>{
		changePasswordDiv.style.display="none";
		},600);
	}
}
btnUpdateDetailsView.onclick=function(){
//	console.log(document.getElementsByClassName("changePassword")[0]);
//	console.log(document.getElementsByClassName("changePassword")[0].style.display);
//	
	if(changeDetailsDiv.style.display === "none"){
		changeDetailsDiv.style.display = '';
		changePasswordDiv.setAttribute('class','');
		changeDetailsDiv.setAttribute('class','move-right');
	changePasswordDiv.style.display="none";
	console.log("hello");
	}
	else if(changeDetailsDiv.style.display === ""){
		console.log(changePasswordDiv.style+" heloo");
		changeDetailsDiv.setAttribute('class','move-left');
		setTimeout(()=>{
		changeDetailsDiv.style.display="none";
		},600);
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








// front end part only
    
    //LinkHub logo
	function landing_page(){
		window.location.replace('./prototype.html');
	}
	
	  //for zooming link hub logo
	function mouseover_LinkHub(logo)
	{   
		logo.classList.remove('linkhub-in-active');
		logo.classList.add('linkhub-active');
	}
	
	   //for contracting link hub logo
	function mouseout_LinkHub(logo)
	{
		logo.classList.remove('linkhub-active');
		logo.classList.add('linkhub-in-active');
	}
            	

// 'input' bar

 input0=document.getElementsByClassName('input')[0];
 //for expanding input bar on hover
 input0.addEventListener('mouseover',()=>{
	 input0.classList.remove('input-in-active');
	 input0.classList.add('input-active');
 }); 
 //for contracting input bar on hover
 input0.addEventListener('mouseout',()=>{
	 input0.classList.remove('input-active');
	 input0.classList.add('input-in-active');
 });

 input1=document.getElementsByClassName('input')[1];
 //for expanding input bar on hover
 input1.addEventListener('mouseover',()=>{
	 input1.classList.remove('input-in-active');
	 input1.classList.add('input-active');
 });
 //for contracting input bar on hover
 input1.addEventListener('mouseout',()=>{
	 input1.classList.remove('input-active');
	 input1.classList.add('input-in-active');
 });

 input2=document.getElementsByClassName('input')[2];
 //for expanding input bar on hover
 input2.addEventListener('mouseover',()=>{
	 input2.classList.remove('input-in-active');
	 input2.classList.add('input-active');
 });
 //for contracting input bar on hover
 input2.addEventListener('mouseout',()=>{
	 input2.classList.remove('input-active');
	 input2.classList.add('input-in-active');
 });

 input3=document.getElementsByClassName('input')[3];
 //for expanding input bar on hover
 input3.addEventListener('mouseover',()=>{
	 input3.classList.remove('input-in-active');
	 input3.classList.add('input-active');
 });
 //for contracting input bar on hover
 input3.addEventListener('mouseout',()=>{
	 input3.classList.remove('input-active');
	 input3.classList.add('input-in-active');
 });

 input4=document.getElementsByClassName('input')[4];
 //for expanding input bar on hover
 input4.addEventListener('mouseover',()=>{
	 input4.classList.remove('input-in-active');
	 input4.classList.add('input-active');
 });
 //for contracting input bar on hover
 input4.addEventListener('mouseout',()=>{
	 input4.classList.remove('input-active');
	 input4.classList.add('input-in-active');
 });

 input5=document.getElementsByClassName('input')[5];
 //for expanding input bar on hover
 input5.addEventListener('mouseover',()=>{
	 input5.classList.remove('input-in-active');
	 input5.classList.add('input-active');
 });
 
 //for contracting input bar on hover
 input5.addEventListener('mouseout',()=>{
	 input5.classList.remove('input-active');
	 input5.classList.add('input-in-active');
 });


		  
//for btn-pass hover effect 
   pass=document.getElementsByClassName('btn-pass')[0];
//for expanding btn-pass on hover
  pass.addEventListener('mouseover',()=>{
  pass.classList.remove('btn-pass-in-active');
  pass.classList.add('btn-pass-active');
  });

//for contracting btn-pass on hover
 pass.addEventListener('mouseout',()=>{
 pass.classList.remove('btn-pass-active');
 pass.classList.add('btn-pass-in-active');
 });

//for btn-detail hover effect 
det=document.getElementsByClassName('btn-detail')[0];
//for expanding btn-detail on hover
  det.addEventListener('mouseover',()=>{
  det.classList.remove('btn-detail-in-active');
  det.classList.add('btn-detail-active');
  });

//for contracting btn-detail on hover
 det.addEventListener('mouseout',()=>{
 det.classList.remove('btn-detail-active');
 det.classList.add('btn-detail-in-active');
 }); 
	
//for btn-change hover effect 
ch=document.getElementsByClassName('btn-change')[0];
//for expanding btn-change on hover
  ch.addEventListener('mouseover',()=>{
  ch.classList.remove('btn-change-in-active');
  ch.classList.add('btn-change-active');
  });

//for contracting btn-change on hover
 ch.addEventListener('mouseout',()=>{
 ch.classList.remove('btn-change-active');
 ch.classList.add('btn-change-in-active');
 });  

//for btn-update hover effect 
upd=document.getElementsByClassName('btn-update')[0];
//for expanding btn-update on hover
  upd.addEventListener('mouseover',()=>{
  upd.classList.remove('btn-update-in-active');
  upd.classList.add('btn-update-active');
  });

//for contracting btn-update on hover
 upd.addEventListener('mouseout',()=>{
 upd.classList.remove('btn-update-active');
 upd.classList.add('btn-update-in-active');
 });  

function appear(){
	    ki=document.getElementsByClassName('values');
		for(j=0;j<ki.length;j++)
		{
		  ki[j].setAttribute('class','values');
		}
	setTimeout(apply_again(),1000);
}
function apply_again(){
	    k=document.getElementsByClassName('values');
		for(i=0;i<k.length;i++)
		{
		  k[i].setAttribute('class','values appear-values');
		}
}
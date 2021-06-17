// currentUser variable is declared inside MainJs
//
//function include(file) {
//  
//  var script  = document.createElement('script');
//  script.src  = file;
//  script.type = 'text/javascript';
//  script.defer = true;
//  
//  document.getElementsByTagName('head').item(0).appendChild(script);
//  
//}
//include("scripts/MainJs.js");

document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
function ValidateUserCred(){
	let Name=$("#inputRegisterName").val();
	let email=$("#inputRegisterEmail").val();
	let pass=$("#inputRegisterPassword").val();
	let conpass=$("#inputRegisterConfirmPassword").val();
	let mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let inValid = /[\s.@]/;
	let flag1=false;
	let flag2=false;
	let flag3=false;
	let flag4=false;
	
	//console.log(email);
	if(mailformat.test(email)){
		flag1=true;
		document.getElementById("RegisterEmailError").innerHTML="";
			
	}
	else{
		document.getElementById("RegisterEmailError").innerHTML="Please Enter Valid Email";
	}
	if(!inValid.test(Name) && !(Name==='')){
		if(Name.length>=4){
			document.getElementById("UserNameError").innerHTML="";
			
			flag2=true;
				
		}
		else{
			document.getElementById("UserNameError").innerHTML="Name should have atleast 4 char";
			
		}
	}
	else{
		document.getElementById("UserNameError").innerHTML="Please Enter Name Without space , @ ,'.'";
			
	}
	if(pass===''){
		document.getElementById("RegisterPasswordError").innerHTML="Please Enter Password"	;
	}
	else{
		if(pass.length>=6){
		document.getElementById("RegisterPasswordError").innerHTML="";
		flag3=true;
		}
		else{
			document.getElementById("RegisterPasswordError").innerHTML="Password must contain atleast 6 symbol";
				
		}
	}
	if(conpass===''){
		document.getElementById("RegisterConfirmPasswordError").innerHTML="Please Enter Confirm Password";
	}
	else{
		if(pass===conpass){
			flag4=true;
			document.getElementById("RegisterConfirmPasswordError").innerHTML="";
				
		}
		else{
			document.getElementById("RegisterConfirmPasswordError").innerHTML="Password mismatch";
				
		}
	}
	console.log(flag1);
	console.log(flag2);
	return flag1 && flag2 && flag3 && flag4;
	
}
//button click listeners
$("#Sign_up").click(function(){
  console.log("Sign up with new User");
  //console.log(auth);
  let valid=ValidateUserCred();
  
  let userDetail={
  	Name:$("#inputRegisterName").val(),
  	Email:$("#inputRegisterEmail").val()
  };
  let email=$("#inputRegisterEmail").val();
  let password=$("#inputRegisterPassword").val();
  let confirmPassword=$("#inputRegisterConfirmPassword").val();
  if(password==confirmPassword && valid){
  	CreateNewUser(email,password,userDetail);
  }
  else{
  	console.log("password mismatched");
  	//window.alert("password mismatched");
  }
});
//login_submit button listener

$("#login_submit").click(function(){
console.log("User Details has been sent");
let email=$("#inputEmail").val();
  let password=$("#inputPassword").val();
  let valid=checkLoginCred();
  if(valid)
	logIn(email,password);
	console.log(email+" "+password);
});

function checkLoginCred(){
	let email=$("#inputEmail").val();
	  let password=$("#inputPassword").val();
	  let mailformat =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	let flag1=false;
	let flag2=false;
	  if(mailformat.test(email)){
		flag1=true;
		document.getElementById("emailError").innerHTML="";
	}
	else{
		document.getElementById("emailError").innerHTML="Please enter valid Email";
	}
	  if(password===''){
		  document.getElementById("passwordError").innerHTML="Please enter Password";
	  }
	  else{
		  flag2=true;
		  document.getElementById("passwordError").innerHTML="";
			
	  }
	  return flag1 && flag2;
}









function setUserDetail(user,userDetails){
	user.updateEmail(userDetails.Email).then(function() {
		  console("EmailUpdated");
		  return;
		}).catch(function(error) {
		  // An error happened.
		});
	}



// for creating New User
function CreateNewUser(email,password,userDetail)
{
auth.createUserWithEmailAndPassword(email, password).
then((user) =>{
	currentUser=user.user;
	console.log("user is loged in as New User");
	 document.getElementById("hiddenValue2").value=user.user.uid;
	   // document.getElementById("hiddenValue").value=user.user.uid;
	   setUserDetail(user.user,userDetail);
	   WriteUserData(user.user,userDetail);
     console.log("user is created");
     document.getElementById("signUpError").innerHTML="";
			}).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.code);
    console.log(error.message);
    document.getElementById("signUpError").innerHTML=errorMessage;
  });
}
function logIn(email,password){
	auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    //user.user is equal to newuser

let newuser = firebase.auth().currentUser;
currentUser=newuser;
  if (newuser) {
    console.log("Existing user loged in");
    //document.getElementById("hiddenValue2").value=newuser.uid;
    document.getElementById("hiddenValue").value=newuser.uid;
    document.getElementById("form1").submit();
    document.getElementById("loginError").innerHTML="";
    
  } else {
    // No user is signed in.
    console.log("No user Loged In");
  }
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(error.code);
    console.log(errorMessage);
    let msg="Incorrect email or password";
    if(errorCode=="auth/invalid-email"){
    	
    	//document.getElementById("InvalidEmail").innerHTML=msg;
    	document.getElementById("loginError").innerHTML=msg;
    }
    else if(errorCode=="auth/wrong-password"){
    	
    	//document.getElementById("InvalidEmail").innerHTML=msg;
    	document.getElementById("loginError").innerHTML=msg;
    }
    		
  });

}
function WriteUserData(user,userDetail){
	let userinfo={
			email:userDetail.Email,
			userId:currentUser.uid
	};
	console.log(userinfo);
	console.log(user.uid);
 firebase.database()
 .ref("users/"+user.uid+"/profile").set(userDetail).then(function(){	 
	 console.log("heloo heloo");
	 setUserSearch(userDetail,userinfo);
 }).catch((err)=>{
	 console.log("error occured in saving user");
 });
 
  
}
// for searching user by name
function setUserSearch(userDetail,userinfo){

	 firebase.database()
	 .ref("userSearch/"+userDetail.Name).push().set({
		 userinfo
	 }).then(function(){	  
	// document.getElementById("form2").submit();
	 submitForm("form2");
	 console.log('user data is saved in Database');
	 }).catch((err)=>{
		 console.log("error occured in saving Search user");
	 });

}
function submitForm(str){
	document.getElementById(str).submit();
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
		      // User is signed in.
		      currentUser=user;
		      console.log('auth state changed');
		      console.log('auth state changed'); 
let val1=document.getElementById("hiddenValue2").value
let val2=document.getElementById("hiddenValue").value
console.log(val1)
console.log(val2)
if(val2===' ' && val1===' '){
//	document.getElementById("hiddenValue2").value
	document.getElementById("hiddenValue").value=currentUser.uid;
	val2=document.getElementById("hiddenValue").value
	console.log(val2);
	submitForm("form1");
}
//		      
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



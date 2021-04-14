// currentUser variable is declared inside MainJs

function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
include("scripts/MainJs.js");

document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

//button click listeners
$("#Sign_up").click(function(){
  console.log("Sign up with new User");
  //console.log(auth);
  let userDetail={
  	Name:$("#inputRegisterName").val(),
  	Email:$("#inputRegisterEmail").val()
  };
  let email=$("#inputRegisterEmail").val();
  let password=$("#inputRegisterPassword").val();
  let confirmPassword=$("#inputRegisterConfirmPassword").val();
  if(password==confirmPassword){
  	CreateNewUser(email,password,userDetail);
  }
  else{
  	console.log("password mismatched");
  	window.alert("password mismatched");
  }
});
//login_submit button listener

$("#login_submit").click(function(){
console.log("User Details has been sent");
let email=$("#inputEmail").val();
  let password=$("#inputPassword").val();
	logIn(email,password);
	console.log(email+" "+password);
});











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
	    document.getElementById("hiddenValue").value=user.user.uid;
	   setUserDetail(user.user,userDetail);
	   WriteUserData(user.user,userDetail);
     console.log("user is created");
			}).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.code);
    console.log(error.message);
  });
}
function logIn(email,password){
	auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
 // console.log(user.user);
  //user.user is equal to newuser

let newuser = firebase.auth().currentUser;
currentUser=newuser;
  if (newuser) {
    console.log("Existing user loged in");
    document.getElementById("hiddenValue2").value=newuser.uid;
    document.getElementById("hiddenValue").value=newuser.uid;
    document.getElementById("form1").submit();
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
    let msg="Please Enter valid email and password";
    if(errorCode=="auth/invalid-email"){
    	
    	document.getElementById("InvalidEmail").innerHTML=msg;
    }
    else if(errorCode=="auth/wrong-password"){
    	
    	document.getElementById("InvalidEmail").innerHTML=msg;
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
function setUserSearch(userDetail,userinfo){

	 firebase.database()
	 .ref("userSearch/"+userDetail.Name).push().set({
		 userinfo
	 }).then(function(){	  
	 document.getElementById("form2").submit();
	 console.log('user data is saved in Database');
	 }).catch((err)=>{
		 console.log("error occured in saving Search user");
	 });

}
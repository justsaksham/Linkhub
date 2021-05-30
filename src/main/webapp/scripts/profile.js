console.log("hello saksham")
var newPassword=document.getElementById("newPassword");
var confirmNewPassword=document.getElementById("confirmNewPassword");
var btnChangePassword=document.getElementById("btnChangePassword");

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
var inputSearchFriend=document.getElementById("inputSearchFriend");
var btnSearchFriend=document.getElementById("btnSearchFriend");
function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
include("scripts/MainJs.js");
var elements = document.getElementsByClassName("column");
var i;
//List View
for (i = 0; i < elements.length; i++) {
 elements[i].style.width = "100%";
}
document.getElementById("logout").onclick=function(){
	firebase.auth().signOut().then(() => {
		 document.getElementById("logoutForm").submit();
		}).catch((error) => {
		 
		});
}

btnSearchFriend.onclick=function(){
	document.getElementById("form1").submit();
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
		    //  console.log(firebase.auth());
		  }



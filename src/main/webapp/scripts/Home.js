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
	let value=inputSearchFriend.value;
	console.log("search"+value);
	let userInfo=[];
	firebase.database().ref('userSearch/'+value).once('value').then((snapshot) => {
		  var username = snapshot.val() ;
		  console.log(username);
		  //console.log(username.lenght);
		  snapshot.forEach(function(childsnapshot){
			  let val=childsnapshot.val();
			  console.log(val);
			  userInfo.push(val);
			  console.log(userInfo);
			 });
		  fetchUser(userInfo);
			 
		});

	
}

function fetchRequiredUser(alluser,userInfo){
	for(i=0;i<userInfo.length;i++){
		let userData=userInfo[i].userinfo;
		console.log(userData);
		let userId= userData.userId;
		console.log(userId);
		console.log(alluser[userId]);
	}
}
function fetchUser(userInfo){
	for(i=0;i<userInfo.length;i++){
		let userData=userInfo[i].userinfo;
		console.log(userData);
		let userId= userData.userId;
		firebase.database().ref("/users/"+userId+"/profile").once('value').then(function(snapshot){
			var alluser=snapshot.val();
			console.log(alluser);
			//fetchRequiredUser(alluser,userInfo);
		});
	}
	
	}
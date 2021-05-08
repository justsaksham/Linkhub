console.log("hello friends chai pii lo");
var showFriendRequest=document.getElementById("showFriendRequest");
var showFriends=document.getElementById("showFriends");
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
	  var SearchResult=[];
	  var friendList=[];
	  var SentFriendRequestList=[];
	  var PendingFriendRequestList=[];
	  try{
		  firebase.auth().onAuthStateChanged(function(user) {
		   let newuser = firebase.auth().currentUser;
		    if (newuser) {
		      // User is signed in.
		      currentUser=user;
		      console.log('auth state changed');
		      console.log('auth state changed'); 
		      
		      LoadFriendList();// tumhare friend
		      LoadSentFriendRequestList();//jo tumne request bheji h vo h
		      LoadFriendRequestList();// jo tumko kisi ne request bheji h ye vo h
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
		  
		  
		  
		// currentUser ke pass jiski jski frnd request h ye vo log h
		  function LoadFriendRequestList(){
		  	database.ref("users/"+currentUser.uid+"/PendingFriendRequestList")
		  	.on('value',(snapshot)=>{
		  		PendingFriendRequestList=[]
		  		if(snapshot!=null){
		  			console.log(snapshot.val());
		  			snapshot.forEach((childsnap)=>{
		  				let result=childsnap.val();
		  				console.log(result);
		  				PendingFriendRequestList.push(result.senderUid);
		  				console.log(result.senderUid);
		  			});
		  			console.log("PendingFriendRequestList");
		  			console.log(PendingFriendRequestList);
		  		}
		  	});
		  }
		  function LoadFriendList(){
			  
			  console.log("called");
			  database.ref("users/"+currentUser.uid+"/Friends")
				.on('value',(snapshot)=>{
					friendList=[];
					console.log(snapshot.val());
					if(snapshot.exists){
						snapshot.forEach((childsnap)=>{
							var result=childsnap.val();
							friendList.push(result.friendUid);
						});
						console.log("friendList");
						console.log(friendList);
					
					}else{
						friendList=[];
					}
				//	LoadFriendProfile(friendList);
					console.log("friendRequestUpdated");
				});
			  
				}  
		  
		// ye log jinko request bheja h aur unhone accept nhi ki h
		  function LoadSentFriendRequestList(){
			  
		  	database.ref("users/"+currentUser.uid+"/SentFriendRequestList")
		  	.on('value',(snapshot)=>{
		  		//if snapshot is not null
		  		SentFriendRequestList=[];
		  		if(snapshot!=null){
		  		console.log(snapshot.val());
		  		snapshot.forEach((childsnapshot)=>{
		  			let result=childsnapshot.val();
		  			console.log(result);
		  			SentFriendRequestList.push(result.requestUid);
		  			console.log(result.requestUid);
		  		});
		  		console.log("SentFriendRequestList");
		  		
		  		console.log(SentFriendRequestList);
		  	}
		  	});
		  	
		  	}
showFriends.addEventListener('click',showFriendList);
showFriendRequest.addEventListener('click',showFriendRequestList);
function showFriendList(){
	console.log("I will show all friends");
	displayFriendList();
}
function displayFriendRequestList(){
	document.getElementById("friendList").innerHTML='';
	document.getElementById("friendRequest").innerHTML='';
	for(let i=0;i<PendingFriendRequestList.length;i++){
		database.ref("users/"+PendingFriendRequestList[i]+"/profile").once('value').then((snapshot)=>{
			if(snapshot!=null){
				let profile=snapshot.val();
				console.log(profile);
	let div=createFriendRequestTemplate();
	div.setAttribute('class',"request");
	div.setAttribute('id',PendingFriendRequestList[i]);
	div.getElementsByTagName('p')[0].innerHTML=profile.Name;
	div.getElementsByTagName('p')[1].innerHTML=profile.Email;
	div.getElementsByTagName('button')[0].innerHTML="Accept";
	div.getElementsByTagName('button')[1].innerHTML="Reject";
	div.getElementsByTagName('button')[0].setAttribute('class',PendingFriendRequestList[i]);
	div.getElementsByTagName('button')[1].setAttribute('class',PendingFriendRequestList[i]);
	div.getElementsByTagName('button')[1].setAttribute('onclick',"Rejected(this)");
	div.getElementsByTagName('button')[0].setAttribute('onclick',"Accepted(this)");

	console.log(div);
			document.getElementById("friendRequest").appendChild(div);
			}
		});
	}
	console.log("PendingFriendRequestList displayed");

}
function removeRequestFromCurrentUserPendingRequest(id){
	let val=database.ref('users/'+currentUser.uid+"/PendingFriendRequestList/")
	.once('value').then((snapshot)=>{
		snapshot.forEach((csnap)=>{
			let child=csnap.val();
			let key=csnap.key;
			if(child.senderUid==id){
				database.
				ref('users/'+currentUser.uid+"/PendingFriendRequestList/")
				.child(key).remove();
				//removing request from table
				console.log("Request is removed");
			}
		})
	});
	
	
}
function removeRequestInfoFromSenderSentFriendRequestList(id){
	let val=database.ref('users/'+id+"/SentFriendRequestList/")
	.once('value').then((snapshot)=>{
		snapshot.forEach((csnap)=>{
			let child=csnap.val();
			let key=csnap.key;
			if(child.requestUid==currentUser.uid){
				database.
				ref('users/'+id+"/SentFriendRequestList/")
				.child(key).remove();
				//removing request from SentFrinedRequestList table
				console.log("Request is removed");
			}
		})
	});
	console.log(val);
}
function Rejected(btn){
	console.log(btn.getAttribute('class'));
	let id=btn.getAttribute('class');
	var div=document.getElementById(btn.getAttribute('class'));
	// remove request
	document.getElementById("friendRequest").removeChild(div);
	removeRequestFromCurrentUserPendingRequest(id);
	removeRequestInfoFromSenderSentFriendRequestList(id);
	
	
	//console.log(val);
}
function Accepted(btn){
	console.log(btn);
	console.log(btn.getAttribute('class'));
	let id=btn.getAttribute('class');
	var div=document.getElementById(btn.getAttribute('class'));
	console.log(div);
	document.getElementById("friendRequest").removeChild(div);
	removeRequestFromCurrentUserPendingRequest(id);
	removeRequestInfoFromSenderSentFriendRequestList(id);
	AddSenderToFriendList(id);
}
function AddSenderToFriendList(id){
	database.ref("users/"+currentUser.uid+"/Friends").push().set({friendUid:id}).then(function(){
		console.log("user got added");
	});
	database.ref("users/"+id+"/Friends").push().set({friendUid:currentUser.uid}).then(function(){
		console.log("user got added");
	});
}
function displayFriendList(){
	document.getElementById("friendRequest").innerHTML='';
	document.getElementById("friendList").innerHTML='';
	for(let i=0;i<friendList.length;i++){
		database.ref("users/"+friendList[i]+"/profile").once('value').then((snapshot)=>{
			console.log(snapshot.val());
			if(snapshot.val()!=null){
				let div=createTemplateForFriend();
				div.getElementsByTagName('p')[0].innerHTML=snapshot.val().Email;
				div.getElementsByTagName('p')[1].innerHTML=snapshot.val().Name;
				div.getElementsByTagName('button')[0].innerHTML="UnFriend";
				div.getElementsByTagName('button')[0].setAttribute("class",friendList[i]);
				div.setAttribute("id",friendList[i]);
				div.setAttribute("class","AllFriend");
				div.setAttribute("onclick","removeFriendfromList(this)");
				document.getElementById("friendList").appendChild(div);
				console.log(div);
			}
			
			
			
		});
	}
	console.log("friendlist displayed");
}
function removeFriendfromList(btn){
	console.log(btn);
	console.log("removed");
	let id=btn.getAttribute("id");
	
	RemoveFriendfromCurrentUser(id);
	RemoveCurrentUserFromFriend(id);
	let div=document.getElementById(id);
	document.getElementById("friendList").removeChild(div);
}
function RemoveFriendfromCurrentUser(id){
	database.ref("users/"+currentUser.uid+"/Friends").once('value').then(function(snapshot){
		if(snapshot!=null){
			snapshot.forEach(function(childsnap){
				if(childsnap.val().friendUid==id){
					database.ref("users/"+currentUser.uid+"/Friends").child(childsnap.key).remove();
				console.log("you removed "+id);
				}
			});
		}
	});
}
function RemoveCurrentUserFromFriend(id){
	
	database.ref("users/"+id+"/Friends").once('value').then(function(snapshot){
		if(snapshot!=null){
			snapshot.forEach(function(childsnap){
				if(childsnap.val().friendUid==currentUser.uid){
					database.ref("users/"+id+"/Friends").child(childsnap.key).remove();
					console.log("you are removed from "+id+"friendlist");
				}
			});
		}
	});	
}
//for creating template
function createFriendRequestTemplate(){
	let div=document.createElement("div");
	let para=document.createElement('p');
	let para2=document.createElement('p');
	let btn1=document.createElement('button');
	let btn2=document.createElement('button');
	div.appendChild(para);
	div.appendChild(para2);
	div.appendChild(btn1);
	div.appendChild(btn2);
	console.log(div);
	return div;
	
}
function showFriendRequestList(){
	console.log("I will show all friend Request");
	displayFriendRequestList();
	}

function createTemplateForFriend(){
	let div=document.createElement('div');
	let para=document.createElement('p');
	let para2=document.createElement('p');
	let btn=document.createElement('button');
	div.appendChild(para);
	div.appendChild(para2);
	div.appendChild(btn);
	//console.log(div);
	return div;
}
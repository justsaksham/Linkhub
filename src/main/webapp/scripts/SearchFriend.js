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
	btnSearchFriend.addEventListener('click',Searchfriend);
	
	function Searchfriend(){
		let value=inputSearchFriend.value;
		console.log("search"+value);
		document.getElementsByClassName("friendList")[0].innerHTML='';
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
			  //all the user with same name
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
		let userIdArray=[];
		//holds all user id
		for(i=0;i<userInfo.length;i++){
			let userData=userInfo[i].userinfo;
			console.log(userData);
			let userId= userData.userId;
			// if userid is equal to it's own id
			// if user is already friend 
			// if it's request is pending
			// if we have already sent the request
			
			//then need to change the button
			console.log(friendList);
			console.log(SentFriendRequestList);
			console.log(PendingFriendRequestList);
			
			
			
			let flag1=false,flag2=false,flag3=false;
			for(let i=0;i<friendList.length;i++){
			if(userId.toString() == friendList[i]){
				console.log("userId is already friend"+" "+userId);
				flag1=true;
				break;
			}
		}
			
			for(let i=0;i<PendingFriendRequestList.length;i++){
				if(userId.toString() == PendingFriendRequestList[i]){
					console.log("userId is already in PendingFriendRequestList"+" "+userId);
					console.log("You have already friend request from this user");
					flag2=true;
					break;
				}
			}
			for(let i=0;i<SentFriendRequestList.length;i++){
				if(userId.toString() == SentFriendRequestList[i]){
					console.log("userId is already in SentFriendRequestList"+" "+userId);
					console.log("your request already sent and user haven't accept it");
					flag3=true;
					break;
				}
			}
			
			if(flag1 || flag2 || flag3){
				continue;
			}
//			if(userId.toString() in SentFriendRequestList){
//				console.log("userId is already in SentFriendRequestList"+" "+userId);
//				continue;
//			}
//			if(userId.toString() in PendingFriendRequestList){
//				console.log("userId is already in PendingFriendRequestList"+" "+userId);
//				continue;
//			}
			if(userId!=currentUser.uid){
			firebase.database().ref("/users/"+userId+"/profile").once('value').then(function(snapshot){
				var alluser=snapshot.val();
				console.log(alluser);
				//fetchRequiredUser(alluser,userInfo);
				//SearchResult.push(alluser);
				//userIdArray.push(userId);
				displaySearchResult(alluser,userId);
			});
			}
		}
		
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//UPDATE WITH MODERN CODE
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function displaySearchResult(alluser,userId){
		console.log(userId);
			let i="<div class=\"friend\" style=\"background-color:powderblue;\" id="
		+userId+"><p>Name:"+alluser.Name+"</p><button id="
		+userId+" onclick=\"AddFriend(this)\">Add Friend</button></div>";
			let j=document.getElementsByClassName("friendList")[0].innerHTML;
			console.log(j);
			if(j!=undefined){
					let k=j+i;
					console.log(document.getElementsByClassName("friendList")[0]);
					document.getElementsByClassName("friendList")[0].innerHTML=k;
			}
			else{
	document.getElementsByClassName("friendList")[0].innerHTML=i;
	console.log("hello heloo")
			}	
}
			
	
	
	
	
	
	
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
			      Searchfriend();
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
// sending request
function AddFriend(user){
	//let userId=document.getElementById(user).value;
	//console.log(userId);
	console.log(user.getAttribute("id"));
	let friendUid=user.getAttribute("id");
	SendFriendRequest(friendUid);
	//console.log(userId);
}
function SendFriendRequest(friendUid){
	database.ref("users/"+friendUid+"/PendingFriendRequestList").push().
	set({senderUid:currentUser.uid}).then(function(){
		console.log("friend request send");
		UpdateInSentFriendRequestList(friendUid);
	});
	
}
// keeps the record of the users whom you sent request
function UpdateInSentFriendRequestList(friendUid){
	database.ref("users/"+currentUser.uid+"/SentFriendRequestList").push().
	set({requestUid:friendUid}).then(function(){
		console.log("friend request details added in PendingRequestList");
		SentFriendRequestList.push(friendUid);
	});
	
}
//All users who have accepted the request
function LoadFriendList(){
	database.ref("users/"+currentUser.uid+"/Friends")
	.once('value').then((snapshot)=>{
		console.log(snapshot.val());
		if(snapshot.exists){
			snapshot.forEach((childsnap)=>{
				var result=childsnap.val();
				friendList.push(result.friendUid);
			});
		}else{
			friendList=[];
		}
	});
	console.log("friendList");
	console.log(friendList);
}  
// ye log jinko request bheja h aur unhone accept nhi ki h
function LoadSentFriendRequestList(){
	database.ref("users/"+currentUser.uid+"/SentFriendRequestList")
	.once('value').then((snapshot)=>{
		//if snapshot is not null
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
// currentUser ke pass jiski jski frnd request h ye vo log h
function LoadFriendRequestList(){
	database.ref("users/"+currentUser.uid+"/PendingFriendRequestList")
	.once('value').then((snapshot)=>{
		
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




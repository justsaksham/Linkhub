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
		document.getElementById("friendList").innerHTML='';
		document.getElementById("AlreadySentFriendRequestList").innerHTML='';
		    let userInfo=[];
//		     SearchResult=[];
//			  friendList=[];
//			  SentFriendRequestList=[];
//			  PendingFriendRequestList=[];
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
		let flag=0;
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
					displayUserWhomCurrentUserSendRequestAlready(userId);
					flag3=true;
					break;
				}
			}
			
			if(flag1 || flag2 || flag3){
				continue;
			}
			if(userId!=currentUser.uid){
				displaySearchResult(userId);
				flag=1;
			}
		}
		if(flag==0)
		{   
			let temp=document.createElement('div');
						temp.setAttribute('class','empty-part-div');
						temp.classList.add("pop");
						let p=document.createElement('p');
						p.setAttribute('class','empty-part');
						temp.appendChild(p);
						p.innerHTML="Sorry! no such user exists";
			document.getElementById("friendList").appendChild(temp);
			console.log("no such user exists");
		}		
		}
	
	function displayUserWhomCurrentUserSendRequestAlready(userId){
		let div=CreateTemplateForAlreadySentRequest();
		database.ref("users/"+userId+"/profile").once('value').then((snapshot)=>{
			if(snapshot.val()!=null){
				let value=snapshot.val();
				let name=value.Name;
				let email=value.Email;
				console.log(value);
				//div.setAttribute('class','AlreadySentRequest');
				
				div.getElementsByTagName('Button')[0].setAttribute('id',userId);
				div.getElementsByTagName('Button')[0].setAttribute('onclick',"revokeRequest(this)");
				div.getElementsByTagName('Button')[0].innerHTML="REVOKE REQUEST"
				div.setAttribute("class","AlreadySentRequest sent"+" "+userId);
				//div.setAttribute("class",userId);
				
				div.getElementsByTagName('p')[0].innerHTML=name;
				div.getElementsByTagName('p')[1].innerHTML=email;
				console.log(div.getAttribute('class'))
				console.log(div);
			}
			div.classList.add('pop');
			document.getElementById("AlreadySentFriendRequestList").appendChild(div);
		});
		
	}
	
	function CreateTemplateForAlreadySentRequest(){
		let div=document.createElement('div');
		let p1=document.createElement('p');
		p1.classList.add('color');
		let p2=document.createElement('p');
		p2.classList.add('color');
		let button=document.createElement('Button');
		button.classList.add('btn','btn-revoke');
		button.setAttribute('onmouseover','revoke_mouseover(this)');
		button.setAttribute('onmouseout','revoke_mouseout(this)');
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(button);
		return div;
	}
	
	function revokeRequest(btn){
		console.log(btn.getAttribute('id'));
		let requestId=btn.getAttribute('id');
		console.log(btn);     
		database.ref("users/"+currentUser.uid+"/SentFriendRequestList").once('value').then((snapshot)=>{
			if(snapshot.val()!=null){
				snapshot.forEach(function(child){
						let ch=child.val();
						console.log(ch);
						if(requestId.toString()===ch.requestUid){
							database.ref("users/"+currentUser.uid+"/SentFriendRequestList").child(child.key).remove();
						console.log("hello");
//						removefromReciever(requestId,currentUser.uid);
						}
				});
				
			}
		});
		removefromReciever(requestId);
		
	}
	function removefromReciever(requestId){
		database.ref("users/"+requestId+"/PendingFriendRequestList").once('value').then((snapshot)=>{
			if(snapshot.val()!=null){
				snapshot.forEach(function(child){
						let ch=child.val();
						console.log(ch);
						console.log(currentUser.uid)
						
						if(currentUser.uid===ch.senderUid.toString()){
							database.ref("users/"+requestId+"/PendingFriendRequestList").child(child.key).remove();
						console.log("hello");
						let div=document.getElementsByClassName(requestId)[0];
						document.getElementById("AlreadySentFriendRequestList").removeChild(div);
					displaySearchResult(requestId);
						}
				});
			}
		});
	}
	
	
	function appendRemovedFriendRequestFriendInRequestList(){
		
	}
	
	
	
	
	
	
	
	
	
	//UPDATE WITH MODERN CODE
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function displaySearchResult(userId){
//		console.log(userId);
//			let i="<div class=\"friend\" style=\"background-color:powderblue;\" id="
//		+userId+"><p>Name:"+alluser.Name+"</p><button id="
//		+userId+" onclick=\"AddFriend(this)\">Add Friend</button></div>";
//			let j=document.getElementsByClassName("friendList")[0].innerHTML;
//			console.log(j);
//			if(j!=undefined){
//					let k=j+i;
//					console.log(document.getElementsByClassName("friendList")[0]);
//					document.getElementsByClassName("friendList")[0].innerHTML=k;
//			}
//			else{
//	document.getElementsByClassName("friendList")[0].innerHTML=i;
//	console.log("hello heloo")
//			}
//			
//			
		let div=CreateTemplateForSendingFriendRequest();
		database.ref("users/"+userId+"/profile").once('value').then((snapshot)=>{
			if(snapshot.val()!=null){
				let value=snapshot.val();
				let name=value.Name;
				let email=value.Email;
				console.log(value);
				//div.setAttribute('class','AlreadySentRequest');
				
				div.getElementsByTagName('Button')[0].setAttribute('id',userId);
				div.getElementsByTagName('Button')[0].setAttribute('onclick',"AddFriend(this)");
				div.getElementsByTagName('Button')[0].innerHTML="add Friend"
				div.setAttribute("class","friend not-sent"+" "+userId);
				//div.setAttribute("class",userId);
				
				div.getElementsByTagName('p')[0].innerHTML=name;
				div.getElementsByTagName('p')[1].innerHTML=email;
				console.log(div.getAttribute('class'))
				console.log(div);
			}
			div.classList.add('pop');
			document.getElementById("friendList").appendChild(div);
		});
	
			
			
			
}
	function CreateTemplateForSendingFriendRequest(){
		let div=document.createElement('div');
		let p1=document.createElement('p');
		//p1.classList.add('');
		let p2=document.createElement('p');
		let button=document.createElement('Button');
		button.classList.add('btn','btn-add');
		button.setAttribute('onmouseover','add_mouseover(this)');
		button.setAttribute('onmouseout','add_mouseout(this)');
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(button);
		return div;
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
		let div=document.getElementsByClassName(friendUid)[0];
		document.getElementById('friendList').removeChild(div);
		displayUserWhomCurrentUserSendRequestAlready(friendUid);
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
	.on('value',(snapshot)=>{
		//if snapshot is not null
		SentFriendRequestList=[]
		if(snapshot!=null){
		console.log(snapshot.val());
		snapshot.forEach((childsnapshot)=>{
			let result=childsnapshot.val();
			console.log(result);
			if(!SentFriendRequestList.includes(result.requestUid))
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




//front end only
         //search btn  
search=document.getElementsByClassName("btn-search")[0];
//search button on hover
search.addEventListener('mouseover',()=>{
    search.classList.remove('search-in-active');
    search.classList.add('search-active');
});

//search button out of hover
search.addEventListener('mouseout',()=>{
    search.classList.remove('search-active');
    search.classList.add('search-in-active');
});


          // 'search/input' bar
input=document.getElementsByClassName('input')[0];
//for expanding search/input bar on hover
input.addEventListener('mouseover',()=>{
    input.classList.remove('input-in-active');
    input.classList.add('input-active');
});

//for contracting search/input bar on hover
input.addEventListener('mouseout',()=>{
    input.classList.remove('input-active');
    input.classList.add('input-in-active');
});



           //add button
//for expanding add btn on hover
function add_mouseover(ad)
{
    ad.classList.remove('btn-add-in-active');
    ad.classList.add('btn-add-active');
}

//for contracting add btn on hover
function add_mouseout(ad)
{
    ad.classList.remove('btn-add-active');
    ad.classList.add('btn-add-in-active');
}


              
          //revoke btn
//for expanding revoke btn on hover
function revoke_mouseover(revo)
{
    revo.classList.remove('btn-revoke-in-active');
    revo.classList.add('btn-revoke-active');
}

//for contracting revoke btn on hover
function revoke_mouseout(revo)
{
    revo.classList.remove('btn-revoke-active');
    revo.classList.add('btn-revoke-in-active');
}


        //LinkHub logo
//on clicking the logo redirected to landing page
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
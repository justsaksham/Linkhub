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
						/*let temp=document.createElement('div');
						div.setAttribute('class','empty-part-div');
						let p=document.createElement('p');
						p.setAttribute('class','empty-part');
						temp.appendChild(p);
						p.innerHTML="Sorry! You have no friends";
						//document.getElementById("friendRequest").innerHTML='';
	                    document.getElementById("friendList").appendChild(temp);*/
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
	let flag=0;
	for(let i=0;i<PendingFriendRequestList.length;i++){
		flag=1;
		database.ref("users/"+PendingFriendRequestList[i]+"/profile").once('value').then((snapshot)=>{
			if(snapshot!=null){
				let profile=snapshot.val();
				console.log(profile);
	let div=createFriendRequestTemplate();
	div.setAttribute('class','request');
	div.classList.add('pop');
	div.setAttribute('id',PendingFriendRequestList[i]);
	let bdiv=document.createElement("div");
	bdiv.classList.add('btn-div');
	div.getElementsByTagName('p')[0].innerHTML=profile.Name;
	div.getElementsByTagName('p')[1].innerHTML=profile.Email;
	div.getElementsByTagName('button')[0].innerHTML="Accept";
	div.getElementsByTagName('button')[1].innerHTML="Reject";
	div.getElementsByTagName('button')[0].setAttribute('class',PendingFriendRequestList[i]);
	div.getElementsByTagName('button')[0].classList.add('btn','btn-accept');
	div.getElementsByTagName('button')[1].setAttribute('class',PendingFriendRequestList[i]);
	div.getElementsByTagName('button')[1].classList.add('btn','btn-reject');
	div.getElementsByTagName('button')[1].setAttribute('onclick',"Rejected(this)");
	div.getElementsByTagName('button')[0].setAttribute('onclick',"Accepted(this)");
    btn1=div.getElementsByTagName('button')[0];
    btn2=div.getElementsByTagName('button')[1];
    bdiv.appendChild(btn1);
	bdiv.appendChild(btn2);
	div.appendChild(bdiv);
	console.log(div);
			document.getElementById("friendRequest").appendChild(div);
			}
		});
	}
	if(flag==0)
	{
						let temp=document.createElement('div');
						temp.setAttribute('class','empty-part-div');
						temp.classList.add("pop");
						let p=document.createElement('p');
						p.setAttribute('class','empty-part');
						temp.appendChild(p);
						p.innerHTML="Sorry! You have no friend requests";
						//document.getElementById("friendRequest").innerHTML='';
	                    document.getElementById("friendRequest").appendChild(temp);
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
	id=id.split(" ",1);
	//var div=document.getElementById(btn.getAttribute('class'));
	var div=document.getElementById(id);
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
	let first_Class=id.split(" ",1);
	
	//var div=document.getElementById(btn.getAttribute('class'));
	var div=document.getElementById(first_Class);
	console.log(div);
	document.getElementById("friendRequest").removeChild(div);
	//removeRequestFromCurrentUserPendingRequest(id);
	//removeRequestInfoFromSenderSentFriendRequestList(id);
	//AddSenderToFriendList(id);
	removeRequestFromCurrentUserPendingRequest(first_Class);
	removeRequestInfoFromSenderSentFriendRequestList(first_Class);
	AddSenderToFriendList(first_Class);
	
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
	let flag=0;
	for(let i=0;i<friendList.length;i++){
		flag=1;
		database.ref("users/"+friendList[i]+"/profile").once('value').then((snapshot)=>{
			console.log(snapshot.val());
			if(snapshot.val()!=null){
				let div=createTemplateForFriend();
				div.getElementsByTagName('p')[0].innerHTML=snapshot.val().Email;
				div.getElementsByTagName('p')[1].innerHTML=snapshot.val().Name;
				div.getElementsByTagName('button')[0].innerHTML="UnFriend";
				div.getElementsByTagName('button')[0].setAttribute("class",friendList[i]);
				div.getElementsByTagName('button')[0].classList.add('btn','btn-unfriend');
				div.setAttribute("id",friendList[i]);
				div.setAttribute("class","AllFriend");
				div.classList.add('already-friend','pop');
				div.setAttribute("onclick","removeFriendfromList(this)");
				document.getElementById("friendList").appendChild(div);
				console.log(div);
			}
			
			
			
		});
	}
	if(flag==0)
	{
		
						let temp=document.createElement('div');
						temp.setAttribute('class','empty-part-div');
						temp.classList.add("pop");
						let p=document.createElement('p');
						p.setAttribute('class','empty-part');
						temp.appendChild(p);
						p.innerHTML="Sorry! You have no friends";
						//document.getElementById("friendRequest").innerHTML='';
	                    document.getElementById("friendList").appendChild(temp);
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
	btn1.setAttribute("onmouseover","accept_mouseover(this)");
	btn1.setAttribute("onmouseout","accept_mouseout(this)");
	let btn2=document.createElement('button');
	btn2.setAttribute("onmouseover","reject_mouseover(this)");
	btn2.setAttribute("onmouseout","reject_mouseout(this)");
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
	btn.setAttribute("onmouseover","unfriend_mouseover(this)");
	btn.setAttribute("onmouseout","unfriend_mouseout(this)");
	div.appendChild(para);
	div.appendChild(para2);
	div.appendChild(btn);
	//console.log(div);
	return div;
}

//front end part

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


      //for buttons

//for btn-requests hover effect 
requests=document.getElementsByClassName('btn-requests')[0];
//for expanding btn-requests on hover
  requests.addEventListener('mouseover',()=>{
  requests.classList.remove('btn-requests-in-active');
  requests.classList.add('btn-requests-active');
  });

//for contracting btn-requests on hover
 requests.addEventListener('mouseout',()=>{
 requests.classList.remove('btn-requests-active');
 requests.classList.add('btn-requests-in-active');
 });

//for btn-friends hover effect 
friends=document.getElementsByClassName('btn-friends')[0];
//for expanding btn-friends on hover
  friends.addEventListener('mouseover',()=>{
  friends.classList.remove('btn-friends-in-active');
  friends.classList.add('btn-friends-active');
  });

//for contracting btn-friends on hover
 friends.addEventListener('mouseout',()=>{
 friends.classList.remove('btn-friends-active');
 friends.classList.add('btn-friends-in-active');
 });
 
 


   //accept request button
//for expanding accept btn on hover
function accept_mouseover(ad)
{
    ad.classList.remove('btn-accept-in-active');
    ad.classList.add('btn-accept-active');
}

//for contracting accept btn on hover
function accept_mouseout(ad)
{
    ad.classList.remove('btn-accept-active');
    ad.classList.add('btn-accept-in-active');
}

//reject request button
//for expanding reject btn on hover
function reject_mouseover(ad)
{
    ad.classList.remove('btn-reject-in-active');
    ad.classList.add('btn-reject-active');
}

//for contracting reject btn on hover
function reject_mouseout(ad)
{
    ad.classList.remove('btn-reject-active');
    ad.classList.add('btn-reject-in-active');
}


              
          //unfriend btn
//for expanding unfriend btn on hover
function unfriend_mouseover(revo)
{
    revo.classList.remove('btn-unfriend-in-active');
    revo.classList.add('btn-unfriend-active');
}

//for contracting unfriend btn on hover
function unfriend_mouseout(revo)
{
    revo.classList.remove('btn-unfriend-active');
    revo.classList.add('btn-unfriend-in-active');
}



/*   old code
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
}*/
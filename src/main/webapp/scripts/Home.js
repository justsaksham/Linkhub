var inputSearchFriend=document.getElementById("inputSearchFriend");
var btnSearchFriend=document.getElementById("btnSearchFriend");
var PostList=[]
var sharedpost=[]
function sharedPostCollector(){
	database.ref("users/"+currentUser.uid+"/Shared").on('value',function(snapshot){
		if(snapshot.val()!=null){
			console.log(snapshot.val());
			sharedpost=snapshot.val();
		}
	});
}
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
		      loadPost();
		      sharedPostCollector()
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
function loadPost(){
	database.ref('Post').once('value').then((snapshot)=>{
		if(snapshot.val()!=null){
			let value=snapshot.val();
			snapshot.forEach((child)=>{
				if(child.val()!=null){
					let post=child.val();
				PostList.push(child.val());
				appendInView(post);
				}
			});
		}
		console.log(PostList)
	});
	var flag=0;
	var lastChild=null;
function appendInView(post){
	// use insertBefore method
	
	let div=postTemplate(post);
	if(flag==0){
		flag=1;
		lastChild=div;
		document.getElementById("postList").appendChild(div);
	}
	else{
		console.log(lastChild);
	document.getElementById("postList").insertBefore(div,lastChild);
	lastChild=div;
	}
}
function postTemplate(post){
		let div=document.createElement('div');
		div.setAttribute('class','post');
		let a=document.createElement('a');//for link
		a.setAttribute("href",post.link);
		a.innerHTML="Click to see"
		let div2=document.createElement('div');//carry date and owner name
		div2.setAttribute('class','postHeader');
		let p=document.createElement('p');//desc
		p.innerHTML=post.Description;
		let p1=document.createElement('p');//ownerName
		p1.innerHTML=post.Name
		let p2=document.createElement('p');//date\
		p2.innerHTML=post.Postdate
		let btn2=document.createElement('button');//share button
		btn2.innerHTML="Share";
		btn2.setAttribute('class','post');
		btn2.onclick=function(){
			console.log("btn clicked");
			let key=post.timeStamp+""+post.ownerId;
				if(!sharedpost.includes(key)){
					sharedpost.push(key);
			database.ref("users/"+currentUser.uid+"/Shared").set(
			sharedpost
			);
				}
				else{
					console.log("user already have same shared post")
				}
		}
		div2.appendChild(p1);
		div2.appendChild(p2);
		div.appendChild(div2);
		div.appendChild(a);
		div.appendChild(p);
		div.appendChild(btn2);
		console.log(div);
		return div;
}

}


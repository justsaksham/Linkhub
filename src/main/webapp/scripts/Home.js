//var inputSearchFriend=document.getElementById("inputSearchFriend");
//var btnSearchFriend=document.getElementById("btnSearchFriend");
//var PostList=[]
//var sharedpost=[]
//
//function sharedPostCollector(){
//	database.ref("users/"+currentUser.uid+"/Shared").on('value',function(snapshot){
//		if(snapshot.val()!=null){
//			console.log(snapshot.val());
//			sharedpost=snapshot.val();
//		}
//	});
//}
////function include(file) {
////  
////  var script  = document.createElement('script');
////  script.src  = file;
////  script.type = 'text/javascript';
////  script.defer = true;
////  
////  document.getElementsByTagName('head').item(0).appendChild(script);
////  
////}
//document.getElementById("logout").onclick=function(){
//	firebase.auth().signOut().then(() => {
//		 document.getElementById("logoutForm").submit();
//		}).catch((error) => {
//		 
//		});
//}
//
//btnSearchFriend.onclick=function(){
//	let value=inputSearchFriend.value;
//	if(value==='')
//	{
//		
//	}
//	else document.getElementById("form1").submit();
//}
//
//var firebaseConfig = {
//	    apiKey: "AIzaSyAZiaQmuDACRF06fIAAE44l_HlpGrZ4Q24",
//	    authDomain: "linkhub-a8589.firebaseapp.com",
//	    databaseURL: "https://linkhub-a8589.firebaseio.com",
//	    projectId: "linkhub-a8589",
//	    storageBucket: "linkhub-a8589.appspot.com",
//	    messagingSenderId: "38716836402",
//	    appId: "1:38716836402:web:eee2b7dbf3992586bf0a2b",
//	    measurementId: "G-JTYE8501D3"
//	  };
//	  // Initialize Firebase
//	  firebase.initializeApp(firebaseConfig);
//	  firebase.analytics();
//	  var auth=firebase.auth();
//	  var currentUser={};
//	  var database=firebase.database();
//	try{
//		  firebase.auth().onAuthStateChanged(function(user) {
//		   let newuser = firebase.auth().currentUser;
//		    if (newuser) {
//		      // User is signed in.
//		      currentUser=user;
//		      console.log('auth state changed');
//		      console.log('auth state changed'); 
//		     // loadPost();
//		     
//		      sharedPostCollector();
//		      update();
//		    } else {
//		      // No user is signed in.
//		    	currentUser={};
//		      console.log('user signout from onAuthStateChanged');
//		      
//		         }
//		  });
//
//		  }
//		  catch(err){
//		    console.log(err.code);
//		      console.log(err.message);
//		    //  console.log(firebase.auth());
//		  }
//function loadPost(){
//	database.ref('Post').once('value').then((snapshot)=>{
//		if(snapshot.val()!=null){
//			let value=snapshot.val();
//			snapshot.forEach((child)=>{
//				if(child.val()!=null){
//					let post=child.val();
//				PostList.push(child.val());
//				//appendInView(post);
//				}
//			});
//		}
//		console.log(PostList)
//	});
//}
//	var flag=0;
//	var lastChild=null;
//function appendInView(post){
//	// use insertBefore method
//	
//	let div=postTemplate(post);
//	if(flag==0){
//		flag=1;
//		lastChild=div;
//		document.getElementById("postList").appendChild(div);
//	}
//	else{
//		console.log(lastChild);
//	document.getElementById("postList").insertBefore(div,lastChild);
//	lastChild=div;
//	}
//}
//function postTemplate(post){
//		let div=document.createElement('div');
//		div.setAttribute('class','post');
//		let a=document.createElement('a');//for link
//		a.setAttribute("href",post.link);
//		a.setAttribute("target","_blank")
//		a.innerHTML="Click to see"
//		let div2=document.createElement('div');//carry date and owner name
//		div2.setAttribute('class','postHeader');
//		let p=document.createElement('p');//desc
//		p.innerHTML=post.Description;
//		let p1=document.createElement('p');//ownerName
//		p1.innerHTML=post.Name
//		let p2=document.createElement('p');//date\
//		p2.innerHTML=post.Postdate
//		let btn2=document.createElement('button');//share button
//		btn2.innerHTML="Share";
//		btn2.setAttribute('class','post');
//		btn2.onclick=function(){
//			console.log("btn clicked");
//			let key=post.timeStamp+""+post.ownerId;
//				if(!sharedpost.includes(key)){
//					sharedpost.push(key);
//			database.ref("users/"+currentUser.uid+"/Shared").set(
//			sharedpost
//			);
//				}
//				else{
//					console.log("user already have same shared post")
//				}
//		}
//		let key=post.timeStamp+""+post.ownerId;
//		if(sharedpost.includes(key)){
//			btn2.innerHTML="Added";
//		}
//		div2.appendChild(p1);
//		div2.appendChild(p2);
//		div.appendChild(div2);
//		div.appendChild(a);
//		div.appendChild(p);
//		div.appendChild(btn2);
//		console.log(div);
//		return div;
//}
//
//function update(){
//var PostAdded = firebase.database().ref('Post/');
//PostAdded.on('child_added', (data) => {
//	if(data.val()!=null){
//		let post=data.val();
//		appendInView(post);
//	}
//  });
//}
//
//
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
document.getElementById("logout").onclick=function(){
	firebase.auth().signOut().then(() => {
		 document.getElementById("logoutForm").submit();
		}).catch((error) => {
		 
		});
}

btnSearchFriend.onclick=function(){
	let yo=document.getElementById('inputSearchFriend').value;
	if(yo.length==0)
	{
		i=document.getElementById('friend-v');
		i.classList.add('now-visible');
	}
	else{	
	document.getElementById("form1").submit();
	}
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
		     // loadPost();
		      sharedPostCollector();
              update();
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
				//appendInView(post);
				}
			});
		}
		console.log(PostList)
	});
}
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
		div.classList.add('pop');
		let a=document.createElement('a');//for link
		a.setAttribute("href",post.link);
		a.setAttribute("target","_blank");
		a.classList.add('post-anchor');
		a.innerHTML="Click To See";
		let div2=document.createElement('div');//carry date and owner name
		div2.setAttribute('class','postHeader');
		let p=document.createElement('p');//desc
		p.innerHTML=post.Description;
		let p1=document.createElement('p');//ownerName
		p1.innerHTML=post.Name;
		let p2=document.createElement('p');//date\
		p2.innerHTML=post.Postdate;
		let btn2=document.createElement('button');//add button
		btn2.innerHTML="Add";
		// btn2.setAttribute('class','post');
		btn2.setAttribute('class','btn btn-add');
		btn2.setAttribute('onmouseover','add_mouseover(this)');
		btn2.setAttribute('onmouseout','add_mouseout(this)');
		btn2.onclick=function(){
			console.log("btn clicked");
			let key=post.timeStamp+""+post.ownerId;
				if(!sharedpost.includes(key)){
					sharedpost.push(key);
			database.ref("users/"+currentUser.uid+"/Shared").set(
			sharedpost
			).then(function(){
				
				btn2.removeAttribute('onmouseover');
				btn2.removeAttribute('onmouseout');
				btn2.classList.add('btn-added');
				btn2.innerHTML="Added";
			});
				}
				else{
					console.log("user already have same shared post");
				}
		}
		let key=post.timeStamp+""+post.ownerId;
		if(sharedpost.includes(key)){
			console.log("hello world");
			btn2.removeAttribute('onmouseover');
			btn2.removeAttribute('onmouseout');
			btn2.classList.add('btn-added');
		   btn2.innerHTML="Added";
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

function update(){
var PostAdded = firebase.database().ref('Post/');
PostAdded.on('child_added', (data) => {
	if(data.val()!=null){
		let post=data.val();
		appendInView(post);
	}
  });
}




//front end part

 //LinkHub logo
 function landing_page(){
    window.location.replace('./prototype.html');
}

  //for zooming link hub logo
function mouseover_LinkHub(logo)
{   
    logo.classList.remove('logo-in-active');
    logo.classList.add('logo-active');
}
 //for contracting link hub logo
 function mouseout_LinkHub(logo)
 {
	 logo.classList.remove('logo-active');
	 logo.classList.add('logo-in-active');
 }


 // 'search/input' bar
 input1=document.getElementById('inputSearchFriend');
 //for expanding search/input bar on hover
 input1.addEventListener('mouseover',()=>{
	   input1.classList.remove('inputSearchFriend-in-active');
	   input1.classList.add('inputSearchFriend-active');
 });
 //for contracting search/input bar on hover
 input1.addEventListener('mouseout',()=>{
	 input1.classList.remove('inputSearchFriend-active');
	 input1.classList.add('inputSearchFriend-in-active');
 });

 //add post button
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

function gone(e){
	let nextSibling = e.nextElementSibling;
	//console.log(nextSibling);
    if(nextSibling.classList.contains('now-visible'))
    {
	nextSibling.classList.remove('now-visible');
    }
}





/* old code

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
		     // loadPost();
		      update();
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
				//appendInView(post);
				}
			});
		}
		console.log(PostList)
	});
}
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
		a.setAttribute("target","_blank")
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

function update(){
var PostAdded = firebase.database().ref('Post/');
PostAdded.on('child_added', (data) => {
	if(data.val()!=null){
		let post=data.val();
		appendInView(post);
	}
  });
}
*/
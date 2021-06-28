//new code
var folderName=document.getElementById("folderName");
var UniqueName=document.getElementById("UniqueName");
var privatee=document.getElementById("private");
var pub =document.getElementById("public");
var btnSearchByMode=document.getElementById("btnSearchByMode");
var btnSearchByFolder=document.getElementById("btnSearchByFolder");
var btnSearchSubmit=document.getElementById("btnSearchSubmit");
//Search by MetaData
var metadata=[];
var folderdata=[];
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
console.log("heloo");
document.getElementById("btnSearchSubmit").onclick=function(){
	count=0;
	document.getElementById('postList').innerHTML="";
	let searchingTerm=UniqueName.value;

	SearchRelatedData(searchingTerm);
    postList_appear();
};
function loadData(){
	database.ref("/users/"+currentUser.uid+"/folders")
	.once("value").then((snapshot) => {
		
		  let folderArray = snapshot.val() ;
		  if(folderArray==null){
			  folderArray=[];
		  }
		  else{
			  folderArray=folderArray.key;
		  }
		  console.log(folderArray);
		  folderdata=folderArray;
			//storePostsInRespectiveTypes(obj,key);
			console.log(folderdata);
			LoadMetadata();
			setFolderdata();
		});
}
function LoadMetadata(){
	database.ref("/users/"+currentUser.uid+"/metadata")
	.once("value").then((snapshot) => {
		//document.getElementById("postList").innerHTML='';
		
		metadata=snapshot.val();
		if(metadata!=null)
			metadata=metadata.key;
		else metadata=[];
		console.log(metadata);
		setMetadata();
	});
}
function setMetadata(){
	let options='';
	for(let i=0;i<metadata.length;i++){
		options+="<option value="+metadata[i]+">";
	}
	document.getElementById("Metadata").innerHTML=options;
}
function setFolderdata(){
	let options='';
	for(let i=0;i<folderdata.length;i++){
		options+="<option value="+folderdata[i]+">";
		console.log(folderdata[i]);
	}
	document.getElementById("folders").innerHTML=options;
}

function SearchRelatedData(searchingTerm){
	let userId = firebase.auth().currentUser.uid;
	//userId="9iomc6XrJTXchoDwmjC4fuwON1m2";
	let isExist=false;
	for(let i=0;i<metadata.length;i++){
		if(metadata[i]===searchingTerm){
			isExist=true;
			break;
		}
	}
	console.log(isExist);
	console.log(searchingTerm);
	console.log(folderdata);
	if(isExist){
 firebase.database().ref('/users/'+userId+'/Search/' +searchingTerm).once('value').then((snapshot) => {
	 if(snapshot!=null){
		 document.getElementById("postList").innerHTML='';
			
	 var username = snapshot.val();
     
	 snapshot.forEach(function(childsnapshot){
		 
		 let val=childsnapshot.val();
		  console.log(val);
		 getPost(val.key);
	 });
         
	  console.log(username);
	 }
	});
	}
	else{
		emptyLists('no post exists for this metadata');
		console.log('no post exists for this metadata');
	}
	
}
btnSearchByFolder.onclick=function(){
	count=0;
	document.getElementById('postList').innerHTML="";
	let folderNameValue=folderName.value;
	getFolderdata(folderNameValue);
	console.log(folderNameValue);
	postList_appear();
}
function getFolderdata(folderNameValue){
	let exists=false;
	for(let i=0;i<folderdata.length;i++){
		if(folderdata[i]==folderNameValue){
			exists=true;
			break;
		}
	}
	if(exists){
		firebase.database().ref('/users/'+currentUser.uid+'/posts/' +folderNameValue).once('value').then((snapshot) => {
			 if(snapshot!=null){
				 document.getElementById("postList").innerHTML='';
					
			 var username = snapshot.val();
			 snapshot.forEach(function(childsnapshot){
			
				 let val=childsnapshot.val();
				  console.log(val);
				  getPost(val.key);
			 });
	}
});
	}
	else
	{
		emptyLists('no post exists for this folder');
		console.log('no post exists for this folder');
	}
}
btnGetSharedPost.onclick=function(){
	count=0;
	document.getElementById('postList').innerHTML="";
	fetchsharedPost();
	 postList_appear();
}
var sharedPost=[]
function fetchsharedPost(){
	database.ref("users/"+currentUser.uid+"/Shared").on('value',function(snapshot){
		if(snapshot.val()!=null){
			document.getElementById("postList").innerHTML='';
			sharedPost=snapshot.val();
		}
		if(sharedPost.length==0)
		{
			emptyLists("empty shared postList");
			console.log("empty shared postList");
		}
		for(let i=0;i<sharedPost.length;i++){
			getPost(sharedPost[i]);
		}
	});
}
var keyy="";
function getPost(key){
console.log(key);
	database.ref("Post/"+key).once('value').then(function(snapshot){
		//data based on metadata
		let post=snapshot.val()
		console.log(post);
		if(post!=null)
		DisplayPost(post);
		else{
			ErrorMapper(key);
		}
	}).catch(function(key){
			});
}
function ErrorMapper(key){
	console.log(key);
	database.ref("Private/"+currentUser.uid).once('value').then(function(snapshot){
			let flag=0;
		snapshot.forEach(function(childsnapshot){
			flag=1;
			let postlink=childsnapshot.val();
			//getPost(postlink.key);
			console.log(keyy);
			if(childsnapshot.key===key){
				DisplayPost(postlink);	
			}
		});
	});

}
btnSearchByMode.onclick=function(){
	count=0;
	document.getElementById('postList').innerHTML="";
	if(privatee.checked){
		//create fun for fetching
		fetchAllPrivateData();
	}
	else if(pub.checked){
		//create fun for fetching
		fetchAllPublicData();
	}
    postList_appear();
};
function fetchAllPublicData(){
	
	database.ref("users/"+currentUser.uid+"/Public").once('value').then(function(snapshot){
		document.getElementById("postList").innerHTML='';
		     let flag=0;
		snapshot.forEach(function(childsnapshot){
			flag=1;
			let postlink=childsnapshot.val();
			getPost(postlink.key);
			console.log(postlink.key);
		});
		if(flag==0)
		{
		emptyLists("no post for public mode");	
		console.log("no post for public mode");	
		}
		// use loop to fetch individually
	});
}
function fetchAllPrivateData(){
	database.ref("Private/"+currentUser.uid).once('value').then(function(snapshot){
		document.getElementById("postList").innerHTML='';
		
		let flag=0;
		snapshot.forEach(function(childsnapshot){
			flag=1;
			let postlink=childsnapshot.val();
			getPost(childsnapshot.key);
			console.log(postlink);
		});
		if(flag==0)
		{
			emptyLists("no post exists for private mode");
			console.log("no post exists for private mode");
		}
		// use loop to fetch individually
	});
}
try{
	  firebase.auth().onAuthStateChanged(function(user) {
	   let newuser = firebase.auth().currentUser;
	    if (newuser) {
	      // User is signed in.
	      currentUser=user;
	      console.log('auth state changed');
	      console.log('auth state changed'); 
	      loadData();
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
var count=0;
function DisplayPost(post){
	let div=templateForPost(post.link);
	++count;
	div.getElementsByTagName('p')[0].innerHTML='#'+count+'';
	div.getElementsByTagName('p')[1].innerHTML=post.Description;
	let str=""+post.link+"";
	let s="";
	for(i=0;i<35;i++)
	{
	if(str.charAt(i)==null)
		{break;}
	s=s+str.charAt(i);
	}
	div.getElementsByTagName('a')[0].innerHTML=s+"...";
	div.getElementsByTagName('a')[0].setAttribute('href',post.link);
	div.getElementsByTagName('a')[0].setAttribute('target',"_blank");
	//div.getElementsByTagName('a')[0].setAttribute('class','anchor');
	document.getElementById("postList").appendChild(div);
	var br=document.createElement('br');
	document.getElementById("postList").appendChild(br);
	  }
function templateForPost(url){
	let div=document.createElement('div');
	div.setAttribute('class','post');
	let a=document.createElement('a');//for link
	//let div2=document.createElement('div');//
	let p=document.createElement('p');//desc
	let p1=document.createElement('p');//ownerName
	//let btn1=document.createElement('button');//redirects to link
	let btn2=document.createElement('button');//share button
	btn2.innerHTML="view";
	btn2.classList.add('btn','btn-share');
	btn2.setAttribute('onmouseover','share_mouseover(this)');
	btn2.setAttribute('onmouseout','share_mouseout(this)');
	//btn2.innerHTML="<a target='_blank' href='"+url+"'>View<a>";
	btn2.setAttribute("onclick","window.open('"+url+"','_blank');");
	div.appendChild(p1);
	div.appendChild(a);
	div.appendChild(p);
	div.appendChild(btn2);
	console.log(div);
	return div;
}





//front end part starts here
    

    //LinkHub logo
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

//next btn
arrow=document.getElementsByClassName("arrow-div")[0];
arr=document.getElementsByClassName("arrow-symbol")[0];
//arrow circle on hover
arrow.addEventListener('mouseover',()=>{
    arrow.classList.remove('arrow-div-in-active');
    arrow.classList.add('arrow-div-active');
    
    //arrow symbol on hover
    arr.classList.remove('arrow-symbol-in-active');
    arr.classList.add('arrow-symbol-active');
});

//arrow circle out of hover
arrow.addEventListener('mouseout',()=>{
    arrow.classList.remove('arrow-div-active');
    arrow.classList.add('arrow-div-in-active');
    
    //arrow symbol out of hover
    arr.classList.remove('arrow-symbol-active');
    arr.classList.add('arrow-symbol-in-active');
});

//for PostList appear animation on clicking various search buttons
function postList_appear(){
	result=document.getElementById('postList');
	if(result.classList.contains('animate-postList'))
	{
		result.classList.add('regress-postList');
		
		result.classList.remove('animate-postList');
		
		setTimeout(()=>{
		   result.classList.remove('regress-postList');
		},500);
	}	
	setTimeout(()=>{
	result.classList.add("animate-postList");
	},100);
}


//for postList dissapear on clicking next button
function postList_dissapear(){
	result=document.getElementById('postList');	
  if(result.classList.contains('animate-postList'))
  {
	result.classList.add('regress-postList');
		
	result.classList.remove('animate-postList');
	
	setTimeout(()=>{
	   result.classList.remove('regress-postList');
	},500);
  }	
}


//search method part
nex=1;
f=0;
function next_method(){
	//for postlist dissapear
    postList_dissapear();
  if(nex==4)
  {
	nex=0;
	f=1;  
  }	
  ++nex;
  console.log("nex="+nex);
  pre=nex-1;
  if(nex==1){
   pre=4;
  }
  if(nex==1 & f!=1){
	next=document.getElementsByClassName('search_method_'+nex+'')[0];
	next.classList.add('animation_left_to_Center');
	next.classList.remove('animation_center_to_right');
  }
  else{
  prev=document.getElementsByClassName('search_method_'+pre+'')[0];
  prev.classList.add('animation_center_to_right');
  prev.classList.remove('animation_left_to_Center');
  next=document.getElementsByClassName('search_method_'+nex+'')[0];
  next.classList.add('animation_left_to_Center');
  next.classList.remove('animation_center_to_right');
  }
}


  // 'search/input' bar
  input1=document.getElementsByClassName('input')[0];
  //for expanding search/input bar on hover
  input1.addEventListener('mouseover',()=>{
  	  input1.classList.remove('input-in-active');
  	  input1.classList.add('input-active');
  });
  //for contracting search/input bar on hover
  input1.addEventListener('mouseout',()=>{
	  input1.classList.remove('input-active');
	  input1.classList.add('input-in-active');
  });


  input2=document.getElementsByClassName('input')[1];
  //for expanding search/input bar on hover
  input2.addEventListener('mouseover',()=>{
	input2.classList.remove('input2-in-active');
	input2.classList.add('input2-active');
  });

//for contracting search/input bar on hover
input2.addEventListener('mouseout',()=>{
  input2.classList.remove('input2-active');
  input2.classList.add('input2-in-active');
});
  


//for btn_search_mode hover effect 
btn1=document.getElementsByClassName('btn_search_mode')[0];
//for expanding btn_search_mode on hover
  btn1.addEventListener('mouseover',()=>{
  btn1.classList.remove('btn_search_mode-in-active');
  btn1.classList.add('btn_search_mode-active');
  });

//for contracting btn_search_mode on hover
 btn1.addEventListener('mouseout',()=>{
 btn1.classList.remove('btn_search_mode-active');
 btn1.classList.add('btn_search_mode-in-active');
 });

//for btn_search_folder hover effect 
btn2=document.getElementsByClassName('btn_search_folder')[0];
//for expanding btn_search_folder on hover
  btn2.addEventListener('mouseover',()=>{
  btn2.classList.remove('btn_search_folder-in-active');
  btn2.classList.add('btn_search_folder-active');
  });

//for contracting btn_search_folder on hover
  btn2.addEventListener('mouseout',()=>{
  btn2.classList.remove('btn_search_folder-active');
  btn2.classList.add('btn_search_folder-in-active');
 }); 

 //for btn_search_metadata hover effect 
btn3=document.getElementsByClassName('btn_search_metadata')[0];
//for expanding btn_search_metadata on hover
  btn3.addEventListener('mouseover',()=>{
  btn3.classList.remove('btn_search_metadata-in-active');
  btn3.classList.add('btn_search_metadata-active');
  });

//for contracting btn_search_metadata on hover
  btn3.addEventListener('mouseout',()=>{
  btn3.classList.remove('btn_search_metadata-active');
  btn3.classList.add('btn_search_metadata-in-active');
 }); 

 //for btn_search_sharedpost hover effect 
btn4=document.getElementsByClassName('btn_search_sharedpost')[0];
//for expanding btn_search_sharedpost on hover
  btn4.addEventListener('mouseover',()=>{
  btn4.classList.remove('btn_search_sharedpost-in-active');
  btn4.classList.add('btn_search_sharedpost-active');
  });

//for contracting btn_search_sharedpost on hover
  btn4.addEventListener('mouseout',()=>{
  btn4.classList.remove('btn_search_sharedpost-active');
  btn4.classList.add('btn_search_sharedpost-in-active');
 }); 


 
 //for btn-share hover effect 
//for expanding btn-share on hover
function share_mouseover(ad)
{
    ad.classList.remove('btn-share-in-active');
    ad.classList.add('btn-share-active');
}
//for contracting btn-share on hover-out
function share_mouseout(ad)
{	
    ad.classList.remove('btn-share-active');
    ad.classList.add('btn-share-in-active');
}


function emptyLists(msg){
	document.getElementById("postList").innerHTML='';
	let div=document.createElement('div');
	div.setAttribute('class','empty-part-div');
	let p=document.createElement('p');
	p.setAttribute('class','empty-part');
	p.innerHTML="Sorry! "+msg+"...";
	div.appendChild(p);
	document.getElementById("postList").appendChild(div);

}
//old code
/*var folderName=document.getElementById("folderName");
var UniqueName=document.getElementById("UniqueName");
var privatee=document.getElementById("private");
var pub =document.getElementById("public");
var btnSearchByMode=document.getElementById("btnSearchByMode");
var btnSearchByFolder=document.getElementById("btnSearchByFolder");
var btnSearchSubmit=document.getElementById("btnSearchSubmit");
//Search by MetaData
var metadata=[];
var folderdata=[];
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
console.log("heloo");
document.getElementById("btnSearchSubmit").onclick=function(){
	
	let searchingTerm=UniqueName.value;

	SearchRelatedData(searchingTerm);

};
function loadData(){
	database.ref("/users/"+currentUser.uid+"/folders")
	.once("value").then((snapshot) => {
		
		  let folderArray = snapshot.val() ;
		  if(folderArray==null){
			  folderArray=[];
		  }
		  else{
			  folderArray=folderArray.key;
		  }
		  console.log(folderArray);
		  folderdata=folderArray;
			//storePostsInRespectiveTypes(obj,key);
			console.log(folderdata);
			LoadMetadata();
			setFolderdata();
		});
}
function LoadMetadata(){
	database.ref("/users/"+currentUser.uid+"/metadata")
	.once("value").then((snapshot) => {
		//document.getElementById("postList").innerHTML='';
		
		metadata=snapshot.val();
		if(metadata!=null)
			metadata=metadata.key;
		else metadata=[];
		console.log(metadata);
		setMetadata();
	});
}
function setMetadata(){
	let options='';
	for(let i=0;i<metadata.length;i++){
		options+="<option value="+metadata[i]+">";
	}
	document.getElementById("Metadata").innerHTML=options;
}
function setFolderdata(){
	let options='';
	for(let i=0;i<folderdata.length;i++){
		options+="<option value="+folderdata[i]+">";
		console.log(folderdata[i]);
	}
	document.getElementById("folders").innerHTML=options;
}

function SearchRelatedData(searchingTerm){
	let userId = firebase.auth().currentUser.uid;
	//userId="9iomc6XrJTXchoDwmjC4fuwON1m2";
	let isExist=false;
	for(let i=0;i<metadata.length;i++){
		if(metadata[i]===searchingTerm){
			isExist=true;
			break;
		}
	}
	console.log(isExist);
	console.log(searchingTerm);
	console.log(folderdata);
	if(isExist){
 firebase.database().ref('/users/'+userId+'/Search/' +searchingTerm).once('value').then((snapshot) => {
	 if(snapshot!=null){
		 document.getElementById("postList").innerHTML='';
			
	 var username = snapshot.val();
	 snapshot.forEach(function(childsnapshot){
		 let val=childsnapshot.val();
		  console.log(val);
		 getPost(val.key);
	 });
	  console.log(username);
	 }
	});
	}
}
btnSearchByFolder.onclick=function(){
	let folderNameValue=folderName.value;
	getFolderdata(folderNameValue);
	console.log(folderNameValue);
}
function getFolderdata(folderNameValue){
	let exists=false;
	for(let i=0;i<folderdata.length;i++){
		if(folderdata[i]==folderNameValue){
			exists=true;
			break;
		}
	}
	if(exists){
		firebase.database().ref('/users/'+currentUser.uid+'/posts/' +folderNameValue).once('value').then((snapshot) => {
			 if(snapshot!=null){
				 document.getElementById("postList").innerHTML='';
					
			 var username = snapshot.val();
			 snapshot.forEach(function(childsnapshot){
				 let val=childsnapshot.val();
				  console.log(val);
				  getPost(val.key);
			 });

	}
});
	}
}
btnGetSharedPost.onclick=function(){
	fetchsharedPost();
}
var sharedPost=[]
function fetchsharedPost(){
	database.ref("users/"+currentUser.uid+"/Shared").on('value',function(snapshot){
		if(snapshot.val()!=null){
			document.getElementById("postList").innerHTML='';
			sharedPost=snapshot.val();
		}
		for(let i=0;i<sharedPost.length;i++){
			getPost(sharedPost[i]);
		}
	});
}
function getPost(key){
	database.ref("Post/"+key).once('value').then(function(snapshot){
		//data based on metadata
		let post=snapshot.val()
		console.log(post);
		DisplayPost(post);
	});
}
btnSearchByMode.onclick=function(){
	if(privatee.checked){
		//create fun for fetching
		fetchAllPrivateData();
	}
	else if(pub.checked){
		//create fun for fetching
		fetchAllPublicData();
	}
};
function fetchAllPublicData(){
	
	database.ref("users/"+currentUser.uid+"/Public").once('value').then(function(snapshot){
		document.getElementById("postList").innerHTML='';
		snapshot.forEach(function(childsnapshot){
			let postlink=childsnapshot.val();
			getPost(postlink.key);
			console.log(postlink.key);
		});
		// use loop to fetch individually
	});
}
function fetchAllPrivateData(){
	database.ref("Private/"+currentUser.uid).once('value').then(function(snapshot){
		document.getElementById("postList").innerHTML='';
		
		
		snapshot.forEach(function(childsnapshot){
			let postlink=childsnapshot.val();
			//getPost(postlink.key);
			console.log(postlink);
		});
		
		// use loop to fetch individually
	});
}
try{
	  firebase.auth().onAuthStateChanged(function(user) {
	   let newuser = firebase.auth().currentUser;
	    if (newuser) {
	      // User is signed in.
	      currentUser=user;
	      console.log('auth state changed');
	      console.log('auth state changed'); 
	      loadData();
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
function DisplayPost(post){
	let div=templateForPost();
	//div.getElementsByTagName('p')[0].innerHTML='ownerName';
	div.getElementsByTagName('p')[1].innerHTML=post.Description;
	div.getElementsByTagName('a')[0].innerHTML="click here to see";
	div.getElementsByTagName('a')[0].setAttribute('href',post.link);
	div.getElementsByTagName('a')[0].setAttribute('target',"_blank");
	
	document.getElementById("postList").appendChild(div);
	  }
function templateForPost(){
	let div=document.createElement('div');
	div.setAttribute('class','post');
	let a=document.createElement('a');//for link
	//let div2=document.createElement('div');//
	let p=document.createElement('p');//desc
	let p1=document.createElement('p');//ownerName
	//let btn1=document.createElement('button');//redirects to link
	let btn2=document.createElement('button');//share button
	btn2.innerHTML="Share";
	div.appendChild(p1);
	div.appendChild(a);
	div.appendChild(p);
	//div.appendChild(btn2);
	console.log(div);
	return div;
}*/


//6 animation states (don't delete it saksham)

// animation: downnow .65s ease-out both 2.6s;
// animation: downnow .65s ease-out both 3.25s;
// animation: log-up 0.5s ease-out backwards 2.6s;
// animation: up1 0.7s ease-out 2.2s both;
// animation: up2 0.9s ease-out 2.3s both;
// animation: up2 0.9s ease-out 2.4s both;
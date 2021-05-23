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
}
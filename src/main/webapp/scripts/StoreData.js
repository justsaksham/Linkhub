function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
//include("scripts/MainJs.js");
// all folder types like audio and video
var folderdata=[];
var metadata=[];
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
//document.getElementById("foundType").addEventListener("change",ValueChecker);
//
//function ValueChecker(){
//	if(document.getElementById("foundType").checked){
//		console.log("checked");
//		document.getElementById("dataType").disabled=true;
//		document.getElementById("typefolders").disabled=false;
//
//	}
//	else{
//		document.getElementById("typefolders").disabled=true;
//		document.getElementById("dataType").disabled=false;
//		console.log("unchecked");
//	}
//}

document.getElementById("btnStoreUserdata").onclick=function(){
//1	
	
	
	
	
	let link=document.getElementById("link").value;
	let folder=document.getElementById("typefolders").value;
	//let foundType=document.getElementById("foundType").checked;
	//let dataType=document.getElementById("dataType").value;
	let metaData=document.getElementById("metaData").value;
	let publicmode=document.getElementById("public").checked;
	let privatemode=document.getElementById("private").checked;

	let comment=document.getElementById("comment").value;
//	let folder=null;
//	if(foundType==true){
//		folder=typefolders;
//	}
//	else{
//		folder=dataType;
//	}
	let mode="";
	if(publicmode){
		mode="public";
	}
	else{
		mode="private";
	}
	let date = new Date();
	const timeStamp=date.getTime();
	
	let obj={
		ownerId:currentUser.uid,
		link:link,
		folder:folder,
		metaData:metaData,
		mode:mode,
		Description:comment,
		Postdate:date.toString(),
		timeStamp:timeStamp,
		email:currentUser.email
	};
	console.log(timeStamp+""+currentUser.uid);
	const key=timeStamp+""+currentUser.uid
	console.log(obj);
	storePostData(obj,key,timeStamp);
}


function storePostData(obj,key,timeStamp){
	//2
	
	
	if(obj.mode==='public'){
	database.ref("Post/"+key).set(obj).then(function(){
		//ResetFields();
		//folderdata=value;
		
		database.ref("users/"+currentUser.uid+"/Public").push().
		set({key:key}).then(function(){
			console.log("Post is saved");
			FetchFolderInsidePosts(obj,key);
		
		})
		
		
		}).catch(function(){
		//write error statements
		console.log("error during storing in storePostData");
	});
	}
	else{
		database.ref("Private/"+currentUser.uid+"/"+key).set(obj).then(function(){
			//ResetFields();
			//folderdata=value;
			console.log("Post is saved");
			FetchFolderInsidePosts(obj,key);
		}).catch(function(){
			//write error statements
			console.log("error during storing in storePostData");
		});
			
	}
	
}

//for getting folders type store by users itself
function FetchFolderInsidePosts(obj,key){
	//3
	console.log("hello fetch");
	database.ref("/users/"+currentUser.uid+"/folders")
	.once("value").then((snapshot) => {
		let folderArray = snapshot.val() ;
		  if(folderArray==null){
			  folderArray=[];
		  }
		  else{
			  folderArray=folderArray.key;
		  }
		console.log("hello");
		  console.log(folderArray);
		  folderdata=folderArray;
			storePostsInRespectiveTypes(obj,key);
			console.log(folderdata);
		});
}




// here progress bar is required


function storePostsInRespectiveTypes(object,key){
	// for creating folders
	//4
	database.ref("users/"+currentUser.uid+"/posts/"+object.folder)
	.push().set({key}).then(function(){
			//searching metadata
			console.log("folder is created");
			setSearchingBasedOnMetadata(key,object);
			console.log(typeof folderdata);
			if(folderdata!=null){
			if(!isFolderExists(folderdata,object.folder)){
				folderdata.push(object.folder);
			}
			}
			else{
				folderdata=[];
				folderdata.push(object.folder);
			}
			displayDataFolderList();
			console.log(folderdata);
			return;
		});
}
function displayDataFolderList(){
	//5
	//space problem
	let options='';
	for(let i=0;i<folderdata.length;i++){
	options+="<option value="+folderdata[i]+">"+folderdata[i]+"</option>";
	//document.getElementById("typefolders").innerHTML=i;
	}
	// will complete in future;
	document.getElementById("folders").innerHTML=options;
	//let folderdata=FetchFolderInsidePosts();
	
}

function LoadMetadata(){
	database.ref("/users/"+currentUser.uid+"/metadata")
	.once("value").then((snapshot) => {
		metadata=snapshot.val();
		if(metadata!=null)
			metadata=metadata.key;
		console.log(metadata);
	});
}


function store(folderArray){
	
}









function StoreFolderArrayType(array){
	//7
	database.ref("users/"+currentUser.uid+"/folders").set({
		key:array
	}).then(function(){
		
	});
}



function isFolderExists(array,value){
	//includes is used to search
	return array.includes(value);
}
function ResetFields(){
	// reset form for next upload
}
function setSearchingBasedOnMetadata(key,object){
//6
	
	
	let array=[];
	database.ref("users/"+currentUser.uid+"/Search/"+object.metaData)
	.push().set({key}).then(function(){
		StoreFolderArrayType(folderdata);
		console.log("metaData stored");
		if(metadata==null)
			metadata=[]
		metadata.push(object.metaData);
		database.ref("users/"+currentUser.uid+"/metadata").set(
				{key : metadata}).then(function(){
					console.log(metadata);
						});
	});
	
}
function loadData(){
	console.log("hello");
	
	console.log(database);
	database.ref("/users/"+currentUser.uid+"/folders")
	.once("value").then((snapshot) => {
		let folderArray = snapshot.val() ;
		  if(folderArray==null){
			  folderArray=[];
		  }
		  else{
			  folderArray=folderArray.key;
		  }
		  console.log("hello");
		  console.log(folderArray);
		  folderdata=folderArray;
			//storePostsInRespectiveTypes(obj,key);
			console.log(folderdata);
			LoadMetadata();
			displayDataFolderList();
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


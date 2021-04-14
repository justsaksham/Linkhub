function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
include("scripts/MainJs.js");

document.getElementById("foundType").addEventListener("change",ValueChecker);

function ValueChecker(){
	if(document.getElementById("foundType").checked){
		console.log("checked");
		document.getElementById("dataType").disabled=true;
		document.getElementById("typefolders").disabled=false;

	}
	else{
		document.getElementById("typefolders").disabled=true;
		document.getElementById("dataType").disabled=false;
		console.log("unchecked");
	}
}

function displayDataFolderList(array){
	let i="<option value="+"saksham"+">"+"saksham"+"</option>";
	document.getElementById("typefolders").innerHTML=i;
	
	// will complete in future;
	let folderstypes=FetchFolderInsidePosts();
	
}
document.getElementById("btnStoreUserdata").onclick=function(){
	
	
	
	
	
	let link=document.getElementById("link").value;
	let typefolders=document.getElementById("typefolders").value;
	let foundType=document.getElementById("foundType").checked;
	let dataType=document.getElementById("dataType").value;
	let metaData=document.getElementById("metaData").value;
	let publicmode=document.getElementById("public").checked;
	let privatemode=document.getElementById("private").checked;

	let comment=document.getElementById("comment").value;
	let folder=null;
	if(foundType==true){
		folder=typefolders;
	}
	else{
		folder=dataType;
	}
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

function StoreMetadata(){
	
}
// for getting folders type store by users itself
function FetchFolderInsidePosts(){
	database.ref("users/"+currentUser.uid+"/folders")
	.once("value").then((snapshot) => {
		  let username = snapshot.val() ;
		  console.log(username);
		  return;
		});
}




function storePostData(obj,key,timeStamp){
	database.ref("Post/"+key).set(obj).then(function(){
		//ResetFields();
		storePostsInRespectiveTypes(obj,key);
		console.log("Post is saved");
		
	}).catch(function(){
		//write error statements
	})
}
function storePostsInRespectiveTypes(object,key){
	// for creating folders
	database.ref("users/"+currentUser.uid+"/posts/"+object.folder)
	.push().set({key}).then(function(){
			//searching metadata
			console.log("folder is created");
			setSearchingBasedOnMetadata(key,object);
			return;
		});
}
function ResetFields(){
	// reset form for next upload
}
function setSearchingBasedOnMetadata(key,object){
	database.ref("users/"+currentUser.uid+"/Search/"+object.metaData)
	.push().set({key}).then(function(){
				console.log("metaData stored");
				return;
			});
	
}



function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
include("scripts/MainJs.js");
console.log("heloo");
document.getElementById("btnSearchSubmit").onclick=function(){
	console.log("hello");
	let searchingTerm=document.getElementById("searchItem").value;
	console.log("hello");

	SearchRelatedData(searchingTerm);
	console.log("hello");
};
function SearchRelatedData(searchingTerm){
	let userId = firebase.auth().currentUser.uid;
	//userId="9iomc6XrJTXchoDwmjC4fuwON1m2";
 firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
	  var username = snapshot.val() ;
	  console.log(username);
	});
}
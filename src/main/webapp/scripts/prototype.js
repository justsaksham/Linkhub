login=document.getElementsByClassName("btn-login")[0];

//login button on hover
login.addEventListener('mouseover',()=>{
    login.classList.remove('login-in-active');
    login.classList.add('active');
});

//login button out of hover
login.addEventListener('mouseout',()=>{
    login.classList.remove('active');
    login.classList.add('login-in-active');
});

register=document.getElementsByClassName("btn-register")[0];
//register button on hover
register.addEventListener('mouseover',()=>{
    register.classList.remove('register-in-active');
    register.classList.add('register-active');
});

//register button out of hover
register.addEventListener('mouseout',()=>{
    register.classList.remove('register-active');
    register.classList.add('register-in-active');
});

contact=document.getElementsByClassName("btn-contact")[0];
//contact button on hover
contact.addEventListener('mouseover',()=>{
    contact.classList.remove('contact-in-active');
    contact.classList.add('active');
});

//contact button out of hover
contact.addEventListener('mouseout',()=>{
    contact.classList.remove('active');
    contact.classList.add('contact-in-active');
});



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

setTimeout(()=>{
    arrow.classList.remove('arrow-div-in-active');
    arrow.classList.add('arrow-div-active2');
    
    //arrow symbol on hover
    arr.classList.remove('arrow-symbol-in-active');
    arr.classList.add('arrow-symbol-active');
},1900);

setTimeout(Replace,5000)
function Replace(){
	console.log("hello");
	window.location.replace("index.jsp");
}






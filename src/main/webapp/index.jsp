<!DOCTYPE html>
<html>
<head>
	<title>How to Design Login & Registration Form Transition</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="styles/style.css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap" rel="stylesheet">
  <script
  src="https://code.jquery.com/jquery-2.2.4.js"
  integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
  crossorigin="anonymous"></script>
</head>
<body>
<%
response.setHeader("cache-control","no-cache,no-store,must-revalidate");
String str=(String)session.getAttribute("login");
if(str!=null){
	// /hi is url for NewFile
	response.sendRedirect("Home");
	//session.removeAttribute("login");
}

%>
  <div class="cont">
    <div class="form sign-in">
      <h2>Sign In</h2>
      <form action="abc.htm" id="form1">
      <span id="InvalidEmail" ></span>
      <label>
        <span>Email Address</span>
        <input type="email" name="email" id="inputEmail" required>
        <span id="emailError" class="error"></span>
      </label>
      
      <label>
        <span>Password</span>
        <input type="password" name="password" id="inputPassword" required>
         <span id="passwordError" class="error"></span>
      </label>
      
      <input type="hidden" value=" " id="hiddenValue" name="hiddenValue1" required>

      <button class="submit" type="button" id="login_submit" form="form1">Sign In</button>
      <span id="loginError" class="errorLogin"></span>
      </form>
     <a href="./ForgetPassword.html"> <p class="forgot-pass">Forgot Password ?</p>
      </a>
      <div class="social-media">
       <!--  <ul>
          <li><img src="images/facebook.png"></li>
          <li><img src="images/twitter.png"></li>
          <li><img src="images/linkedin.png"></li>
          <li><img src="images/instagram.png"></li>
        </ul>
         -->
      </div>
    </div>

    <div class="sub-cont">
      <div class="img">
        <div class="img-text m-up">
          <h2>New here?</h2>
          <p>Sign up and discover great amount of new opportunities!</p>
        </div>
        <div class="img-text m-in">
          <h2>One of us?</h2>
          <p>If you already has an account, just sign in. We've missed you!</p>
        </div>
        <div class="img-btn">
          <span class="m-up">Sign Up</span>
          <span class="m-in">Sign In</span>
        </div>
      </div>
      <div class="form sign-up">
        <h2>Sign Up</h2>
        <form action="abc.htm" id="form2">
                <label>
          <span>Name</span>
          <input type="text" id="inputRegisterName" required>
           <span id="UserNameError" class="error"></span>
        </label>
        <label>
          <span>Email</span>
          <input type="email" id="inputRegisterEmail" required>
           <span id="RegisterEmailError" class="error"></span>
        </label>
        <label>
          <span>Password</span>
          <input type="password" id="inputRegisterPassword" required>
           <span id="RegisterPasswordError" class="error"></span>
        </label>
        <label>
          <span>Confirm Password</span>
          <input type="password" id="inputRegisterConfirmPassword" required>
       	<span id="RegisterConfirmPasswordError" class="error"></span>
        
        </label>
        <input type="hidden" value=" " id="hiddenValue2" name="HiddenValue">
      <button type="button" class="submit" id="Sign_up">Sign Up Now</button>
      <span id="signUpError" class="errorSignUp"></span>
      </div>
    </div>
    </form>
  </div>
  <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 /*
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
  */
</script>
<script type="text/javascript" src="scripts/script.js"></script>
</body>
</html>
<!-- $("#Sign_up").click(function(){
  console.log("Sign up with new User");
}); -->
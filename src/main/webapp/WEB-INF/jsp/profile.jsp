<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

</head>
<body>
<div>
<p>
<p>
Username: <span id="UserName"></span></p>
<p>
Firstname: <span id="FirstName"></span></p>
<p>
Lastname: <span id="LastName"></span></p>
<p>
Gender: <span id="Gender"></span></p>
<p>
Contact Email Address: <span id="Email"></span></p>
<p>
address: <span id="Address"></span></p></p>
<button id="btnChangePasswordView">Change Password</button>
<button id="btnUpdateDetailsView">Update Details</button>

</div>
<div >
<div id="changePassword" >
New password:
<input type="password" id="newPassword"/>
<br>
Change password:
<input type="password" id="confirmNewPassword"/>
<br>
<button id="btnChangePassword">change password</button>
</div>
<div id="changeDetails">
<span>
FirstName:</span><input type="text" id="firstName"/>
<br>
<span>
LastName:</span><input type="text" id="lastName"/>
<br>
Gender:
Male<input type="radio" id="male" name="Gender" value="male"/>
Female<input type="radio" id="female" name="Gender" value="female"/>
<br>
Contact email address:<input type="email" id="email" autocomplete="off"/>
<br>
address:<input type="text" id="address"/>
<br>
<button id="btnUpdateDetails">Update</button>
</div>
</div>
</body>

<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
  
<script type="text/javascript" src="scripts/profile.js"></script>
</html> --%><%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>profile</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
<link href="styles/profile.css" rel="stylesheet" type="text/css">
</head>

<body>
    <video autoplay muted loop id="myVideo">
      <source src="images/unicorn-ya-a494a59b.mp4" type="video/mp4">
    </video>    
<div class='entire-content'>
  <div class='LinkHub-div' onmouseover='mouseover_LinkHub(this)' onmouseout='mouseout_LinkHub(this)'>
    <h1 class="LinkHub" onclick="landing_page()">#Link<span class="light">Hub</span></h1>
  </div> 
<div class="visible-div">

    <h1 class="profile-heading">Profile</h1>    

    <p class="profile-values">
       <p>Username <span style="color:white;">~</span> <span id="UserName" class="values"></span></p>
       <div class="line-break"></div>
       <p>First Name <span style="color:white;">~</span> <span id="FirstName" class="values"></span></p>
       <div class="line-break"></div>
       <p>Last Name <span style="color:white;">~</span> <span id="LastName" class="values"></span></p>
       <div class="line-break"></div>
       <p>Gender <span style="color:white;">~</span> <span id="Gender" class="values"></span></p>
       <div class="line-break"></div>
       <p>Contact Email <span style="color:white;">~</span> <span id="Email" class="values"></span></p>
       <div class="line-break"></div>
       <p>Address <span style="color:white;">~</span> <span id="Address" class="values"></span></p>
    </p>

    <div class="button-box">
       <button id="btnChangePasswordView" class="btn btn-pass">Change Password</button>
        <h1 class="slash">|</h1>
       <button id="btnUpdateDetailsView" class="btn btn-detail">Update Details</button>
    </div>

</div>

<div class="hidden-div">
      <div id="changePassword" >

           <div class="common-div">
            <p>New password <span style="color:white;">~</span></p>
            <input onclick="gone(this)" type="password" id="newPassword"  class="input" placeholder=""/>
            <div class="validate" id="new-p-v"><span class="validate-span">Required</span></div>
            <div class="validate" id="short-p"><span class="validate-span">Must_Be_Greater_Than_4_Characters</span></div>
           </div>
           
           <div class="common-div">
            <p>Confirm password <span style="color:white;">~</span></p>
            <input onclick="gone(this)" type="password" id="confirmNewPassword"  class="input"/>
            <div class="validate" id="confirm-p-v"><span class="validate-span">Required</span></div>
            <div class="validate" id="p-not-match"><span class="validate-span">Password_Unmatch</span></div>
           </div>
       
           <button id="btnChangePassword" class="btn btn-change">Change</button>

      </div>

      <div id="changeDetails">
        <div class="common-2-div"><p>First Name <span style="color:white;">~</span></p><input onclick="gone(this)" type="text" id="firstName" class="input"/><div class="validate" id="first-n-v"><span class="validate-span">Required</span></div></div>
        
        <div class="common-2-div"><p>Last Name <span style="color:white;">~</span></p><input onclick="gone(this)" type="text" id="lastName" class="input"/><div class="validate" id="last-n-v"><span class="validate-span">Required</span></div></div>
        
        <div class="gender-div">  <p>Gender <span style="color:white;">~</span></p> <p class="radio-part"><input onclick="gone(this)" type="radio" id="male" name="Gender" value="male" class="radio-input"/><label for="male" class="radio-label"><span class="radio-circle"></span>Male</label><input onclick="gone(this)" type="radio" id="female" name="Gender" class="radio-input" value="female"/><label for="female" class="radio-label"><span class="radio-circle"></span>Female</label></p><div class="validate" id="gender-v"><span class="validate-span">Required</span></div></div>
        
        <div class="common-2-div"><p>Contact Email <span style="color:white;">~</span></p><input onclick="gone(this)" type="email" id="email" autocomplete="off" placeholder="@gmail.com" class="input"/><div class="validate" id="email-v"><span class="validate-span">Invalid_Email</span></div></div>
        
        <div class="common-2-div"><p>Address <span style="color:white;">~</span></p><input onclick="gone(this)" type="text" id="address" class="input" /><div class="validate" id="address-v"><span class="validate-span">Required</span></div></div>
        
        <button id="btnUpdateDetails" class="btn btn-update">Update</button>
      </div>
</div>

</div><!--entire content ends here-->
</body>
       
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
        
<script type="text/javascript" src="scripts/profile.js"></script>
</html>
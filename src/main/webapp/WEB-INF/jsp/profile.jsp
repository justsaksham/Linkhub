<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
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
</html>
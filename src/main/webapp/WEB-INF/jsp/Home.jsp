<%@page import="com.google.firebase.messaging.SendResponse"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<html>
  <head>
    <meta charset="utf-8">
    <title>Responsive Navigation Menu</title>
    <link rel="stylesheet" href="styles/HomeStyle.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
  <%
  response.setHeader("cache-control","no-cache,no-store,must-revalidate");
  String str=(String)session.getAttribute("login");
  if(str==null){
  	
  	response.sendRedirect("index.jsp");
  	response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
      response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
      response.setDateHeader("Expires", 0);
  }

  
  %>
    <nav>
      <div class="logo">LinkHub</div>
      <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
      <form action="searchFriend" id="form1">
      <li>
      <input type="text" id="inputSearchFriend" name="inputSearchFriend"/>
	  </li>
	  </form>
       <li>
       <Button id="btnSearchFriend">Search</Button>
       </li>
       
        <li><a class="active" href="#">Home</a></li>
        <li><a href="storeData.jsp">Store</a></li>
        <li><a href="Search.jsp">Search</a></li>
        <li><a href="friend.html">Friends</a></li>
        <li><a href="helloWorld.html">profile</a></li>
        <li><a href="#" id="logout">logout</a></li>
      </ul>
    </nav>
    <div class="content">
      <div>Responsive Navigation Menu Bar Design</div>
      <div>using only HTML & CSS</div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
</div>

<div class="row">
  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ddd;">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>

  </body>
  <div class="testing">saksham</div>
  <div class="testing">saksham</div>
  <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
  <form action="Logout.jsp" id="logoutForm">
  <input type="hidden" id="hiddenValue">
  <input type="hidden" id="hiddenValue2">
  
  </form>
  <script type="text/javascript" src="scripts/Home.js">
    

  

//grid view
// function gridView() {
//   for (i = 0; i < elements.length; i++) {
//     elements[i].style.width = "50%";
//   }
// }
  </script>
</html>

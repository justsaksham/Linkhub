<%@page import="com.google.firebase.messaging.SendResponse"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<html>
  <head>
    <meta charset="utf-8">
    <title>Responsive Navigation Menu</title>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/HomeStyle.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script>history.scrollRestoration = "manual"</script>
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
  
    <!-- <video autoplay muted loop id="myVideo">
      <source src="img/mitten-3ade6d6b.mp4" type="video/mp4">
    </video> -->

    <nav>
      <div class="logo" onmouseover='mouseover_LinkHub(this)' onmouseout='mouseout_LinkHub(this)' onclick="landing_page()">#Link<span class="hub-part">Hub</span></div>
      <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
      <form action="searchFriend" id="form1">
      <li>
      <input onclick="gone(this)" type="text" id="inputSearchFriend" class="inputSearchFriend" name="inputSearchFriend" placeholder="Search A Friend"/>
	  <div class="validate" id="friend-v"><span class="validate-span">Required</span></div>
	  </li>
	  </form>
       <li>
       <Button id="btnSearchFriend"><img src="images/outline_search_white_36dp.png" class="search_icon"></Button>
       </li>
       
        <li><a class="active" href="#">Home</a></li>
        <li><a href="storeData.jsp">Store</a></li>
        <li><a href="Search.jsp">Search</a></li>
        <li><a href="friend.html">Friends</a></li>
        <li><a href="profile.jsp">Profile</a></li>
        <li><a href="#" id="logout">Logout</a></li>
      </ul>
    </nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div id="postList">
  
</div>
 <form action="Logout.jsp" id="logoutForm">
  <input type="hidden" id="hiddenValue">
  <input type="hidden" id="hiddenValue2">
  
  </form>
 
  </body>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
  <script type="text/javascript" src="scripts/Home.js">
  </script>
</html>



<%-- old code 
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
        <li><a href="profile.jsp">profile</a></li>
        <li><a href="#" id="logout">logout</a></li>
      </ul>
    </nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div id="postList">
</div>
 <form action="Logout.jsp" id="logoutForm">
  <input type="hidden" id="hiddenValue">
  <input type="hidden" id="hiddenValue2">
  
  </form>
 
  </body>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
  <script type="text/javascript" src="scripts/Home.js">
  </script>
</html>
--%>
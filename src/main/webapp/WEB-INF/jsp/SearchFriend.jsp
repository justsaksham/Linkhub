<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%><!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Search Friend</title>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
<link href="styles/SearchFriend.css" rel="stylesheet" type="text/css">
</head>
<body>
 <div class="entire-page"> 
 <div class='LinkHub-div' onmouseover='mouseover_LinkHub(this)' onmouseout='mouseout_LinkHub(this)'><h1 class="LinkHub" onclick="landing_page()">#Link<span class="light">Hub</span></h1></div>      
 
 <div class="enter_name">
   <h1 class="enter-label">enter.</h1>    
 <input type="text" id="inputSearchFriend" class="input" required placeholder="name here" name="inputSearchFriend"/>
 <Button id="btnSearchFriend" class="btn btn-search" >Search</Button>  
 </div>

 <div class="results">

 <div id="AlreadySentFriendRequestList" class="alreadySentList">
     
 </div>

 <div id="friendList" class="notSentList">
    
 </div> <%--friendList ends here --%>
 <div><%--results div ends here--%>
 </div><%-- entire page ends here--%>  
</body>
<%-- .AlreadySentRequest{
background:red;
}
.friend{
background:green;
} --%>
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
  <%--<script src="scripts/SearchFriend.js"></script> --%>
<script>

<% String j=(String)request.getParameter("inputSearchFriend");%>
document.getElementById("inputSearchFriend").value="<%=j%>";
</script>
<script type="text/javascript" src="scripts/SearchFriend.js">
</script>
</html>
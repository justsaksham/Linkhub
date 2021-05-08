<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
 <input type="text" id="inputSearchFriend" name="inputSearchFriend"/>
 <Button id="btnSearchFriend" >Search</Button>  
 
 
 <div class="friendList">
 
 </div>
 
  
</body>

<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
<script>

<% String j=(String)request.getParameter("inputSearchFriend");%>
document.getElementById("inputSearchFriend").value="<%=j%>";
</script>
<script type="text/javascript" src="scripts/SearchFriend.js">
</script>
</html>
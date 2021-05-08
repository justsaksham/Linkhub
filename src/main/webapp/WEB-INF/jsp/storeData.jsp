<%@page import="com.google.firebase.messaging.SendResponse"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<title></title>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet"> 
    <link href="styles/StoreData.css" rel="stylesheet" type="text/css">
</head>
<body>
     
 <div class="heading">
  
 <div class="content-box">
	<form id="storeUserData" class="form" >
     <div class="store-div"><h2 class="store-heading">STORE LINK</h2></div>
	   <div class="link-div">
      <label for ="Link">Link</label>
      <input type="text" id="link" class="input" name="link" required >
  
    <div class="">
		 <label for="type">Type</label>
    <!-- 
  <select name="cars" id="typefolders" >
   </select>
   -->
    <input list="folders" name="browser" id="typefolders" class="input">
    
    <datalist id="folders">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">    
  </datalist>
  </div>
  <!-- 
  <input type="checkbox" id="foundType" name="foundType" value="true" checked="checked"><label>found type </label>
  <br>
  <label>Create list Type</label><input type="text" name="dataType" id="dataType" disabled="true">
  <br>
   -->
   
  <div class="metadata-div">
    <label>Meta Data</label><input type="text" name="metaData" id="metaData" class="meta-data input"><br>
    <label>Method Of Storing </label><input type="radio" id="public" class="method" name="mode" value="public" checked><label for="male">public</label>
    <input type="radio" id="private" class="method" name="mode" value="private"><label for="female">private</label>
	</div>
  <div class="descr-div">
	<div><label class="desc-label">Discription</label></div>
	<div><textarea name="comment" id="comment"  class="textarea"></textarea></div>
	</div>
  
 <input type="button" id="btnStoreUserdata" class="btn btn-store" value="Submit">
</div>
  
 </form>
 
</div>

<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
 
	<script type="text/javascript" src="scripts/StoreData.js"></script>
</body>
</html>
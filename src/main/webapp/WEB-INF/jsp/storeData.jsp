<%@page import="com.google.firebase.messaging.SendResponse"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div>
	<form id="storeUserData">
		<label for ="Link">Link</label><input type="text" id="link" name="link">
		<br>
		<label for="type">Type</label>

  <select name="cars" id="typefolders">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  
  <input type="checkbox" id="foundType" name="foundType" value="true" checked="checked"><label>found type </label>
  <br>
  <label>Create list Type</label><input type="text" name="dataType" id="dataType" disabled="true">
  <br>
  <label>Provide Meta Data</label><input type="text" name="metaData" id="metaData"><br>
  <label>Method of storing </label>
  <input type="radio" id="public" name="mode" value="public">
<label for="male">public</label> 
<input type="radio" id="private" name="mode" value="private">
<label for="female">private</label><br>
	</form>
	<label>link Discription</label><br>
	<textarea name="comment" id="comment" form="storeUserData"></textarea>
	<button id="btnStoreUserdata" >Store </button>
<div>
	 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
 
	<script type="text/javascript" src="scripts/StoreData.js"></script>
</body>
</html>
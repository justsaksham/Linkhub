<!DOCTYPE html>
<html>

<head>
  <title></title>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet">
  <link
    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:ital,wght@0,500;1,400&display=swap"
    rel="stylesheet">
  <link href="styles/StoreData.css" rel="stylesheet" type="text/css">
</head>

<body>
  <section class="start">
    <!-- <h1 class="start_heading">Loading ......</h1> -->
  
  <section class="wrapper">
    <div class="heading">
      <div class='LinkHub-div' onmouseover='mouseover_LinkHub(this)' onmouseout='mouseout_LinkHub(this)'><h1 class="LinkHub" onclick="landing_page()">#Link<span class="light">Hub</span></h1></div>
      <div class="content-box">

        <video autoplay muted loop id="myVideo">
          <source src="images/yumurta-ma-3a09b4d5.mp4" type="video/mp4">
      </video>
        <!-- <img src="pJReN4H1 (1).gif" type="gif" id="myVideo"> -->
        <form id="storeUserData" class="form">
          <div class="store-div">
            <h2 class="store-heading">STORE LINK</h2>
          </div>
          <div class="link-div">
            <label for="Link">Link</label>
            <input onclick="gone(this)" type="text" id="link" class="input" name="link" required placeholder="enter link to be stored">
            <div class="validate" id="link-v"><span class="validate-span">Required</span></div>
            <div class="">
              <label for="type">Type</label>
              <!-- 
       <select name="cars" id="typefolders" >
        </select>
        -->
              <input onclick="gone(this)" list="folders" placeholder="enter folder name" name="browser" id="typefolders" class="input">
              <div class="validate" id="type-v"><span class="validate-span">Required</span></div>
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
              <label>Meta Data</label><input onclick="gone(this)" placeholder="enter precise metadata for reference" type="text" name="metaData" id="metaData" class="meta-data input"><div class="validate" id="meta-v"><span class="validate-span">Required</span></div><br>
              <label>Method Of Storing </label><input type="radio" id="public" class="method radio-input" name="mode" value="public"
                checked><label for="public" class="radio-label"><span class="radio-circle"></span>public</label>
              <input type="radio" id="private" class="method radio-input" name="mode" value="private"><label
                for="private" class="radio-label"><span class="radio-circle"></span>private</label>
            </div>
            <div class="descr-div">
              <div><label class="desc-label">Discription</label></div>
              <div><textarea onclick="gone(this)" name="comment" id="comment" form="storeUserData" class="textarea" placeholder="provide a description"></textarea><div class="validate" id="desc-v"><span class="validate-span">Required</span></div></div>
            </div>
            <input id="btnStoreUserdata" type="button" value="STORE" class="btn btn-store">
        </form>
      </div>
    </div>

  </section>
</section>
  <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

  <script type="text/javascript" src="scripts/StoreData.js"></script>
</body>

</html>



<%--
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
      <br>
  	<span id="Lvalid" class="error"></span>
  </div>
    <div class="">
		 <label for="type">Type</label>
    <input list="folders" name="browser" id="typefolders" class="input">
     <br>
  	<span id="Fvalid" class="error"></span>
 
    <datalist id="folders">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">    
  </datalist>
  </div>
  <div class="metadata-div">
    <label>Meta Data</label><input type="text" name="metaData" id="metaData" class="meta-data input"><br>
     <br>
  	<span id="Mvalid" class="error"></span>
 </div>
 <div class="metadata-div">
    <label>Method Of Storing </label><input type="radio" id="public" class="method" name="mode" value="public" checked><label for="male">public</label>
    <input type="radio" id="private" class="method" name="mode" value="private"><label for="female">private</label>
	</div>
  <div class="descr-div">
	<div><label class="desc-label">Discription</label></div>
	<div><textarea name="comment" id="comment"  class="textarea"></textarea>
	 <br>
  	<span id="Cvalid" class="error"></span>
	</div>
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
--%>


<%-- <%@page import="com.google.firebase.messaging.SendResponse"%>
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
      <br>
  	<span id="Lvalid" class="error"></span>
  </div>
    <div class="">
		 <label for="type">Type</label>
    <input list="folders" name="browser" id="typefolders" class="input">
     <br>
  	<span id="Fvalid" class="error"></span>
 
    <datalist id="folders">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">    
  </datalist>
  </div>
  <div class="metadata-div">
    <label>Meta Data</label><input type="text" name="metaData" id="metaData" class="meta-data input"><br>
     <br>
  	<span id="Mvalid" class="error"></span>
 </div>
 <div class="metadata-div">
    <label>Method Of Storing </label><input type="radio" id="public" class="method" name="mode" value="public" checked><label for="male">public</label>
    <input type="radio" id="private" class="method" name="mode" value="private"><label for="female">private</label>
	</div>
  <div class="descr-div">
	<div><label class="desc-label">Discription</label></div>
	<div><textarea name="comment" id="comment"  class="textarea"></textarea>
	 <br>
  	<span id="Cvalid" class="error"></span>
	</div>
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
</html> --%>
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<style>
.post{
background:red;
}
</style>
<body>
search on the basis of mode<br>
<input type="radio" name="mode" id="private">Private<br>
<input type="radio" name="mode" id="public">Public<br>
<button id="btnSearchByMode">Search By Mode</button>
<br>
search all the data from selected folder
<br>
Folder Type:<br>
<input list="folders" name="browser" id="folderName">
  <datalist id="folders">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
<button id="btnSearchByFolder">Search By folder</button>

<br>

select on the basic of individual meta data<br>
MetaData:<br>
<input list="Metadata" name="browser" id="UniqueName">
  <datalist id="Metadata">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>

<button id="btnSearchSubmit">Search By Metadata</button>
<div id='postList'>

</div>
</body>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
<script type="text/javascript" src="scripts/Search.js"></script>
</html>
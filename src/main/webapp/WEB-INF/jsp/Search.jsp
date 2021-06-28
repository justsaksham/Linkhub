<!DOCTYPE html>
<html>
<head>
	<title>SearchLink</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,700;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:ital,wght@0,500;1,400&display=swap" rel="stylesheet">
<link href="styles/Search.css" rel="stylesheet" type="text/css">
</head>
<!-- <style>
.post{
background:red;
}
</style> -->
<body>
    <video autoplay muted loop id="myVideo">
        <source src="images/chef-3898975e.mp4" type="video/mp4">
    </video>
    <div class='LinkHub-div' onmouseover='mouseover_LinkHub(this)' onmouseout='mouseout_LinkHub(this)'>
        <h1 class="LinkHub" onclick="landing_page()">#Link<span class="light">Hub</span></h1>
    </div>
    <div class="btn-next-div">
      <h1 class="next">next</h1>
      <div class="arrow-div" onclick="next_method()">
        <h1 class="arrow-symbol" >&#8594</h1>
      </div>    
    </div> 
<div class="entire-content">
    <div class="search_method_1">
    <div class="heading-main1 animate1">Search <span style="">links</span> in Mode</div><br>
    <div class="pub-priv-div animate2"> <p class="radio-part"><input type="radio" name="mode" id="private" class="radio-input"/> <label for="private" class="radio-label"><span class="radio-circle"></span>Private</label><input type="radio" id="public" name="mode" class="radio-input" checked/><label for="public" class="radio-label"><span class="radio-circle"></span>Public</label></p></div>      
    <!-- <input type="radio" name="mode" id="private">Private<br>
    <input type="radio" name="mode" id="public">Public<br> -->
    <div class="btn-hover-effect-div animate3"><button id="btnSearchByMode" class="btn btn_search_mode">Search By Mode</button></div>
    </div> <!-- end of search_method_1 div-->
 
  <br>
    
     <div class="search_method_2">
       <div class="heading-main2">Fetch links from a Folder</div>
       <!-- <br> -->
       <!-- Folder Type:<br> -->
       <div class="folder-input-div"><input list="folders" name="browser" id="folderName" class="input" placeholder="      Enter folder type "></div>
       <datalist id="folders">
         <option value="Edge">
         <option value="Firefox">
         <option value="Chrome">
         <option value="Opera">
         <option value="Safari">
       </datalist>
       <div class="btn-search-folder-div"><button id="btnSearchByFolder" class="btn btn_search_folder">Fetch By folder</button></div>
     </div><!-- end of search_method_2 div-->
  
  <br>

      <div class="search_method_3">
        <div class="heading-main3">Search links using Meta Data</div>
        <!-- <br>  -->
        <!-- MetaData:<br> -->
        <div class="metadata-input-div"><input list="Metadata" name="browser" id="UniqueName" class="input input2" placeholder="      Enter Metadata "></div>
       <datalist id="Metadata">
       <option value="Edge">
       <option value="Firefox">
       <option value="Chrome">
       <option value="Opera">
       <option value="Safari">
       </datalist>

       <div class="btn-search-metadata-div"><button id="btnSearchSubmit" class="btn btn_search_metadata">Search By Metadata</button></div>
       </div><!-- end of search_method_3 div-->

  <br>
       
       <div class="search_method_4">
       <div class="heading-main4">See all links shared by you</div>
       <div class="btn-search-sharedPost-div"><button id="btnGetSharedPost" class="btn btn_search_sharedpost">Added Posts</button></div>
       </div><!-- end of search_4 div-->


   <div id='postList' class="postList-div">
    <!-- <div class="post">
    <p>Shubham</p>
    <a href="https://ideabakery.com/#s4" target="_blank" >click here to visit this link</a>
    <p>website hai ji</p>
    <button class="btn btn-share" onmouseover="share_mouseover(this)" onmouseout="share_mouseout(this)">Share</button>
    </div>
    <br>
    <div class="post">
      <p>Shubham</p>
      <a href="https://ideabakery.com/#s4" target="_blank" >click here to visit this link</a>
      <p>website hai ji</p>
      <button class="btn btn-share" onmouseover="share_mouseover(this)" onmouseout="share_mouseout(this)">Share</button>
    </div>
      <br>
      <div class="post">
        <p>Shubham</p>
        <a href="https://ideabakery.com/#s4" target="_blank" >click here to visit this link</a>
        <p>website hai ji</p>
        <button class="btn btn-share" onclick="copy(this)" onmouseover="share_mouseover(this)" onmouseout="share_mouseout(this)">Share</button>
      </div> -->
      
   </div><!--end of postList-->
 
</div><!--end of entire-content-->

</body>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js"></script>
 <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
<script type="text/javascript" src="scripts/Search.js"></script>
</html>

<%-- old code
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
<br>
<button id="btnGetSharedPost">Shared Post</button>

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
</html> --%>
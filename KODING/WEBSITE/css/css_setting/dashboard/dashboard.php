<?php 
	require 'view/top_body.php';
	require 'view/center_body.php';
 ?>

 	<style type="text/css">
		/* Style the tab */
.tab {
  overflow: hidden;
  background-color: #424242;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  width: 100%; 
  color: white;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: green;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: darkgreen;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
}

	</style>


<div class="contdash">
	<div class="barkanan w3-padding">
		<h2>Dashboard</h2>
		<br><br><br>
				
		<div class="tab">
		  <button class="tablinks" onclick="openCity(event, 'London')">London</button><br><br><br>
		  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button><br><br><br>
		  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button><br><br><br>
		</div>

	</div>

	<div class="barkiri w3-indigo w3-padding">
		<br><br><br><br>
		
		<div id="London" class="tabcontent">
		  <h3>London</h3>
		  <p>London is the capital city of England.</p>
		</div>

		<div id="Paris" class="tabcontent">
		  <h3>Paris</h3>
		  <p>Paris is the capital of France.</p> 
		</div>

		<div id="Tokyo" class="tabcontent">
		  <h3>Tokyo</h3>
		  <p>Tokyo is the capital of Japan.</p>
		</div>
	
	</div>
</div>




<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>
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
  /*float: left;*/
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
			<button class="tablinks" onclick="openCity(event, 'kdesa')">Key Desa</button>
			<button class="tablinks" onclick="openCity(event, 'dpenduduk')">Data penduduk</button>
		  	<button class="tablinks" onclick="openCity(event, 'apbdesin')">Data APBDES masuk</button>
		 	<button class="tablinks" onclick="openCity(event, 'apbdesout')">Data APBDES keluar</button> 	
		  	<button class="tablinks" onclick="openCity(event, 'layanan')">Data layanan</button>
		  	<button class="tablinks" onclick="openCity(event, 'inbox')">Inbox layanan</button>
		  	<button class="tablinks" onclick="openCity(event, 'artikel')">Artikel</button>
		</div>

	</div>

	<div class="barkiri w3-indigo w3-padding">
		<br><br><br><br>
		
		<div id="kdesa" class="tabcontent">
		  <h3>key desa</h3>
		  <p>k desa is the capital city of England.</p>
		</div>

		<div id="dpenduduk" class="tabcontent">
		  <h3>Data penduduk</h3>
		  <p>Paris is the capital of France.</p> 
		</div>

		<div id="apbdesin" class="tabcontent">
		  <h3>APBDES masuk</h3>
		  <p>Tokyo is the capital of Japan.</p>
		</div>

		<div id="apbdesout" class="tabcontent">
		  <h3>APBDES keluar</h3>
		  <p>London is the capital city of England.</p>
		</div>

		<div id="layanan" class="tabcontent">
		  <h3>Data Layanan</h3>
		  <p>Paris is the capital of France.</p> 
		</div>

		<div id="inbox" class="tabcontent">
		  <h3>Inbox layanan</h3>
		  <p>Tokyo is the capital of Japan.</p>
		</div>

		<div id="artikel" class="tabcontent">
		  <h3>Data Artikel</h3>
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
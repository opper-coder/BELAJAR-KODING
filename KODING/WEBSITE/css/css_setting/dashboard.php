<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle</title>
  <style>
    .wadah{
      display: flex;
    }
    .satu{
      flex: 1;
      background-color: darkblue;
      color: white;
      height: 300px;
    }
    .dua{
      flex: 3;
      background-color: lightblue;
      height: 300px;
    }
    .sembunyikan{
      display: none;
      transition: .5s;
    }
  </style>
</head>
<body>
  <div class="wadah">
    <div class="satu">Sidebar</div>
    <div class="dua">
      <button onclick="ubahMode()">Ubah</button>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing
    </p>
    </div>
  </div>
  <script>
    function ubahMode() {
      const ubah = document.getElementsByClassName("satu")[0]
      ubah.classList.toggle("sembunyikan");
    }
  </script>
</body>
</html>

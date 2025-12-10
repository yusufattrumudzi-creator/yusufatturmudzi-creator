<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>program cek bilangan ganjil atau genap</h2>

    <label for="angka">masukan angka:</label>
    <input type="number" id="angka" placeholder="contoh: 7">
    <button onclick="cekAngka()">cek</button>

    <p id="hasil"></p>
    <script>
        function cekAngka() {
            let angka = document.getElementById("angka").value;

            if (angka === "") {
                document.getElementById("hasil").innerHTML = "harap masukan angka!";
                return;
            }

            if (angka % 2 === 0) {
                document.getElementById("hasil").innerHTML = angka + " adalah bilangan Genap.";
            } else {
                document.getElementById("hasil").innerHTML = " adalah bilangan ganjil.";
            }
        }
    </script>
</body>
</html>

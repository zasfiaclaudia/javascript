let tblmenu = [
	{ idmenu: 1, idkategori: 1, menu: "Alpukat", gambar: "alpukat.jpg", harga: 5000 },
	{ idmenu: 2, idkategori: 1, menu: "Anggur", gambar: "anggur.jpg", harga: 3000 },
	{ idmenu: 3, idkategori: 2, menu: "Jeruk", gambar: "jeruk.jpg", harga: 3000 },
	{ idmenu: 4, idkategori: 2, menu: "Mangga", gambar: "mangga.jpg", harga: 7000 },
	{ idmenu: 5, idkategori: 3, menu: "Nanas", gambar: "nanas.jpg", harga: 5000 },
	{ idmenu: 6, idkategori: 3, menu: "Pepaya", gambar: "pepaya.jpg", harga: 7000 }
];

let tampil = tblmenu.map(function (kolom) {
	return `<div class="produk-content">
	<div class="image">
		<img src="images/${kolom.gambar}" alt="">
	</div>
	<div class="titel">
		<h2>${kolom.menu}</h2>
	</div>
	<div class="harga">
		<h2>Rp. ${kolom.harga}</h2>
	</div>
	<div class="btn-beli">
		<button data-idmenu=${kolom.idmenu}>Beli</button>
	</div>
</div>`;
});


let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
	btnbeli[index].onclick = function () {
		// console.log(btnbeli[index].dataset["idmenu"]);
		// cart.push(btnbeli[index].dataset["idmenu"])

		tblmenu.filter(function (a) {
			if(a.idmenu==btnbeli[index].dataset["idmenu"]){
				cart.push(a);

				console.log(cart);
			}
		})
	};

}

// console.log(cart);
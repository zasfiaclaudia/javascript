document.querySelector("#klik").addEventListener("click",tampil);

function tampil(params) {

	let url = "js/tblmenu.json";
	fetch(url)
	.then(function (res) {
		return res.json();
	})
	.then(function (data) {
		let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>Harga</th><th>Jenis</th>";

		data.forEach(element => {
			output += `<tr>
			<td>${element.menu}</td>
			<td>${element.harga}</td>
			<td>${element.jenis[0]}</td>
			</tr>`;	
		});
		output += "</table>";
		document.querySelector("#isi").innerHTML = output;
	})
	
}


// let tblmenu = [
// 	{

// 	"idmenu" : 1,
// 	"idkategori" : 1,
// 	"menu" : "Alpukat",
// 	"harga" : 5000,
// 	"jenis" : ["mentega","hass","kendil"],
// 	"stok" : true,
// 	"keterangan" : null

// },
// {

// 	"idmenu" : 2,
// 	"idkategori" : 1,
// 	"menu" : "Anggur",
// 	"harga" : 3000,
// 	"jenis" : ["merah","ungu"],
// 	"stok" : false,
// 	"keterangan" : null

// }
// ]

// console.log(tblmenu[0].menu);
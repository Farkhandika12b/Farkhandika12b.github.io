console.log("---------","Variabel dan Tipe Data","---------");
let angka1 = 10; // Mendefinisikan variabel dengan nilai 10
let teks = "Halo, dunia!"; // Mendefinisikan variabel dengan string
console.log(angka1); // Output: 10
console.log(teks);  // Output: Halo, dunia!
console.log("-------------------------"+'\n'+'\n');


console.log("-------","Operator","-------");
let a = 5;
let b = 2;
let hasilPenjumlahan = a + b; // Penjumlahan
let hasilPengurangan = a - b; // Pengurangan
let hasilPerkalian = a * b; // Perkalian
let hasilPembagian = a / b; // Pembagian
console.log(hasilPenjumlahan); // Output: 7
console.log(hasilPengurangan); // Output: 3
console.log(hasilPerkalian); // Output: 10
console.log(hasilPembagian); // Output: 2.5
console.log("-------------------------"+'\n'+'\n');


console.log("------","Struktur Pengendalian","------");
let angka2 = 10;
if (angka2 > 5) {
  console.log("Angka lebih besar dari 5");
} else {
  console.log("Angka kurang dari atau sama dengan 5");
}
console.log("-------------------------"+'\n'+'\n');


console.log("---------","Loops","---------");
for (let i = 0; i < 5; i++) {
    console.log("Iterasi ke-" + i);
  }
  console.log("-------------------------"+'\n'+'\n');


console.log("---------","Functions","---------");
function sapa(nama) {
    console.log("Halo, " + nama + "!");
  }
  
  sapa("John"); // Output: Halo, John!  
console.log("-------------------------"+'\n'+'\n');


console.log("---------","Array","---------");
let buah = ["apel", "jeruk", "mangga"];
console.log(buah[0]); // Output: apel
console.log(buah[2]); // Output: mangga
console.log("-------------------------"+'\n'+'\n');


console.log("---------","Objects","---------");
let person = {
    nama: "John Doe",
    umur: 30,
    pekerjaan: "Developer"
  };  
console.log("Nama: "+person.nama,'\n'+"Umur: "+person.umur,'\n'+"Pekerjaan: "+person.pekerjaan); // Output: John Doe  
console.log("-------------------------"+'\n'+'\n');


console.log("---------","String Methods","---------");
let teks1 = "Halo, dunia!";
let panjangTeks1 = teks1.length; // Mendapatkan panjang string
let hurufBesar = teks1.toUpperCase(); // Mengubah menjadi huruf besar
console.log(panjangTeks1); // Output: 12
console.log(hurufBesar); // Output: HALO, DUNIA!
console.log("-------------------------");
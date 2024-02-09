// Soal Nomor 1 
// 1. Write the length dan width of the rectangle
// 2. Search the formula how to find the area of rectangle
// 3. Display the result and finish with console.log
let panjang = 5;
let lebar = 3;
let luas = panjang * lebar
console.log(`luas persegi panjang = ${luas}`);

//Soal Nomor 2
// 1. Write the length dan width of the rectangle
// 2. Search the formula how to find the perimeter ofrectangle
// 3. Display the result and finish with console.log
let panjangPp = 5;
let lebarPp = 3;
let kelilingPp = 2 * panjangPp + 2 * lebarPp

console.log("Keliling Persegi panjang = " + kelilingPp);

//Soal Nomor 3
// 1. Write the circle radius (r)
// 2. Write the constant phi (3.14)
//3. Search the formula how to find diameter, circumference, and area of circle
//4. Display the result and finish with console.log

// Diameter
let r = 7;
d = 2 * r; 
 console.log(`panjang diameter = ${d}`);

 //Keliling Ligkaran
 const phi = 3.14;
let kelilingLingkaran = 2 * phi * r;
console.log(`Keliling Lingkarang = ${kelilingLingkaran}`);

//Luas Lingkaran
let luasLingkaran = phi *(r * r);
console.log("Luas Lingkaran = " + luasLingkaran);

//Soal Nomor 4
//1. Find out how to find the angle of triangle (angle1 + angle2 + angle3 = 180)
//2. Thats mean angle 3 = 180 - (angle1 + angle2)
//3. Lets give assign of 2 angle
//- angle1 = 90
//- angle2 = 30
//4. Define the variable
let angle1 = 90;
let angle2 = 30
 
//5. write equation in code
let angle3 = 180 - (angle1 + angle2);

//6. Display the result and finish
console.log(`sudut ketiga dari segitiga siku-siku adalah ${angle3}`);

//Soal Nomor 5
//1. Define the Date
const jan01_1970 = new Date (0);
console.log(jan01_1970);

//2. Put how many days that you want to plus (i want to plus 7 days)
const tambah7Hari = new Date (7 * 24 * 3600 * 1000);

//3. Display the Result to get the difference dates in days
console.log(`Total perbedaan tambahan harinya adalah ${tambah7Hari}`);

// Soal Nomor 6
// 1. Determine how many days that you want to put

let totalHari = 365

//2. Convert all the days to the moths and year
let moths = 365 / 30
let year = 365 / 365

//3. Display the result
console.log(`Total dari ${totalHari} hari adalah sebanyak ${moths} bulan`);
console.log(`Total dari ${totalHari} hari adalah sebanyak ${year} tahun`);


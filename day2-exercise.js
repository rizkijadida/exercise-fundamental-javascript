// Number 1
// 1. determine the celcious

const celcious = 60;

// 2. Found the formula to convert from Cselcious to Fahrenheit

const celcToFahrenheit = (celcious * 9 / 5) + 32

// 3.  Display the Formula

console.log("maka hasil dari perubahan suhu dari celcuious ke fahrenheit adalah " + celcToFahrenheit);

// Soal Nomor 2 
// 1. Determine the number (1-10)

const  number = 25;

// 2. Write the possible of possibilities that will happen

if (number % 2) {
    console.log(`maka angka ${number} adalah ganjil`);
} else {
    console.log(`maka angka ${numer} adalah genap`);
}

//  SOAL NOMOR 3
const apakahPrima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      console.log("prima")
    }else{
      console.log("bukan prima")
    }
  }
  
  // TEST CASES
  apakahPrima(2); //prima
  apakahPrima(3); //prima
  apakahPrima(4); //bukan prima
  apakahPrima(9); //bukan prima


  // Soal nomor 4
 // create an array
let myNums = [1, 2, 3, 4, 5];

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) // 15

// Soal Nomor 5
function faktorial(n){
    if (n < 0){
        return -1;
    } else if (n === 0) {
        return 1;
    } else {
        return n * faktorial (n-1);
    }
}

console.log(faktorial(5));

// Soal Nomor 6
const n = 10;

// Create a new array of size 'n'
let series = new Array(n);

// Fills all places in array with 0
series.fill(0);

// Seed value for 1st element
series[0] = 0;

// Seed value for 2nd element
series[1] = 1;

for (let i = 2; i < n; i++) {

	// Apply basic Fibonacci formulae
	series[i] = series[i - 1] + series[i - 2];
}

// Print the series
console.log(series);


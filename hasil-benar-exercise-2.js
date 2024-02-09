// //  no.1
// // celcius ke fahrenheit
// // const celcius = 60
// // const result = (celcius * 9) / 5 + 32

// // console.log("cel to fah :", result);

// // fah to cel
// // const fah = 140;
// // const result = ((fah - 32) * 5) / 9;

// // console.log(fah + "f to cel = ", result + "C");

// // // no.2
// // const angka = 25;

// // if (angka % 2 === 0) {
// //     console.log("genap");
// // } else {
// //     console.log("ganjil");
// // }

// // atau menggunakan ternary
// // console.log(angka % 2 === 0 ? "genap" : "ganjil");

// // // no.3
// // const num = 7
// // let isPrime = true;

// // for (let i = 2; i < num; i++) {
// //     if (num % i === 0) {
// //         isPrime = false;
// //         break;
// //     }
// // }
// // console.log(isPrime);

// //no.4
// // ada 2 cara. 1 rumus pasti dan 

// // cara 1
// // const num = 5;
// // const result = (num * (num + 1)) / 2;
// // console.log(result);

// // // cara 2
// // const angka = 5;
// // let sum = 0;
// // let message = "";

// // for (let i = 1; i <= angka; i++) {
// //     sum += i;

// //     message += i + (i !== angka ? " + " : "");
// // }

// // console.log(sum);
// // console.log(message + " = " + sum);

// // no.5 (cari faktorial)
// // const num = 5;
// // let result = 1; //untuk nampung hasil faktorialnya
// // let message = "";

// // for (let i = 5; i >= 1; i--) {
// //     result *= i;

// //     message += i + (i === 1 ? "" : " x ");
// // }

// // console.log(result);
// // console.log(message + " = " + result);

// // soal no. 6 --> fibonacci

// const n = 15;

// let a = 0;
// let b = 1;

// for(let i = 0; i< n; i++) {
//     let next = a + b
//     a = b
//     b = next;
//     console.log(a);
// }

// console.log(a);
// // // no 1

// // // const angka = 9
// // // for (let i = 1; i <= 10; i++) {
// // //     console.log(`${angka} x ${i} = ${angka * i}`);
// // // }

// // // no 2
// // // pake builod in method
// // // const kata = "madam"
// // // const isPalindrome = kata === kata.split("").reverse().join("");

// // // console.log(kata.split(""));
// // // console.log(kata.split("").reverse());
// // // console.log(kata.split("").reverse().join(""));

// // // console.log(isPalindrome);

// // // tanpa build in method (pakai loop)
// // // const kata = "jogja"
// // // let reverse ="";

// // // for (let i = kata.length -1; i >= 0; i--) {
// // //     reverse += kata[i];
// // //     console.log(kata[i]);
// // // }

// // // console.log(reverse);

// // // no 3

// // // const cm = 100000
// // // const km = cm / 100000

// // // console.log(`${cm} = ${km}km`);

// // // no 4

// // // const harga = 10000
// // // const rupiah = new Intl.NumberFormat("id-ID", {
// // //     style: "currency",
// // //     currency: "IDR",
// // //     maximumfractionDigits: 0,
// // // });

// // // console.log(rupiah.format(harga))

// // // no 5

// // // const words = "Hello World";
// // // const search = "ell"
// // // const replaceWith = "";
// // // const remove = words.replace(search,replaceWith);

// // // console.log(remove);

// // // no 6
// // // const input = "hello world";
// // // let words = input.split(" ");

// // // console.log(words);
// // // console.log(words.length);

// // // for(let i = 0; i < words.length; i++) {
// // //     words[i] = words[i][0].toUpperCase() + words[i].slice(1);

// // //     console.log(words[i].slice(1));
// // // }

// // // console.log(words);
// // // console.log(words.join(" "));

// // // no 7
// // // cara 1
// // const kata = "hello";
// // const reverse = kata.split("").reverse().join("");

// // console.log(kata + " -> " + reverse);


// // cara 2

// // const str = "hello";
// // let message = "";

// // for (let i =str.length -1; i>=0; i--) {
// //     message += str[i];
// // }

// // console.log(message);

// // no 8
// // const inputString = "The QuiCk BrOwN Fox";
// // let swappedString = "";

// // for(let i = 0; i < inputString.length; i++) {
// //     const char = inputString[i];

// //     console.log(char);
// //     console.log(inputString[i].toUpperCase());

// //     if (char === inputString[i].toUpperCase()) {
// //         swappedString += char.toLowerCase();
// //     } else {
// //         swappedString += char.toUpperCase();
// //     }
// // }

// // console.log(swappedString);

// // no 9

// const num1 = 42
// const num2 = 27

// let largest;

// if (num1 > num2) {
//     largest = num1
// } else {
//     largest = num2;
// }
// console.log(largest);

// no 10

// const num1 = 42
// const num2 = 27
// const num3 = 18

// const smallest = Math.min(num1, num2, num3);
// console.log(smallest);

// const largest = Math.max(num1, num2, num3);
// console.log(largest);

// const middle = num1 + num2 + num3 - smallest - largest;
// console.log(middle);

// console.log(`${smallest}, ${middle}, ${largest}`);

// no 11
// const input = "hello world"

// let type;

// if(typeof input === "string") {
//     type = 1;
// } else if (typeof input === "number") {
//     type = 2;
// } else {
//     type = 3
// }
// console.log(type);

// no 12

const inputString = "An apple a day keeps the doctor away".toLocaleLowerCase();
const replaceWord = "a";
let modifiedString = "";

for(let i = 0; i < inputString.length; i++) {
    if (inputString[i] === replaceWord) {
        modifiedString += "*";
    } else {
        modifiedString += inputString[i];
    }
}

console.log(modifiedString);
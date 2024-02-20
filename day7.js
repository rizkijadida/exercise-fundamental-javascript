// 1 =========================================================================================================
// Create a function to check if two objects are equal
// function isEqual(obj1, obj2) {
//   // Mengambil key untuk diperiksa value dari 2 objek
//   const key = Object.keys(obj1);
//   return obj1[key] === obj2[key] ? true : false;
// }
// // Example 1
// console.log(isEqual({ a: 2 }, { a: 1 }));
// // Example 2
// console.log(isEqual({ a: "Hello" }, { a: 1 }));
// // Example 3
// console.log(isEqual({ a: 1 }, { a: 1 }));

// PEMBAHASAN
// function areObjectEQUAL(obj1, obj2){
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length){
//         return false;
//     }
//     for (const key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//         return false;
//         }
//     };
//     return true;
// };

// const arg1 = {a: 2};
// const arg2 = {b: 1};
// console.log(areObjectEQUAL (arg1, arg2));

// 2 =======================================================================================================
// Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }
// CARA 1
// function interSection(obj1, obj2) {
//     const result = {};
//     // Iterasi melalui properti-properti objek pertama
//     for (let key in obj1) {
//         // Memeriksa apakah properti tersebut juga ada di objek kedua
//         if (obj2.hasOwnProperty(key)) {
//             // Jika properti juga ada di objek kedua, tambahkan ke hasil
//             result[key] = obj1[key];
//         }
//     }
//     return result;
// }
// // Contoh penggunaan:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };
// console.log(interSection(obj1, obj2));

// CARA 2
// const obj1 = { a: 1, b: 2 };
// const obj2 = { a: 1, c: 3 };
// function interSection(obj1, obj2) {
//   // metode filter() untuk memfilter array tersebut berdasarkan apakah kunci yang sama ada di objek kedua menggunakan metode hasOwnProperty(). Berikut adalah implementasinya:
//   return Object.keys(obj1).filter((key) => obj2.hasOwnProperty(key));
//   //  Di dalam fungsi callback untuk filter(), kita menggunakan obj2.hasOwnProperty(key) untuk memeriksa apakah objek kedua memiliki properti dengan kunci yang sama dengan properti dalam objek pertama. Jadi, outputnya adalah ['a'], karena hanya properti a yang ada di kedua objek.
// }
// console.log(interSection(obj1, obj2));

// PEMBAHASAN --> INTERSECTION

// const intersection = (obj1, obj2) => {
//     const duplicate = {};

//     for(let key in obj1) {
//         console.log(key);
//         if (obj1[key] == obj2[key]) {
//             duplicate[key] = obj1[key]
//         }
//     }
//     return duplicate
// };

// const arg1 = {a: 1, b: 2};
// const arg2 = {a:1, C: 3};

// console.log(intersection (arg1, arg2));

// 3 =======================================================================================================
// ● Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// function mergeAndRemoveDuplicates(array1, array2) {
//   // Menggabungkan kedua array
//   const mergedArray = array1.concat(array2);
//   //   console.log(mergedArray);

//   // Objek untuk menyimpan data siswa yang unik berdasarkan email
//   const uniqueStudents = {};

//   // Iterasi melalui array gabungan
//   mergedArray.forEach((student) => {
//     // Menyimpan data siswa ke objek uniqueStudents hanya jika email belum ada di objek tersebut
//     if (!uniqueStudents.hasOwnProperty(student.email)) {
//       uniqueStudents[student.email] = student;
//     }
//   });
//   // Mengonversi objek uniqueStudents kembali ke dalam array
//   const resultArray = Object.values(uniqueStudents);

//   return resultArray;
// }

// // Contoh penggunaan:
// const array1 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];

// const array2 = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// console.log(mergeAndRemoveDuplicates(array1, array2));

// PEMBAHASAN ================================

// const removeDuplicate = (arr1, arr2) => {
//     const combineArray = [...arr1, ...arr2];

//     console.log(combineArray);

//     const temp = [];

//     for (let i = 0; i < combineArray.length; i++) {
//         const duplicateValues = temp.filter((val) => {
//             return val.email === combineArray[i].email;
//         });
//         console.log(duplicateValues);

//         console.log(combineArray[i]);
//         if (!duplicateValues.length) {
//             temp.push(combineArray[i]);
//         }
//     }

//     return temp;
// };

// const arg1 = [
//     {name: "student1", email: "student1@mail.com"},
//     {name: "studen2", email: "student2@mail.com"}
// ];

// const arg2 = [
//     {name: "student1", email: "student1@gmail.com"},
//     {name: "student3", email: "student3@mail.com"}
// ];

// console.log(removeDuplicate(arg1, arg2));

// 4 =======================================================================================================
// Create a function that can accept input as an array of objects and switch all values into property and
// property into value
// ● Example :
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]
// function switchPropertiesAndValues(arrayOfObjects) {
//   // map() untuk melakukan iterasi melalui setiap objek dalam array input arrayOfObjects.
//   return arrayOfObjects.map((object) =>
//     //   Object.fromEntries() untuk membuat sebuah objek baru dari daftar pasangan kunci-nilai yang sudah diubah.
//     Object.fromEntries(
//       // menggunakan Object.entries() untuk mendapatkan daftar pasangan kunci-nilai.
//       //   metode map() lagi untuk mengubah struktur setiap pasangan kunci-nilai.
//       //   menukar posisi kunci dan nilai, sehingga kunci menjadi nilai dan nilai menjadi kunci.
//       Object.entries(object).map(([key, value]) => [value, key])
//     )
//   );
// }

// // Contoh penggunaan:
// const input = [{ name: "David", age: 20 }];
// console.log(switchPropertiesAndValues(input));

// PEMBAHASAN =============================================================================

// const switchValueToKey = (arr) => {
//     console.log(arr);
//     const result = [];
// arr.forEach((item) => {
//     // item looping 1 -> {name: "David", age: 20}
//     let temp = {};

//     for (let key in item) {
//         console.log(key);
//         console.log(item[key]);
//         temp[item[key]] = key;
//     };

//     result.push(temp);
// });

// return result;

// };

// const arg = [
//     {name: "David", age: 20},
// ];
// console.log(switchValueToKey(arg));

// 5 ======================================================================================================
// Create a function to find a factorial number using recursion
// ● Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   // Langkah rekursi: mengalikan angka saat ini dengan faktorial dari angka sebelumnya
//   return n * factorial(n - 1);
// };
// // Contoh penggunaan:
// function calculateFactorial(n) {
//   const result = factorial(n);
//   let expression = "";
//   for (let i = n; i > 0; i--) {
//     expression += i + (i !== 1 ? " x " : "");
//   }
//   return `${expression} = ${result}`;
// };

// const input = 5;
// console.log(`${input}! = ${calculateFactorial(input)}`);

// PEMBAHASAN

// const factorial = n => {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// };

// const n = 5;

// console.log(`factorial ${n} !=` + factorial(n));

// CARA 2

// const factorial = (n) => {
//   if (n === 1) {
//     return {
//       steps: ["1"],
//       total: 1,
//     };
//   } else {
//     const next = factorial(n - 1);

//     return {
//       steps: [n, ...next.steps],
//       total: n * next.total,
//     };
//   }
// };

// const number = 5;
// const { steps, total } = factorial(number);

// console.log(steps.join(" x ") + " = " + total);

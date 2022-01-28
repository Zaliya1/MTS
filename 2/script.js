let num = 266219;
let count = 1;
let str = num.toString();
let arr = str.split("");
console.log(arr);

for (let i = 0; i<arr.length; i++) {
    count *=arr[i];
}
console.log(count);

count = count**3;
console.log(count);

console.log("Первые 2 цифры полученного числа: " + Math.floor(count / (10**8)));

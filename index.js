let sum = 0;
for (let i = 0; i <= 1000; i++) {
  sum += i;
}

let a = sum % 1234;
let b = Math.trunc(sum / 1234);

let c = a > b;
console.log(c);
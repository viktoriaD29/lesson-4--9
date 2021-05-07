let sum = 0;

for (let i = 0; i <= 1000; i++) {
  sum += i;
}

let x = sum / 1234;
let b = Math.trunc(x);
let y = x % 2;

let c = b > y;
console.log(c);

let sum = 0;
for (let i = 0; i <= 1000; i++) {
  sum += i;
}

let x = sum / 1234;
let y = x % 2 === 0;
let b = Math.trunc(sum / 1234);

/*let c = b > y;
console.log(c);*/

if (b > y) {
  console.log(true);
} else {
  console.log(false);
}
const numbers = [1, 3, 5, 7, 9];
const odd = [];
for (const number of numbers) {
    let num = 0;
    if (number % 2 !== 0) {
        num = number + 1;
    }
    odd.push(num)
}

console.log(odd);


//  Map

const odd2 = numbers.map(num => num + 1);
console.log(odd2);

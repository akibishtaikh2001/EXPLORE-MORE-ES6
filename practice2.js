const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisibleBY10 = numbers.filter(divide => divide % 10 === 0)


console.log(divisibleBY10);

const find = numbers.find(divided => divided % 10 === 0);
console.log(find);

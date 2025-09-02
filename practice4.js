const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
];

let totalAge = 0;
for (const person of people) {
    totalAge += person.age;
}

console.log(totalAge);


// use it reduce Challage part



const personTotalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log(personTotalAge);

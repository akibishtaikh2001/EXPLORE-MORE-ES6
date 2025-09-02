const instructor = [
    { name: 'Nodi', age: 28, postiton: 'Senior' },
    { name: 'Akil', age: 26, postiton: 'Junior' },
    { name: 'Shobuj', age: 30, postiton: 'Senior' },
]

const position = instructor.filter(posi => posi.postiton === 'Senior');
console.log(position);


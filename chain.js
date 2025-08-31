// data access
const data = [{id: 1, name: 'abdul', address: 'kochu khet'}];

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenevo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 165000},
    ]
}

// second product price
console.log(products.data[1].price);

const users = {
    id: 5001,
    name: 'shoriful Raj',
    address:{
        street:{
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

const user2 = {
    id: 5002,
    name: 'porir bibir majar',
    address: {
        city:'chittagong',
        country: 'Bangladesh'
    }
}

console.log(users.address.street?.second);

console.log(user2.address.street?.second);

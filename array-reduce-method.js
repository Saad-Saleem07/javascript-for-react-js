const cart = [
    {item: "Flour", price: 200},
    {item: "Rice", price: 250},
    {item: "pulses", price:300}
]

const total = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(total);



const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const numbers= [1, 2, 3, 4, 5]

const array = [...numbers].sort((a, b) => a-b);

console.log(numbers);
console.log(array);



const cart = ["Rice", "Flour", "Pulses"]

const items = [...cart].sort((a,b) => a.lenght-b.lenght);

console.log(cart);
console.log(items);
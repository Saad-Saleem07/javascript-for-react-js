const highCal = [
    {item: "Burger", calories: 600},
    {item: "Salad", calories: 200},
    {item: "Rice", calories: 100},
]

const lowCal = highCal.filter(highCal => highCal.calories <500);
console.log(lowCal);


const marks = [
    {name: "Ali", marks: 100},
    {name: "Ahmed", marks: 80},
    {name: "Afaq", marks: 45}
]
const passedStudents = marks.filter(marks => marks.marks < 60);
console.log(passedStudents);

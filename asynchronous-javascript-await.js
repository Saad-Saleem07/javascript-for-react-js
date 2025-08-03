// asynuc function getAdvice() {
//     const advice = await fetch("https://api.adviceslip.com/advice");
//     const data = await advice.json();
//     console.log(data);
// }
// getAdvice();

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const data = await response.json();
    console.log("User info: ");
    console.log("Name: " userData.name);
    console.log("Email: " userData.email);
    console.log("Website" userData.website);
}
getUser();
// let a=prompt("Yoshingizni kiriting")
// alert (a)
// let b=20
// if(b>20){
//     console.log("siz kotta odamsiz")
// }
// else if (b=20){
//     console.log("siz yaxshi odamsiz")
// }
// else {
//     console.log("siz hali detskiysiz")
// }
// let a= prompt("raqam kiriting")

// if (a % 3 == 0){
//     console.log("bu sob fuzz ");
// }
// else if (a % 5 == 0){
//     console.log("bu son buzz");
// }
// else if (a % 3 == 0 && a % 5 ==0){
//     console.log("fuzzbuzz");
// }
alert("sizda hozir random sonlar chiqishni boshlaydi😉")
let son= Math.round(Math.random() *99+1)
alert (`
random orqali chiqqan son: ${son} 
`)

if (son % 3 === 0 && son % 5 === 0) {
    alert(` ${son}: FizzBuzz`)
} else if (son % 3 === 0) {
    alert (`${son}: Fizz`)
} else if (son % 5 === 0) {
    alert (`${son}: Buzz`)
} else {
    alert (`${son}: Son Fizzgaham  Buzzgaham  bo'linmaydi`);
}


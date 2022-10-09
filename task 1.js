let number1 = prompt('Введите пожалуйста число')
let number2 = +number1;
console.log(typeof number2)
 if (typeof number2 == "number" && !isNaN(number2)) {
  if (number2 === 0) {
    console.log("Ноль")
} 
  else if(number2 % 2 === 0) {
    console.log("Введенное число четное")
} else 
    console.log("Введенное число нечетное")
}
else console.log("Упс, кажется, вы ошиблись")

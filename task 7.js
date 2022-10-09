let arr = [8, 3, 12, 0];
let chet = 0;
let nechet = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0 || arr[i] == null) {
    console.log("Ваш элемент 0 или null")
  }
  else if (arr[i] % 2 === 0) {
    chet++;
    console.log(`Четных элементов в массиве ${chet}`)
  } else {
    nechet++;
    console.log(`Нечетных элементов в массиве ${nechet}`)
  }
}
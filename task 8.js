let myMap = new Map();
myMap.set('Alena', 'girle');
myMap.set('Andrey', 'boy');
myMap.set(1, true);
myMap.set(0, false);

for(let name of myMap.keys()) {
   console.log(`Ключ - ${name}`)
}
 for(let val of myMap.values()) {
   console.log(`значение - ${val}`)
}

// Создание произвольного массива Map
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Получение ключей массива Map
let keys = myMap.keys();

// Вывод значений в консоль
for (let key of keys) {
  let value = myMap.get(key);
  console.log(`Ключ - ${key}, значение - ${value}`);
}
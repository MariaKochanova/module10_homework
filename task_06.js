// Данный массив
let myArray = [1, 1, 1, 1, 1];

// Первый элемент массива
let firstElement = myArray[0];

// Переменная для хранения результата проверки
let allElementsEqual = true;

// Проверка всех элементов массива
for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] !== firstElement) {
    allElementsEqual = false;
    break;
  }
}

// Вывод результата в консоль
console.log("Все элементы в массиве одинаковые: " + allElementsEqual);
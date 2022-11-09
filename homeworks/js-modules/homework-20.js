// Створити сутність людини:
// ім'я
// вік
// Метод виведення даних
// Створити сутність автомобіля:
// Характеристики автомобіля окремими властивостями
// Методи:
// Виведення на екран даних про цей автомобіль
// Привласнення цього автомобіля власнику (записати в автомобіль об'єкт власника)
// Всі дані про людину та про автомобіль отримувати від користувача.
//  Реалізувати необхідні перевірки на коректність введення(порожні поля, вік > 18 для людини та ін.за необхідності)
// Максимально використовувати функції

class Person {
  name = '';
  age = 0;
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }
  getinfo() {
    return [this.name , this.age];
  }
}
class Car {
	carOwner = [];
	brend;
	model;
	number;
	constructor(brend, model, number) {
		this.brend = brend;
		this.model = model;
		this.number = number;
	}
	setCarowner(name, age) {
		if (age >= 18) {
			this.carOwner.push(new Person(name, age));
    }
	}
  carNumberInfo() {
    return console.log(this.number);
  }
  carBrendInfo() {
    return console.log(this.brend);
  }
  carModelInfo() {
    return console.log(this.model);
  }
  getcarOwner() {
    return console.log(this.carOwner);
  }
}
const oien = new Car('ford', 'SQlcm', '48-97-70-8-7');
console.log(oien);
oien.setCarowner("ivan", 20)
oien.getcarOwner();
oien.carBrendInfo();
oien.carModelInfo();
oien.carNumberInfo();
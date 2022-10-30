class Person {
  name = '';
  age = 0;
  constructor(name, age = 18) {
    this.name = name.replace(/\s/g, "").trim();
    this.age = age;
  }
  get info() {
    return console.log(`name - ${this.name}; age - ${this.age};`);
  }
}
class Car {
  #carOwner;
  brend;
  model;
  number;
	constructor(brend, model, number, name, age) {
		if (age>=18) {
			this.#carOwner = new Person(name, age);
		}
		console.log(brend.trim().replace(/\s/g, ""));
		this.brend = brend.replace(/\s/g, "").trim();
		this.model = model.replace(/\s/g, "").trim();
		this.number = number.replace(/\s/g, "").trim();
	}
	getcarOwnerInfo() {
		return this.#carOwner;
	}
}
const oien = new Car( "   fo  rd    "," S Q l  c  m", "4 8 -9  7 - 70-  8-7", "Iv  an", 18)
console.log(oien);
console.log(oien.getcarOwnerInfo());
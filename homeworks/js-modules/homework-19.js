// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир.
// Не обмежувати кількість мешканців у квартирі

class ApartmentHouse {
	numberOfApartments;
	numberOfFloors;
	apartments = [];
	numberApartment = 0;
	constructor(numberOfApartments,numberOfFloors) {
		this.numberOfApartments = numberOfApartments;
		this.numberOfFloors = numberOfFloors;
	}
	addApartment(numberOfApartmentResident) {
		if (this.numberOfApartments > 0 || this.numberOfApartments <= 200) {
			this.apartments.push(new Apartment(numberOfApartmentResident));
			this.numberApartment++;
		}
	}
}
class Apartment {
	numberOfApartmentResidents;
	tenants = [];
	constructor(numberOfApartmentResidents) {
		this.numberOfApartmentResidents = numberOfApartmentResidents;
	}
	addTenat(name,age,gender) {
		this.tenants.push(new Tenant(name, age, gender));
	}
	getTenat() {
		return this.tenants;
	}
}
class Tenant {
	constructor(name,age,gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}
const apartmentHouse = new ApartmentHouse(1, 1)
apartmentHouse.addApartment(1)
console.log(apartmentHouse);
const oien = new Apartment
oien.addTenat("IVan", 45, "Man")
console.log(apartmentHouse);


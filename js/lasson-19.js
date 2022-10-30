class ApartmentHouse {
	numberOfApartments;
	numberNfFloors;
	apartments = [];
	constructor(numberOfApartments,numberNfFloors) {
		this.numberOfApartments = numberOfApartments;
		this.numberNfFloors = numberNfFloors;
	}
	addApartment() {
		if (numberOfApartments > 0 || numberOfApartments <= 200) {
			this.apartments.push(new Apartment(numberOfApartmentResidents));
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
const apartmentHouse = new ApartmentHouse(2, 4)
apartmentHouse.addApartment
console.log(apartmentHouse);
const oien = new Apartment
oien.addTenat("IVan", 45, "Man")
console.log(apartmentHouse);


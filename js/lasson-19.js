class ApartmentHouse {
	numberOfApartments;
	apartments = [];
	constructor(numberOfApartments,numberOfApartmentResidents) {
		this.numberOfApartments = numberOfApartments;
		for (let index = 1; index <= this.numberOfApartments; index++) {
			this.apartments.push(new Apartment(numberOfApartmentResidents));
		}
	}
}
class Apartment {
	numberOfApartmentResidents;
	tenants = [];
	constructor(numberOfApartmentResidents) {
		this.numberOfApartmentResidents = numberOfApartmentResidents;
		for (let index = 1; index <= this.numberOfApartmentResidents; index++) {
			this.tenants.push(new Tenant("Alisa",18,"Woman"))
		}
	}
}
class Tenant {
	constructor(name,age,gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}
}
const apartmentHouse = new ApartmentHouse(4,20)
console.log(apartmentHouse);

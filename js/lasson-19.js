class ApartmentHouse {
	numberOfApartments;
	numberOfApartmentsPerFloor = 4;
	numberNfFloors;
	apartments = [];
	constructor(numberOfApartments,numberOfApartmentResidents,
		numberNfFloors) {
		this.numberOfApartments = numberOfApartments;
		this.numberNfFloors = numberNfFloors;
		for (let index = 1; index <= this.numberOfApartments; index++) {
			if (numberOfApartments>0||numberOfApartments<=200) {
				this.apartments.push(new Apartment(numberOfApartmentResidents));
			}
		}
	}
}
class Apartment {
	numberOfApartmentResidents;
	tenants = [];
	constructor(numberOfApartmentResidents) {
		this.numberOfApartmentResidents = numberOfApartmentResidents;
		for (let index = 1; index <= this.numberOfApartmentResidents; index++) {
			if (numberOfApartmentResidents>0) {
				this.tenants.push(new Tenant("Alisa",18,"Woman"))
			}
		}
	}
	setTenat(name,age,gender) {
		let tenant = new Tenant(name, age, gender)
		this.tenants.push(tenant);
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
const apartmentHouse = new ApartmentHouse(2,4)
console.log(apartmentHouse);
apartmentHouse.apartments[0].setTenat("IVan", 45, "Man")
console.log(apartmentHouse);


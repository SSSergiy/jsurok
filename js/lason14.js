class ApartmentTenant {

  constructor(name) {
    this.name = name;
  }
}

class Apartments {
	constructor(name) {
		this.apartmentTenant = new ApartmentTenant ("oien");
    this.name = name;
  }
}
const apartments = new Apartments("oien");
console.log(apartments);

class ApartmentHouse {
  constructor(name) {
    this.apartments = new Apartments('jara');
    this.name = name;
  }
}
const apartmenthouse = new ApartmentHouse('1234');
console.log(apartmenthouse);
///////////////////////////////////////////////////////////////////////////////////////////////





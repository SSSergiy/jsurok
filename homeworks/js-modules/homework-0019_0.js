class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}
class Flat {
  residentsArray = [];
  addResident(resident) {
    this.residentsArray.push(resident);
  }
}
class Building {
  flatsArray = [];
  maxFlatsNumber = 0;
  constructor(number) {
    this.maxFlatsNumber = number;
  }
  addFlat(flat) {
    if (this.flatsArray.length < this.maxFlatsNumber) {
      this.flatsArray.push(flat);
    } else {
      console.warn(
        "The number of flat in the building has reached its maximum."
      );
    }
  }
}
const lena = new Human("Lena", "female");
const flat1 = new Flat();
flat1.addResident(lena);
const building1 = new Building(2);
building1.addFlat(flat1);
building1.a
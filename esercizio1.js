class utente {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " " + "è più grande di" + " " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " " + "è più grande di" + " " + otherUser.firstName;
    } else {
      return this.firstName + " " + "e" + otherUser.firstName + " " + "hanno la stessa età";
    }
  }
}

const user1 = new utente("Luca", "Rossi", 34, "Milano");

const otherUser = new utente("Carlotta", "Grassi", 23, "Roma");

console.log(user1.compareAge(otherUser));

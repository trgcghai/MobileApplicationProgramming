class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let test: any;
test = new Person("John Doe", 30);
test.displayInfo();

type EventName = `on${string}`;

// valid
let e1: EventName = "onClick";
let e2: EventName = "onHover";

// invalid
// let e3: EventName = "click";

class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Grade: ${this.grade}`);
  }
}

test = new Student("Jane Doe", 20, "A");
test.displayInfo();

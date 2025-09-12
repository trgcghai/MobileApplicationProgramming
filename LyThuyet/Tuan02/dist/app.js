"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let test;
test = new Person("John Doe", 30);
test.displayInfo();
// valid
let e1 = "onClick";
let e2 = "onHover";
// invalid
// let e3: EventName = "click";
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
        this.grade = grade;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Grade: ${this.grade}`);
    }
}
test = new Student("Jane Doe", 20, "A");
test.displayInfo();
//# sourceMappingURL=app.js.map
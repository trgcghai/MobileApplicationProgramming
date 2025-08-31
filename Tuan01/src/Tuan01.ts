// câu 1
console.log("\nCâu 1");
class Person {
  name: string = "";
  age: number = 0;

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person = new Person();
person.name = "Alice";
person.age = 30;
person.display();

// câu 2
console.log("\nCâu 2");
class Student extends Person {
  grade: number = 1;

  display(): void {
    super.display();
    console.log(`Grade: ${this.grade}`);
  }
}

const student = new Student();
student.name = "Charlie";
student.age = 20;
student.grade = 3;
student.display();

// câu 3
console.log("\nCâu 3");
class Car {
  brand: string = "";
  model: string = "";
  year: number = 0;

  show(): void {
    console.log(
      `Car infomation: Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    );
  }
}

const car = new Car();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2020;
car.show();

// // câu 4
console.log("\nCâu 4");
class Rectangle {
  width: number = 0;
  height: number = 0;

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle();
rectangle.width = 10;
rectangle.height = 5;
console.log(
  `Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()} of Rectangle with Width: ${
    rectangle.width
  } and Height: ${rectangle.height}`
);

// // câu 5
console.log("\nCâu 5");
class BankAccount {
  balance: number = 0;

  deposit(amount: number): boolean {
    if (amount > 0) {
      this.balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount: number): boolean {
    if (this.balance < 0 || amount > this.balance) return false;
    this.balance -= amount;
    return true;
  }
}

const account2 = new BankAccount();
console.log("Init balance: " + account2.balance);
console.log("Withdraw 100: " + account2.withdraw(100));
console.log("Deposit 500: " + account2.deposit(500));
console.log("Current balance: " + account2.balance);
console.log("Withdraw 100: " + account2.withdraw(100));

// câu 6
console.log("\nCâu 6");
class Book {
  title: string = "";
  author: string = "";
  pages: number = 0;

  display(): void {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`
    );
  }
}

const book = new Book();
book.title = "The Great Gatsby";
book.author = "F. Scott Fitzgerald";
book.pages = 180;
book.display();

// câu 7
console.log("\nCâu 7");
class User {
  private name: string = "";

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

const user = new User();
user.setName("Alice");
console.log("User name: " + user.getName());
// console.log(user.name); // Lỗi: thuộc tính 'name' là private và chỉ có thể truy cập trong lớp 'User'.

// câu 8
console.log("\nCâu 8");
class Product {
  name: string = "";
  price: number = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  display(): void {
    console.log(`Product Name: ${this.name}, Price: ${this.price}`);
  }
}

const products: Product[] = [
  new Product("Laptop", 200),
  new Product("Smartphone", 50),
  new Product("Tablet", 100),
];

console.log("Products with price greater than 100:");
products
  .filter((product) => product.price > 100)
  .forEach((product) => product.display());

// câu 9
console.log("\nCâu 9");
interface IAnimal {
  name: string;
  sound(): void;
}

class Bird2 implements IAnimal {
  name: string = "Tweety";
  sound(): void {
    console.log(`${this.name} says Chirp`);
  }
}

const bird2 = new Bird2();
bird2.sound();

// câu 10
console.log("\nCâu 10");
class Account {
  public username: string = "";
  private password: string = "";
  readonly _id: string = Math.random().toString(36).substring(2, 15);

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  displayInfo(): void {
    console.log(`Username: ${this.username}, ID: ${this._id}`);
  }
}

const account = new Account("admin", "admin");
account.displayInfo();
console.log(account.username); // OK
// console.log(account.password); // Lỗi: thuộc tính 'password' là private và chỉ có thể truy cập trong lớp 'Account'.
console.log(account._id); // OK
// account._id = "newId"; // Lỗi: không thể gán giá trị cho thuộc tính chỉ đọc '_id'.

// câu 11
console.log("\nCâu 11");
class Animal3 {
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }
}

class Dog3 extends Animal3 {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log(`${this.name} says Woof`);
  }
}

class Cat3 extends Animal3 {
  constructor(name: string) {
    super(name);
  }

  meow(): void {
    console.log(`${this.name} says Meow`);
  }
}

const dog3 = new Dog3("Buddy");
dog3.bark();

const cat3 = new Cat3("Kitty");
cat3.meow();

// câu 12
console.log("\nCâu 12");
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Bird is flying");
  }
}

class Fish implements Swimmable {
  swim(): void {
    console.log("Fish is swimming");
  }
}

const bird = new Bird();
bird.fly();

const fish = new Fish();
fish.swim();

// câu 13
console.log("\nCâu 13");
abstract class Shape2 {
  abstract area(): number;
}

class Square2 implements Shape2 {
  private sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  area(): number {
    return this.sideLength * this.sideLength;
  }
}

class Circle2 implements Shape2 {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square2(5);
const circle = new Circle2(3);

console.log(`Area of square: ${square.area()}`);
console.log(`Area of circle: ${circle.area()}`);

// câu 14
console.log("\nCâu 14");
class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}`);
  }
}

class Developer extends Employee {
  private programmingLanguage: string;

  constructor(name: string, programmingLanguage: string) {
    super(name);
    this.programmingLanguage = programmingLanguage;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Programming Language: ${this.programmingLanguage}`);
  }

  program(): void {
    console.log(`${this.name} is programming in ${this.programmingLanguage}`);
  }
}

class Manager extends Employee {
  private teamSize: number;

  constructor(name: string, teamSize: number) {
    super(name);
    this.teamSize = teamSize;
  }

  displayInfo(): void {
    super.displayInfo();
    console.log(`Team Size: ${this.teamSize}`);
  }

  manage(): void {
    console.log(`${this.name} is managing a team of ${this.teamSize} people.`);
  }
}

const developer = new Developer("Alice", "TypeScript");
developer.program();

const manager = new Manager("Bob", 5);
manager.manage();

// câu 15
console.log("\nCâu 15");
class Library {
  users: User[] = [];
  books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
}

const library = new Library();
library.addBook(book);
console.log("Books in library:");
library.books.forEach((b) => b.display());

// câu 16
console.log("\nCâu 16");
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const boxNumber = new Box<number>(123);
console.log(typeof boxNumber.getValue() + ", " + boxNumber.getValue());

const boxString = new Box<string>("Hello");
console.log(typeof boxString.getValue() + ", " + boxString.getValue());

// câu 17
console.log("\nCâu 17");
class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("This is a log message.");
logger2.log("This is another log message.");

console.log(logger1 === logger2);

// câu 18
console.log("\nCâu 18");
class MathUtil {
  public static add(a: number, b: number): number {
    return a + b;
  }

  public static subtract(a: number, b: number): number {
    return a - b;
  }

  public static multiply(a: number, b: number): number {
    return a * b;
  }

  public static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(5, 3));
console.log(MathUtil.multiply(5, 3));
console.log(MathUtil.divide(5, 3));

// câu 19
console.log("\nCâu 19");
class Animal2 {
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog2 extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log(`${this.name} says Woof`);
  }

  move(): void {
    console.log(
      `${this.constructor.name} named ${this.name} is moving on all fours`
    );
  }
}

class Cat2 extends Animal2 {
  constructor(name: string) {
    super(name);
  }

  meow(): void {
    console.log(`${this.name} says Meow`);
  }

  move(): void {
    console.log(
      `${this.constructor.name} named ${this.name} is moving gracefully`
    );
  }
}

const dog2 = new Dog2("Buddy");
const cat2 = new Cat2("Kitty");

dog2.move();
cat2.move();

// câu 20
console.log("\nCâu 20");
interface Vehicle {
  move(): void;
}

class Car3 implements Vehicle {
  move(): void {
    console.log("Car is moving");
  }
}

class Bike implements Vehicle {
  move(): void {
    console.log("Bike is moving");
  }
}

const car3 = new Car3();
car3.move();

const bike = new Bike();
bike.move();

// câu 21
console.log("\nCâu 21");
class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userRepository = new Repository<User>();

userRepository.add(user);
console.log("Users in repository:");
userRepository.getAll().forEach((u) => console.log(u.getName()));

// câu 22
console.log("\nCâu 22");
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.isEmpty()); // false

// câu 23
console.log("\nCâu 23");
interface Payment {
  pay(amount: number): void;
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card.`);
  }
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Cash.`);
  }
}

const cardPayment = new CardPayment();
const cashPayment = new CashPayment();

cardPayment.pay(100);
cashPayment.pay(50);

// câu 24
console.log("\nCâu 24");
abstract class Appliance {
  abstract turnOn(): void;
}

class Fan implements Appliance {
  turnOn(): void {
    console.log("Fan is turned on.");
  }
}

class AirConditioner implements Appliance {
  turnOn(): void {
    console.log("Air Conditioner is turned on.");
  }
}

const fan = new Fan();
const airConditioner = new AirConditioner();

fan.turnOn();
airConditioner.turnOn();

// câu 25
console.log("\nCâu 25");
class Shape {
  static describe(): void {
    console.log("This is a shape.");
  }
}

Shape.describe();

// câu 26
console.log("\nCâu 26");
class Order {
  private products: Product[] = [];

  constructor(products: Product[]) {
    this.products = products;
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }
}

const order = new Order(products);
products.forEach((product) => product.display());
console.log("Total Price: " + order.getTotalPrice());

// câu 27
console.log("\nCâu 27");
class Teacher extends Person {
  subject: string = "";

  display(): void {
    super.display();
    console.log(`Subject: ${this.subject}`);
  }

  introduce(): void {
    console.log(`Hello, I am ${this.name}, a teacher of ${this.subject}.`);
  }
}

const teacher = new Teacher();
teacher.name = "Mr. Smith";
teacher.age = 40;
teacher.subject = "Mathematics";
teacher.introduce();

// câu 28
console.log("\nCâu 28");
class Animal {
  name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  protected makeSound(): void {}
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.constructor.name} named ${this.name} says Woof`);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log(`${this.constructor.name} named ${this.name} says Meow`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Kitty");

dog.makeSound();
cat.makeSound();

// câu 29
console.log("\nCâu 29");
interface Movable {
  move(): void;
}

class Car2 implements Movable {
  move(): void {
    console.log("Car is moving");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot is moving");
  }
}

const car2 = new Car2();
const robot = new Robot();

car2.move();
robot.move();

// câu 30
console.log("\nCâu 30");
class School {
  students: Student[] = [];
  teachers: Teacher[] = [];

  constructor(students: Student[], teachers: Teacher[]) {
    this.students = students;
    this.teachers = teachers;
  }

  showInfo(): void {
    console.log("Students:");
    this.students.forEach((student) => student.display());
    console.log("Teachers:");
    this.teachers.forEach((teacher) => teacher.display());
  }
}

const school = new School([student], [teacher]);
console.log("School Information:\n");
school.showInfo();

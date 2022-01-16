const x: number = 7;
const y: number = 11;

function add(x: number, y: number): number {
    return x + y;
}

function printToConsole(message: string): void {
    console.log(message);
}

function printAll(messages: string[]): void {
    // messages.forEach((name) => {printToConsole(name)});
    messages.map((message: string) => {printToConsole(message )});
}

const sum: number = add(x, y);

const result: string = `The sum of ${x} and ${y} is ${sum}`;
printToConsole(result);

// typed array
let bookNames: string[] = [
    "Terraform: Up and Running",
    "Kafka: The Definitive Guide",
    "Container Security"
];

printAll(bookNames);

// typed object
const myDict: {[key: string]: string | boolean } = {}
myDict.firstName = "Jim";
myDict.lastName = "McGaw";
myDict.isDeveloper = true;

console.log(myDict);

// motherfuckin' enums baby
enum ProductType {
    Books = "book",
    Food = "food",
    Furnishings = "furnishing"
}

const myBooks: {[key: string]: ProductType } = {}

for (let title of bookNames) {
    myBooks[title] = ProductType.Books;
}

console.log(myBooks);

type Product = {
    name: string;
    type: ProductType;
}

const myProducts: Product[] = [];

myProducts.push({name: "Architecture Patterns with Python", type: ProductType.Books });
myProducts.push({name: "Fluent Python", type: ProductType.Books });
myProducts.push({name: "In Cold Blood", type: ProductType.Books });

console.log(myProducts);

type Woman = {
    firstName: string;
    lastName: string;
    age?: number;  // ? means 'optional' attribute
}

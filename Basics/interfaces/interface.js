function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Nagaraj", lastName: "Ravi" };
console.log(greeter(user));

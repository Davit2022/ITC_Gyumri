function Employee(name) {
    this.name = name;
    this.say = function () {
        console.log("I am " + name);
    };
}

function EmployeeFactory() {
    this.create = function (name) {
        return new Employee(name);
    };
}

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();

    persons.push(employeeFactory.create("Narek"));
    persons.push(employeeFactory.create("Artur"));

    for (var i = 0; i < persons.length; i++) {
        persons[i].say();
    }
}
run();
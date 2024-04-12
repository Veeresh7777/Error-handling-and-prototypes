function Student (name) {
    this.name = name;
}

Student.prototype.printdetails = function (){
    console.log(`hello, my name is ${this.name}`);
}

const student1 = new Student("veeresh");
student1.printdetails();
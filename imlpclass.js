class person{
    constructor(name="unknown",age=0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;

    }
}

const person1 = new person("Veeresh",22);
console.log(person1.getDetails());
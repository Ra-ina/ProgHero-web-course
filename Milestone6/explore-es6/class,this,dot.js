const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]

// has some properties, method
class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Product('Le le lenovo')
// console.log(lenovo)
// lenovo.speak('oba kita kau')


class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapon sir', 'Physics')
console.log(tapan);

const rashid = new Teacher('Rashid', 'English')


//this
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`)
    }
    activity(){
        this.sleep();
    }
}

const kodom = new Person('Kodom Ali', 21)
console.log(kodom)
kodom.sleep();
const badam = new Person('Kacha badam', 23)
badam.sleep();

// bejal 
const lazy = kodom.sleep;
lazy()

//dot notation
const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    3:'third',
    'add-dress': 'kochu khet'
}

//bracket notation
const prop = 'job'
console.log(person.job)
console.log(person['job'])
console.log(person[prop])
console.log(person['3'])
confirm.log(person["add-dress"])
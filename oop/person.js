//PROTOTYPAL  INHERITANCE
class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach(like => {
            bio += ` ${this.fullName} likes ${like}.`
        })
        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes = [])
        this.position = position
    }

}

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age)
        this.grade = grade
    }
    getBio() {
        let res = ''
        this.grade >= 70 ?
            res = `${this.firstName} ${this.lastName} is passing`
            :
            res = `${this.firstName} ${this.lastName} is failing`
        return res
    }

    changeGrade(num) {
        this.grade += num
        return this.grade
    }
}


const ben = new Student('Ben', 'Cohen', 28, 72)
ben.fullName = 'Clancey Turner'

console.log(ben.grade)
console.log(ben.getBio())
console.log(ben.changeGrade(-40))
console.log(ben.getBio())

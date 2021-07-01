const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes

}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach(like => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const andrew = new Person('Andrew', 'Mead', 27, ['teaching', 'biking'])
andrew.setName('Alexis Turner')


const ben = new Person('Ben', 'Cohen', 28)

console.log(andrew.getBio())
console.log(ben.getBio())
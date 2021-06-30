const square = (num1) => {
    return num1 * num1;

}

//SHORT HANDSYNTAX
const squareLong = (num1) => num1 * num1;


console.log(square(5))
console.log(squareLong(5))

const people = [
    {
        name: 'andrew',
        age: 27
    },
    {
        name: 'smith',
        age: 34
    },
    {
        name: 'jess',
        age: 22
    },
]

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const age22 = people.filter((person) => person.age === 22)
console.log(age22)
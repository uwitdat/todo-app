const add = function () {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44))

const car = {
    color: 'red',
    getSummary() {
        return `the car is ${car.color}`
    }
}

console.log(car.getSummary())
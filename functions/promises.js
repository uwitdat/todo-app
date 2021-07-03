
//PROMISE
const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('NOT A NUMBER')
        }, 2000)
    })
}

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

getDataPromise(20).then((data) => {
    return getDataPromise(data)
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})
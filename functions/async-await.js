const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('NOT A NUMBER')
        }, 2000)
    })
}


const processData = async () => {
    try {
        let data = await getDataPromise(5)
        data = await getDataPromise(data)
        return data

    } catch (err) {
        console.log(err)
    }

}

processData()
    .then((data) => {
        console.log('DATA', data)
    }).catch((err) => {
        console.log(err)
    })
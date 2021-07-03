const getPuzzle = async (wordCount) => {
    const res = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (res.status === 200) {
        const data = await res.json()
        return data.puzzle
    } else {
        throw new Error('ERROR')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

const getCountry = async (countryCode) => {
    const res = await fetch('http://restcountries.eu/rest/v2/all')

    if (res.status === 200) {
        const data = await res.json()
        return data.find((d) => d.alpha2Code === countryCode)
    } else {
        throw new Error('ERROR')
    }
}


const getLocation = async () => {
    const res = await fetch('http://ipinfo.io/json?token=01cda379ff0d63')

    if (res.status === 200) {
        const data = await res.json()
        return data
    } else {
        throw new Error('Error fetching data')
    }
}
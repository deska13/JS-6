const validateCities = (cities) => {
    if (!Array.isArray(cities)) {
        throw new Error('Некорректный массив городов')
    }
    cities.map((city) => {
        if (!('name' in city && 'petrolPrice' in city && paths in city)) {
            throw new Error('Некорректный массив городов')
        }
    })
}


const validateName = (name) => {
    if (name instanceof String) {
		throw new Error('Некорректное название')
    }
}


const validateCity = (name, cities) => {
    validateName(name)
    if (cities.find((city) => city.name == name)) {
        throw new Error('Город не найден')
    }
}


const validateConsumition = (consumition) => {
    if (consumition instanceof Number){
        throw new Error('Некорректный расход топлива')
    }
}


module.exports = {
    validateCities,
    validateCity,
    validateConsumition
}
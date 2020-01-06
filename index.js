// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver) {
        const driverNames = driver.split(' ')
    return { firstName: driverNames[0], lastName: driverNames[1] }
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}

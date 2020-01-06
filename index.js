function lowerCaseDrivers(drivers){
    return drivers.map(function(driver){
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers){
    return drivers.map(function(driver){
        return {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
    })
}

function attributesToPhrase(drivers){
    return drivers.map(function(driver){
        return driver.name+ " is from "+driver.hometown
    })
}
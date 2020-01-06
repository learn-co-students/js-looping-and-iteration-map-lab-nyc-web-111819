// takes an array of drivers as objects and array of names in lowercase
function lowerCaseDrivers(drivers) {
  const newArr = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return newArr;
}

function nameToAttributes(drivers) {
  const newArr = drivers.map(function(driver) {
    let obj = {}
    const splitNames = driver.split(" ");
    obj.firstName = splitNames[0];
    obj.lastName = splitNames[1];
    return obj;
  });
  return newArr;
}

function attributesToPhrase(drivers) {
  const newArr = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return newArr;
}


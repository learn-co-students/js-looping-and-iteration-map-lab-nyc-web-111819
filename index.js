// Code your solution in this file.

function lowerCaseDrivers(drivers){
  let result = drivers.map(driver => driver.toLowerCase());
  return result
}

function nameToAttributes(drivers){
  return drivers.map(driver => {
    const first = driver.split(' ')[0];
    const last = driver.split(' ')[1];
    return { firstName: first, lastName: last}});
}

function attributesToPhrase(drivers){
  return drivers.map(driver => {
    const name = driver.name;
    const hometown = driver.hometown;
    return `${name} is from ${hometown}`
  })
}



//   describe('attributesToPhrase()', () => {
//     after(() => {
//       Array.prototype.map.restore();
//     });

//     it('uses the Array map method', () => {
//       const drivers = [
//         'Bobby Smith',
//         'Sammy Watkins',
//         'Sally Jenkins',
//         'Annette Sawyer',
//         'Sarah Hucklebee',
//         'bobby ridge'
//       ];

//       let spy = sinon.spy(Array.prototype, 'map');
//       attributesToPhrase(drivers);
//       expect(
//         spy.calledOnce,
//         'map was not called in attributesToPhrase()'
//       ).to.equal(true);
//     });

//     it('converts to list saying the name and where each individual is from', () => {
//       const drivers = [
//         { name: 'Bobby', hometown: 'Pittsburgh' },
//         { name: 'Sammy', hometown: 'New York' },
//         { name: 'Sally', hometown: 'Cleveland' },
//         { name: 'Annette', hometown: 'Los Angeles' },
//         { name: 'Bobby', hometown: 'Tampa Bay' }
//       ];

//       expect(attributesToPhrase(drivers)).to.eql([
//         'Bobby is from Pittsburgh',
//         'Sammy is from New York',
//         'Sally is from Cleveland',
//         'Annette is from Los Angeles',
//         'Bobby is from Tampa Bay'
//       ]);
//     });
//   });
// });

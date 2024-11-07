import people from './data.js';

// Rifattorizza queste funzioni
function getEmails (people, options) {
  options = options || {}
  var withNames = options.withNames || false
  var onlyActive = options.onlyActive || false
  if (onlyActive) {
    people = people.filter(isActive)
  }
  return people.map(function (person) {
    var result = ''
    if (withNames) {
      result = person.name + ' <' + person.email + '>'
    } else {
      result = person.email
    }
    return result
  }).join(', ')
}

function getYoungest (people) {
  people.sort(function (personA, personB) {
    return personA.age - personB.age
  })
  return {
    youngest: people[0],
    others: people.slice(1)
  }
}

function isActive (person) {
  return person.isActive
}

// aggiungi questo array in un altro file e importalo!


// dopo il refactoring queste funzioni dovrebbero continuare a funzioare
var emails = getEmails(people, {
  withNames: true,
});
console.log(emails);

var youngest = getYoungest(people);
console.log(youngest);
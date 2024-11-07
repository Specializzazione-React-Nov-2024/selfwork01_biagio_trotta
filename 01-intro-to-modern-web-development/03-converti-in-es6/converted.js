import people from './data.js';

const isActive = (person) => person.isActive;

const getYoungest = (people) => {
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    return {
        youngest: sortedPeople[0],
        others: sortedPeople.slice(1),
    };
};


console.log(getYoungest(people));

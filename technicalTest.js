/* 
Name: Julio César Moreno Guillén.
Date of development: 17 Aug 2022
Purpose of script: The purpose of the script is to filter an array of object by Status
 (All the rest of the documentation is in the definition of the "getFilteredObjects" method).

a. Add an object for yourself following a similar format
b. Put each object in an array so you have an array of objects (your choice how to do that).
c. Iterate through the array of objects adding the date the script was run to each object as favorite things may change in the future.
d. Console.log only active records with the Name, date, Favorite movie of each person.
e. Add a function that can sort the output by object property.
f. There may be a time where no Active records are found.
g. Include code that provides a message when that occurs.
*/

let rockyObj = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};
let miroslavObj = {
  Name: "Miroslav",
  "Favorite Food": "Sushi",
  "Favorite Movie": "American Psycho",
  Status: "Active",
};
let donnyObj = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};
let mattObj = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Active",
};

let JulioObj = {
  Name: "Freddy",
  "Favorite Food": "Barbacoa",
  "Favorite Movie": "Freddy vs Jason",
  Status: "Active",
};

/**
 * The function "getFilteredObjects" takes an array of objects, checks if there are any objects with a status of "Active", if there
 * are, it returns an array of objects with the name, favorite movie, and the current date. If there
 * are no objects with a status of "Active", it returns the string "There is no records active"
 * @param objectArray - This is the array of objects that you want to filter.
 * @returns an array of objects that have the status of active.
 */
function getFilteredObjects(objectArray) {
/* Filtering the array of objects and returning an array of objects that have a status of "Active" */
  let isThereActiveRecords = peopleArray.filter(
    (obj) => obj.Status === "Active"
  );

/* This is checking if the isThereActiveRecords is an array and if it has a length. */
  if (Array.isArray(isThereActiveRecords) && isThereActiveRecords.length) {
/* Adding a new property to the object called date and assigning the current date to it. */
    let updatedPeopleArray = peopleArray.map((people) => {
      let today = new Date();
      people.date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      return people;
    });

    /* Filtering the array of objects and returning an array of objects with a specific properties that have a status of "Active" */
    let filterPeopleArray = updatedPeopleArray
      .filter((people) => people.Status === "Active")
      .map((e) => ({
        Name: e.Name,
        "Favorite Movie": e["Favorite Movie"],
        date: e.date,
      }));
    return filterPeopleArray;
  } else return "There is no records active";
}

/**
 * The "OderDataByProperty" method takes an array of objects and a property name, and returns a new array of objects sorted by the
 * property name
 * @param arr - The array you want to sort.
 * @param property - The property to sort by.
 * @returns a sorted array.
 */
function OderDataByProperty(arr, property) {
  return arr.sort((a, b) => (a[property] > b[property] ? 1 : -1));
}

/**
 * Convert objects into an array of objects.
 */
const convertArrayObjects = (...objects) => objects;
const peopleArray = convertArrayObjects(
  rockyObj,
  miroslavObj,
  donnyObj,
  mattObj,
  JulioObj
);
const responseGetFilteredObjects = getFilteredObjects(peopleArray);
const responseOderDataByProperty = OderDataByProperty(
  responseGetFilteredObjects,
  "Name"
);

console.log(responseOderDataByProperty);

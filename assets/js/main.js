console.log('Main js loaded');

function getNames(users) {
  const names = [];
  for (let user of users) {
    names.push(user.name)
  }
  return names;
}

function getAges(users) {
  const ages = [];
  for (let user of users) {
    ages.push(user.age);
  }
  return ages;
}

function transformUser(users, transform) {
  const elements = [];
  for (let user of users) {
    elements.push(transform(user));
  }
  return elements;
}


Array.prototype.map = function (transform) {
  const elements = [];
  for (let element of this) {
    elements.push(transform(element));
  }
  return elements;
}


const users = [
  { name: 'Carlos', age: 32 },
  { name: 'Ana', age: 36 }
]

console.log(getNames(users));
console.log(getAges(users));


function getName(user) {
  return user.name;
}

const names = users.map((user) => user.name);

console.log(users);
console.log(names);


// []
// element: { name: 'Carlos', age: 32 }
// transform(element) => 'Carlos'
// ['Carlos']
// element: { name: 'Ana', age: 36 }
// transform(element) => 'Ana'
// ['Carlos', 'Ana']


const numbers = [1, 2, 3, 4];
const numberX2 = numbers.map((number) => { 
  const a = ''; 
  return a
})


function olderThan(users, age) {
  const filteredUsers = [];
  for (let user of users) {
    if (user.age > age) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}


function nameGraterThan(users, length) {
  const filteredUsers = [];
  for (let user of users) {
    if (user.name.length > length) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}


function iteration1(users, ageFrom, ageTo) {
  return users.map((user) => user)
    .filter(user => user.age >= ageFrom && user.age <= ageTo)
}


const olderThan33 = users.filter((user) => user.age > 33);
console.log(users);
console.log(olderThan33);


const students = [
    { name: 'Carlos', age: 25, grades: [] },
    { name: 'Ana', age: 31, grades: [] }
  ]
  .filter((student) => student.age > 30)
  .map((student) => student.name)
  .filter((name) => name.length > 10);

console.log(students);
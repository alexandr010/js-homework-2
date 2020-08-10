var userObj = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  fullName: function () {
    return userObj.firstName + ' ' + userObj.lastName;
  }
};
console.log(userObj.fullName());

function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr());


function evenFn(n) {
  var arr = [];
  for (var i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(evenFn(20));

function weekFn(n) {
  switch (n) {
    case 1: return 'Понедельник';
    case 2: return 'Вторник';
    case 3: return 'Среда';
    case 4: return 'Четверг';
    case 5: return 'Пятница';
    case 6: return 'Суббота';
    case 7: return 'Воскресенье';
    default:
      return null;
  }
}

console.log(weekFn(1));

function ageClassification(n) {
  return n < 0 ? null :
    n >= 0 && n <= 24 ? 'детский возраст' :
      n >= 24 && n <= 44 ? 'молодой возраст' :
        n >= 44 && n <= 65 ? 'средний возраст' :
          n >= 65 && n <= 75 ? 'пожилой возраст' :
            n >= 75 && n <= 90 ? 'старческий возраст' :
              n >= 90 && n <= 122 ? 'долгожители' : null;
}

console.log(ageClassification(0));

function oddFn(n) {
  var arr = [];
  var i = 0;
  while (i++ < n) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(oddFn(20));


function mainFunc(a, b, callback) {
  if (callback && typeof callback === 'function'){
    return callback(a, b);
  }
  return false;
}

function cbPow (a, b) {
  return Math.pow(a, b);
}

function cbRandom (a, b) {
  return Math.ceil(Math.random() * (a - b + 1)) + b;
}

function cbAdd (a, b) {
  return a + b;
}
console.log(mainFunc(4, 5, cbRandom));
console.log(mainFunc(5, 5, cbPow));
console.log(mainFunc(5, 8, cbAdd));

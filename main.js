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

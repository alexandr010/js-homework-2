var userObj = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  fullname: function () {
    return userObj.firstName + ' ' + userObj.lastName;
  }
};
console.log(userObj.fullname());

function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr());

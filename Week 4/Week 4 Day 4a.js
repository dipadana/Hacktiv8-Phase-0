// Change Me
function changeMe(arr) {
    var person = [];
    for(var i = 0; i < arr.length; i++){
            person[i].firstName = arr[i][0];
            person[i].lastName = arr[i][1];
            person[i].gender = arr[i][2];
            person[i].age = 2019 - arr[i][3];
        }

    for(var j = 0; j < arr.length; j++){
        var fullname = j + '.' + person[i].firstName + person[i].lastName;
        console.log(fullname, person)
    }
}

  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
const student = {
    name: 'kalyan',
    age: 23,
    isActive: true,
    sex: 'male'
}

//convert this object into a string to be shared in local storage

const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString);

// localStorage.setItem('student', studentObjToString);

const toJSONStudent = JSON.parse(studentObjToString);

console.log(typeof toJSONStudent);


/*
for (let i=1; i<=20; i++) {
    if ((i%3 === 0) && (i%5 === 0)) {
        console.log(`Frontend Simplified ${i} is divisible by 3 and 5`)
    }
    else if(i%3 === 0){
        console.log(`Frontend ${i} is divisible by 3`)
    }
    else if (i%5 === 0) {
        console.log(`Simplified ${i} is divisible by 5`)
    }
    else {
        console.log(i)
    }
}*/
/*
let fullName = "Frontend Simplified"

for(i=0; i < fullName.length; ++i)
    console.log(fullName[i])
*/
/*
function convertCelsiusToFahrenheit(temperature) {
    // F = C x 1.8 + 32
    return (temperature * 1.8) + 32
}

console.log(convertCelsiusToFahrenheit(30))
*/

/*
let grades = ['A', 'A+', 'FAIL']
console.log(grades)
let newGrades = grades.filter(element => element !== 'FAIL')
console.log(newGrades)
*/
/*
let newGrades = grades.filter((element) => {
    console.log(element)
    if (element != 'FAIL') {
        return true;
    }
})
*/
/*
let grades2 = ['FAIL', 'FAIL', 'B']
console.log(grades2)
let newGrades2 = grades2.filter(element => element !== 'FAIL')
console.log(newGrades2)
let grades3 = ['FAIL']
console.log(grades3)
let newGrades3 = grades3.filter(element => element !== 'FAIL')
console.log(newGrades3)
*/ 
/*
let grades = ['A', 'A+', 'FAIL']
let newGrades = []
for(let i = 0; i < grades.length; ++i) {

    if (grades[i] !== 'FAIL'){
        newGrades.push(grades[i])
    }
}
console.log(newGrades)
*/

let arr = [1,4,9,16]

let newArray = arr.map(element => element * 100 )

console.log(newArray)

newArray.forEach((element, index) => arr[index] = element + 10)

console.log(arr)
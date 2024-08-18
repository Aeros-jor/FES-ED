
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

let fullName = "Frontend Simplified"

for(i=0; i < fullName.length; ++i)
    console.log(fullName[i])

function convertCelsiusToFahrenheit(temperature) {
    // F = C x 1.8 + 32
    return (temperature * 1.8) + 32
}

console.log(convertCelsiusToFahrenheit(30))

let grades = ['A', 'A+', 'FAIL']
console.log(grades)
let newGrades = grades.filter(element => element !== 'FAIL')
console.log(newGrades)

let newGrades = grades.filter((element) => {
    console.log(element)
    if (element != 'FAIL') {
        return true;
    }
})

let grades2 = ['FAIL', 'FAIL', 'B']
console.log(grades2)
let newGrades2 = grades2.filter(element => element !== 'FAIL')
console.log(newGrades2)
let grades3 = ['FAIL']
console.log(grades3)
let newGrades3 = grades3.filter(element => element !== 'FAIL')
console.log(newGrades3)


let grades = ['A', 'A+', 'FAIL']
let newGrades = []
for(let i = 0; i < grades.length; ++i) {

    if (grades[i] !== 'FAIL'){
        newGrades.push(grades[i])
    }
}
console.log(newGrades)

let arr = [1,4,9,16]
let newArray = arr.map(element => element * 100 )
console.log(newArray)
newArray.forEach((element, index) => arr[index] = element + 10)
console.log(arr)


//**************objects*********

let users = [
{
    userName: "epritchard",
    email: "edpritch55@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "aeros.jor",
    lessonsCompleted: [0, 1, 2, 3],
},
{
    userName: "jsmith",
    email: "jsmith22@gmail.com",
    password: "test321",
    subscriptionStatus: "VIP",
    discordId: "martug",
    lessonsCompleted: [0, 1, 2, 3]
},
{
    userName: "jdoe",
    email: "janed44@gmail.com",
    password: "test132",
    subscriptionStatus: "VIP",
    discordId: "bellow",
    lessonsCompleted: [0, 1, 2, 3]
}
];
console.log(users)

// console.log(users[2].lessonsCompleted)

function login(email, password) {
    for(let i = 0; i < users.length; ++i) {
        if (users[i].email === email){
            if (users[i].password === password) {
                console.log('Log in user')
            }
            else {
                console.log("Password is incorrect, try again.")
            }
            return;
        }
        console.log('Could not find a matching email.')

    }
}

login("edpritch55@gmail.com", "test123");

function registerUser(newUser) {

    const found = users.some(element => element.email === registerEmail)
    if (found) {
           console.log("Email address already exists. Please enter a different email address")
           return;
    }

        let newUser = {
        userName: registerUserName,
        email: registerEmail,
        password: registerPassword,
        subscriptionStatus: null,
        discordId: null,
        lessonsCompleted: []
        }


        users.push(newUser)       

}
*/

/*
registerUser({
    userName: "molly77",
    email: "molly@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "molly#009",
    lessonsCompleted: [0, 1]
});

console.log(users)


// First way of accessing an element
console.log(document.querySelector('.title'))
// 
// Second way of accessing an element
console.log(document.getElementById("title"))
//
// Change text in HTML element
document.querySelector(".title").innerHTML = "Frontend Simplified"
// Change CCS properties
document.querySelector(".title").style.fontSize = '36px' 
// Cool button method

function changeTitleToRed() {
    document.querySelector(".title").style.color = 'Red' 
    console.log('clicked')
}
*/


function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}
// Promises
// https://jsonplaceholder.typicode.com/users/1

//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

// UNLOCK A PROMISE
// Assign to a variable to create data in H1 tag
// const emailRef = document.querySelector(".email");

// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then(data => {
//         emailRef.innerHTML = data.email
//     });


// // 2. Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)  
//     emailRef.innerHTML = data.email
// }

// main();

// Variable to set HTML data in H1 tag
// const statusRef = document.querySelector('.status')

// // CREATE A PROMISE
// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("VIP");
//         }, 2000);
//     });
// }

// 1. Then
// getSubscriptionStatus().then(response => console.log(response))

// 2. Async/Await
// async function main() {
//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status
// }

// main()
const statusVIP = "VIP"
const statusFree = "FREE"
const statusRef = document.querySelector('.message')

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE") {
            resolve("show trailer")
        }
        else {
            reject("no video")
        };
    })
    // if (subscriptionStatus === "VIP") {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {resolve("show video");}, 2000);})      
    // }
    // else if (subscriptionStatus === "FREE") {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {resolve("show trailer");}, 2000);})
    // }
    // else {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {reject("no video");}, 2000);})
    // }
    };

async function main() {
    const statusMessage = (await getVideo(statusFree));
    statusRef.innerHTML = statusMessage;
    try {
        console.log(await getVideo(statusFree));        
    }
    catch (e) {
        console.log(e)
        statusRef.innerHTML = e;
    }
}

main()

// function hoursIntoSeconds(hours) {
//     return hours * 3600;
// }

// console.log(hoursIntoSeconds(24))

// function calcAreOfTriangle (base, height){
//     return (base * .5) * height
// }

// console.log(calcAreOfTriangle(20,20))

// function appendFrontend(textToAppend) {
//     return textToAppend + "Frontend"
// }

// console.log(appendFrontend("apple"))

// function sumGreaterThan100(num1, num2) {
//     return (num1 + num2 > 100)
// }

// console.log(sumGreaterThan100(10,70))

// function lessThanOrEqualToZero(number) {
//     return number <= 0 
// }

// console.log(lessThanOrEqualToZero(0))

// function oppositeBoolean(bool) {
//     return !bool
// }

// console.log(oppositeBoolean(false))
 
// function isNotZero (num) {
//     return num !== 0
// }

// console.log(isNotZero(0))

// function calcRemainder(num1, num2) {
//     return num1 % num2
// }

// console.log(calcRemainder(10,36))

// function isOdd(num1) {
//     return num1 % 2 !== 0
// }

// console.log(isOdd(742))

// function booleanInteger (num) {
//     return num % 2 === 0 ? 1 : -1
// }

// console.log(booleanInteger(6))

// function isLoggedInAndSubscribed (LoggedIn, subscriped) {
//     return LoggedIn === "LOGGED_IN" && subscriped === "SUBSCRIBED"
// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))


// falsy or truthy
// place a bang (!) at the beginning of the value. e.g. !0 will throw a true
// making the value a falsy
// two bangs (!!) at the beginning throw false if it's a falsy.

// function falsyOrTruthy (elem1, elem2) {
//     return (!elem1) ? elem1 : elem2
// }

// console.log(falsyOrTruthy("dog","Not Falsy"))

// Return the length of an array
// function arrLength(arr) {
//     return arr.length;
// }

// console.log(arrLength([1,2,3,4,5]))

// get the value of the last element of an array
// function lastArrayElement(arr) {
//     return arr[arr.length - 1]
// }

// console.log(lastArrayElement([1,2,3,4,5,6,7]))

// find the sum of an array

// function arrSum(arr){
//     let result = 0

//     for (let i = 0; i < arr.length; ++i){
//         result += arr[i]
//     }
//     return result
// }

// console.log(arrSum([500,40,30,2000,10]))

// add up the numbers from a single number
// given a number, add up all the numbers from one to the number
// that is given. e.g. 4 = 1+2+3+4 = 10

// function progressiveSum(number) {
//     let result = 0

//     for (let i = 1; i <= number; ++i){
//         result += i
//     }
//     return result
// }

// console.log(progressiveSum(3))

// calculate the time
// given a number in seconds, return this number in mm:ss format.
//
// function calcTime(seconds) {
//     let secondsRemaining = seconds % 60
//     if (secondsRemaining.toString().length === 1) {
//         secondsRemaining = '0' + secondsRemaining
//     }
//     let minutes = Math.floor(seconds / 60)
//     if (minutes.toString().length === 1) {
//         minutes = '0' + minutes
//     }
//     let newTime = minutes + ":" + secondsRemaining
//     return newTime
// }

// console.log(calcTime(300))

// Find the largest number in an array
//
// function largestNumberInArray(arr) {
//     return Math.max(...arr);

// }

// console.log(largestNumberInArray([22, 17, 44, 55, 98, 101, 3, 6, 87]))

// function largestNumberInArray(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; ++i) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(largestNumberInArray([100, 50, 250, 31, 58, 501]))

// reverse a string
// given a string, return the reveresed
// cannot reverse a string.
// must be converted to an array first.
// use the .split("") method to convert to array
// now use the array reverse method
// arr.reverse()
// then you need to convert the array back to a string
// use the .join("") method
//
// the simplist way is to chaing these three methods

// function reverseString (str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("this is cool"))

// function reverseString (str) {
//     let newString = ""

//     for (let i = str.length - 1; i >= 0; i--){
//         newString += str[i]
//     }
//     return newString
// }

// console.log(reverseString("Mr. Ed"))

// Reverse a string using recursion
// 


// function reverseString(str){
//     console.log(str)
//     if (str === ''){
//         return '';
//     }
//     else {
    
//         return reverseString(str.substr(1)) + str.charAt(0);

//     }
// }
// console.log(reverseString("Mr. Ed"))
//
// use an incrementing loop to reverse a string
//
// function reverseString(str){
//     let newString = ''
//     for (let i = 0; i < str.length; ++i){
//         newString = str[i] + newString
//     }
//     return newString
// }
// console.log(reverseString("Mr. Ed"))
//
// turn every element in an array to zeros
//
// Use the Map function
// function convertToZeros(arr) {
//     let newArray = []
//     return newArray = arr.map(element => 0)
// }
//
// function convertToZeros(arr) {
//     return arr.fill(0)
// }
// function convertToZeros(arr) {

//     for (let i = 0; i < arr.length; i++){
//         arr[i] = 0
//     }
//     return arr
// }
// console.log(convertToZeros([1,2,3,4,5]))
//
// Filter out all the "apples" in an array
//
// function removeApples(array, strItemToRemove) {
//     array.forEach((item, index) => {
//         if (item === strItemToRemove){
//             array.splice(index,1);
//         };
//     });
//     return array
// }
//let fruitArray = ['Tomato', 'Orange', 'Banana']
//let fruitArray = ['Banana', 'Apple', 'Orange', 'Apple']
// let fruitArray = ['Banana', 'Orange', 'Apple']

// //
// // Use an Array filter
// //
// function removeApples(array, strItemToRemove) {
//     let filtered = array.filter(element => element !== strItemToRemove)
//     return filtered
// }
// console.log([removeApples(fruitArray, 'Banana')])
//
// for loop code only remove the apple
//
// let fruitArray = ['Banana', 'Apple', 'Orange', 'Apple']

// function removeApples(array, strItemToRemove) {
//     let noApples = []
//     for (let i = 0; i < array.length; ++i) {
//         if(array[i] !== strItemToRemove) {
//             noApples.push(array[i])
//         }
//     }
//     return noApples
// }
// console.log([removeApples(fruitArray, 'Apple')])
//
// Filter out all the Falsy values
//
// let falsyArray = ["", [], 0, null, undefined, "0"]
// //let falsyArray = ['Banana', 'Apple', 'Orange', 'Apple', false]
// function removeApples(array) {
//     return array.filter(element => !!element !== false)
// }
// function removeApples(array) {
//     let noFalsyArray = []
//     for (let i = 0; i < array.length; ++i) {
//         if (!!array[i] !== false)
//             noFalsyArray.push(array[i])
//     }
//     return noFalsyArray
// }
//let truthyFalsy = [500, 0, "David", "", [], null]
// function convertToBoolean(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         !!arr[i] ? arr[i] = true : arr[i] = false
//     }
//     return arr
// }

// function convertToBoolean(arr) {
//     return arr.map(element => !!element)
// }

// console.log(convertToBoolean(truthyFalsy))


// ********************* HARD CHALLENGES ********************
//
// Show Rating - Given a rating, display a star (*) for each full star and a full-stop (.) for 
// each half rating.
// showRating(3) --> "***"
// showRating(4.5) --> "****."
// showRating(.5) --> (.)
//
// function showRating(rating) {
//     let stars = ""
//     if (rating > 5) {
//         console.log("Enter star rating 1 - 5")
//         return
//     }
//     for (let i = 0; i < Math.floor(rating); ++i) {
//         stars += "*"
//     }
//     if((rating - Math.floor(rating) > 0)) {
//         stars += "."
//     }
//     return stars
// }

// console.log(showRating(3.5))
// let priceArray = [20,40,10,30,50,10]

// function sortLowToHigh (arr) {
//     arr = arr.sort( (a, b) =>  a - b )

//     return arr
// }

// console.log(sortLowToHigh(priceArray))
//
// Sort by highest to lowest price - array objects. This is a JSON format
// https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
// let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
// console.log(sortedCars);
// let priceArray = [{id: 1, price: 50}, {id: 2, price: 30}, {id: 3, price: 60}, {id: 4, price: 10}]
// function sortHighToLow(prices){
//     return prices.sort((a, b) => (a.price - b.price));
// }

// console.log(sortHighToLow(priceArray))
//
// Promises practice
//
// https://www.youtube.com/watch?v=PoRJizFvM7s
// async js crash course - callbacks promises async await
//
// const posts = [
//     { title: 'post one', body: 'this is post one'},
//     { title: 'post two', body: 'this is post two'}
// ];

// function getPosts () {
// // using setTimeout to mimick server call latency
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000);    
// }


// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// createPost({ title: 'Post three', body: 'This is post three'}, getPosts );

// 
// Get posts from https://jsonplaceholder.typicode.com/posts for userId 4
// Find all posts by a single user
// API call
//
// async function postsByUser(userId) {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    
//     const data = await promise.json();
//     let userRecords = data.filter(element => element.userId === userId)

//     console.log(userRecords)

// }

// postsByUser(4);
//

// 
// async function incompleteTodos(notCompleted) {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
    
//     const data = await promise.json();
//     let userRecords = data.filter(element => element.completed === notCompleted)

//     console.log(userRecords)

// }

// incompleteTodos(false);
// Find first 6 incomplete todos
//

// async function firstSixIncomplete(notCompleted, limitRecordsTo) {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
    
//     const data = await promise.json();
//     let userRecords = data.filter((element, index) => 
//         element.completed === notCompleted && index < limitRecordsTo)
//     console.log(userRecords)

// }

// async function firstSixIncomplete(limitRecordsTo) {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
    
//     const data = await promise.json();
//     const userRecords = data.filter(element => 
//         !element.completed).slice(0,limitRecordsTo)

//     console.log(userRecords)

// }

// firstSixIncomplete(6);


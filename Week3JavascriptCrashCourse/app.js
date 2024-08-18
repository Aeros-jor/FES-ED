


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

async function firstSixIncomplete(limitRecordsTo) {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos');
    
    const data = await promise.json();
    const userRecords = data.filter(element => 
        !element.completed).slice(0,limitRecordsTo)

    console.log(userRecords)

}

firstSixIncomplete(6);


// console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))

// 1. Then

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
    })
})

// 2. Async/Await
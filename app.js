function getSubscriptionStatus() {
    return new Promise( (resolve, reject) => {
        resolve("VIP")
    }) 
}

// 1. Then
getSubscriptionStatus().then(response => console.log(response))


// 2. Async/await
async function main() {
    console.log(await getSubscriptionStatus())
}

main()
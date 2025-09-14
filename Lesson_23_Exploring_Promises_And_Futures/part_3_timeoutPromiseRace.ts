function timeoutPromise(ms: number): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(`Request timed out after ${ms} milliseconds`);
        }, ms);
    });
}

Promise.race([
    fetchUserData(1),
    timeoutPromise(2000) // 2-second timeout
])
.then(user => {
    console.log(`User fetched: ${user.name}`);
})
.catch(error => {
    console.log(`Error: ${error}`);
});

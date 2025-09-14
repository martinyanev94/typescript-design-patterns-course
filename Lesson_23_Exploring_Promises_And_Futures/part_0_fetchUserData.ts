function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("User not found");
            }
        }, 1000);
    });
}
fetchUserData(1)
    .then(user => {
        console.log(`User fetched: ${user.name}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

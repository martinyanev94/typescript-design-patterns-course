fetchUserData(2)
    .then(user => {
        console.log(`User fetched: ${user.name}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        console.log('Fetch operation complete.');
    });

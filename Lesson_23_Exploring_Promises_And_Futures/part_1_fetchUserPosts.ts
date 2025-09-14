function fetchUserPosts(userId: number): Promise<{ postId: number; title: string }[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { postId: 1, title: "Post One" },
                { postId: 2, title: "Post Two" },
            ]);
        }, 1000);
    });
}
fetchUserData(1)
    .then(user => {
        console.log(`User fetched: ${user.name}`);
        return fetchUserPosts(user.id); // Return the next promise
    })
    .then(posts => {
        console.log("User's Posts:");
        posts.forEach(post => console.log(`- ${post.title}`));
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

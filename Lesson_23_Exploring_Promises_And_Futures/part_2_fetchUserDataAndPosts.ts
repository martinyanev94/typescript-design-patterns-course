Promise.all([
    fetchUserData(1),
    fetchUserPosts(1)
])
.then(([user, posts]) => {
    console.log(`User fetched: ${user.name}`);
    console.log("User's Posts:");
    posts.forEach(post => console.log(`- ${post.title}`));
})
.catch(error => {
    console.log(`Error: ${error}`);
});

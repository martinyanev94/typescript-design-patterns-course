async function displayUserWithPosts(userId: number): Promise<void> {
    try {
        const user = await fetchUserData(userId);
        console.log(`User fetched: ${user.name}`);
        const posts = await fetchUserPosts(user.id);
        console.log("User's Posts:");
        posts.forEach(post => console.log(`- ${post.title}`));
    } catch (error) {
        console.log(`Error: ${error}`);
    } finally {
        console.log('Fetch operation complete.');
    }
}

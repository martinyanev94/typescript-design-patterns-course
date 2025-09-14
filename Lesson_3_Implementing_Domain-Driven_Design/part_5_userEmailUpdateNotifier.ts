eventBus.subscribe('UserEmailUpdated', (data) => {
    console.log(`User ID: ${data.userId} updated email to: ${data.newEmail}`);
});

// Simulate updating a user's email
const userId = 'C001';
const newEmail = 'alice.new@example.com';
eventBus.publish({ eventType: 'UserEmailUpdated', data: { userId, newEmail } });
// Outputs: User ID: C001 updated email to: alice.new@example.com

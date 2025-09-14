interface Feedback {
    name: string;
    email: string;
    message: string;
}
function handleFeedback(feedback: Feedback) {
    console.log(`Feedback received from ${feedback.name} (${feedback.email}): ${feedback.message}`);
}

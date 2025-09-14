function process(value: string | null) {
    console.log(value!.length); // Using non-null assertion
}
function process(value: string | null) {
    if (value !== null) {
        console.log(value.length); // Safe to access length
    } else {
        console.error("Received null value.");
    }
}

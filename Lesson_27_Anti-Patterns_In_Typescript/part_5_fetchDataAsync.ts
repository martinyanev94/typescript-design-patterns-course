async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

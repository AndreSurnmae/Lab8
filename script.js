// Creates an Promise that tries to fulfill it's promise, otherwise fail if it didn't fulfill the promise
async function fetchCatData() {
    try {
        // Fetches a random cat image from the json file that came from the URL
        const imageResponse = await fetch('https://api.thecatapi.com/v1/images/search');
        const imageData = await imageResponse.json();
        const catImageUrl = imageData[0].url;
        document.getElementById('cat-image').src = catImageUrl;

        // Fetches a random cat fact from the json file that came from the URL
        const factResponse = await fetch('https://catfact.ninja/fact');
        const factData = await factResponse.json();
        document.getElementById('cat-fact').innerText = factData.fact;
    } catch (error) { // If it fails to catch the data, it will prompt the user with this error message
        console.error('Error fetching cat data:', error);
    }
}
// A button with the id, "fetch-cat", that fetches a random cat image and fact when clicked 
document.getElementById('fetch-cat').addEventListener('click', fetchCatData);

// Fetches a random cat image and fact when the page loads
// If this wasn't here, the section where the image and fact should be would be empty with only the button, and an odd blank space
window.onload = fetchCatData;
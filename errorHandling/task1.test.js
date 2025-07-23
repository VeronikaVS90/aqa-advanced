const axios = require("axios");

async function fetchData() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/invalid-endpoint");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Error fetching data:", error.message);
        return error.message; 
    }
}

test("fetchData handles error correctly", async () => {
    const errorMessage = await fetchData();
    expect(errorMessage).toMatch(/Request failed with status code 404/);
});

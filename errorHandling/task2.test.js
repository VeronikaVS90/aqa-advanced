const axios = require("axios");
const AxiosMockAdapter = require("axios-mock-adapter");

async function fetchAlbumData() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums", {
        headers: {
            "X-App-Version": "1.0.0",
            "Authorization": "Bearer test-token"
        },
        params: {
            id: 5
        }
    });

    return response.data;
}

test("fetchAlbumData sends correct headers and params", async () => {
    const mock = new AxiosMockAdapter(axios);

    const mockResponse = [
        {
            userId: 1,
            id: 5,
            title: "eaque aut omnis a"
        }
    ];

    mock.onGet("https://jsonplaceholder.typicode.com/albums").reply(200, mockResponse);

    const data = await fetchAlbumData();

    expect(data).toEqual(mockResponse);

    const request = mock.history.get[0];
    expect(request.headers["X-App-Version"]).toBe("1.0.0");
    expect(request.headers["Authorization"]).toBe("Bearer test-token");
    expect(request.params.id).toBe(5);

    mock.restore();
});


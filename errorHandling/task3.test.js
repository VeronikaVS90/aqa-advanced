const axios = require("axios");
const AxiosMockAdapter = require("axios-mock-adapter");

async function getTodoById(id) {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: { id }
        });

        if (response.data.length === 0) {
            return { error: "Todo is not found" };
        }

        return response.data[0];
    } catch (error) {
        return { error: error.message };
    }
};

describe("Mocking Axios for todos", () => {
    const mock = new AxiosMockAdapter(axios);

    afterEach(() => {
        mock.reset(); 
    });

    test("should return todo data when request is successful", async () => {
        const mockTodo = {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        };

        mock.onGet("https://jsonplaceholder.typicode.com/todos", { params: { id: 1 } })
            .reply(200, [mockTodo]);

        const result = await getTodoById(1);

        expect(result).toEqual(mockTodo);
    });

    test("should return error message when todo is not found", async () => {
        mock.onGet("https://jsonplaceholder.typicode.com/todos", { params: { id: 999 } })
            .reply(200, []);

        const result = await getTodoById(999);

        expect(result).toEqual({ error: "Todo is not found" });
    });

    test("should handle network/server error", async () => {
        mock.onGet("https://jsonplaceholder.typicode.com/todos", { params: { id: 1 } })
            .reply(500); 

        const result = await getTodoById(1);

        expect(result).toHaveProperty("error");
        expect(result.error).toMatch(/Request failed with status code 500/);
    });
});

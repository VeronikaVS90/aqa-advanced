const axios = require("axios");

// interceptors
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  console.log("Request:", config.method.toUpperCase(), config.url);
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log("Response status:", response.status);
    return response;
  },
  (error) => {
    console.error("Error in response:", error.message);
    return Promise.reject(error);
  }
);

// tests

// GET(1)
test("Get all post list", async () => {
  const response = await api.get("/posts");
  console.log(response.data);
  expect(response.status).toEqual(200);
});

// GET(2)
test("All post IDs are unique", async () => {
  const response = await api.get("/posts");

  const ids = response.data.map(post => post.id);
  const uniqueIds = new Set(ids);

  expect(uniqueIds.size).toBe(ids.length);
});

// GET(3)
test("Each post contains userId, id, title, and body fields", async () => {
  const response = await api.get("/posts");

  const posts = response.data;

  posts.forEach(post => {
    expect(post).toHaveProperty("userId");
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
  });
});

// POST(4)
test("Create a new post", async () => {
  const response = await api.post("/posts", {
    title: "My post",
    body: "Hello! I have just written my new post.",
    userId: 1,
  });

  console.log(response.data);
  expect(response.status).toEqual(201);
});

// POST(5)
test("Create another new post", async () => {
  const response = await api.post("/posts", {
    title: "Another post",
    body: "Hello! I have just written another post.",
    userId: 1,
  });

  console.log(response.data);
  expect(response.status).toEqual(201);
    expect(response.data).toHaveProperty("userId");
    expect(response.data).toHaveProperty("id");
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
});

// POST(6)
test("Create a new todo", async () => {
  const response = await api.post("/todos", {
    title: "To do my automation homework",
    completed: true,
    userId: 1,
  });

  console.log(response.data);
  expect(response.status).toEqual(201);
});
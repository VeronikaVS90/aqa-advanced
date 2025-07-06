function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch todo");
        }
        return response.json();
    });
}

// function for fetching user
function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }
        return response.json();
    });
}

// Promise.all
Promise.all([fetchTodo(), fetchUser()])
  .then(([todo, user]) => {
    console.log("Promise.all result:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch(error => {
    console.error("Error with Promise.all:", error);
  });

// Promise.race
Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log("Promise.race result:");
    console.log(result);
  })
  .catch(error => {
    console.error("Error with Promise.race:", error);
  });
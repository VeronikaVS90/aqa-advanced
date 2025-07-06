// function for fetching todo
async function fetchTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
        throw new Error("Failed to fetch todo");
    }
    return await response.json();
}

// function for fetching user
async function fetchUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }
    return await response.json(); 
}

// function for running both requests
async function runRequests() {
    try {
      // Promise.all
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log("Promise.all result:");
      console.log("Todo:", todo);
      console.log("User:", user);
    } catch (error) {
      console.error("Error with Promise.all:", error.message);
    }
  
    try {
      // Promise.race
      const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
      console.log("Promise.race result:");
      console.log(firstResult);
    } catch (error) {
      console.error("Error with Promise.race:", error.message);
    }
  }
  
  runRequests();
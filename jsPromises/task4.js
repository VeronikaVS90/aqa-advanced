// class for todo
class TodoService {
    async fetchTodo() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error("Failed to fetch todo");
        }
        return await response.json();
    }
}

// class for user
class UserService {
    async fetchUser() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return await response.json();
    }
}
  
// function for running both requests
async function runRequests() {
    const todoService = new TodoService();
    const userService = new UserService();
  
    try {
      const [todo, user] = await Promise.all([
        todoService.fetchTodo(),
        userService.fetchUser()
      ]);
      console.log("Promise.all result:");
      console.log("Todo:", todo);
      console.log("User:", user);
    } catch (error) {
      console.error("Error with Promise.all:", error.message);
    }
  
    try {
      const firstResult = await Promise.race([
        todoService.fetchTodo(),
        userService.fetchUser()
      ]);
      console.log("Promise.race result:");
      console.log(firstResult);
    } catch (error) {
      console.error("Error with Promise.race:", error.message);
    }
  }
  
  runRequests();
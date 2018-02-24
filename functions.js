var todos = ['item 1', 'item 2', 'item 3']


// function to display todos//
function displayTodos() {
  console.log('My todos:', todos);
}

//this will run the function, print My todos//
displayTodos()

//function to add new todos, use .push//
function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

//to run function, add parameter to name new todo//
addTodo('new name for todo')

//function to change todo//
function changeTodo() {
   todos[0] = 
}

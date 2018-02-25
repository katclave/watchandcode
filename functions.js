var todos = ['item 1', 'item 2', 'item 3']


// function to display todos//
function displayTodos() {
  console.log('My todos:', todos);
}
//
// //this will run the function, print My todos//
displayTodos()
//
// //function to add new todos, use .push//
function addTodo(todo) { //needs paramater//
  todos.push(todo);
  displayTodos(); //can run function inside another function//
}
//
// //to run function, add parameter to name new todo.//
// //parameters are a way to customize a function//
addTodo('new name for todo')
//
// //function to change todo//
// //functions can take multiple parameters//
function changeTodo(position, newValue) {
   todos[position] = newValue; //this is updating value//
   displayTodos();
}

//when running function, be sure to include the 2 parameters//
changeTodo(3, 'item 4')

//function to delete todos.
//Use position of item as paramater and how many items to delete//
//Use .splice to delete//
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
//to run function; position and how many items//
deleteTodo(0,1)

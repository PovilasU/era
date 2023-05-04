/*
I)
1) create input field with a button
2) create function to add todo
3)create btn with fction to remove todo
4) save todo to localstorage array
5) add some styling maybe

II) maybe host website netlify?
vercel, railway has db
https://railway.app/



*/

const form = document.querySelector("form");
const errorDiv = document.querySelector("#error")


const error = (msg) => {
    errorDiv.innerHTML = msg ? msg : ""
}

const getTodos = () => {
    let result = localStorage.getItem('todos')
    if (!result) {
        result = [];
    } else {
        result = JSON.parse(result);
    }
    return result
}

const render = () => {
    let todosEl = document.querySelector("#todos");
    todosEl.innerHTML = ""
    getTodos().forEach((todo, todoIndex)=>{
        todosEl.innerHTML += `
            <div class="todo">
                ${todo.title} <br>
                ${todo.date} 
                <button id="remove-btn-${todoIndex}"
                onclick="removeTodo(${todoIndex})"
                >
                    Remove
                </button>
            </div>
        `
    })
}
//[0,1,2]
// .splice(index, number of items to delete, replacement*)

const removeTodo =(idx)=>{
    //get todos
    let todos = getTodos();
    // todos.splice(idx,1);
    let newTodos = []
    todos.forEach((todo, todoIndex) => {
        todoIndex !== idx ? newTodos.push(todo) : {}

    })
    saveTodos(newTodos);
    render();
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    error()
    let title = form.title.value;
    let todos = getTodos();

    // Form validation
        if (!title) {
            error("Title required")
            return
        }

        // .some()
        // .every()
        // .find()
        // .findIndex()
        if (todos.some(todo => todo.title === title)) {
            error("Todo already exists")
            return
        }

    //add to localstrg
    todos.push({
        title,
        date: new Date()
    });
    saveTodos(todos);
    render();
})

render();
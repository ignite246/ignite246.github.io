
let todoList = document.querySelector("#todoList");
const showTodo = () => {
    let todosString = localStorage.getItem("todos");

    let content = "";
    if (todosString == null) {
        console.log("Khali");
        content += "<h2 class='text-white text-center p-2 bg-darkred'>No Todos Present</h2>";
    }
    else if (JSON.parse(todosString).length == 0) {
        content += "<h2 class='text-white text-center p-2 bg-darkred'>No Todos Present</h2>";
    }
    else {
        let todosArray = JSON.parse(todosString);
        console.log(todosArray);
        for (let todoObj of todosArray) {
            content += `
            <div class="card  text-center mt-2">
                <div class="card-header"><h5>${todoObj.title}</h5></div>
                <div class="card-body">${todoObj.desc}</div>
                <div class="card-footer">
                    <button onclick="editTodo(${todoObj.id})" class="btn btn-sm btn-outline-warning"><i class="far fa-edit"></i></button>
                    <button onclick="deleteTodo(${todoObj.id})" class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            `;
        }
    }
    todoList.innerHTML = content;
}

showTodo();

let todoSaveBtn = document.querySelector("#todoSaveBtn");

todoSaveBtn.addEventListener("click", () => {

    let title = document.querySelector("#title").value;
    let desc = document.querySelector("#desc").value;

    console.log(title, desc);

    //localStorage.setItem(todos,[{},{},{}])

    //make an Object

    let todoObj = {
        title: title,
        desc: desc,
        id: Math.floor(Math.random() * 1000)
    }
    console.log(todoObj);

    let todosArray = [];    //Array of objects
    let localTodos = localStorage.getItem("todos");  //Array of objects , but in stringfied, so need to parse into JS Object/Array
    if (localTodos != null) {
        todosArray = JSON.parse(localTodos);
    }

    todosArray.push(todoObj);

    localStorage.setItem("todos", JSON.stringify(todosArray));

    showTodo();
});

const deleteTodo = (id) => {
    console.log(id);
    let todosString = localStorage.getItem("todos");
    let todosArray = JSON.parse(todosString);

    let updated = todosArray.filter((todoObj) => {
        return todoObj.id !== id
    });

    localStorage.setItem("todos", JSON.stringify(updated));
    showTodo();
}

const editTodo = (id) => {
    console.log("Editing...", id);
}
//selectors
    
    var todoInput = document.querySelector(".todo-input");
    var todoButton = document.querySelector(".todo-btn");
    var todoList = document.querySelector(".todo-list");

//Event Listearns
   
    todoButton.addEventListener("click" , addTodo);
    todoList.addEventListener("click" , deletechek);

//function one
    
    function addTodo(event)
{
    event.preventDefault();
    
    //TodoDiv
    
    var todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //create check mark button

    var completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //create trash button

    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append todo list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}

//function two

    function deletechek(e)
{
    var item = e.target;

        //delete todo
        if(item.classList[0] === "trash-btn")
    {
        var todo = item.parentElement;
        todo.remove();
    }

        //delete todo
        if(item.classList[0] === "complete-btn")
    {
        var todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
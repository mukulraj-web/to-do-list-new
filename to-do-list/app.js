const inputArea = document.querySelector(".search input")
const button = document.querySelector(".search button")
const  taskListContainer = document.querySelector(".taskList")



button.addEventListener('click',()=>{
    const text = inputArea.value 

    if (text === ''){
        alert("Please enter a task")
        return
    }
    const taskItem = document.createElement("div")
    taskItem.classList.add("taskItem")

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    taskItem.appendChild(checkBox)

    const taskTextElement = document.createElement("span")
    taskTextElement.textContent = text
    taskItem.appendChild(taskTextElement)

    taskListContainer.appendChild(taskItem)

    const deleteBtn = document.createElement("button")
   deleteBtn.classList.add("delete")
   taskItem.appendChild(deleteBtn)


    inputArea.value = ''
   checkBox.addEventListener('change',()=>{
    if(checkBox.checked){
        taskTextElement.classList.add("checked")
        
    }
    else {
        taskTextElement.classList.remove("checked")
    }
    saveTask()
   })
   deleteBtn.addEventListener('click',()=>{
    taskItem.remove()
    saveTask()
   })
   
  
  
})
function saveTask(){
    const tasks = [];
    const taskItems = document.querySelectorAll(".taskItem")
    taskItems.forEach(taskItem => {
        const taskText = taskItem.querySelector("span").textContent
        const isCompleted = taskItem.querySelector("input").checked
        tasks.push({text:taskText,completed:isCompleted})

    });
    console.log(tasks)
    localStorage.setItem("tasks",JSON.stringify(tasks))

}

function loadTask(){
    const storedTask = localStorage.getItem("tasks")
    if(storedTask){
        const tasks =JSON.parse(storedTask)

        tasks.forEach(task=>{
            const taskItem = document.createElement("div")
    taskItem.classList.add("taskItem")

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.checked = task.completed
    taskItem.appendChild(checkBox)

    const taskTextElement = document.createElement("span")
    taskTextElement.textContent = task.text
    taskItem.appendChild(taskTextElement)

    if(task.completed){
        taskTextElement.classList.add("checked")
    }

    taskListContainer.appendChild(taskItem)

     const deleteBtn = document.createElement("button")
   deleteBtn.classList.add("delete")
   taskItem.appendChild(deleteBtn)
   


   checkBox.addEventListener('change',()=>{
    if(checkBox.checked){
        taskTextElement.classList.add("checked")
    }
    else {
        taskTextElement.classList.remove("checked")
    }
    saveTask()
   })

   deleteBtn.addEventListener('click',()=>{
    taskItem.remove()
    saveTask()
   })
   


        })
    }
}
loadTask()
































const taskText = document.getElementById("taskText");
const taskPriority = document.getElementById("taskPriority");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const total = document.getElementById("total");
const completed = document.getElementById("completed");

let totalTasks = 0;
let completedTasks = 0;

addTask.addEventListener("click", function(){

if(taskText.value === "")
{
alert("Please enter a task");
return;
}

const li = document.createElement("li");
li.classList.add(taskPriority.value);

const taskInfo = document.createElement("div");
taskInfo.classList.add("task-info");
taskInfo.innerHTML = "<strong>"+taskText.value+"</strong><small>Priority: "+taskPriority.value+"</small>";

const btnGroup = document.createElement("div");
btnGroup.classList.add("buttons");

const completeBtn = document.createElement("button");
completeBtn.innerText = "✓";
completeBtn.classList.add("completeBtn");

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "✕";
deleteBtn.classList.add("deleteBtn");

completeBtn.onclick = function(){

if(!li.classList.contains("completed"))
{
li.classList.add("completed");
completedTasks++;
completed.innerText = completedTasks;
}
else
{
li.classList.remove("completed");
completedTasks--;
completed.innerText = completedTasks;
}

}

deleteBtn.onclick = function(){
taskList.removeChild(li);
totalTasks--;
total.innerText = totalTasks;

if(li.classList.contains("completed"))
{
completedTasks--;
completed.innerText = completedTasks;
}
}

btnGroup.appendChild(completeBtn);
btnGroup.appendChild(deleteBtn);

li.appendChild(taskInfo);
li.appendChild(btnGroup);

taskList.appendChild(li);

totalTasks++;
total.innerText = totalTasks;

taskText.value="";

});

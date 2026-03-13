document.getElementById("taskForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let taskInput = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;

    let li = document.createElement("li");

    li.innerHTML = taskInput + " (" + priority + ")";

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskForm").reset();
});
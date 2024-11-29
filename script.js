let input = document.getElementById("task-inp");
let addBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

addBtn.addEventListener("click",() => {
    if (input.value.trim() !== "") {
        
        let task = input.value;
        let li = document.createElement("li");
        let checkBox = `<input type="checkbox">`;
        li.innerHTML = checkBox + task + "<button type='button'>×</button>" ;
        taskList.appendChild(li);
        input.value = "";
        console.log(task);
    }
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addBtn.click();
    }
});
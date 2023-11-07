// Lấy các phần tử HTML
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Thêm công việc mới khi nhấn nút "Add"
addButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            ${taskText}
            <button class="delete">Delete</button>
        `;
    taskList.appendChild(listItem);
    taskInput.value = "";
  }
});

// Xóa công việc khi nhấn nút "Delete"
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

let input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const listContainer = document.getElementById('list');



function createTask() {
  const inputValue = input.value.trim();
  if (inputValue === "") {
    alert('null values');

  } else if (input.length <= 2) {
    return alert('small character please enter grater than 2');
  }
  const li = document.createElement('li');
  const lineThrough = li.textContent = inputValue
  const dele = document.createElement('i');
  dele.className = "fas fa-trash deleBtn";
  li.appendChild(dele);
  listContainer.append(li);
  input.value = ""
  dele.addEventListener('click', () => {
    li.remove()
  })
}

addBtn.addEventListener('click', createTask);
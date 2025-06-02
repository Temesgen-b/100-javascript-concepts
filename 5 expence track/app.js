const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total');



// event Listener
let total = 0;
expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value)
    if (description && amount > 0) {
        addExpense(description, amount);
        descriptionInput.value = '';
        amountInput.value = '';
    }
})

function addExpense(description, amount) {
    const li = document.createElement('li');
    li.innerHTML = `
    <p> ${description}: $ ${amount.toFixed(2)}</p>
    <button class ='delete-btn'>delete</button> 
    `;
    expenseList.append(li);
    total += amount;
    update();
    
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener("click", () => {
        expenseList.removeChild(li);
        total -= amount;
        update();
    });
}

function update() {
    totalDisplay.textContent = `total $ ${total.toFixed(2)}`;
}


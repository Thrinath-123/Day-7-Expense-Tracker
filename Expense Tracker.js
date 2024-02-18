let expenses = [];

function addExpense() {
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (date && category && description && !isNaN(amount)) {
        const expense = { date, category, description, amount };
        expenses.push(expense);
        renderExpenseList();
        calculateTotalExpense();
        clearInputFields();
    } else {
        alert('Please fill in all fields and make sure "Amount" is a valid number.');
    }
}

function renderExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <div>Date: ${expense.date}</div>
            <div>Category: ${expense.category}</div>
            <div>Description: ${expense.description}</div>
            <div>Amount: $${expense.amount.toFixed(2)}</div>
        `;
        expenseList.appendChild(expenseItem);
    });
}

function calculateTotalExpense() {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function clearInputFields() {
    document.getElementById('date').value = '';
    document.getElementById('category').value = '';
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

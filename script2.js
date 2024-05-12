
document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalExpense = document.getElementById('total-expense');
    const expenseChart = document.getElementById('expense-chart').getContext('2d');
    const recommendations = document.getElementById('recommendations');
    const taxesSection = document.getElementById('taxes');
    const salaryInput = document.getElementById('salary');
    const calculateTaxBtn = document.getElementById('calculate-tax-btn');
    const taxInfo = document.getElementById('tax-info');
    let totalAmount = 0;
    let expenses = [];
    let myChart;

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        totalAmount += amount;
        const formattedAmount = amount.toFixed(2);
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <strong>Description:</strong><span>${description}</span>, 
            <strong>Amount:</strong> <span>₹${formattedAmount}</span>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        `;
        expenseList.appendChild(expenseItem);

        totalExpense.textContent = `Total Expense: ₹${totalAmount.toFixed(2)}`;

        expenses.push({ description, amount });

        updateChart();
        generateRecommendations();
        calculateTaxes();

        // Clear input fields after adding expense
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';

        // Add event listeners for delete and edit buttons
        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const expenseIndex = Array.from(expenseList.children).indexOf(expenseItem);
                totalAmount -= expenses[expenseIndex].amount;
                totalExpense.textContent = `Total Expense: ₹${totalAmount.toFixed(2)}`;
                expenses.splice(expenseIndex, 1);
                expenseList.removeChild(expenseItem);
                updateChart();
                generateRecommendations();
                calculateTaxes();
            });
        });

        const editBtns = document.querySelectorAll('.edit-btn');
        editBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                enableEditForm(expenseItem);
            });
        });
    });

    calculateTaxBtn.addEventListener('click', function () {
        calculateTaxes();
    });

    function updateChart() {
        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(expenseChart, {
            type: 'pie',
            data: {
                labels: expenses.map(expense => expense.description),
                datasets: [{
                    label: 'Expenses',
                    data: expenses.map(expense => expense.amount),
                    backgroundColor: expenses.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`),
                }]
            },
            options: {
                animation: {
                    animateRotate: true,
                    animateScale: true
                }
            }
        });
    }

    function generateRecommendations() {
        recommendations.innerHTML = '<h2>Recommendations</h2>';
        if (totalAmount > 1000) {
            recommendations.innerHTML += '<p>You have exceeded your budget. Consider cutting down on unnecessary expenses.</p>';
        } else {
            recommendations.innerHTML += '<p>You are within your budget. Good job!</p>';
        }
    }

    function calculateTaxes() {
        const salary = parseFloat(salaryInput.value);
        if (isNaN(salary) || salary <= 0) {
            alert('Please enter a valid salary.');
            return;
        }
    
        let taxRate;
        let taxesDue;
    
        if (salary <= 900000) {
            taxRate = 0.1;
        } else if (salary <= 1200000) {
            taxRate = 0.15;
        } else if (salary <= 1500000) {
            taxRate = 0.2;
        } else {
            taxRate = 0.3;
        }
    
        taxesDue = salary * taxRate;
        taxInfo.innerHTML = `<h2>Tax Information</h2><p>Taxes due: ₹${taxesDue.toFixed(2)}</p>`;
    }

    function enableEditForm(expenseItem) {
    const elementToEdit = expenseItem.querySelectorAll("span");
    const descriptionElement = elementToEdit[0];
    const amountElement = elementToEdit[1];

    descriptionElement.contentEditable = true;
    amountElement.contentEditable = true;

    const rangeDesc = document.createRange();
    const selectionDesc = window.getSelection();
    rangeDesc.selectNodeContents(descriptionElement);
    rangeDesc.collapse(false);
    selectionDesc.removeAllRanges();
    selectionDesc.addRange(rangeDesc);

    const rangeAmount = document.createRange();
    const selectionAmount = window.getSelection();
    rangeAmount.selectNodeContents(amountElement);
    rangeAmount.collapse(false);
    selectionAmount.removeAllRanges();
    selectionAmount.addRange(rangeAmount);

    const editBtn = expenseItem.querySelector('.edit-btn');
    editBtn.textContent = 'Save';
    editBtn.classList.remove('edit-btn');
    editBtn.classList.add('save-btn');

    // Save handler function
    function saveHandler() {
        // Disable editing
        descriptionElement.contentEditable = false;
        amountElement.contentEditable = false;

        // Update the expense
        const index = Array.from(expenseList.children).indexOf(expenseItem);
        const newDescription = descriptionElement.textContent.trim();
        const newAmount = parseFloat(amountElement.textContent.trim().substring(1));

        // Update the expense in the expenses array
        expenses[index].description = newDescription;
        expenses[index].amount = newAmount;

        // Recalculate total expenses
        totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
        totalExpense.textContent = `Total Expense: ₹${totalAmount.toFixed(2)}`;

        // Update the chart
        updateChart();

        // Generate recommendations and calculate taxes
        generateRecommendations();
        calculateTaxes();

        // Restore the edit button
        editBtn.textContent = 'Edit';
        editBtn.classList.remove('save-btn');
        editBtn.classList.add('edit-btn');

        // Remove saveHandler
        editBtn.removeEventListener('click', saveHandler);

        // Remove delete and edit button event listeners
        deleteBtn.removeEventListener('click', deleteHandler);
        editBtn.removeEventListener('click', editHandler);

        // Add event listener for edit button
        editBtn.addEventListener('click', function () {
            enableEditForm(expenseItem);
        });

        // Add event listener for delete button
        deleteBtn.addEventListener('click', function () {
            deleteExpense(expenseItem);
        });
    }

    // Add save handler to the save button
    editBtn.addEventListener('click', saveHandler);
}

    
    
    
});

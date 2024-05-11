// script2.js
console.log("DOMContentLoaded event fired!");
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
        expenseItem.innerHTML = `<strong>Description:</strong> ${description}, <strong>Amount:</strong> $${formattedAmount}`;
        expenseList.appendChild(expenseItem);

        totalExpense.textContent = `Total Expense: $${totalAmount.toFixed(2)}`;

        expenses.push({ description, amount });

        updateChart();
        generateRecommendations();
        calculateTaxes();

        // Clear input fields after adding expense
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    });

    calculateTaxBtn.addEventListener('click', function () {
        calculateTaxes();
    });

    function updateChart() {
        console.log("Updating chart...");
        // Limit to the latest two expenses
        const latestExpenses = expenses.slice(-2);
        const labels = latestExpenses.map(expense => expense.description);
        const amounts = latestExpenses.map(expense => expense.amount);
        const backgroundColors = latestExpenses.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`);

        const data = {
            labels: labels,
            datasets: [{
                label: 'Expenses',
                data: amounts,
                backgroundColor: backgroundColors
            }]
        };

        // Update or create the chart
        if (myChart) {
            myChart.data = data;
            myChart.update();
        } else {
            myChart = new Chart(expenseChart, {
                type: 'pie',
                data: data,
                options: {
                    animation: {
                        animateRotate: true,
                        animateScale: true
                    }
                }
            });
        }
    }

    function generateRecommendations() {
        console.log("Generating recommendations...");
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
        taxInfo.innerHTML = `<h2>Tax Information</h2><p>Taxes due: $${taxesDue.toFixed(2)}</p>`;
    }
});

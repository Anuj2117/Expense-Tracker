
// console.log("DOMContentLoaded event fired!");
// document.addEventListener('DOMContentLoaded', function () {
//     const expenseForm = document.getElementById('expense-form');
//     const expenseList = document.getElementById('expense-list');
//     const totalExpense = document.getElementById('total-expense');
//     const expenseChart = document.getElementById('expense-chart').getContext('2d');
//     const recommendations = document.getElementById('recommendations');
//     const taxesSection = document.getElementById('taxes');
//     const salaryInput = document.getElementById('salary');
//     const calculateTaxBtn = document.getElementById('calculate-tax-btn');
//     const taxInfo = document.getElementById('tax-info');
//     let totalAmount = 0;
//     let expenses = [];
//     let myChart;

//     expenseForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const description = document.getElementById('description').value;
//         const amount = parseFloat(document.getElementById('amount').value);

//         if (isNaN(amount) || amount <= 0) {
//             alert('Please enter a valid amount.');
//             return;
//         }

//         totalAmount += amount;
//         const formattedAmount = amount.toFixed(2);
//         const expenseItem = document.createElement('div');
//         expenseItem.classList.add('expense-item');
//         expenseItem.innerHTML = `<strong>Description:</strong> ${description}, <strong>Amount:</strong> $${formattedAmount}`;
//         expenseList.appendChild(expenseItem);

//         totalExpense.textContent = `Total Expense: $${totalAmount.toFixed(2)}`;

//         expenses.push({ description, amount });

//         updateChart();
//         generateRecommendations();
//         calculateTaxes();

//         // Clear input fields after adding expense
//         document.getElementById('description').value = '';
//         document.getElementById('amount').value = '';
//     });

//     calculateTaxBtn.addEventListener('click', function () {
//         calculateTaxes();
//     });

//     function updateChart() {
//         console.log("Updating chart...");
//         // Limit to the latest two expenses
//         const latestExpenses = expenses.slice(-2);
//         const labels = latestExpenses.map(expense => expense.description);
//         const amounts = latestExpenses.map(expense => expense.amount);
//         const backgroundColors = latestExpenses.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`);

//         const data = {
//             labels: labels,
//             datasets: [{
//                 label: 'Expenses',
//                 data: amounts,
//                 backgroundColor: backgroundColors
//             }]
//         };

//         // Update or create the chart
//         if (myChart) {
//             myChart.data = data;
//             myChart.update();
//         } else {
//             myChart = new Chart(expenseChart, {
//                 type: 'pie',
//                 data: data,
//                 options: {
//                     animation: {
//                         animateRotate: true,
//                         animateScale: true
//                     }
//                 }
//             });
//         }
//     }

//     function generateRecommendations() {
//         console.log("Generating recommendations...");
//         recommendations.innerHTML = '<h2>Recommendations</h2>';
//         if (totalAmount > 1000) {
//             recommendations.innerHTML += '<p>You have exceeded your budget. Consider cutting down on unnecessary expenses.</p>';
//         } else {
//             recommendations.innerHTML += '<p>You are within your budget. Good job!</p>';
//         }
//     }

//     function calculateTaxes() {
//         const salary = parseFloat(salaryInput.value);
//         if (isNaN(salary) || salary <= 0) {
//             alert('Please enter a valid salary.');
//             return;
//         }
    
//         let taxRate;
//         let taxesDue;
    
//         if (salary <= 900000) {
//             taxRate = 0.1;
//         } else if (salary <= 1200000) {
//             taxRate = 0.15;
//         } else if (salary <= 1500000) {
//             taxRate = 0.2;
//         } else {
//             taxRate = 0.3;
//         }
    
//         taxesDue = salary * taxRate;
//         taxInfo.innerHTML = `<h2>Tax Information</h2><p>Taxes due: $${taxesDue.toFixed(2)}</p>`;
//     }
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const expenseForm = document.getElementById('expense-form');
//     const expenseList = document.getElementById('expense-list');
//     const totalExpense = document.getElementById('total-expense');
//     const expenseChart = document.getElementById('expense-chart').getContext('2d');
//     const recommendations = document.getElementById('recommendations');
//     const taxesSection = document.getElementById('taxes');
//     const salaryInput = document.getElementById('salary');
//     const calculateTaxBtn = document.getElementById('calculate-tax-btn');
//     const taxInfo = document.getElementById('tax-info');
//     let totalAmount = 0;
//     let expenses = [];
//     let myChart;

//     expenseForm.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const description = document.getElementById('description').value;
//         const amount = parseFloat(document.getElementById('amount').value);

//         if (isNaN(amount) || amount <= 0) {
//             alert('Please enter a valid amount.');
//             return;
//         }

//         totalAmount += amount;
//         const formattedAmount = amount.toFixed(2);
//         const expenseItem = document.createElement('div');
//         expenseItem.classList.add('expense-item');
//         expenseItem.innerHTML = `
//             <strong>Description:</strong> ${description}, 
//             <strong>Amount:</strong> $${formattedAmount}
//             <button class="delete-btn">Delete</button>
//             <button class="edit-btn">Edit</button>
//         `;
//         expenseList.appendChild(expenseItem);

//         totalExpense.textContent = `Total Expense: $${totalAmount.toFixed(2)}`;

//         expenses.push({ description, amount });

//         updateChart();
//         generateRecommendations();
//         calculateTaxes();

//         // Clear input fields after adding expense
//         document.getElementById('description').value = '';
//         document.getElementById('amount').value = '';

//         // Add event listeners for delete and edit buttons
//         const deleteBtns = document.querySelectorAll('.delete-btn');
//         deleteBtns.forEach(btn => {
//             btn.addEventListener('click', function () {
//                 const expenseIndex = Array.from(expenseList.children).indexOf(expenseItem);
//                 expenses.splice(expenseIndex, 1);
//                 expenseList.removeChild(expenseItem);
//                 updateChart();
//                 calculateTotalExpense();
//                 generateRecommendations();
//                 calculateTaxes();
//             });
//         });

//         const editBtns = document.querySelectorAll('.edit-btn');
//         editBtns.forEach(btn => {
//             btn.addEventListener('click', function () {
//                 // Handle edit functionality here
//                 // You can open a modal or a form for editing
//             });
//         });
//     });

//     calculateTaxBtn.addEventListener('click', function () {
//         calculateTaxes();
//     });

//     function updateChart() {
//         console.log("Updating chart...");
//         // Limit to the latest two expenses
//         const latestExpenses = expenses.slice(-2);
//         const labels = latestExpenses.map(expense => expense.description);
//         const amounts = latestExpenses.map(expense => expense.amount);
//         const backgroundColors = latestExpenses.map(() => `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`);

//         const data = {
//             labels: labels,
//             datasets: [{
//                 label: 'Expenses',
//                 data: amounts,
//                 backgroundColor: backgroundColors
//             }]
//         };

//         // Update or create the chart
//         if (myChart) {
//             myChart.data = data;
//             myChart.update();
//         } else {
//             myChart = new Chart(expenseChart, {
//                 type: 'pie',
//                 data: data,
//                 options: {
//                     animation: {
//                         animateRotate: true,
//                         animateScale: true
//                     }
//                 }
//             });
//         }
//     }

//     function generateRecommendations() {
//         console.log("Generating recommendations...");
//         recommendations.innerHTML = '<h2>Recommendations</h2>';
//         if (totalAmount > 1000) {
//             recommendations.innerHTML += '<p>You have exceeded your budget. Consider cutting down on unnecessary expenses.</p>';
//         } else {
//             recommendations.innerHTML += '<p>You are within your budget. Good job!</p>';
//         }
//     }

//     function calculateTaxes() {
//         const salary = parseFloat(salaryInput.value);
//         if (isNaN(salary) || salary <= 0) {
//             alert('Please enter a valid salary.');
//             return;
//         }
    
//         let taxRate;
//         let taxesDue;
    
//         if (salary <= 900000) {
//             taxRate = 0.1;
//         } else if (salary <= 1200000) {
//             taxRate = 0.15;
//         } else if (salary <= 1500000) {
//             taxRate = 0.2;
//         } else {
//             taxRate = 0.3;
//         }
    
//         taxesDue = salary * taxRate;
//         taxInfo.innerHTML = `<h2>Tax Information</h2><p>Taxes due: $${taxesDue.toFixed(2)}</p>`;
//     }
// });

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
            <strong>Description:</strong> ${description}, 
            <strong>Amount:</strong> $${formattedAmount}
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        `;
        expenseList.appendChild(expenseItem);

        totalExpense.textContent = `Total Expense: $${totalAmount.toFixed(2)}`;

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
                totalExpense.textContent = `Total Expense: $${totalAmount.toFixed(2)}`;
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
        taxInfo.innerHTML = `<h2>Tax Information</h2><p>Taxes due: $${taxesDue.toFixed(2)}</p>`;
    }

    // function enableEditForm(expenseItem) {
    //     const description = expenseItem.querySelector('strong').textContent;
    //     const amount = parseFloat(expenseItem.querySelector('strong').nextSibling.textContent.trim().substring(1));

    //     document.getElementById('description').value = description;
    //     document.getElementById('amount').value = amount;

    //     expenseList.removeChild(expenseItem);

    //     // Remove previous event listeners
    //     expenseForm.removeEventListener('submit', expenseSubmitHandler);

    //     // Replace submit event listener with edit handler
    //     expenseForm.addEventListener('submit', function editHandler(event) {
    //         event.preventDefault();

    //         const newDescription = document.getElementById('description').value;
    //         const newAmount = parseFloat(document.getElementById('amount').value);

    //         if (isNaN(newAmount) || newAmount <= 0) {
    //             alert('Please enter a valid amount.');
    //             return;
    //         }

    //         totalAmount += newAmount;
    //         totalExpense.textContent = `Total Expense: $${totalAmount.toFixed(2)}`;

    //         expenses.push({ newDescription, newAmount });

    //         updateChart();
    //         generateRecommendations();
    //         calculateTaxes();

    //         // Clear input fields after adding expense
    //         document.getElementById('description').value = '';
    //         document.getElementById('amount').value = '';

    //         // Remove the edit handler to avoid multiple submissions
    //         expenseForm.removeEventListener('submit', editHandler);
    //         // Re-attach the original submit handler
    //         expenseForm.addEventListener('submit', expenseSubmitHandler);
    //     });
    // }
    function enableEditForm(expenseItem) {
        const descriptionElement = expenseItem.querySelector('strong');
        const amountElement = expenseItem.querySelector('strong').nextSibling;
    
       
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
    
        
        editBtn.addEventListener('click', function saveHandler() {
            // Disable editing
            descriptionElement.contentEditable = false;
            amountElement.contentEditable = false;
    
            // Update
            const index = Array.from(expenseList.children).indexOf(expenseItem);
            expenses[index].description = descriptionElement.textContent.trim();
            expenses[index].amount = parseFloat(amountElement.textContent.trim().substring(1));
    
           //new total
            totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
            totalExpense.textContent = `Total Expense: ₹${totalAmount.toFixed(2)}`;
            updateChart();
            generateRecommendations();
            calculateTaxes();
    
            // Restore the edit button
            editBtn.textContent = 'Edit';
            editBtn.classList.remove('save-btn');
            editBtn.classList.add('edit-btn');
            editBtn.removeEventListener('click', saveHandler);
            editBtn.addEventListener('click', function () {
                enableEditForm(expenseItem);
            });
        });
    }
    
    
});

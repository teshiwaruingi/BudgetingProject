// Modify script.js

let expenses = [];
let budgets = [];
let goals = [];

function addExpenseInput() {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter expense amount';
    document.getElementById('expenseInputs').appendChild(input);
    expenses.push(input);
}

function addBudgetInput() {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter budget amount';
    document.getElementById('budgetInputs').appendChild(input);
    budgets.push(input);
}

// Function to fetch and display expenses
function fetchExpenses() {
    // Fetch expenses from wherever they are stored
    // For now, let's assume expenses are stored in an array
    expenses = [100, 150, 200]; // Example expenses data

    // Display expenses on the dashboard
    const expenseListDiv = document.getElementById("expenseList");
    expenses.forEach((expense, index) => {
        const pElement = document.createElement("p");
        pElement.textContent = `Expense ${index + 1}: $${expense}`;
        expenseListDiv.appendChild(pElement);
    });
}

// Function to fetch and display budgets
function fetchBudgets() {
    // Fetch budgets from wherever they are stored
    // For now, let's assume budgets are stored in an array
    budgets = [500, 400, 600]; // Example budgets data

    // Display budgets on the dashboard
    const budgetListDiv = document.getElementById("budgetList");
    budgets.forEach((budget, index) => {
        const pElement = document.createElement("p");
        pElement.textContent = `Budget ${index + 1}: $${budget}`;
        budgetListDiv.appendChild(pElement);
    });
}

// Function to display the bar chart for expenses vs. budgets
function displayBarChart() {
    const expenseValues = expenses.reduce((acc, val) => acc + val, 0);
    const budgetValues = budgets.reduce((acc, val) => acc + val, 0);

    const barChartCanvas = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCanvas, {
        type: 'bar',
        data: {
            labels: ['Expenses', 'Budgets'],
            datasets: [{
                label: 'Amount',
                data: [expenseValues, budgetValues],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

// Call the displayGoalProgress() function after saving data
saveData();

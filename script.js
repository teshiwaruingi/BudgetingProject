// // Modify script.js
// //import sendSMS from "sms.js";

// let expenses = [];
// let budgets = [];
// let goals = [];
// // Example usage:
// const initialData = {
//     assets: {
//         savings: 1000,
//         checking: 2000,
//         investment: 5000
//     },
//     liabilities: {
//         loan: 3000,
//         credit_card: 1000
//     },
//     expenses: [500, 300, 200],
//     budgets: [1000, 800, 600]
// };

// function addAssetInput() {
//     const input = document.createElement('input');
//     input.type = 'number';
//     input.placeholder = 'Enter asset amount';
//     document.getElementById('assetInputs').appendChild(input);
//     assets.push(input);
// }

// function addLiabilityInput() {
//     const input = document.createElement('input');
//     input.type = 'number';
//     input.placeholder = 'Enter liability amount';
//     document.getElementById('liabilityInputs').appendChild(input);
//     liabilities.push(input);
// }

// function addExpenseInput() {
//     const input = document.createElement('input');
//     input.type = 'number';
//     input.placeholder = 'Enter expense amount';
//     document.getElementById('expenseInputs').appendChild(input);
//     expenses.push(input);
// }

// function addBudgetInput() {
//     const input = document.createElement('input');
//     input.type = 'number';
//     input.placeholder = 'Enter budget amount';
//     document.getElementById('budgetInputs').appendChild(input);
//     budgets.push(input);
// }

// // Function to fetch and display expenses
// function fetchExpenses() {
//     // Fetch expenses from wherever they are stored
//     // For now, let's assume expenses are stored in an array
//     expenses = [100, 150, 200]; // Example expenses data

//     // Display expenses on the dashboard
//     const expenseListDiv = document.getElementById("expenseList");
//     expenses.forEach((expense, index) => {
//         const pElement = document.createElement("p");
//         pElement.textContent = `Expense ${index + 1}: $${expense}`;
//         expenseListDiv.appendChild(pElement);
//     });
// }

// // Function to fetch and display budgets
// function fetchBudgets() {
//     // Fetch budgets from wherever they are stored
//     // For now, let's assume budgets are stored in an array
//     budgets = [500, 400, 600]; // Example budgets data

//     // Display budgets on the dashboard
//     const budgetListDiv = document.getElementById("budgetList");
//     budgets.forEach((budget, index) => {
//         const pElement = document.createElement("p");
//         pElement.textContent = `Budget ${index + 1}: $${budget}`;
//         budgetListDiv.appendChild(pElement);
//     });
// }

// // Function to display the bar chart for expenses vs. budgets
// function displayBarChart() {
//     const expenseValues = expenses.reduce((acc, val) => acc + val, 0);
//     const budgetValues = budgets.reduce((acc, val) => acc + val, 0);

//     const barChartCanvas = document.getElementById('barChart').getContext('2d');
//     new Chart(barChartCanvas, {
//         type: 'bar',
//         data: {
//             labels: ['Expenses', 'Budgets'],
//             datasets: [{
//                 label: 'Amount',
//                 data: [expenseValues, budgetValues],
//                 backgroundColor: ['#FF6384', '#36A2EB']
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     });
// }

// // Function to write data to the JSON file
// function saveData(data) {
//     const jsonData = JSON.stringify(data, null, 2); // Convert data to JSON format
//     fs.writeFileSync('finance_data.json', jsonData); // Write JSON data to file
// }

// // Function to read data from the JSON file
// // function loadData() {
// //     try {
// //         const jsonData = fs.readFileSync('finance_data.json'); // Read JSON data from file
// //         return JSON.parse(jsonData); // Parse JSON data to JavaScript object
// //     } catch (error) {
// //         console.error('Error reading data:', error);
// //         return {}; // Return an empty object if file read fails
// //     }
// // }

// // Call the displayGoalProgress() function after saving data
// //saveData();
// // Save initial data to the file
// saveData(initialData);
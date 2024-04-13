let assets = [];
let liabilities = [];

function addAssetInput() {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter asset amount';
    document.getElementById('assetInputs').appendChild(input);
    assets.push(input);
}

function addLiabilityInput() {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter liability amount';
    document.getElementById('liabilityInputs').appendChild(input);
    liabilities.push(input);
}

function saveData() {
    const assetValues = assets.map(input => parseFloat(input.value) || 0);
    const liabilityValues = liabilities.map(input => parseFloat(input.value) || 0);

    const netWorth = assetValues.reduce((acc, val) => acc + val, 0) - liabilityValues.reduce((acc, val) => acc + val, 0);
    document.getElementById('netWorth').innerHTML = `<h2>Net Worth: $${netWorth.toFixed(2)}</h2>`;

    updatePieChart(assetValues, liabilityValues);
}

function updatePieChart(assetValues, liabilityValues) {
    const totalAssets = assetValues.reduce((acc, val) => acc + val, 0);
    const totalLiabilities = liabilityValues.reduce((acc, val) => acc + val, 0);

    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Assets', 'Liabilities'],
            datasets: [{
                data: [totalAssets, totalLiabilities],
                backgroundColor: ['#36A2EB', '#FF6384']
            }]
        }
    });
}
// Get the <div> element by its id
const assetListDiv = document.getElementById("assetList");

// Iterate over the assets array and values array simultaneously
profile.assets.forEach((asset, index) => {
    // Create a new <p> element for each asset and its corresponding value
    const pElement = document.createElement("p");
    pElement.textContent = `${asset}: $${profile.values[index]}`;

    // Append the <p> element to the <div> element
    assetListDiv.appendChild(pElement);
});




document.getElementById('calculateButton').addEventListener('click', function() {
    let url = document.getElementById('website').value;
    calculateCO2(url);
});

function calculateCO2(url) {
    // Average data transfer for a webpage is 2MB
    const averageDataTransferMB = 2;

    // Convert MB to GB
    const averageDataTransferGB = averageDataTransferMB / 1024;

    // CO2 emission per GB data transfer (in kg) - assumed value
    const co2PerGB = 0.5;

    // Calculate CO2 emission
    const co2Emission = averageDataTransferGB * co2PerGB;

    // Display the result
    let result = document.getElementById('result');
    result.innerText = `Estimated CO2 emission for ${url} is ${co2Emission.toFixed(2)} kg.`;
}

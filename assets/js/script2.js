const apiUrl = 'https://admin.thegreenwebfoundation.org/api/v3/greencheck/';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('greenCheckForm');
    const apiResultDiv = document.getElementById('api-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const websiteUrl = document.getElementById('website-url').value.trim();

        fetch(`${apiUrl}${encodeURIComponent(websiteUrl)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data);
                displayApiResult(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayError(error.message);
            });
    });

    function displayApiResult(data) {
        if (data.green) {
            apiResultDiv.innerHTML = `<p style="color: #FFFFFF; font-size: 1.2rem;">${data.url} is hosted on green energy.</p>`;
        } else {
            apiResultDiv.innerHTML = `<p style="color: red; font-size: 1.2rem;">${data.url} is not hosted on green energy.</p>`;
        }
    }

    function displayError(message) {
        apiResultDiv.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
    }
});
//*FETCH GREENCHECK END OF CODE
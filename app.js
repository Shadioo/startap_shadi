document.addEventListener('DOMContentLoaded', () => {
    // Ensure document is fully loaded before executing functions
});

// Functions to handle button clicks
function customizeProduct() {
    fetchData('customize');
}

function analyzeProduct() {
    fetchData('analyze');
}

function recommendProduct() {
    fetchData('recommend');
}

// Function to fetch data from API
function fetchData(action) {
    const apiUrl = 'https://www.kaggle.com/code/monashabanmahmoud/fork-of-eda-by-engineer-mona-shaban?scriptVersionId=198044659&cellId=1';
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data as needed based on the action
            if (action === 'customize') {
                console.log('Customize data:', data);
            } else if (action === 'analyze') {
                console.log('Analyze data:', data);
            } else if (action === 'recommend') {
                console.log('Recommend data:', data);
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}
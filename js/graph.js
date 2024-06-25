document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('brandSalesChart').getContext('2d');
    const brandSalesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Puma', 'Adidas', 'Nike', 'Reebok', 'Under Armour'],
            datasets: [{
                label: 'Sales in Units',
                data: [500, 300, 400, 200, 600], // Replace with your actual data
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)', // All bars are now blue
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Sales in Units'
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
});


var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Consultations', 'Analysis', 'Meetings'],

        datasets: [{
            label: 'Patient Analytics',
            data: [20, 12, 35],
            backgroundColor: [
                'rgba(49, 135, 9, 1)',
                'rgba(54, 12, 235, 1)',
                'rgba(25, 26, 87, 111)',

            ],
            borderColor: [
                'rgba(49, 135, 9, 1)',
                'rgba(54, 12, 235, 1)',
                'rgba(25, 26, 87, 111)',


            ],
            borderWidth: 1
            
        }]

    },
    options: {
        responsive: true,
        cutout: 70,
        maintainAspectRatio: false,
        // layout: {
        //     padding: {
        //         left: 0,
        //         right: 0,
        //         top: 0,
        //         bottom: 0,
        plugins: {
            legend:{
                display: false,
            }
        }
    }
});

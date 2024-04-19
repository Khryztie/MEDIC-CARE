
var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Consultations', 'Analysis', 'Meetings'],

        datasets: [{
            label: 'Patient Analytics',
            data: [20, 12, 35],
            backgroundColor: [
                '#484be9',
                '#e9ca1e',
                '#009D9A',

            ],
            borderColor: [
                '#484be9',
                '#e9ca1e',
                '#009D9A',


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

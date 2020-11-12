Highcharts.getJSON('https://raw.githubusercontent.com/JustusGaphardt/MapData/main/Data', function (data) {

    // Instantiate the map
    Highcharts.mapChart('container', {

        chart: {
            map: 'countries/us/us-all',
            borderWidth: 1
        },

        title: {
            text: 'US Positive Cases'
        },

        exporting: {
            sourceWidth: 600,
            sourceHeight: 500
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'top',
            y: 25
        },

        mapNavigation: {
            enabled: true
        },

        colorAxis: {
            min: 1,
            type: 'logarithmic',
            minColor: '#F9FF33',
            maxColor: '#FF8A33',
            stops: [
                [0, '#F9FF33'],
                [0.67, '#FBBC23'],
                [1, '#FD1C06']
            ]
        },

        series: [{
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
            name: 'Positive cases',
            tooltip: {
                pointFormat: '{point.code}: {point.value} cases'
            }
        }]
    });
});

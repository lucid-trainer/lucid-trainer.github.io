google.charts.load("current", {"packages":["corechart"]});
google.charts.setOnLoadCallback(drawArea);

const transparent = "area { opacity: 0.0 }";
const dream = "area { color: #32de84 }";

function drawArea() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'time');
    data.addColumn('number', 'stage');
    data.addColumn({type: 'string', role: 'style'});
    data.addRows([
[new Date("2023-05-18T23:03:30.000"), 0, transparent],
[new Date("2023-05-19T01:40:51.011"), 0, transparent],
[new Date("2023-05-19T01:40:51.011"), 8, dream ],
[new Date("2023-05-19T02:00:51.011"), 8, dream ],
[new Date("2023-05-19T02:00:51.011"), 0, transparent ],
[new Date("2023-05-19T03:31:02.848"), 0, transparent],
[new Date("2023-05-19T03:31:02.848"), 8, dream ],
[new Date("2023-05-19T03:51:02.848"), 8, dream ],
[new Date("2023-05-19T03:51:02.848"), 0, transparent ],
[new Date("2023-05-19T04:48:56.786"), 0, transparent],
[new Date("2023-05-19T04:48:56.786"), 8, dream ],
[new Date("2023-05-19T05:13:56.786"), 8, dream ],
[new Date("2023-05-19T05:13:56.786"), 0, transparent ],
[new Date("2023-05-19T05:23:15.828"), 0, transparent],
[new Date("2023-05-19T05:23:15.828"), 8, dream ],
[new Date("2023-05-19T05:43:15.828"), 8, dream ],
[new Date("2023-05-19T05:43:15.828"), 0, transparent ],
[new Date("2023-05-19T06:42:00.000"), 0, transparent ],
    ]);

    // Set chart options
    var options = {
        width: 1400,
        height: 200,
        areaOpacity: .5,
        lineWidth: 0,
        seriesType: 'area',
        backgroundColor: 'transparent',
        legend: {position: 'none'},
        vAxis: {
            gridlines: {
              color: 'none',
            },
            viewWindow: {
              min: 0,
              max: 10
            },
            textPosition: 'none'
        },
        hAxis: {
            gridlines: {
                color: 'none',
            },
            textPosition: 'none'
        }
    };

    // Instantiate and draw our charts, passing in some options.
    for (let i = 1; i <= 5; i++) {
        var elementId = "mid-"+i;
        var container = document.getElementById(elementId);
        var chart = new google.visualization.ComboChart(container);
        chart.draw(data, options);    
    }
}
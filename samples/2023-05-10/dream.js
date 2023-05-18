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
[new Date("2023-05-09T23:21:30.000"), 0, transparent],
[new Date("2023-05-10T00:35:00.136"), 0, transparent],
[new Date("2023-05-10T00:35:00.136"), 8, dream ],
[new Date("2023-05-10T00:50:00.136"), 8, dream ],
[new Date("2023-05-10T00:50:00.136"), 0, transparent ],
[new Date("2023-05-10T02:35:42.051"), 0, transparent],
[new Date("2023-05-10T02:35:42.051"), 8, dream ],
[new Date("2023-05-10T02:55:42.051"), 8, dream ],
[new Date("2023-05-10T02:55:42.051"), 0, transparent ],
[new Date("2023-05-10T05:07:17.943"), 0, transparent],
[new Date("2023-05-10T05:07:17.943"), 8, dream ],
[new Date("2023-05-10T05:22:17.943"), 8, dream ],
[new Date("2023-05-10T05:22:17.943"), 0, transparent ],
[new Date("2023-05-10T06:26:05.849"), 0, transparent],
[new Date("2023-05-10T06:26:05.849"), 8, dream ],
[new Date("2023-05-10T06:46:05.849"), 8, dream ],
[new Date("2023-05-10T06:46:05.849"), 0, transparent ],
[new Date("2023-05-10T06:55:24.537"), 0, transparent],
[new Date("2023-05-10T06:55:24.537"), 8, dream ],
[new Date("2023-05-10T07:00:24.537"), 8, dream ],
[new Date("2023-05-10T07:00:24.537"), 0, transparent ],
[new Date("2023-05-10T07:27:30.000"), 0, transparent ],
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
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
[new Date("2023-05-06T23:02:00.000"), 0, transparent],
[new Date("2023-05-07T01:48:35.613"), 0, transparent],
[new Date("2023-05-07T01:48:35.613"), 8, dream ],
[new Date("2023-05-07T02:03:35.613"), 8, dream ],
[new Date("2023-05-07T02:03:35.613"), 0, transparent ],
[new Date("2023-05-07T03:12:40.608"), 0, transparent],
[new Date("2023-05-07T03:12:40.608"), 8, dream ],
[new Date("2023-05-07T03:17:40.608"), 8, dream ],
[new Date("2023-05-07T03:17:40.608"), 0, transparent ],
[new Date("2023-05-07T04:38:11.928"), 0, transparent],
[new Date("2023-05-07T04:38:11.928"), 8, dream ],
[new Date("2023-05-07T04:53:11.928"), 8, dream ],
[new Date("2023-05-07T04:53:11.928"), 0, transparent ],
[new Date("2023-05-07T05:02:30.559"), 0, transparent],
[new Date("2023-05-07T05:02:30.559"), 8, dream ],
[new Date("2023-05-07T05:07:30.559"), 8, dream ],
[new Date("2023-05-07T05:07:30.559"), 0, transparent ],
[new Date("2023-05-07T05:54:56.883"), 0, transparent],
[new Date("2023-05-07T05:54:56.883"), 8, dream ],
[new Date("2023-05-07T06:14:56.883"), 8, dream ],
[new Date("2023-05-07T06:14:56.883"), 0, transparent ],
[new Date("2023-05-07T06:20:46.983"), 0, transparent],
[new Date("2023-05-07T06:20:46.983"), 8, dream ],
[new Date("2023-05-07T06:30:46.983"), 8, dream ],
[new Date("2023-05-07T06:30:46.983"), 0, transparent ],
[new Date("2023-05-07T07:44:00.000"), 0, transparent ],
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
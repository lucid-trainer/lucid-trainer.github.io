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
[new Date("2023-05-16T23:08:00.000"), 0, transparent],
[new Date("2023-05-17T00:34:34.025"), 0, transparent],
[new Date("2023-05-17T00:34:34.025"), 8, dream ],
[new Date("2023-05-17T00:54:34.025"), 8, dream ],
[new Date("2023-05-17T00:54:34.025"), 0, transparent ],
[new Date("2023-05-17T03:13:48.075"), 0, transparent],
[new Date("2023-05-17T03:13:48.075"), 8, dream ],
[new Date("2023-05-17T03:33:48.075"), 8, dream ],
[new Date("2023-05-17T03:33:48.075"), 0, transparent ],
[new Date("2023-05-17T03:43:33.669"), 0, transparent],
[new Date("2023-05-17T03:43:33.669"), 8, dream ],
[new Date("2023-05-17T03:58:33.669"), 8, dream ],
[new Date("2023-05-17T03:58:33.669"), 0, transparent ],
[new Date("2023-05-17T05:16:00.451"), 0, transparent],
[new Date("2023-05-17T05:16:00.451"), 8, dream ],
[new Date("2023-05-17T05:26:00.451"), 8, dream ],
[new Date("2023-05-17T05:26:00.451"), 0, transparent ],
[new Date("2023-05-17T06:16:46.454"), 0, transparent],
[new Date("2023-05-17T06:16:46.454"), 8, dream ],
[new Date("2023-05-17T06:36:46.454"), 8, dream ],
[new Date("2023-05-17T06:36:46.454"), 0, transparent ],
[new Date("2023-05-17T06:47:29.792"), 0, transparent],
[new Date("2023-05-17T06:47:29.792"), 8, dream ],
[new Date("2023-05-17T06:57:29.792"), 8, dream ],
[new Date("2023-05-17T06:57:29.792"), 0, transparent ],
[new Date("2023-05-17T07:28:02.777"), 0, transparent],
[new Date("2023-05-17T07:28:02.777"), 8, dream ],
[new Date("2023-05-17T07:48:02.777"), 8, dream ],
[new Date("2023-05-17T07:48:02.777"), 0, transparent ],
[new Date("2023-05-17T07:29:30.000"), 0, transparent],
[new Date("2023-05-17T07:29:30.000"), 8, dream ],
[new Date("2023-05-17T07:49:30.000"), 8, dream ],
[new Date("2023-05-17T07:49:30.000"), 0, transparent ],
[new Date("2023-05-17T07:51:30.000"), 0, transparent ],
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
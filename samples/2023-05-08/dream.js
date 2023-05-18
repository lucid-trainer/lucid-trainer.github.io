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
[new Date("2023-05-07T23:01:00.000"), 0, transparent],
[new Date("2023-05-08T01:20:36.474"), 0, transparent],
[new Date("2023-05-08T01:20:36.474"), 8, dream ],
[new Date("2023-05-08T01:25:36.474"), 8, dream ],
[new Date("2023-05-08T01:25:36.474"), 0, transparent ],
[new Date("2023-05-08T02:27:14.858"), 0, transparent],
[new Date("2023-05-08T02:27:14.858"), 8, dream ],
[new Date("2023-05-08T02:42:14.858"), 8, dream ],
[new Date("2023-05-08T02:42:14.858"), 0, transparent ],
[new Date("2023-05-08T05:06:38.830"), 0, transparent],
[new Date("2023-05-08T05:06:38.830"), 8, dream ],
[new Date("2023-05-08T05:21:38.830"), 8, dream ],
[new Date("2023-05-08T05:21:38.830"), 0, transparent ],
[new Date("2023-05-08T05:33:50.022"), 0, transparent],
[new Date("2023-05-08T05:33:50.022"), 8, dream ],
[new Date("2023-05-08T05:53:50.022"), 8, dream ],
[new Date("2023-05-08T05:53:50.022"), 0, transparent ],
[new Date("2023-05-08T06:36:30.000"), 0, transparent ],
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
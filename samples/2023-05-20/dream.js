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
[new Date("2023-05-19T23:07:00.000"), 0, transparent],
[new Date("2023-05-20T02:08:21.123"), 0, transparent],
[new Date("2023-05-20T02:08:21.123"), 8, dream ],
[new Date("2023-05-20T02:23:21.123"), 8, dream ],
[new Date("2023-05-20T02:23:21.123"), 0, transparent ],
[new Date("2023-05-20T04:42:08.156"), 0, transparent],
[new Date("2023-05-20T04:42:08.156"), 8, dream ],
[new Date("2023-05-20T05:07:08.156"), 8, dream ],
[new Date("2023-05-20T05:07:08.156"), 0, transparent ],
[new Date("2023-05-20T05:13:48.870"), 0, transparent],
[new Date("2023-05-20T05:13:48.870"), 8, dream ],
[new Date("2023-05-20T05:23:48.870"), 8, dream ],
[new Date("2023-05-20T05:23:48.870"), 0, transparent ],
[new Date("2023-05-20T06:31:43.126"), 0, transparent],
[new Date("2023-05-20T06:31:43.126"), 8, dream ],
[new Date("2023-05-20T06:46:43.126"), 8, dream ],
[new Date("2023-05-20T06:46:43.126"), 0, transparent ],
[new Date("2023-05-20T07:36:02.180"), 0, transparent],
[new Date("2023-05-20T07:36:02.180"), 8, dream ],
[new Date("2023-05-20T08:01:02.180"), 8, dream ],
[new Date("2023-05-20T08:01:02.180"), 0, transparent ],
[new Date("2023-05-20T08:04:00.000"), 0, transparent ],
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
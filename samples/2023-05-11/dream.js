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
[new Date("2023-05-10T22:53:00.000"), 0, transparent],
[new Date("2023-05-11T00:11:59.171"), 0, transparent],
[new Date("2023-05-11T00:11:59.171"), 8, dream ],
[new Date("2023-05-11T00:31:59.171"), 8, dream ],
[new Date("2023-05-11T00:31:59.171"), 0, transparent ],
[new Date("2023-05-11T02:29:19.917"), 0, transparent],
[new Date("2023-05-11T02:29:19.917"), 8, dream ],
[new Date("2023-05-11T02:44:19.917"), 8, dream ],
[new Date("2023-05-11T02:44:19.917"), 0, transparent ],
[new Date("2023-05-11T04:46:51.734"), 0, transparent],
[new Date("2023-05-11T04:46:51.734"), 8, dream ],
[new Date("2023-05-11T05:06:51.734"), 8, dream ],
[new Date("2023-05-11T05:06:51.734"), 0, transparent ],
[new Date("2023-05-11T06:11:16.539"), 0, transparent],
[new Date("2023-05-11T06:11:16.539"), 8, dream ],
[new Date("2023-05-11T06:36:16.539"), 8, dream ],
[new Date("2023-05-11T06:36:16.539"), 0, transparent ],
[new Date("2023-05-11T06:54:29.720"), 0, transparent],
[new Date("2023-05-11T06:54:29.720"), 8, dream ],
[new Date("2023-05-11T07:09:29.720"), 8, dream ],
[new Date("2023-05-11T07:09:29.720"), 0, transparent ],
[new Date("2023-05-11T07:22:30.000"), 0, transparent ],
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
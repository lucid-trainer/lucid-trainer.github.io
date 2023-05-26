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
[new Date("2023-05-25T22:52:30.000"), 0, transparent],
[new Date("2023-05-26T00:40:26.990"), 0, transparent],
[new Date("2023-05-26T00:40:26.990"), 8, dream ],
[new Date("2023-05-26T01:00:26.990"), 8, dream ],
[new Date("2023-05-26T01:00:26.990"), 0, transparent ],
[new Date("2023-05-26T02:15:28.946"), 0, transparent],
[new Date("2023-05-26T02:15:28.946"), 8, dream ],
[new Date("2023-05-26T02:30:28.946"), 8, dream ],
[new Date("2023-05-26T02:30:28.946"), 0, transparent ],
[new Date("2023-05-26T02:26:59.951"), 0, transparent],
[new Date("2023-05-26T02:26:59.951"), 8, dream ],
[new Date("2023-05-26T02:31:59.951"), 8, dream ],
[new Date("2023-05-26T02:31:59.951"), 0, transparent ],
[new Date("2023-05-26T04:09:20.062"), 0, transparent],
[new Date("2023-05-26T04:09:20.062"), 8, dream ],
[new Date("2023-05-26T04:29:20.062"), 8, dream ],
[new Date("2023-05-26T04:29:20.062"), 0, transparent ],
[new Date("2023-05-26T05:06:49.400"), 0, transparent],
[new Date("2023-05-26T05:06:49.400"), 8, dream ],
[new Date("2023-05-26T05:31:49.400"), 8, dream ],
[new Date("2023-05-26T05:31:49.400"), 0, transparent ],
[new Date("2023-05-26T05:54:17.872"), 0, transparent],
[new Date("2023-05-26T05:54:17.872"), 8, dream ],
[new Date("2023-05-26T06:14:17.872"), 8, dream ],
[new Date("2023-05-26T06:14:17.872"), 0, transparent ],
[new Date("2023-05-26T06:21:05.683"), 0, transparent],
[new Date("2023-05-26T06:21:05.683"), 8, dream ],
[new Date("2023-05-26T06:41:05.683"), 8, dream ],
[new Date("2023-05-26T06:41:05.683"), 0, transparent ],
[new Date("2023-05-26T06:51:30.000"), 0, transparent ],
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
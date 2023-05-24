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
[new Date("2023-05-15T22:49:00.000"), 0, transparent],
[new Date("2023-05-16T01:48:15.449"), 0, transparent],
[new Date("2023-05-16T01:48:15.449"), 8, dream ],
[new Date("2023-05-16T02:03:15.449"), 8, dream ],
[new Date("2023-05-16T02:03:15.449"), 0, transparent ],
[new Date("2023-05-16T03:01:36.485"), 0, transparent],
[new Date("2023-05-16T03:01:36.485"), 8, dream ],
[new Date("2023-05-16T03:21:36.485"), 8, dream ],
[new Date("2023-05-16T03:21:36.485"), 0, transparent ],
[new Date("2023-05-16T03:40:55.488"), 0, transparent],
[new Date("2023-05-16T03:40:55.488"), 8, dream ],
[new Date("2023-05-16T03:50:55.488"), 8, dream ],
[new Date("2023-05-16T03:50:55.488"), 0, transparent ],
[new Date("2023-05-16T04:49:16.823"), 0, transparent],
[new Date("2023-05-16T04:49:16.823"), 8, dream ],
[new Date("2023-05-16T05:09:16.823"), 8, dream ],
[new Date("2023-05-16T05:09:16.823"), 0, transparent ],
[new Date("2023-05-16T05:52:58.893"), 0, transparent],
[new Date("2023-05-16T05:52:58.893"), 8, dream ],
[new Date("2023-05-16T06:12:58.893"), 8, dream ],
[new Date("2023-05-16T06:12:58.893"), 0, transparent ],
[new Date("2023-05-16T06:24:42.772"), 0, transparent],
[new Date("2023-05-16T06:24:42.772"), 8, dream ],
[new Date("2023-05-16T06:34:42.772"), 8, dream ],
[new Date("2023-05-16T06:34:42.772"), 0, transparent ],
[new Date("2023-05-16T07:08:11.138"), 0, transparent],
[new Date("2023-05-16T07:08:11.138"), 8, dream ],
[new Date("2023-05-16T07:18:11.138"), 8, dream ],
[new Date("2023-05-16T07:18:11.138"), 0, transparent ],
[new Date("2023-05-16T07:35:30.000"), 0, transparent ],
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
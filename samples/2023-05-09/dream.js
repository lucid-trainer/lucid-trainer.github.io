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
[new Date("2023-05-08T22:43:00.000"), 0, transparent],
[new Date("2023-05-08T23:49:55.188"), 0, transparent],
[new Date("2023-05-08T23:49:55.188"), 8, dream ],
[new Date("2023-05-08T23:59:55.188"), 8, dream ],
[new Date("2023-05-08T23:59:55.188"), 0, transparent ],
[new Date("2023-05-09T02:44:15.676"), 0, transparent],
[new Date("2023-05-09T02:44:15.676"), 8, dream ],
[new Date("2023-05-09T02:59:15.676"), 8, dream ],
[new Date("2023-05-09T02:59:15.676"), 0, transparent ],
[new Date("2023-05-09T04:14:11.027"), 0, transparent],
[new Date("2023-05-09T04:14:11.027"), 8, dream ],
[new Date("2023-05-09T04:29:11.027"), 8, dream ],
[new Date("2023-05-09T04:29:11.027"), 0, transparent ],
[new Date("2023-05-09T05:36:50.424"), 0, transparent],
[new Date("2023-05-09T05:36:50.424"), 8, dream ],
[new Date("2023-05-09T05:46:50.424"), 8, dream ],
[new Date("2023-05-09T05:46:50.424"), 0, transparent ],
[new Date("2023-05-09T06:50:55.297"), 0, transparent],
[new Date("2023-05-09T06:50:55.297"), 8, dream ],
[new Date("2023-05-09T07:00:55.297"), 8, dream ],
[new Date("2023-05-09T07:00:55.297"), 0, transparent ],
[new Date("2023-05-09T07:06:45.716"), 0, transparent],
[new Date("2023-05-09T07:06:45.716"), 8, dream ],
[new Date("2023-05-09T07:16:45.716"), 8, dream ],
[new Date("2023-05-09T07:16:45.716"), 0, transparent ],
[new Date("2023-05-09T07:19:30.000"), 0, transparent ],
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
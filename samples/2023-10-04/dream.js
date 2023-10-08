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
[new Date("2023-10-03T23:12:00.000"), 0, transparent],
[new Date("2023-10-04T04:30:02.150"), 0, transparent],
[new Date("2023-10-04T04:30:02.150"), 8, dream ],
[new Date("2023-10-04T04:55:02.150"), 8, dream ],
[new Date("2023-10-04T04:55:02.150"), 0, transparent ],
[new Date("2023-10-04T05:43:32.869"), 0, transparent],
[new Date("2023-10-04T05:43:32.869"), 8, dream ],
[new Date("2023-10-04T06:08:32.869"), 8, dream ],
[new Date("2023-10-04T06:08:32.869"), 0, transparent ],
[new Date("2023-10-04T06:58:22.922"), 0, transparent],
[new Date("2023-10-04T06:58:22.922"), 8, dream ],
[new Date("2023-10-04T07:13:22.922"), 8, dream ],
[new Date("2023-10-04T07:13:22.922"), 0, transparent ],
[new Date("2023-10-04T07:43:00.000"), 0, transparent ],
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
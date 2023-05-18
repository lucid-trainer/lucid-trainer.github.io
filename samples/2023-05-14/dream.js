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
[new Date("2023-05-13T23:16:00.000"), 0, transparent],
[new Date("2023-05-14T01:51:04.605"), 0, transparent],
[new Date("2023-05-14T01:51:04.605"), 8, dream ],
[new Date("2023-05-14T02:11:04.605"), 8, dream ],
[new Date("2023-05-14T02:11:04.605"), 0, transparent ],
[new Date("2023-05-14T03:02:20.794"), 0, transparent],
[new Date("2023-05-14T03:02:20.794"), 8, dream ],
[new Date("2023-05-14T03:22:20.794"), 8, dream ],
[new Date("2023-05-14T03:22:20.794"), 0, transparent ],
[new Date("2023-05-14T04:42:28.529"), 0, transparent],
[new Date("2023-05-14T04:42:28.529"), 8, dream ],
[new Date("2023-05-14T05:07:28.529"), 8, dream ],
[new Date("2023-05-14T05:07:28.529"), 0, transparent ],
[new Date("2023-05-14T05:16:44.217"), 0, transparent],
[new Date("2023-05-14T05:16:44.217"), 8, dream ],
[new Date("2023-05-14T05:31:44.217"), 8, dream ],
[new Date("2023-05-14T05:31:44.217"), 0, transparent ],
[new Date("2023-05-14T06:48:00.000"), 0, transparent ],
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
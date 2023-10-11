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
[new Date("2023-09-30T23:19:30.000"), 0, transparent],
[new Date("2023-10-01T02:31:17.957"), 0, transparent],
[new Date("2023-10-01T02:31:17.957"), 8, dream ],
[new Date("2023-10-01T02:56:17.957"), 8, dream ],
[new Date("2023-10-01T02:56:17.957"), 0, transparent ],
[new Date("2023-10-01T05:06:25.293"), 0, transparent],
[new Date("2023-10-01T05:06:25.293"), 8, dream ],
[new Date("2023-10-01T05:31:25.293"), 8, dream ],
[new Date("2023-10-01T05:31:25.293"), 0, transparent ],
[new Date("2023-10-01T07:56:00.000"), 0, transparent ],
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
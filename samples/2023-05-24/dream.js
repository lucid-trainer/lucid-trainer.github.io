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
[new Date("2023-05-23T22:57:00.000"), 0, transparent],
[new Date("2023-05-24T02:14:27.099"), 0, transparent],
[new Date("2023-05-24T02:14:27.099"), 8, dream ],
[new Date("2023-05-24T02:34:27.099"), 8, dream ],
[new Date("2023-05-24T02:34:27.099"), 0, transparent ],
[new Date("2023-05-24T03:50:03.623"), 0, transparent],
[new Date("2023-05-24T03:50:03.623"), 8, dream ],
[new Date("2023-05-24T04:15:03.623"), 8, dream ],
[new Date("2023-05-24T04:15:03.623"), 0, transparent ],
[new Date("2023-05-24T05:17:01.025"), 0, transparent],
[new Date("2023-05-24T05:17:01.025"), 8, dream ],
[new Date("2023-05-24T05:42:01.025"), 8, dream ],
[new Date("2023-05-24T05:42:01.025"), 0, transparent ],
[new Date("2023-05-24T06:32:17.345"), 0, transparent],
[new Date("2023-05-24T06:32:17.345"), 8, dream ],
[new Date("2023-05-24T06:52:17.345"), 8, dream ],
[new Date("2023-05-24T06:52:17.345"), 0, transparent ],
[new Date("2023-05-24T07:15:39.445"), 0, transparent],
[new Date("2023-05-24T07:15:39.445"), 8, dream ],
[new Date("2023-05-24T07:25:39.445"), 8, dream ],
[new Date("2023-05-24T07:25:39.445"), 0, transparent ],
[new Date("2023-05-24T07:35:00.000"), 0, transparent ],
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
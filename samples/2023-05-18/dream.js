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
[new Date("2023-05-17T22:48:30.000"), 0, transparent],
[new Date("2023-05-18T02:43:50.823"), 0, transparent],
[new Date("2023-05-18T02:43:50.823"), 8, dream ],
[new Date("2023-05-18T02:58:50.823"), 8, dream ],
[new Date("2023-05-18T02:58:50.823"), 0, transparent ],
[new Date("2023-05-18T03:05:38.208"), 0, transparent],
[new Date("2023-05-18T03:05:38.208"), 8, dream ],
[new Date("2023-05-18T03:25:38.208"), 8, dream ],
[new Date("2023-05-18T03:25:38.208"), 0, transparent ],
[new Date("2023-05-18T04:23:56.504"), 0, transparent],
[new Date("2023-05-18T04:23:56.504"), 8, dream ],
[new Date("2023-05-18T04:38:56.504"), 8, dream ],
[new Date("2023-05-18T04:38:56.504"), 0, transparent ],
[new Date("2023-05-18T05:55:56.827"), 0, transparent],
[new Date("2023-05-18T05:55:56.827"), 8, dream ],
[new Date("2023-05-18T06:10:56.827"), 8, dream ],
[new Date("2023-05-18T06:10:56.827"), 0, transparent ],
[new Date("2023-05-18T06:20:09.187"), 0, transparent],
[new Date("2023-05-18T06:20:09.187"), 8, dream ],
[new Date("2023-05-18T06:30:09.187"), 8, dream ],
[new Date("2023-05-18T06:30:09.187"), 0, transparent ],
[new Date("2023-05-18T07:16:30.000"), 0, transparent ],
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
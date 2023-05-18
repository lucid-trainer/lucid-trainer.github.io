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
[new Date("2023-05-14T22:48:30.000"), 0, transparent],
[new Date("2023-05-15T00:26:59.437"), 0, transparent],
[new Date("2023-05-15T00:26:59.437"), 8, dream ],
[new Date("2023-05-15T00:41:59.437"), 8, dream ],
[new Date("2023-05-15T00:41:59.437"), 0, transparent ],
[new Date("2023-05-15T01:53:53.466"), 0, transparent],
[new Date("2023-05-15T01:53:53.466"), 8, dream ],
[new Date("2023-05-15T02:03:53.466"), 8, dream ],
[new Date("2023-05-15T02:03:53.466"), 0, transparent ],
[new Date("2023-05-15T03:24:26.130"), 0, transparent],
[new Date("2023-05-15T03:24:26.130"), 8, dream ],
[new Date("2023-05-15T03:39:26.130"), 8, dream ],
[new Date("2023-05-15T03:39:26.130"), 0, transparent ],
[new Date("2023-05-15T03:38:28.628"), 0, transparent],
[new Date("2023-05-15T03:38:28.628"), 8, dream ],
[new Date("2023-05-15T03:43:28.628"), 8, dream ],
[new Date("2023-05-15T03:43:28.628"), 0, transparent ],
[new Date("2023-05-15T05:20:15.472"), 0, transparent],
[new Date("2023-05-15T05:20:15.472"), 8, dream ],
[new Date("2023-05-15T05:40:15.472"), 8, dream ],
[new Date("2023-05-15T05:40:15.472"), 0, transparent ],
[new Date("2023-05-15T05:47:33.525"), 0, transparent],
[new Date("2023-05-15T05:47:33.525"), 8, dream ],
[new Date("2023-05-15T06:07:33.525"), 8, dream ],
[new Date("2023-05-15T06:07:33.525"), 0, transparent ],
[new Date("2023-05-15T07:03:25.104"), 0, transparent],
[new Date("2023-05-15T07:03:25.104"), 8, dream ],
[new Date("2023-05-15T07:23:25.104"), 8, dream ],
[new Date("2023-05-15T07:23:25.104"), 0, transparent ],
[new Date("2023-05-15T07:23:31.737"), 0, transparent],
[new Date("2023-05-15T07:23:31.737"), 8, dream ],
[new Date("2023-05-15T07:33:31.737"), 8, dream ],
[new Date("2023-05-15T07:33:31.737"), 0, transparent ],
[new Date("2023-05-15T07:39:00.000"), 0, transparent ],
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
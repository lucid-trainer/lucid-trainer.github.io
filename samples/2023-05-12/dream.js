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
[new Date("2023-05-11T22:51:30.000"), 0, transparent],
[new Date("2023-05-12T00:12:13.125"), 0, transparent],
[new Date("2023-05-12T00:12:13.125"), 8, dream ],
[new Date("2023-05-12T00:27:13.125"), 8, dream ],
[new Date("2023-05-12T00:27:13.125"), 0, transparent ],
[new Date("2023-05-12T01:26:43.159"), 0, transparent],
[new Date("2023-05-12T01:26:43.159"), 8, dream ],
[new Date("2023-05-12T01:36:43.159"), 8, dream ],
[new Date("2023-05-12T01:36:43.159"), 0, transparent ],
[new Date("2023-05-12T01:32:13.843"), 0, transparent],
[new Date("2023-05-12T01:32:13.843"), 8, dream ],
[new Date("2023-05-12T01:37:13.843"), 8, dream ],
[new Date("2023-05-12T01:37:13.843"), 0, transparent ],
[new Date("2023-05-12T02:17:49.357"), 0, transparent],
[new Date("2023-05-12T02:17:49.357"), 8, dream ],
[new Date("2023-05-12T02:27:49.357"), 8, dream ],
[new Date("2023-05-12T02:27:49.357"), 0, transparent ],
[new Date("2023-05-12T03:59:43.533"), 0, transparent],
[new Date("2023-05-12T03:59:43.533"), 8, dream ],
[new Date("2023-05-12T04:19:43.533"), 8, dream ],
[new Date("2023-05-12T04:19:43.533"), 0, transparent ],
[new Date("2023-05-12T05:11:02.225"), 0, transparent],
[new Date("2023-05-12T05:11:02.225"), 8, dream ],
[new Date("2023-05-12T05:21:02.225"), 8, dream ],
[new Date("2023-05-12T05:21:02.225"), 0, transparent ],
[new Date("2023-05-12T05:34:15.628"), 0, transparent],
[new Date("2023-05-12T05:34:15.628"), 8, dream ],
[new Date("2023-05-12T05:54:15.628"), 8, dream ],
[new Date("2023-05-12T05:54:15.628"), 0, transparent ],
[new Date("2023-05-12T05:58:10.310"), 0, transparent],
[new Date("2023-05-12T05:58:10.310"), 8, dream ],
[new Date("2023-05-12T06:13:10.310"), 8, dream ],
[new Date("2023-05-12T06:13:10.310"), 0, transparent ],
[new Date("2023-05-12T06:18:37.161"), 0, transparent],
[new Date("2023-05-12T06:18:37.161"), 8, dream ],
[new Date("2023-05-12T06:33:37.161"), 8, dream ],
[new Date("2023-05-12T06:33:37.161"), 0, transparent ],
[new Date("2023-05-12T07:13:00.000"), 0, transparent ],
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
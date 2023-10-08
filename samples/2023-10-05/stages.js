google.charts.load("current", {"packages":["corechart"]});
google.charts.setOnLoadCallback(drawArea);

const wake = "area { color: #ff7f50 }";
const light = "area { color: #6495ed }";
const deep = "area { color: #00008b }";
const rem = "area { color: #ffd700 }";

function drawArea() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'time');
    data.addColumn('number', 'stage');
    data.addColumn({type: 'string', role: 'style'});
    data.addRows([
[new Date("2023-10-04T22:54:00.000"), 5, light],
[new Date("2023-10-04T23:02:00.000"), 5, light],
[new Date("2023-10-04T23:02:00.000"), 9, wake],
[new Date("2023-10-04T23:11:30.000"), 9, wake],
[new Date("2023-10-04T23:11:30.000"), 5, light],
[new Date("2023-10-04T23:29:30.000"), 5, light],
[new Date("2023-10-04T23:29:30.000"), 3, deep],
[new Date("2023-10-05T00:06:00.000"), 3, deep],
[new Date("2023-10-05T00:06:00.000"), 5, light],
[new Date("2023-10-05T00:55:30.000"), 5, light],
[new Date("2023-10-05T00:55:30.000"), 7, rem],
[new Date("2023-10-05T01:32:00.000"), 7, rem],
[new Date("2023-10-05T01:32:00.000"), 5, light],
[new Date("2023-10-05T02:04:30.000"), 5, light],
[new Date("2023-10-05T02:04:30.000"), 9, wake],
[new Date("2023-10-05T02:30:30.000"), 9, wake],
[new Date("2023-10-05T02:30:30.000"), 5, light],
[new Date("2023-10-05T02:53:00.000"), 5, light],
[new Date("2023-10-05T02:53:00.000"), 3, deep],
[new Date("2023-10-05T03:26:30.000"), 3, deep],
[new Date("2023-10-05T03:26:30.000"), 5, light],
[new Date("2023-10-05T04:02:00.000"), 5, light],
[new Date("2023-10-05T04:02:00.000"), 7, rem],
[new Date("2023-10-05T04:07:00.000"), 7, rem],
[new Date("2023-10-05T04:07:00.000"), 5, light],
[new Date("2023-10-05T04:17:30.000"), 5, light],
[new Date("2023-10-05T04:17:30.000"), 7, rem],
[new Date("2023-10-05T04:26:00.000"), 7, rem],
[new Date("2023-10-05T04:26:00.000"), 5, light],
[new Date("2023-10-05T04:45:30.000"), 5, light],
[new Date("2023-10-05T04:45:30.000"), 7, rem],
[new Date("2023-10-05T05:03:00.000"), 7, rem],
[new Date("2023-10-05T05:03:00.000"), 5, light],
[new Date("2023-10-05T05:31:00.000"), 5, light],
[new Date("2023-10-05T05:31:00.000"), 7, rem],
[new Date("2023-10-05T05:36:30.000"), 7, rem],
[new Date("2023-10-05T05:36:30.000"), 5, light],
[new Date("2023-10-05T06:08:00.000"), 5, light],
[new Date("2023-10-05T06:08:00.000"), 3, deep],
[new Date("2023-10-05T06:12:30.000"), 3, deep],
[new Date("2023-10-05T06:12:30.000"), 5, light],
[new Date("2023-10-05T06:18:00.000"), 5, light],
[new Date("2023-10-05T06:18:00.000"), 3, deep],
[new Date("2023-10-05T06:22:30.000"), 3, deep],
[new Date("2023-10-05T06:22:30.000"), 5, light],
[new Date("2023-10-05T06:44:30.000"), 5, light],
[new Date("2023-10-05T06:44:30.000"), 9, wake],
[new Date("2023-10-05T06:57:00.000"), 9, wake],
[new Date("2023-10-05T06:57:00.000"), 5, light],
[new Date("2023-10-05T07:05:00.000"), 5, light],
[new Date("2023-10-05T07:05:00.000"), 9, wake],
[new Date("2023-10-05T07:22:30.000"), 9, wake],
[new Date("2023-10-05T07:22:30.000"), 5, light],
[new Date("2023-10-05T07:25:00.000"), 5, light],
[new Date("2023-10-05T07:25:00.000"), 9, wake],
[new Date("2023-10-05T07:29:00.000"), 9, wake],
    ]);

    // Set chart options
    var options = {
        'width': 1400,
        'height': 200,
        'areaOpacity': 1,
        'lineWidth': 0,
        'seriesType': 'area',
         chartArea:{
          backgroundColor:'black'
        },
        legend: {position: 'none'},
        vAxis: {
            gridlines: {
              color: 'none',
            },
            textPosition: 'none'
        },
        hAxis: {
            gridlines: {
                color: 'none',
            },
            textPosition: 'none'
            //format: 'HH:mm',
        }
    };

    const gradientGenerator = (container) => {
        var observer = new MutationObserver(function () {
            container.getElementsByTagName('svg')[0].setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            Array.prototype.forEach.call(container.getElementsByTagName('path'), function(path) {
                if (path.getAttribute('fill') === '#ffd700') {
                    path.setAttribute('fill', 'url(#gold-gradient) #ffd700');
                } else if (path.getAttribute('fill') === '#ff7f50') {
                    path.setAttribute('fill', 'url(#coral-gradient) #ff7f50');
                } else if (path.getAttribute('fill') === '#6495ed') {
                    path.setAttribute('fill', 'url(#cornflower-blue-gradient) #6495ed');
                } else if (path.getAttribute('fill') === '#00008b') {
                    path.setAttribute('fill', 'url(#darkblue-gradient) #00008b');
                }
            });
        });

        observer.observe(container, {
            childList: true,
            subtree: true
        });
    };

 
    // Instantiate and draw our charts, passing in some options.
    for (let i = 1; i <= 6; i++) {
        var elementId = "bottom-"+i;
        var container = document.getElementById(elementId);
        var chart = new google.visualization.ComboChart(container);
        google.visualization.events.addListener(chart, 'ready', () => gradientGenerator(container));
        chart.draw(data, options);    
    }
}
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
[new Date("2023-10-20T22:58:00.000"), 9, wake],
[new Date("2023-10-20T23:02:00.000"), 9, wake],
[new Date("2023-10-20T23:02:00.000"), 5, light],
[new Date("2023-10-20T23:14:30.000"), 5, light],
[new Date("2023-10-20T23:14:30.000"), 3, deep],
[new Date("2023-10-20T23:19:00.000"), 3, deep],
[new Date("2023-10-20T23:19:00.000"), 5, light],
[new Date("2023-10-21T00:01:30.000"), 5, light],
[new Date("2023-10-21T00:01:30.000"), 9, wake],
[new Date("2023-10-21T00:07:00.000"), 9, wake],
[new Date("2023-10-21T00:07:00.000"), 5, light],
[new Date("2023-10-21T00:45:30.000"), 5, light],
[new Date("2023-10-21T00:45:30.000"), 7, rem],
[new Date("2023-10-21T01:04:00.000"), 7, rem],
[new Date("2023-10-21T01:04:00.000"), 5, light],
[new Date("2023-10-21T01:57:00.000"), 5, light],
[new Date("2023-10-21T01:57:00.000"), 7, rem],
[new Date("2023-10-21T02:03:30.000"), 7, rem],
[new Date("2023-10-21T02:03:30.000"), 5, light],
[new Date("2023-10-21T02:30:00.000"), 5, light],
[new Date("2023-10-21T02:30:00.000"), 7, rem],
[new Date("2023-10-21T03:00:30.000"), 7, rem],
[new Date("2023-10-21T03:00:30.000"), 9, wake],
[new Date("2023-10-21T03:29:00.000"), 9, wake],
[new Date("2023-10-21T03:29:00.000"), 5, light],
[new Date("2023-10-21T04:07:00.000"), 5, light],
[new Date("2023-10-21T04:07:00.000"), 3, deep],
[new Date("2023-10-21T04:20:30.000"), 3, deep],
[new Date("2023-10-21T04:20:30.000"), 5, light],
[new Date("2023-10-21T05:07:00.000"), 5, light],
[new Date("2023-10-21T05:07:00.000"), 9, wake],
[new Date("2023-10-21T05:16:00.000"), 9, wake],
[new Date("2023-10-21T05:16:00.000"), 5, light],
[new Date("2023-10-21T05:34:00.000"), 5, light],
[new Date("2023-10-21T05:34:00.000"), 7, rem],
[new Date("2023-10-21T05:42:30.000"), 7, rem],
[new Date("2023-10-21T05:42:30.000"), 9, wake],
[new Date("2023-10-21T05:48:00.000"), 9, wake],
[new Date("2023-10-21T05:48:00.000"), 5, light],
[new Date("2023-10-21T06:55:00.000"), 5, light],
[new Date("2023-10-21T06:55:00.000"), 7, rem],
[new Date("2023-10-21T07:19:30.000"), 7, rem],
[new Date("2023-10-21T07:19:30.000"), 5, light],
[new Date("2023-10-21T07:37:30.000"), 5, light],
[new Date("2023-10-21T07:37:30.000"), 7, rem],
[new Date("2023-10-21T07:42:00.000"), 7, rem],
[new Date("2023-10-21T07:42:00.000"), 5, light],
[new Date("2023-10-21T07:55:00.000"), 5, light],
[new Date("2023-10-21T07:55:00.000"), 7, rem],
[new Date("2023-10-21T08:00:30.000"), 7, rem],
[new Date("2023-10-21T08:00:30.000"), 5, light],
[new Date("2023-10-21T08:06:30.000"), 5, light],
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
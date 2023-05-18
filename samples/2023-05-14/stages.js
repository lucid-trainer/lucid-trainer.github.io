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
[new Date("2023-05-13T23:16:00.000"), 9, wake],
[new Date("2023-05-13T23:27:00.000"), 9, wake],
[new Date("2023-05-13T23:27:00.000"), 5, light],
[new Date("2023-05-13T23:33:30.000"), 5, light],
[new Date("2023-05-13T23:33:30.000"), 3, deep],
[new Date("2023-05-14T00:02:30.000"), 3, deep],
[new Date("2023-05-14T00:02:30.000"), 5, light],
[new Date("2023-05-14T01:50:30.000"), 5, light],
[new Date("2023-05-14T01:50:30.000"), 7, rem],
[new Date("2023-05-14T01:56:00.000"), 7, rem],
[new Date("2023-05-14T01:56:00.000"), 5, light],
[new Date("2023-05-14T02:03:00.000"), 5, light],
[new Date("2023-05-14T02:03:00.000"), 7, rem],
[new Date("2023-05-14T02:12:00.000"), 7, rem],
[new Date("2023-05-14T02:12:00.000"), 5, light],
[new Date("2023-05-14T02:59:30.000"), 5, light],
[new Date("2023-05-14T02:59:30.000"), 7, rem],
[new Date("2023-05-14T03:23:30.000"), 7, rem],
[new Date("2023-05-14T03:23:30.000"), 9, wake],
[new Date("2023-05-14T03:39:00.000"), 9, wake],
[new Date("2023-05-14T03:39:00.000"), 5, light],
[new Date("2023-05-14T04:22:00.000"), 5, light],
[new Date("2023-05-14T04:22:00.000"), 3, deep],
[new Date("2023-05-14T04:59:30.000"), 3, deep],
[new Date("2023-05-14T04:59:30.000"), 5, light],
[new Date("2023-05-14T05:01:30.000"), 5, light],
[new Date("2023-05-14T05:01:30.000"), 7, rem],
[new Date("2023-05-14T05:08:30.000"), 7, rem],
[new Date("2023-05-14T05:08:30.000"), 9, wake],
[new Date("2023-05-14T05:14:00.000"), 9, wake],
[new Date("2023-05-14T05:14:00.000"), 5, light],
[new Date("2023-05-14T05:25:30.000"), 5, light],
[new Date("2023-05-14T05:25:30.000"), 7, rem],
[new Date("2023-05-14T05:32:30.000"), 7, rem],
[new Date("2023-05-14T05:32:30.000"), 9, wake],
[new Date("2023-05-14T05:36:30.000"), 9, wake],
[new Date("2023-05-14T05:36:30.000"), 5, light],
[new Date("2023-05-14T06:28:00.000"), 5, light],
[new Date("2023-05-14T06:28:00.000"), 7, rem],
[new Date("2023-05-14T06:32:30.000"), 7, rem],
[new Date("2023-05-14T06:32:30.000"), 5, light],
[new Date("2023-05-14T06:44:00.000"), 5, light],
[new Date("2023-05-14T06:44:00.000"), 7, rem],
[new Date("2023-05-14T06:48:00.000"), 7, rem],
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
    for (let i = 1; i <= 5; i++) {
        var elementId = "bottom-"+i;
        var container = document.getElementById(elementId);
        var chart = new google.visualization.ComboChart(container);
        google.visualization.events.addListener(chart, 'ready', () => gradientGenerator(container));
        chart.draw(data, options);    
    }
}
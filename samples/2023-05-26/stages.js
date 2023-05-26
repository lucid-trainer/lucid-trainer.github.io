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
[new Date("2023-05-25T22:52:30.000"), 9, wake],
[new Date("2023-05-25T22:53:00.000"), 9, wake],
[new Date("2023-05-25T22:53:00.000"), 5, light],
[new Date("2023-05-25T23:07:30.000"), 5, light],
[new Date("2023-05-25T23:07:30.000"), 3, deep],
[new Date("2023-05-25T23:30:00.000"), 3, deep],
[new Date("2023-05-25T23:30:00.000"), 5, light],
[new Date("2023-05-26T00:06:30.000"), 5, light],
[new Date("2023-05-26T00:06:30.000"), 3, deep],
[new Date("2023-05-26T00:23:30.000"), 3, deep],
[new Date("2023-05-26T00:23:30.000"), 5, light],
[new Date("2023-05-26T00:38:30.000"), 5, light],
[new Date("2023-05-26T00:38:30.000"), 7, rem],
[new Date("2023-05-26T00:44:30.000"), 7, rem],
[new Date("2023-05-26T00:44:30.000"), 5, light],
[new Date("2023-05-26T01:40:00.000"), 5, light],
[new Date("2023-05-26T01:40:00.000"), 7, rem],
[new Date("2023-05-26T02:30:00.000"), 7, rem],
[new Date("2023-05-26T02:30:00.000"), 9, wake],
[new Date("2023-05-26T02:42:00.000"), 9, wake],
[new Date("2023-05-26T02:42:00.000"), 5, light],
[new Date("2023-05-26T03:06:30.000"), 5, light],
[new Date("2023-05-26T03:06:30.000"), 3, deep],
[new Date("2023-05-26T03:14:00.000"), 3, deep],
[new Date("2023-05-26T03:14:00.000"), 5, light],
[new Date("2023-05-26T03:18:30.000"), 5, light],
[new Date("2023-05-26T03:18:30.000"), 3, deep],
[new Date("2023-05-26T03:24:30.000"), 3, deep],
[new Date("2023-05-26T03:24:30.000"), 5, light],
[new Date("2023-05-26T03:30:00.000"), 5, light],
[new Date("2023-05-26T03:30:00.000"), 3, deep],
[new Date("2023-05-26T03:48:00.000"), 3, deep],
[new Date("2023-05-26T03:48:00.000"), 5, light],
[new Date("2023-05-26T04:05:30.000"), 5, light],
[new Date("2023-05-26T04:05:30.000"), 9, wake],
[new Date("2023-05-26T04:09:30.000"), 9, wake],
[new Date("2023-05-26T04:09:30.000"), 5, light],
[new Date("2023-05-26T04:56:00.000"), 5, light],
[new Date("2023-05-26T04:56:00.000"), 7, rem],
[new Date("2023-05-26T05:38:30.000"), 7, rem],
[new Date("2023-05-26T05:38:30.000"), 5, light],
[new Date("2023-05-26T06:04:30.000"), 5, light],
[new Date("2023-05-26T06:04:30.000"), 3, deep],
[new Date("2023-05-26T06:15:30.000"), 3, deep],
[new Date("2023-05-26T06:15:30.000"), 9, wake],
[new Date("2023-05-26T06:25:30.000"), 9, wake],
[new Date("2023-05-26T06:25:30.000"), 5, light],
[new Date("2023-05-26T06:30:00.000"), 5, light],
[new Date("2023-05-26T06:30:00.000"), 7, rem],
[new Date("2023-05-26T06:42:00.000"), 7, rem],
[new Date("2023-05-26T06:42:00.000"), 9, wake],
[new Date("2023-05-26T06:51:30.000"), 9, wake],
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
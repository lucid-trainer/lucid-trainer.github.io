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
[new Date("2023-10-02T23:12:30.000"), 9, wake],
[new Date("2023-10-02T23:13:00.000"), 9, wake],
[new Date("2023-10-02T23:13:00.000"), 5, light],
[new Date("2023-10-02T23:17:00.000"), 5, light],
[new Date("2023-10-02T23:17:00.000"), 3, deep],
[new Date("2023-10-02T23:45:30.000"), 3, deep],
[new Date("2023-10-02T23:45:30.000"), 5, light],
[new Date("2023-10-02T23:58:00.000"), 5, light],
[new Date("2023-10-02T23:58:00.000"), 3, deep],
[new Date("2023-10-03T00:18:00.000"), 3, deep],
[new Date("2023-10-03T00:18:00.000"), 5, light],
[new Date("2023-10-03T00:29:00.000"), 5, light],
[new Date("2023-10-03T00:29:00.000"), 7, rem],
[new Date("2023-10-03T00:35:30.000"), 7, rem],
[new Date("2023-10-03T00:35:30.000"), 5, light],
[new Date("2023-10-03T01:39:00.000"), 5, light],
[new Date("2023-10-03T01:39:00.000"), 7, rem],
[new Date("2023-10-03T02:06:30.000"), 7, rem],
[new Date("2023-10-03T02:06:30.000"), 5, light],
[new Date("2023-10-03T02:59:30.000"), 5, light],
[new Date("2023-10-03T02:59:30.000"), 9, wake],
[new Date("2023-10-03T03:21:30.000"), 9, wake],
[new Date("2023-10-03T03:21:30.000"), 5, light],
[new Date("2023-10-03T03:37:30.000"), 5, light],
[new Date("2023-10-03T03:37:30.000"), 3, deep],
[new Date("2023-10-03T03:42:00.000"), 3, deep],
[new Date("2023-10-03T03:42:00.000"), 5, light],
[new Date("2023-10-03T03:50:00.000"), 5, light],
[new Date("2023-10-03T03:50:00.000"), 3, deep],
[new Date("2023-10-03T04:17:00.000"), 3, deep],
[new Date("2023-10-03T04:17:00.000"), 5, light],
[new Date("2023-10-03T04:32:00.000"), 5, light],
[new Date("2023-10-03T04:32:00.000"), 7, rem],
[new Date("2023-10-03T04:38:00.000"), 7, rem],
[new Date("2023-10-03T04:38:00.000"), 5, light],
[new Date("2023-10-03T05:03:00.000"), 5, light],
[new Date("2023-10-03T05:03:00.000"), 3, deep],
[new Date("2023-10-03T05:10:30.000"), 3, deep],
[new Date("2023-10-03T05:10:30.000"), 5, light],
[new Date("2023-10-03T05:49:30.000"), 5, light],
[new Date("2023-10-03T05:49:30.000"), 7, rem],
[new Date("2023-10-03T06:40:00.000"), 7, rem],
[new Date("2023-10-03T06:40:00.000"), 5, light],
[new Date("2023-10-03T06:54:00.000"), 5, light],
[new Date("2023-10-03T06:54:00.000"), 3, deep],
[new Date("2023-10-03T07:13:30.000"), 3, deep],
[new Date("2023-10-03T07:13:30.000"), 5, light],
[new Date("2023-10-03T07:28:30.000"), 5, light],
[new Date("2023-10-03T07:28:30.000"), 3, deep],
[new Date("2023-10-03T07:35:30.000"), 3, deep],
[new Date("2023-10-03T07:35:30.000"), 5, light],
[new Date("2023-10-03T07:36:30.000"), 5, light],
[new Date("2023-10-03T07:36:30.000"), 9, wake],
[new Date("2023-10-03T07:41:30.000"), 9, wake],
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
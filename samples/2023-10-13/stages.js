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
[new Date("2023-10-12T23:00:30.000"), 9, wake],
[new Date("2023-10-12T23:07:00.000"), 9, wake],
[new Date("2023-10-12T23:07:00.000"), 5, light],
[new Date("2023-10-12T23:23:30.000"), 5, light],
[new Date("2023-10-12T23:23:30.000"), 3, deep],
[new Date("2023-10-12T23:41:00.000"), 3, deep],
[new Date("2023-10-12T23:41:00.000"), 5, light],
[new Date("2023-10-12T23:49:00.000"), 5, light],
[new Date("2023-10-12T23:49:00.000"), 3, deep],
[new Date("2023-10-13T00:11:30.000"), 3, deep],
[new Date("2023-10-13T00:11:30.000"), 5, light],
[new Date("2023-10-13T00:12:00.000"), 5, light],
[new Date("2023-10-13T00:12:00.000"), 7, rem],
[new Date("2023-10-13T00:31:30.000"), 7, rem],
[new Date("2023-10-13T00:31:30.000"), 5, light],
[new Date("2023-10-13T01:50:00.000"), 5, light],
[new Date("2023-10-13T01:50:00.000"), 7, rem],
[new Date("2023-10-13T02:07:00.000"), 7, rem],
[new Date("2023-10-13T02:07:00.000"), 5, light],
[new Date("2023-10-13T02:13:30.000"), 5, light],
[new Date("2023-10-13T02:13:30.000"), 7, rem],
[new Date("2023-10-13T02:28:00.000"), 7, rem],
[new Date("2023-10-13T02:28:00.000"), 5, light],
[new Date("2023-10-13T02:29:00.000"), 5, light],
[new Date("2023-10-13T02:29:00.000"), 9, wake],
[new Date("2023-10-13T03:00:30.000"), 9, wake],
[new Date("2023-10-13T03:00:30.000"), 7, rem],
[new Date("2023-10-13T03:07:00.000"), 7, rem],
[new Date("2023-10-13T03:07:00.000"), 5, light],
[new Date("2023-10-13T03:42:00.000"), 5, light],
[new Date("2023-10-13T03:42:00.000"), 3, deep],
[new Date("2023-10-13T04:00:00.000"), 3, deep],
[new Date("2023-10-13T04:00:00.000"), 5, light],
[new Date("2023-10-13T05:35:00.000"), 5, light],
[new Date("2023-10-13T05:35:00.000"), 7, rem],
[new Date("2023-10-13T06:11:30.000"), 7, rem],
[new Date("2023-10-13T06:11:30.000"), 5, light],
[new Date("2023-10-13T06:54:30.000"), 5, light],
[new Date("2023-10-13T06:54:30.000"), 7, rem],
[new Date("2023-10-13T07:24:30.000"), 7, rem],
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
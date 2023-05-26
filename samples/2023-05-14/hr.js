google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'time');
      data.addColumn('number', 'hr');

      data.addRows([
[new Date("2023-05-13T23:16:00.000"), 66],
[new Date("2023-05-13T23:16:14.768"), 66],
[new Date("2023-05-13T23:16:45.066"), 65],
[new Date("2023-05-13T23:17:15.366"), 64],
[new Date("2023-05-13T23:17:45.680"), 67],
[new Date("2023-05-13T23:18:15.993"), 65],
[new Date("2023-05-13T23:18:46.286"), 64],
[new Date("2023-05-13T23:19:16.586"), 63],
[new Date("2023-05-13T23:19:46.901"), 63],
[new Date("2023-05-13T23:20:17.213"), 63],
[new Date("2023-05-13T23:20:47.531"), 65],
[new Date("2023-05-13T23:21:17.845"), 64],
[new Date("2023-05-13T23:21:48.138"), 63],
[new Date("2023-05-13T23:22:18.438"), 62],
[new Date("2023-05-13T23:22:48.755"), 75],
[new Date("2023-05-13T23:23:19.045"), 74],
[new Date("2023-05-13T23:23:49.370"), 70],
[new Date("2023-05-13T23:24:19.689"), 65],
[new Date("2023-05-13T23:24:49.997"), 63],
[new Date("2023-05-13T23:25:20.293"), 63],
[new Date("2023-05-13T23:25:50.609"), 63],
[new Date("2023-05-13T23:26:20.907"), 62],
[new Date("2023-05-13T23:26:51.219"), 64],
[new Date("2023-05-13T23:27:21.535"), 63],
[new Date("2023-05-13T23:27:51.853"), 61],
[new Date("2023-05-13T23:28:22.172"), 62],
[new Date("2023-05-13T23:28:52.461"), 62],
[new Date("2023-05-13T23:29:22.758"), 62],
[new Date("2023-05-13T23:29:53.052"), 61],
[new Date("2023-05-13T23:30:23.388"), 61],
[new Date("2023-05-13T23:30:53.708"), 62],
[new Date("2023-05-13T23:31:24.008"), 62],
[new Date("2023-05-13T23:31:54.342"), 61],
[new Date("2023-05-13T23:32:24.670"), 61],
[new Date("2023-05-13T23:32:54.982"), 62],
[new Date("2023-05-13T23:33:25.278"), 61],
[new Date("2023-05-13T23:33:55.610"), 61],
[new Date("2023-05-13T23:34:25.949"), 61],
[new Date("2023-05-13T23:34:56.279"), 61],
[new Date("2023-05-13T23:35:26.593"), 62],
[new Date("2023-05-13T23:35:56.894"), 62],
[new Date("2023-05-13T23:36:27.218"), 61],
[new Date("2023-05-13T23:36:57.529"), 61],
[new Date("2023-05-13T23:37:27.842"), 60],
[new Date("2023-05-13T23:37:58.193"), 61],
[new Date("2023-05-13T23:38:28.532"), 61],
[new Date("2023-05-13T23:38:58.838"), 62],
[new Date("2023-05-13T23:39:29.166"), 61],
[new Date("2023-05-13T23:39:59.510"), 60],
[new Date("2023-05-13T23:41:00.104"), 61],
[new Date("2023-05-13T23:41:30.444"), 61],
[new Date("2023-05-13T23:42:00.786"), 61],
[new Date("2023-05-13T23:42:31.094"), 60],
[new Date("2023-05-13T23:43:01.413"), 61],
[new Date("2023-05-13T23:43:31.722"), 61],
[new Date("2023-05-13T23:44:02.017"), 61],
[new Date("2023-05-13T23:44:32.334"), 61],
[new Date("2023-05-13T23:45:02.663"), 60],
[new Date("2023-05-13T23:45:33.002"), 61],
[new Date("2023-05-13T23:46:03.314"), 60],
[new Date("2023-05-13T23:46:33.619"), 60],
[new Date("2023-05-13T23:47:03.940"), 60],
[new Date("2023-05-13T23:47:34.271"), 61],
[new Date("2023-05-13T23:48:04.584"), 61],
[new Date("2023-05-13T23:48:34.876"), 60],
[new Date("2023-05-13T23:49:05.220"), 61],
[new Date("2023-05-13T23:49:35.570"), 60],
[new Date("2023-05-13T23:50:05.878"), 59],
[new Date("2023-05-13T23:50:36.204"), 60],
[new Date("2023-05-13T23:51:06.551"), 61],
[new Date("2023-05-13T23:51:36.859"), 60],
[new Date("2023-05-13T23:52:07.189"), 61],
[new Date("2023-05-13T23:52:37.559"), 60],
[new Date("2023-05-13T23:53:07.884"), 60],
[new Date("2023-05-13T23:53:38.204"), 59],
[new Date("2023-05-13T23:54:08.517"), 60],
[new Date("2023-05-13T23:54:38.815"), 60],
[new Date("2023-05-13T23:55:09.161"), 59],
[new Date("2023-05-13T23:55:39.500"), 60],
[new Date("2023-05-13T23:56:09.817"), 59],
[new Date("2023-05-13T23:56:40.103"), 59],
[new Date("2023-05-13T23:57:10.436"), 60],
[new Date("2023-05-13T23:57:40.738"), 60],
[new Date("2023-05-13T23:58:11.048"), 59],
[new Date("2023-05-13T23:58:41.354"), 60],
[new Date("2023-05-13T23:59:11.647"), 60],
[new Date("2023-05-13T23:59:41.938"), 59],
[new Date("2023-05-14T00:00:12.245"), 59],
[new Date("2023-05-14T00:00:42.555"), 60],
[new Date("2023-05-14T00:01:12.867"), 60],
[new Date("2023-05-14T00:01:43.209"), 60],
[new Date("2023-05-14T00:02:13.553"), 60],
[new Date("2023-05-14T00:02:43.868"), 60],
[new Date("2023-05-14T00:03:14.180"), 60],
[new Date("2023-05-14T00:03:44.510"), 67],
[new Date("2023-05-14T00:04:14.823"), 59],
[new Date("2023-05-14T00:04:45.116"), 60],
[new Date("2023-05-14T00:05:15.480"), 62],
[new Date("2023-05-14T00:05:45.777"), 62],
[new Date("2023-05-14T00:06:16.097"), 63],
[new Date("2023-05-14T00:06:46.417"), 61],
[new Date("2023-05-14T00:07:16.729"), 62],
[new Date("2023-05-14T00:07:47.040"), 63],
[new Date("2023-05-14T00:08:17.344"), 62],
[new Date("2023-05-14T00:08:47.662"), 63],
[new Date("2023-05-14T00:09:17.980"), 63],
[new Date("2023-05-14T00:09:48.292"), 62],
[new Date("2023-05-14T00:10:18.583"), 64],
[new Date("2023-05-14T00:10:48.875"), 63],
[new Date("2023-05-14T00:11:19.192"), 63],
[new Date("2023-05-14T00:11:49.518"), 63],
[new Date("2023-05-14T00:12:19.823"), 62],
[new Date("2023-05-14T00:12:50.177"), 62],
[new Date("2023-05-14T00:13:20.512"), 62],
[new Date("2023-05-14T00:13:50.799"), 62],
[new Date("2023-05-14T00:14:21.098"), 62],
[new Date("2023-05-14T00:14:51.390"), 63],
[new Date("2023-05-14T00:15:21.685"), 63],
[new Date("2023-05-14T00:15:52.008"), 62],
[new Date("2023-05-14T00:16:22.318"), 63],
[new Date("2023-05-14T00:16:52.610"), 63],
[new Date("2023-05-14T00:17:22.901"), 63],
[new Date("2023-05-14T00:17:53.221"), 63],
[new Date("2023-05-14T00:18:23.549"), 63],
[new Date("2023-05-14T00:18:53.856"), 62],
[new Date("2023-05-14T00:19:24.180"), 62],
[new Date("2023-05-14T00:19:54.510"), 62],
[new Date("2023-05-14T00:20:24.811"), 62],
[new Date("2023-05-14T00:20:55.158"), 62],
[new Date("2023-05-14T00:21:25.531"), 62],
[new Date("2023-05-14T00:21:55.837"), 62],
[new Date("2023-05-14T00:22:26.190"), 62],
[new Date("2023-05-14T00:22:56.555"), 63],
[new Date("2023-05-14T00:23:26.869"), 61],
[new Date("2023-05-14T00:23:57.213"), 61],
[new Date("2023-05-14T00:24:27.528"), 62],
[new Date("2023-05-14T00:24:57.837"), 62],
[new Date("2023-05-14T00:25:28.134"), 62],
[new Date("2023-05-14T00:25:58.483"), 62],
[new Date("2023-05-14T00:26:28.795"), 62],
[new Date("2023-05-14T00:26:59.091"), 62],
[new Date("2023-05-14T00:27:29.375"), 62],
[new Date("2023-05-14T00:27:59.668"), 62],
[new Date("2023-05-14T00:28:29.966"), 62],
[new Date("2023-05-14T00:29:00.261"), 62],
[new Date("2023-05-14T00:29:30.574"), 61],
[new Date("2023-05-14T00:30:00.861"), 62],
[new Date("2023-05-14T00:30:31.191"), 62],
[new Date("2023-05-14T00:31:01.543"), 63],
[new Date("2023-05-14T00:31:31.840"), 62],
[new Date("2023-05-14T00:32:02.143"), 63],
[new Date("2023-05-14T00:32:32.492"), 62],
[new Date("2023-05-14T00:33:02.800"), 62],
[new Date("2023-05-14T00:33:33.104"), 62],
[new Date("2023-05-14T00:34:03.431"), 62],
[new Date("2023-05-14T00:34:33.728"), 62],
[new Date("2023-05-14T00:35:04.017"), 63],
[new Date("2023-05-14T00:35:34.314"), 66],
[new Date("2023-05-14T00:36:04.639"), 63],
[new Date("2023-05-14T00:36:34.950"), 62],
[new Date("2023-05-14T00:37:05.271"), 63],
[new Date("2023-05-14T00:37:35.586"), 63],
[new Date("2023-05-14T00:38:05.893"), 63],
[new Date("2023-05-14T00:38:36.222"), 65],
[new Date("2023-05-14T00:39:06.565"), 62],
[new Date("2023-05-14T00:39:36.875"), 61],
[new Date("2023-05-14T00:40:07.195"), 60],
[new Date("2023-05-14T00:40:37.519"), 62],
[new Date("2023-05-14T00:41:07.839"), 61],
[new Date("2023-05-14T00:41:38.176"), 61],
[new Date("2023-05-14T00:42:08.494"), 61],
[new Date("2023-05-14T00:42:38.812"), 63],
[new Date("2023-05-14T00:43:09.164"), 64],
[new Date("2023-05-14T00:43:39.499"), 64],
[new Date("2023-05-14T00:44:09.807"), 63],
[new Date("2023-05-14T00:44:40.103"), 63],
[new Date("2023-05-14T00:45:10.425"), 63],
[new Date("2023-05-14T00:45:40.740"), 63],
[new Date("2023-05-14T00:46:11.027"), 63],
[new Date("2023-05-14T00:46:41.325"), 63],
[new Date("2023-05-14T00:47:11.646"), 63],
[new Date("2023-05-14T00:47:41.958"), 59],
[new Date("2023-05-14T00:48:12.253"), 61],
[new Date("2023-05-14T00:48:42.541"), 60],
[new Date("2023-05-14T00:49:12.836"), 61],
[new Date("2023-05-14T00:49:43.132"), 62],
[new Date("2023-05-14T00:50:13.475"), 59],
[new Date("2023-05-14T00:50:43.794"), 60],
[new Date("2023-05-14T00:51:14.079"), 61],
[new Date("2023-05-14T00:51:44.370"), 62],
[new Date("2023-05-14T00:52:14.676"), 60],
[new Date("2023-05-14T00:52:44.991"), 59],
[new Date("2023-05-14T00:53:15.307"), 60],
[new Date("2023-05-14T00:53:45.595"), 61],
[new Date("2023-05-14T00:54:15.884"), 60],
[new Date("2023-05-14T00:54:46.225"), 61],
[new Date("2023-05-14T00:55:16.524"), 60],
[new Date("2023-05-14T00:55:46.837"), 60],
[new Date("2023-05-14T00:56:17.137"), 63],
[new Date("2023-05-14T00:56:47.477"), 59],
[new Date("2023-05-14T00:57:17.795"), 60],
[new Date("2023-05-14T00:57:48.088"), 59],
[new Date("2023-05-14T00:58:18.403"), 60],
[new Date("2023-05-14T00:58:48.694"), 60],
[new Date("2023-05-14T00:59:18.989"), 61],
[new Date("2023-05-14T00:59:49.289"), 59],
[new Date("2023-05-14T01:00:19.598"), 62],
[new Date("2023-05-14T01:00:49.904"), 61],
[new Date("2023-05-14T01:01:20.221"), 60],
[new Date("2023-05-14T01:01:50.527"), 63],
[new Date("2023-05-14T01:02:20.813"), 69],
[new Date("2023-05-14T01:02:51.125"), 67],
[new Date("2023-05-14T01:03:21.478"), 59],
[new Date("2023-05-14T01:03:51.778"), 59],
[new Date("2023-05-14T01:04:22.094"), 61],
[new Date("2023-05-14T01:04:52.391"), 60],
[new Date("2023-05-14T01:05:22.706"), 60],
[new Date("2023-05-14T01:05:53.018"), 61],
[new Date("2023-05-14T01:06:23.353"), 62],
[new Date("2023-05-14T01:06:53.676"), 59],
[new Date("2023-05-14T01:07:23.971"), 59],
[new Date("2023-05-14T01:07:54.260"), 57],
[new Date("2023-05-14T01:08:24.583"), 61],
[new Date("2023-05-14T01:08:54.867"), 60],
[new Date("2023-05-14T01:09:25.168"), 61],
[new Date("2023-05-14T01:09:55.508"), 59],
[new Date("2023-05-14T01:10:25.800"), 60],
[new Date("2023-05-14T01:10:56.090"), 60],
[new Date("2023-05-14T01:11:26.387"), 60],
[new Date("2023-05-14T01:11:56.680"), 59],
[new Date("2023-05-14T01:12:26.969"), 60],
[new Date("2023-05-14T01:12:57.274"), 60],
[new Date("2023-05-14T01:13:27.580"), 59],
[new Date("2023-05-14T01:13:57.883"), 59],
[new Date("2023-05-14T01:14:28.218"), 60],
[new Date("2023-05-14T01:14:58.568"), 60],
[new Date("2023-05-14T01:15:28.877"), 60],
[new Date("2023-05-14T01:15:59.198"), 60],
[new Date("2023-05-14T01:16:29.548"), 60],
[new Date("2023-05-14T01:16:59.857"), 59],
[new Date("2023-05-14T01:17:30.176"), 61],
[new Date("2023-05-14T01:18:00.512"), 59],
[new Date("2023-05-14T01:18:30.810"), 60],
[new Date("2023-05-14T01:19:01.101"), 58],
[new Date("2023-05-14T01:19:31.393"), 59],
[new Date("2023-05-14T01:20:01.712"), 61],
[new Date("2023-05-14T01:20:31.999"), 60],
[new Date("2023-05-14T01:21:02.310"), 61],
[new Date("2023-05-14T01:21:32.614"), 60],
[new Date("2023-05-14T01:22:02.911"), 62],
[new Date("2023-05-14T01:22:33.237"), 61],
[new Date("2023-05-14T01:23:03.540"), 61],
[new Date("2023-05-14T01:23:33.833"), 60],
[new Date("2023-05-14T01:24:04.122"), 61],
[new Date("2023-05-14T01:24:34.469"), 61],
[new Date("2023-05-14T01:25:04.754"), 61],
[new Date("2023-05-14T01:25:35.055"), 61],
[new Date("2023-05-14T01:26:05.351"), 61],
[new Date("2023-05-14T01:26:35.639"), 61],
[new Date("2023-05-14T01:27:05.930"), 62],
[new Date("2023-05-14T01:27:36.227"), 62],
[new Date("2023-05-14T01:28:06.519"), 60],
[new Date("2023-05-14T01:28:36.816"), 61],
[new Date("2023-05-14T01:29:07.144"), 61],
[new Date("2023-05-14T01:29:37.498"), 61],
[new Date("2023-05-14T01:30:07.789"), 61],
[new Date("2023-05-14T01:30:38.076"), 61],
[new Date("2023-05-14T01:31:08.375"), 61],
[new Date("2023-05-14T01:31:38.669"), 61],
[new Date("2023-05-14T01:32:08.981"), 60],
[new Date("2023-05-14T01:32:39.279"), 59],
[new Date("2023-05-14T01:33:09.566"), 61],
[new Date("2023-05-14T01:33:39.866"), 61],
[new Date("2023-05-14T01:34:10.219"), 62],
[new Date("2023-05-14T01:34:40.580"), 62],
[new Date("2023-05-14T01:35:10.890"), 61],
[new Date("2023-05-14T01:35:41.217"), 61],
[new Date("2023-05-14T01:36:11.564"), 62],
[new Date("2023-05-14T01:36:41.884"), 62],
[new Date("2023-05-14T01:37:12.214"), 63],
[new Date("2023-05-14T01:37:42.572"), 62],
[new Date("2023-05-14T01:38:12.896"), 61],
[new Date("2023-05-14T01:38:43.221"), 62],
[new Date("2023-05-14T01:39:13.569"), 63],
[new Date("2023-05-14T01:39:43.883"), 62],
[new Date("2023-05-14T01:40:14.218"), 62],
[new Date("2023-05-14T01:40:44.561"), 61],
[new Date("2023-05-14T01:41:14.881"), 62],
[new Date("2023-05-14T01:41:45.221"), 62],
[new Date("2023-05-14T01:42:15.556"), 63],
[new Date("2023-05-14T01:42:45.850"), 72],
[new Date("2023-05-14T01:43:16.148"), 65],
[new Date("2023-05-14T01:43:46.489"), 62],
[new Date("2023-05-14T01:44:16.807"), 62],
[new Date("2023-05-14T01:44:47.101"), 63],
[new Date("2023-05-14T01:45:17.427"), 63],
[new Date("2023-05-14T01:45:47.734"), 63],
[new Date("2023-05-14T01:46:18.047"), 64],
[new Date("2023-05-14T01:46:48.353"), 63],
[new Date("2023-05-14T01:47:18.668"), 64],
[new Date("2023-05-14T01:47:48.982"), 63],
[new Date("2023-05-14T01:48:19.300"), 61],
[new Date("2023-05-14T01:48:49.619"), 63],
[new Date("2023-05-14T01:49:19.937"), 62],
[new Date("2023-05-14T01:49:50.247"), 62],
[new Date("2023-05-14T01:50:20.550"), 63],
[new Date("2023-05-14T01:50:50.862"), 62],
[new Date("2023-05-14T01:51:21.203"), 63],
[new Date("2023-05-14T01:51:51.535"), 62],
[new Date("2023-05-14T01:52:21.871"), 61],
[new Date("2023-05-14T01:52:52.207"), 62],
[new Date("2023-05-14T01:53:22.522"), 61],
[new Date("2023-05-14T01:53:52.838"), 59],
[new Date("2023-05-14T01:54:23.124"), 60],
[new Date("2023-05-14T01:54:53.482"), 61],
[new Date("2023-05-14T01:55:23.795"), 61],
[new Date("2023-05-14T01:55:54.082"), 60],
[new Date("2023-05-14T01:56:24.390"), 60],
[new Date("2023-05-14T01:56:54.698"), 58],
[new Date("2023-05-14T01:57:24.979"), 59],
[new Date("2023-05-14T01:57:55.286"), 59],
[new Date("2023-05-14T01:58:25.595"), 59],
[new Date("2023-05-14T01:58:55.897"), 61],
[new Date("2023-05-14T01:59:26.222"), 62],
[new Date("2023-05-14T01:59:56.564"), 60],
[new Date("2023-05-14T02:00:26.871"), 60],
[new Date("2023-05-14T02:00:57.211"), 62],
[new Date("2023-05-14T02:01:27.543"), 59],
[new Date("2023-05-14T02:01:57.871"), 59],
[new Date("2023-05-14T02:02:28.191"), 60],
[new Date("2023-05-14T02:02:58.504"), 61],
[new Date("2023-05-14T02:03:28.804"), 61],
[new Date("2023-05-14T02:03:59.116"), 61],
[new Date("2023-05-14T02:04:29.443"), 62],
[new Date("2023-05-14T02:04:59.748"), 61],
[new Date("2023-05-14T02:05:30.051"), 59],
[new Date("2023-05-14T02:06:00.357"), 60],
[new Date("2023-05-14T02:06:30.653"), 62],
[new Date("2023-05-14T02:07:00.947"), 63],
[new Date("2023-05-14T02:07:31.236"), 59],
[new Date("2023-05-14T02:08:01.532"), 60],
[new Date("2023-05-14T02:08:31.827"), 60],
[new Date("2023-05-14T02:09:02.139"), 62],
[new Date("2023-05-14T02:09:32.483"), 62],
[new Date("2023-05-14T02:10:02.780"), 59],
[new Date("2023-05-14T02:10:33.073"), 60],
[new Date("2023-05-14T02:11:03.379"), 59],
[new Date("2023-05-14T02:11:33.705"), 59],
[new Date("2023-05-14T02:12:03.998"), 60],
[new Date("2023-05-14T02:12:34.300"), 61],
[new Date("2023-05-14T02:13:04.605"), 63],
[new Date("2023-05-14T02:13:34.902"), 63],
[new Date("2023-05-14T02:14:05.221"), 64],
[new Date("2023-05-14T02:14:35.559"), 63],
[new Date("2023-05-14T02:15:05.856"), 61],
[new Date("2023-05-14T02:15:36.176"), 60],
[new Date("2023-05-14T02:16:06.518"), 60],
[new Date("2023-05-14T02:16:36.833"), 61],
[new Date("2023-05-14T02:17:07.123"), 60],
[new Date("2023-05-14T02:17:37.449"), 60],
[new Date("2023-05-14T02:18:07.737"), 60],
[new Date("2023-05-14T02:18:38.048"), 59],
[new Date("2023-05-14T02:19:08.360"), 59],
[new Date("2023-05-14T02:19:38.695"), 60],
[new Date("2023-05-14T02:20:09.007"), 61],
[new Date("2023-05-14T02:20:39.336"), 58],
[new Date("2023-05-14T02:21:09.637"), 59],
[new Date("2023-05-14T02:21:39.937"), 58],
[new Date("2023-05-14T02:22:10.260"), 58],
[new Date("2023-05-14T02:22:40.575"), 58],
[new Date("2023-05-14T02:23:10.893"), 59],
[new Date("2023-05-14T02:23:41.229"), 59],
[new Date("2023-05-14T02:24:11.553"), 59],
[new Date("2023-05-14T02:24:41.867"), 58],
[new Date("2023-05-14T02:25:12.204"), 58],
[new Date("2023-05-14T02:25:42.525"), 58],
[new Date("2023-05-14T02:26:12.853"), 58],
[new Date("2023-05-14T02:26:43.193"), 60],
[new Date("2023-05-14T02:27:13.525"), 59],
[new Date("2023-05-14T02:27:43.851"), 60],
[new Date("2023-05-14T02:28:14.193"), 60],
[new Date("2023-05-14T02:28:44.533"), 60],
[new Date("2023-05-14T02:29:14.856"), 59],
[new Date("2023-05-14T02:29:45.196"), 61],
[new Date("2023-05-14T02:30:15.537"), 59],
[new Date("2023-05-14T02:30:45.845"), 59],
[new Date("2023-05-14T02:31:16.146"), 59],
[new Date("2023-05-14T02:31:46.491"), 60],
[new Date("2023-05-14T02:32:16.805"), 61],
[new Date("2023-05-14T02:32:47.123"), 60],
[new Date("2023-05-14T02:33:17.498"), 60],
[new Date("2023-05-14T02:33:47.810"), 60],
[new Date("2023-05-14T02:34:18.131"), 59],
[new Date("2023-05-14T02:34:48.499"), 61],
[new Date("2023-05-14T02:35:18.812"), 60],
[new Date("2023-05-14T02:35:49.156"), 59],
[new Date("2023-05-14T02:36:19.486"), 59],
[new Date("2023-05-14T02:36:49.790"), 59],
[new Date("2023-05-14T02:37:20.103"), 60],
[new Date("2023-05-14T02:37:50.478"), 60],
[new Date("2023-05-14T02:38:20.803"), 60],
[new Date("2023-05-14T02:38:51.110"), 61],
[new Date("2023-05-14T02:39:21.482"), 60],
[new Date("2023-05-14T02:39:51.789"), 60],
[new Date("2023-05-14T02:40:22.093"), 59],
[new Date("2023-05-14T02:40:52.408"), 59],
[new Date("2023-05-14T02:41:22.726"), 60],
[new Date("2023-05-14T02:41:53.033"), 59],
[new Date("2023-05-14T02:42:23.344"), 59],
[new Date("2023-05-14T02:42:53.650"), 62],
[new Date("2023-05-14T02:43:23.978"), 67],
[new Date("2023-05-14T02:43:54.299"), 60],
[new Date("2023-05-14T02:44:24.626"), 60],
[new Date("2023-05-14T02:44:54.948"), 60],
[new Date("2023-05-14T02:45:25.266"), 59],
[new Date("2023-05-14T02:45:55.585"), 61],
[new Date("2023-05-14T02:46:25.901"), 60],
[new Date("2023-05-14T02:46:56.231"), 59],
[new Date("2023-05-14T02:47:26.534"), 59],
[new Date("2023-05-14T02:47:56.856"), 60],
[new Date("2023-05-14T02:48:27.203"), 59],
[new Date("2023-05-14T02:48:57.559"), 60],
[new Date("2023-05-14T02:49:27.862"), 60],
[new Date("2023-05-14T02:49:58.196"), 61],
[new Date("2023-05-14T02:50:28.544"), 60],
[new Date("2023-05-14T02:50:58.860"), 59],
[new Date("2023-05-14T02:51:29.200"), 59],
[new Date("2023-05-14T02:51:59.547"), 60],
[new Date("2023-05-14T02:52:29.862"), 61],
[new Date("2023-05-14T02:53:00.207"), 60],
[new Date("2023-05-14T02:53:30.544"), 60],
[new Date("2023-05-14T02:54:00.837"), 60],
[new Date("2023-05-14T02:54:31.180"), 60],
[new Date("2023-05-14T02:55:01.528"), 60],
[new Date("2023-05-14T02:55:31.843"), 60],
[new Date("2023-05-14T02:56:02.185"), 60],
[new Date("2023-05-14T02:56:32.521"), 59],
[new Date("2023-05-14T02:57:02.846"), 59],
[new Date("2023-05-14T02:57:33.187"), 60],
[new Date("2023-05-14T02:58:03.529"), 60],
[new Date("2023-05-14T02:58:33.845"), 60],
[new Date("2023-05-14T02:59:04.169"), 61],
[new Date("2023-05-14T02:59:34.509"), 59],
[new Date("2023-05-14T03:00:04.822"), 59],
[new Date("2023-05-14T03:00:35.121"), 60],
[new Date("2023-05-14T03:01:05.482"), 60],
[new Date("2023-05-14T03:01:35.802"), 60],
[new Date("2023-05-14T03:02:06.123"), 60],
[new Date("2023-05-14T03:02:36.488"), 59],
[new Date("2023-05-14T03:03:06.810"), 59],
[new Date("2023-05-14T03:03:37.134"), 58],
[new Date("2023-05-14T03:04:07.514"), 60],
[new Date("2023-05-14T03:04:37.834"), 58],
[new Date("2023-05-14T03:05:08.173"), 59],
[new Date("2023-05-14T03:05:38.524"), 59],
[new Date("2023-05-14T03:06:08.828"), 58],
[new Date("2023-05-14T03:06:39.187"), 58],
[new Date("2023-05-14T03:07:09.539"), 58],
[new Date("2023-05-14T03:07:39.867"), 59],
[new Date("2023-05-14T03:08:10.211"), 58],
[new Date("2023-05-14T03:08:40.542"), 58],
[new Date("2023-05-14T03:09:10.872"), 58],
[new Date("2023-05-14T03:09:41.210"), 59],
[new Date("2023-05-14T03:10:11.576"), 58],
[new Date("2023-05-14T03:10:41.895"), 58],
[new Date("2023-05-14T03:11:12.230"), 58],
[new Date("2023-05-14T03:11:42.558"), 58],
[new Date("2023-05-14T03:12:12.880"), 58],
[new Date("2023-05-14T03:12:43.227"), 56],
[new Date("2023-05-14T03:13:13.583"), 58],
[new Date("2023-05-14T03:13:43.896"), 59],
[new Date("2023-05-14T03:14:14.223"), 58],
[new Date("2023-05-14T03:14:44.567"), 58],
[new Date("2023-05-14T03:15:14.887"), 58],
[new Date("2023-05-14T03:15:45.227"), 58],
[new Date("2023-05-14T03:16:15.562"), 59],
[new Date("2023-05-14T03:16:45.878"), 58],
[new Date("2023-05-14T03:17:16.219"), 58],
[new Date("2023-05-14T03:17:46.539"), 57],
[new Date("2023-05-14T03:18:16.865"), 59],
[new Date("2023-05-14T03:18:47.204"), 59],
[new Date("2023-05-14T03:19:17.551"), 61],
[new Date("2023-05-14T03:19:47.858"), 60],
[new Date("2023-05-14T03:20:18.176"), 59],
[new Date("2023-05-14T03:20:48.518"), 59],
[new Date("2023-05-14T03:21:18.805"), 58],
[new Date("2023-05-14T03:21:49.110"), 59],
[new Date("2023-05-14T03:22:19.473"), 61],
[new Date("2023-05-14T03:22:49.794"), 60],
[new Date("2023-05-14T03:23:20.108"), 60],
[new Date("2023-05-14T03:23:50.476"), 60],
[new Date("2023-05-14T03:24:20.794"), 70],
[new Date("2023-05-14T03:24:51.083"), 83],
[new Date("2023-05-14T03:25:21.374"), 68],
[new Date("2023-05-14T03:25:51.693"), 63],
[new Date("2023-05-14T03:26:21.983"), 66],
[new Date("2023-05-14T03:26:52.308"), 66],
[new Date("2023-05-14T03:27:22.646"), 66],
[new Date("2023-05-14T03:27:52.937"), 68],
[new Date("2023-05-14T03:28:23.228"), 69],
[new Date("2023-05-14T03:28:53.538"), 71],
[new Date("2023-05-14T03:29:23.837"), 79],
[new Date("2023-05-14T03:29:54.153"), 84],
[new Date("2023-05-14T03:30:24.481"), 84],
[new Date("2023-05-14T03:30:54.800"), 84],
[new Date("2023-05-14T03:31:25.123"), 84],
[new Date("2023-05-14T03:31:55.486"), 84],
[new Date("2023-05-14T03:32:25.800"), 84],
[new Date("2023-05-14T03:32:56.114"), 81],
[new Date("2023-05-14T03:33:26.456"), 72],
[new Date("2023-05-14T03:33:56.751"), 73],
[new Date("2023-05-14T03:34:27.072"), 72],
[new Date("2023-05-14T03:34:57.387"), 77],
[new Date("2023-05-14T03:35:27.707"), 65],
[new Date("2023-05-14T03:35:58.020"), 65],
[new Date("2023-05-14T03:36:28.309"), 64],
[new Date("2023-05-14T03:36:58.605"), 62],
[new Date("2023-05-14T03:37:28.900"), 61],
[new Date("2023-05-14T03:37:59.223"), 59],
[new Date("2023-05-14T03:38:29.530"), 56],
[new Date("2023-05-14T03:38:59.849"), 56],
[new Date("2023-05-14T03:39:30.169"), 56],
[new Date("2023-05-14T03:40:00.489"), 56],
[new Date("2023-05-14T03:40:30.802"), 59],
[new Date("2023-05-14T03:41:01.091"), 59],
[new Date("2023-05-14T03:41:31.397"), 56],
[new Date("2023-05-14T03:42:01.707"), 59],
[new Date("2023-05-14T03:42:32.025"), 58],
[new Date("2023-05-14T03:43:02.321"), 57],
[new Date("2023-05-14T03:43:32.664"), 55],
[new Date("2023-05-14T03:44:02.982"), 54],
[new Date("2023-05-14T03:44:33.297"), 55],
[new Date("2023-05-14T03:45:03.639"), 55],
[new Date("2023-05-14T03:45:33.963"), 55],
[new Date("2023-05-14T03:46:04.281"), 55],
[new Date("2023-05-14T03:46:34.618"), 54],
[new Date("2023-05-14T03:47:04.928"), 55],
[new Date("2023-05-14T03:47:35.232"), 57],
[new Date("2023-05-14T03:48:05.538"), 58],
[new Date("2023-05-14T03:48:35.838"), 57],
[new Date("2023-05-14T03:49:06.186"), 57],
[new Date("2023-05-14T03:49:36.528"), 55],
[new Date("2023-05-14T03:50:06.842"), 56],
[new Date("2023-05-14T03:50:37.186"), 57],
[new Date("2023-05-14T03:51:07.524"), 55],
[new Date("2023-05-14T03:51:37.834"), 56],
[new Date("2023-05-14T03:52:08.190"), 54],
[new Date("2023-05-14T03:52:38.526"), 53],
[new Date("2023-05-14T03:53:08.849"), 53],
[new Date("2023-05-14T03:53:39.202"), 54],
[new Date("2023-05-14T03:54:09.551"), 54],
[new Date("2023-05-14T03:54:39.872"), 54],
[new Date("2023-05-14T03:55:10.221"), 54],
[new Date("2023-05-14T03:55:40.557"), 53],
[new Date("2023-05-14T03:56:10.881"), 54],
[new Date("2023-05-14T03:56:41.220"), 54],
[new Date("2023-05-14T03:57:11.561"), 55],
[new Date("2023-05-14T03:57:41.883"), 54],
[new Date("2023-05-14T03:58:12.227"), 55],
[new Date("2023-05-14T03:58:42.560"), 54],
[new Date("2023-05-14T03:59:12.893"), 55],
[new Date("2023-05-14T03:59:43.226"), 54],
[new Date("2023-05-14T04:00:13.537"), 55],
[new Date("2023-05-14T04:00:43.864"), 54],
[new Date("2023-05-14T04:01:14.206"), 55],
[new Date("2023-05-14T04:01:44.542"), 54],
[new Date("2023-05-14T04:02:14.866"), 55],
[new Date("2023-05-14T04:02:45.209"), 55],
[new Date("2023-05-14T04:03:15.548"), 55],
[new Date("2023-05-14T04:03:45.867"), 55],
[new Date("2023-05-14T04:04:16.197"), 56],
[new Date("2023-05-14T04:04:46.522"), 67],
[new Date("2023-05-14T04:05:16.838"), 57],
[new Date("2023-05-14T04:05:47.160"), 54],
[new Date("2023-05-14T04:06:17.506"), 55],
[new Date("2023-05-14T04:06:47.820"), 56],
[new Date("2023-05-14T04:07:18.168"), 56],
[new Date("2023-05-14T04:07:48.505"), 57],
[new Date("2023-05-14T04:08:18.792"), 56],
[new Date("2023-05-14T04:08:49.091"), 56],
[new Date("2023-05-14T04:09:19.382"), 56],
[new Date("2023-05-14T04:09:49.672"), 57],
[new Date("2023-05-14T04:10:20.000"), 58],
[new Date("2023-05-14T04:10:50.327"), 58],
[new Date("2023-05-14T04:11:20.655"), 57],
[new Date("2023-05-14T04:11:50.969"), 58],
[new Date("2023-05-14T04:12:21.276"), 58],
[new Date("2023-05-14T04:12:51.614"), 58],
[new Date("2023-05-14T04:13:21.929"), 58],
[new Date("2023-05-14T04:13:52.250"), 58],
[new Date("2023-05-14T04:14:22.591"), 58],
[new Date("2023-05-14T04:14:52.908"), 59],
[new Date("2023-05-14T04:15:23.243"), 58],
[new Date("2023-05-14T04:15:53.560"), 58],
[new Date("2023-05-14T04:16:23.884"), 60],
[new Date("2023-05-14T04:16:54.230"), 58],
[new Date("2023-05-14T04:17:24.562"), 58],
[new Date("2023-05-14T04:17:54.887"), 58],
[new Date("2023-05-14T04:18:25.226"), 57],
[new Date("2023-05-14T04:18:55.539"), 58],
[new Date("2023-05-14T04:19:25.863"), 58],
[new Date("2023-05-14T04:19:56.209"), 58],
[new Date("2023-05-14T04:20:26.546"), 59],
[new Date("2023-05-14T04:20:56.863"), 57],
[new Date("2023-05-14T04:21:27.211"), 57],
[new Date("2023-05-14T04:21:57.572"), 57],
[new Date("2023-05-14T04:22:27.897"), 57],
[new Date("2023-05-14T04:22:58.226"), 58],
[new Date("2023-05-14T04:23:28.531"), 57],
[new Date("2023-05-14T04:23:58.839"), 58],
[new Date("2023-05-14T04:24:29.164"), 57],
[new Date("2023-05-14T04:24:59.510"), 57],
[new Date("2023-05-14T04:25:29.827"), 59],
[new Date("2023-05-14T04:26:00.173"), 58],
[new Date("2023-05-14T04:26:30.529"), 57],
[new Date("2023-05-14T04:27:00.851"), 58],
[new Date("2023-05-14T04:27:31.194"), 59],
[new Date("2023-05-14T04:28:01.535"), 58],
[new Date("2023-05-14T04:28:31.848"), 58],
[new Date("2023-05-14T04:29:02.171"), 59],
[new Date("2023-05-14T04:29:32.522"), 59],
[new Date("2023-05-14T04:30:02.855"), 58],
[new Date("2023-05-14T04:30:33.201"), 58],
[new Date("2023-05-14T04:31:03.535"), 58],
[new Date("2023-05-14T04:31:33.861"), 58],
[new Date("2023-05-14T04:32:04.203"), 58],
[new Date("2023-05-14T04:32:34.543"), 58],
[new Date("2023-05-14T04:33:04.856"), 57],
[new Date("2023-05-14T04:33:35.181"), 57],
[new Date("2023-05-14T04:34:05.519"), 58],
[new Date("2023-05-14T04:34:35.815"), 58],
[new Date("2023-05-14T04:35:06.159"), 58],
[new Date("2023-05-14T04:35:36.507"), 58],
[new Date("2023-05-14T04:36:06.817"), 57],
[new Date("2023-05-14T04:36:37.162"), 57],
[new Date("2023-05-14T04:37:07.505"), 58],
[new Date("2023-05-14T04:37:37.823"), 57],
[new Date("2023-05-14T04:38:08.171"), 58],
[new Date("2023-05-14T04:38:38.522"), 58],
[new Date("2023-05-14T04:39:08.847"), 58],
[new Date("2023-05-14T04:39:39.194"), 58],
[new Date("2023-05-14T04:40:09.556"), 57],
[new Date("2023-05-14T04:40:39.876"), 57],
[new Date("2023-05-14T04:41:10.222"), 57],
[new Date("2023-05-14T04:41:40.557"), 58],
[new Date("2023-05-14T04:42:10.879"), 56],
[new Date("2023-05-14T04:42:41.223"), 57],
[new Date("2023-05-14T04:43:11.565"), 57],
[new Date("2023-05-14T04:43:41.883"), 57],
[new Date("2023-05-14T04:44:12.222"), 57],
[new Date("2023-05-14T04:44:42.540"), 57],
[new Date("2023-05-14T04:45:12.862"), 58],
[new Date("2023-05-14T04:45:43.204"), 57],
[new Date("2023-05-14T04:46:13.545"), 57],
[new Date("2023-05-14T04:46:43.868"), 57],
[new Date("2023-05-14T04:47:14.207"), 57],
[new Date("2023-05-14T04:47:44.551"), 58],
[new Date("2023-05-14T04:48:14.890"), 57],
[new Date("2023-05-14T04:48:45.231"), 58],
[new Date("2023-05-14T04:49:15.545"), 56],
[new Date("2023-05-14T04:49:45.877"), 57],
[new Date("2023-05-14T04:50:16.203"), 58],
[new Date("2023-05-14T04:50:46.518"), 57],
[new Date("2023-05-14T04:51:16.842"), 58],
[new Date("2023-05-14T04:51:47.135"), 58],
[new Date("2023-05-14T04:52:17.477"), 56],
[new Date("2023-05-14T04:52:47.804"), 57],
[new Date("2023-05-14T04:53:18.108"), 57],
[new Date("2023-05-14T04:53:48.483"), 58],
[new Date("2023-05-14T04:54:18.794"), 58],
[new Date("2023-05-14T04:54:49.096"), 56],
[new Date("2023-05-14T04:55:19.417"), 58],
[new Date("2023-05-14T04:55:49.733"), 58],
[new Date("2023-05-14T04:56:20.045"), 57],
[new Date("2023-05-14T04:56:50.357"), 56],
[new Date("2023-05-14T04:57:20.661"), 56],
[new Date("2023-05-14T04:57:50.976"), 57],
[new Date("2023-05-14T04:58:21.296"), 60],
[new Date("2023-05-14T04:58:51.614"), 59],
[new Date("2023-05-14T04:59:21.936"), 57],
[new Date("2023-05-14T04:59:52.251"), 64],
[new Date("2023-05-14T05:00:22.592"), 63],
[new Date("2023-05-14T05:00:52.906"), 54],
[new Date("2023-05-14T05:01:23.229"), 56],
[new Date("2023-05-14T05:01:53.538"), 56],
[new Date("2023-05-14T05:02:23.855"), 58],
[new Date("2023-05-14T05:02:54.205"), 59],
[new Date("2023-05-14T05:03:24.544"), 61],
[new Date("2023-05-14T05:03:54.863"), 63],
[new Date("2023-05-14T05:04:25.206"), 63],
[new Date("2023-05-14T05:04:55.539"), 63],
[new Date("2023-05-14T05:05:25.870"), 63],
[new Date("2023-05-14T05:05:56.206"), 62],
[new Date("2023-05-14T05:06:26.546"), 62],
[new Date("2023-05-14T05:06:56.869"), 60],
[new Date("2023-05-14T05:07:27.211"), 61],
[new Date("2023-05-14T05:07:57.548"), 61],
[new Date("2023-05-14T05:08:27.870"), 63],
[new Date("2023-05-14T05:08:58.205"), 65],
[new Date("2023-05-14T05:09:28.529"), 67],
[new Date("2023-05-14T05:09:58.869"), 67],
[new Date("2023-05-14T05:10:29.197"), 69],
[new Date("2023-05-14T05:10:59.527"), 66],
[new Date("2023-05-14T05:11:29.815"), 61],
[new Date("2023-05-14T05:12:00.110"), 60],
[new Date("2023-05-14T05:12:30.404"), 61],
[new Date("2023-05-14T05:13:00.689"), 64],
[new Date("2023-05-14T05:13:30.987"), 62],
[new Date("2023-05-14T05:14:01.286"), 60],
[new Date("2023-05-14T05:14:31.577"), 62],
[new Date("2023-05-14T05:15:01.871"), 60],
[new Date("2023-05-14T05:15:32.217"), 57],
[new Date("2023-05-14T05:16:02.564"), 56],
[new Date("2023-05-14T05:16:32.896"), 57],
[new Date("2023-05-14T05:17:03.233"), 56],
[new Date("2023-05-14T05:17:33.562"), 56],
[new Date("2023-05-14T05:18:03.878"), 56],
[new Date("2023-05-14T05:18:34.224"), 55],
[new Date("2023-05-14T05:19:04.582"), 55],
[new Date("2023-05-14T05:19:34.911"), 54],
[new Date("2023-05-14T05:20:05.236"), 55],
[new Date("2023-05-14T05:20:35.567"), 55],
[new Date("2023-05-14T05:21:05.885"), 54],
[new Date("2023-05-14T05:21:36.224"), 54],
[new Date("2023-05-14T05:22:06.565"), 54],
[new Date("2023-05-14T05:22:36.883"), 53],
[new Date("2023-05-14T05:23:07.215"), 55],
[new Date("2023-05-14T05:23:37.573"), 56],
[new Date("2023-05-14T05:24:07.892"), 55],
[new Date("2023-05-14T05:24:38.233"), 54],
[new Date("2023-05-14T05:25:08.576"), 54],
[new Date("2023-05-14T05:25:38.892"), 53],
[new Date("2023-05-14T05:26:09.218"), 54],
[new Date("2023-05-14T05:26:39.547"), 54],
[new Date("2023-05-14T05:27:09.871"), 54],
[new Date("2023-05-14T05:27:40.220"), 53],
[new Date("2023-05-14T05:28:10.552"), 56],
[new Date("2023-05-14T05:28:40.872"), 56],
[new Date("2023-05-14T05:29:11.221"), 55],
[new Date("2023-05-14T05:29:41.557"), 58],
[new Date("2023-05-14T05:30:11.867"), 57],
[new Date("2023-05-14T05:30:42.199"), 58],
[new Date("2023-05-14T05:31:12.536"), 59],
[new Date("2023-05-14T05:31:42.853"), 58],
[new Date("2023-05-14T05:32:13.201"), 59],
[new Date("2023-05-14T05:32:43.540"), 60],
[new Date("2023-05-14T05:33:13.884"), 59],
[new Date("2023-05-14T05:33:44.217"), 61],
[new Date("2023-05-14T05:34:14.557"), 69],
[new Date("2023-05-14T05:34:44.855"), 65],
[new Date("2023-05-14T05:35:15.147"), 61],
[new Date("2023-05-14T05:35:45.498"), 63],
[new Date("2023-05-14T05:36:15.815"), 58],
[new Date("2023-05-14T05:36:46.135"), 59],
[new Date("2023-05-14T05:37:16.491"), 59],
[new Date("2023-05-14T05:37:46.786"), 58],
[new Date("2023-05-14T05:38:17.079"), 60],
[new Date("2023-05-14T05:38:47.375"), 58],
[new Date("2023-05-14T05:39:17.688"), 57],
[new Date("2023-05-14T05:39:47.989"), 56],
[new Date("2023-05-14T05:40:18.296"), 56],
[new Date("2023-05-14T05:40:48.608"), 53],
[new Date("2023-05-14T05:41:18.917"), 54],
[new Date("2023-05-14T05:41:49.231"), 56],
[new Date("2023-05-14T05:42:19.544"), 56],
[new Date("2023-05-14T05:42:49.841"), 56],
[new Date("2023-05-14T05:43:20.186"), 56],
[new Date("2023-05-14T05:43:50.529"), 56],
[new Date("2023-05-14T05:44:20.836"), 59],
[new Date("2023-05-14T05:44:51.175"), 73],
[new Date("2023-05-14T05:45:21.506"), 58],
[new Date("2023-05-14T05:45:51.825"), 58],
[new Date("2023-05-14T05:46:22.164"), 55],
[new Date("2023-05-14T05:46:52.511"), 57],
[new Date("2023-05-14T05:47:22.826"), 58],
[new Date("2023-05-14T05:47:53.140"), 57],
[new Date("2023-05-14T05:48:23.482"), 57],
[new Date("2023-05-14T05:48:53.776"), 55],
[new Date("2023-05-14T05:49:24.093"), 54],
[new Date("2023-05-14T05:49:54.405"), 54],
[new Date("2023-05-14T05:50:24.706"), 55],
[new Date("2023-05-14T05:50:55.035"), 56],
[new Date("2023-05-14T05:51:25.406"), 56],
[new Date("2023-05-14T05:51:55.701"), 57],
[new Date("2023-05-14T05:52:26.021"), 56],
[new Date("2023-05-14T05:52:56.346"), 55],
[new Date("2023-05-14T05:53:26.662"), 54],
[new Date("2023-05-14T05:53:56.984"), 54],
[new Date("2023-05-14T05:54:27.302"), 54],
[new Date("2023-05-14T05:54:57.642"), 54],
[new Date("2023-05-14T05:55:27.952"), 54],
[new Date("2023-05-14T05:55:58.280"), 54],
[new Date("2023-05-14T05:56:28.617"), 54],
[new Date("2023-05-14T05:56:58.929"), 54],
[new Date("2023-05-14T05:57:29.247"), 55],
[new Date("2023-05-14T05:57:59.546"), 55],
[new Date("2023-05-14T05:58:29.862"), 54],
[new Date("2023-05-14T05:59:00.208"), 54],
[new Date("2023-05-14T05:59:30.551"), 54],
[new Date("2023-05-14T06:00:00.864"), 55],
[new Date("2023-05-14T06:00:31.214"), 55],
[new Date("2023-05-14T06:01:01.568"), 55],
[new Date("2023-05-14T06:01:31.896"), 56],
[new Date("2023-05-14T06:02:02.232"), 54],
[new Date("2023-05-14T06:02:32.550"), 54],
[new Date("2023-05-14T06:03:02.867"), 54],
[new Date("2023-05-14T06:03:33.219"), 55],
[new Date("2023-05-14T06:04:03.557"), 55],
[new Date("2023-05-14T06:04:33.869"), 55],
[new Date("2023-05-14T06:05:04.217"), 55],
[new Date("2023-05-14T06:05:34.557"), 53],
[new Date("2023-05-14T06:06:04.865"), 55],
[new Date("2023-05-14T06:06:35.223"), 55],
[new Date("2023-05-14T06:07:05.583"), 54],
[new Date("2023-05-14T06:07:35.903"), 55],
[new Date("2023-05-14T06:08:06.231"), 56],
[new Date("2023-05-14T06:08:36.559"), 56],
[new Date("2023-05-14T06:09:06.887"), 55],
[new Date("2023-05-14T06:09:37.228"), 56],
[new Date("2023-05-14T06:10:07.589"), 56],
[new Date("2023-05-14T06:10:37.911"), 55],
[new Date("2023-05-14T06:11:08.227"), 56],
[new Date("2023-05-14T06:11:38.533"), 55],
[new Date("2023-05-14T06:12:08.869"), 55],
[new Date("2023-05-14T06:12:39.204"), 55],
[new Date("2023-05-14T06:13:09.542"), 54],
[new Date("2023-05-14T06:13:39.841"), 55],
[new Date("2023-05-14T06:14:10.183"), 56],
[new Date("2023-05-14T06:14:40.525"), 56],
[new Date("2023-05-14T06:15:10.871"), 55],
[new Date("2023-05-14T06:15:41.235"), 56],
[new Date("2023-05-14T06:16:11.579"), 56],
[new Date("2023-05-14T06:16:41.892"), 55],
[new Date("2023-05-14T06:17:12.218"), 55],
[new Date("2023-05-14T06:17:42.558"), 55],
[new Date("2023-05-14T06:18:12.888"), 54],
[new Date("2023-05-14T06:18:43.228"), 55],
[new Date("2023-05-14T06:19:13.533"), 56],
[new Date("2023-05-14T06:19:43.855"), 55],
[new Date("2023-05-14T06:20:14.189"), 56],
[new Date("2023-05-14T06:20:44.542"), 55],
[new Date("2023-05-14T06:21:14.878"), 56],
[new Date("2023-05-14T06:21:45.226"), 56],
[new Date("2023-05-14T06:22:15.578"), 56],
[new Date("2023-05-14T06:22:45.880"), 56],
[new Date("2023-05-14T06:23:16.219"), 56],
[new Date("2023-05-14T06:23:46.537"), 56],
[new Date("2023-05-14T06:24:16.855"), 57],
[new Date("2023-05-14T06:24:47.173"), 56],
[new Date("2023-05-14T06:25:17.516"), 54],
[new Date("2023-05-14T06:25:47.838"), 55],
[new Date("2023-05-14T06:26:18.151"), 55],
[new Date("2023-05-14T06:26:48.498"), 55],
[new Date("2023-05-14T06:27:18.808"), 56],
[new Date("2023-05-14T06:27:49.107"), 56],
[new Date("2023-05-14T06:28:19.472"), 55],
[new Date("2023-05-14T06:28:49.786"), 56],
[new Date("2023-05-14T06:29:20.084"), 57],
[new Date("2023-05-14T06:29:50.411"), 56],
[new Date("2023-05-14T06:30:20.736"), 55],
[new Date("2023-05-14T06:30:51.041"), 55],
[new Date("2023-05-14T06:31:21.351"), 56],
[new Date("2023-05-14T06:31:51.681"), 56],
[new Date("2023-05-14T06:32:21.987"), 56],
[new Date("2023-05-14T06:32:52.279"), 56],
[new Date("2023-05-14T06:33:22.576"), 57],
[new Date("2023-05-14T06:33:52.898"), 56],
[new Date("2023-05-14T06:34:23.224"), 57],
[new Date("2023-05-14T06:34:53.526"), 56],
[new Date("2023-05-14T06:35:23.848"), 56],
[new Date("2023-05-14T06:35:54.201"), 56],
[new Date("2023-05-14T06:36:24.551"), 56],
[new Date("2023-05-14T06:36:54.875"), 56],
[new Date("2023-05-14T06:37:25.218"), 56],
[new Date("2023-05-14T06:37:55.554"), 56],
[new Date("2023-05-14T06:38:25.869"), 56],
[new Date("2023-05-14T06:38:56.221"), 55],
[new Date("2023-05-14T06:39:26.563"), 56],
[new Date("2023-05-14T06:39:56.880"), 56],
[new Date("2023-05-14T06:40:27.214"), 56],
[new Date("2023-05-14T06:40:57.560"), 56],
[new Date("2023-05-14T06:41:27.881"), 58],
[new Date("2023-05-14T06:41:58.216"), 75],
[new Date("2023-05-14T06:42:28.561"), 57],
[new Date("2023-05-14T06:42:58.882"), 56],
[new Date("2023-05-14T06:43:29.238"), 55],
[new Date("2023-05-14T06:43:59.569"), 55],
[new Date("2023-05-14T06:44:29.886"), 55],
[new Date("2023-05-14T06:45:00.226"), 56],
[new Date("2023-05-14T06:45:30.540"), 55],
[new Date("2023-05-14T06:46:00.838"), 55],
[new Date("2023-05-14T06:46:31.188"), 57],
[new Date("2023-05-14T06:47:01.528"), 56],
[new Date("2023-05-14T06:47:31.837"), 58],
[new Date("2023-05-14T06:48:00.000"), 58],
    ]);

      var date_formatter = new google.visualization.DateFormat({ pattern: "HH:mm"}); 
      date_formatter.format(data, 0);  // Where 0 is the index of the column

      var options = {
        'width': 1400,
        'height': 200,
        hAxis: {
          title: 'Time',
          gridlines: {
            color: 'transparent'
          },
          format: 'HH:mm',
        },
        vAxis: {
          title: 'Heart Rate',
          gridlines: {
            color: 'transparent'
          },
          viewWindow: {
            min: 50,
            max: 90
          }
        },
        backgroundColor: 'transparent',
        colors: ['white'],
        legend: {position: 'none'}
      };

      var chart = new google.visualization.LineChart(document.getElementById('top-hr'));

      chart.draw(data, options);
    }
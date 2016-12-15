google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart_ox);
function drawChart_ox() {
  var data_ox = google.visualization.arrayToDataTable([
	  ['Time', 'Oxygen'],
	  [ 1,       22],
	  [ 5,       25.5],
	  [ 10,      24],
	  [ 14,      25],
	  [ 20,      23.5],
	  [ 23,      27]
	  ]);

  var options_ox = {
	hAxis: {title: 'Time/h', minValue: 00, maxValue: 24},
	vAxis: {title: 'Oxygen/%', minValue: 15, maxValue: 30},
	legend: 'none'
  };

  var chart1 = new google.visualization.ScatterChart(document.getElementById('chart_div1'));
  chart1.draw(data_ox, options_ox);
}


google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart_hu);
function drawChart_hu() {
  var data_hu = google.visualization.arrayToDataTable([
	  ['Time', 'Humidity'],
	  [ 1,       2223],
	  [ 5,       2055],
	  [ 10,      2012],
	  [ 14,      2132],
	  [ 20,      2352],
	  [ 23,      2302]
	  ]);

  var options_hu = {
	hAxis: {title: 'Time/h', minValue: 00, maxValue: 24},
	vAxis: {title: 'Humidity', minValue: 2000, maxValue: 2500},
	legend: 'none'
  };

  var chart2 = new google.visualization.ScatterChart(document.getElementById('chart_div2'));
  chart2.draw(data_hu, options_hu);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart_co2);
function drawChart_co2() {
  var data_co2 = google.visualization.arrayToDataTable([
	  ['Time', 'CO2'],
	  [ 0,       456],
	  [ 4,       477],
	  [ 8,       508],
	  [ 12,      384],
	  [ 16,      423],
	  [ 20,      438],
	  [ 23,      443]
	  ]);

  var options_co2 = {
	hAxis: {title: 'Time/h', minValue: 00, maxValue: 24},
	vAxis: {title: 'CO2/ppm', minValue: 300, maxValue: 600},
	legend: 'none'
  };

  var chart3 = new google.visualization.ScatterChart(document.getElementById('chart_div3'));
  chart3.draw(data_co2, options_co2);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart_tp);
function drawChart_tp() {
  var data_tp = google.visualization.arrayToDataTable([
	  ['Time', 'Temperature'],
	  [ 1,       25],
	  [ 5,       25.5],
	  [ 10,      19],
	  [ 14,      22],
	  [ 20,      23.5],
	  [ 23,      17]
	  ]);

  var options_tp = {
	hAxis: {title: 'Time/h', minValue: 00, maxValue: 24},
	vAxis: {title: 'Temperature/C degree', minValue: 15, maxValue: 30},
	legend: 'none'
  };

  var chart4 = new google.visualization.ScatterChart(document.getElementById('chart_div4'));
  chart4.draw(data_tp, options_tp);
}

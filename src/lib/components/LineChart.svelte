<script>
	import { Chart, LineSeries, getElement } from '@syncfusion/ej2-charts';
	import { onMount } from 'svelte';

	let linearGauge;

	onMount(async () => {
		Chart.Inject(LineSeries);
		let series1 = [];
		let value = 10;
		let i;
		let intervalId;

		for (i = 0; i < 50; i++) {
			// Data update
			if (Math.random() > 0.5) {
				value += Math.random() * 2.0;
			}
			series1[i] = { x: i, y: value };
		}

		let chart = new Chart(
			{
				series: [
					{
						type: 'Line',
						dataSource: series1,
						xName: 'x',
						yName: 'y',
						animation: { enable: false }
					}
				],
				width: '100%',
				height: '100%'
			},
			'#element'
		);

		let setTimeoutValue = 100;
		intervalId = setInterval(() => {
			if (getElement('container') === null) {
				clearInterval(intervalId);
			} else {
				if (Math.random() > 0.5) {
					value += Math.random() * 2.0;
				}
				series1.push({ x: i, y: value });
				i++; // Used to remove the first element
				chart.series[0].dataSource = series1;
				chart.refresh();
			}
		}, setTimeoutValue);
	});
</script>

<div id="container">
	<div id="element" style="width:350px; height:350px;" />
</div>

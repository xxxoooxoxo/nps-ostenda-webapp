<script>
	import { PUBLIC_MAPBOX_TOKEN } from '$env/static/public';
	import { Map, Marker } from '@beyonk/svelte-mapbox';

	let someLat = 38.0293;
	let someLng = -78.4767;
	let mapComponent;
	let center = { lat: someLat, lng: someLng };

	export let data;
</script>

<div class="map-wrap">
	<Map
		bind:this={mapComponent}
		accessToken={PUBLIC_MAPBOX_TOKEN}
		style={'mapbox://styles/mapbox/dark-v11'}
		{center}
		zoom="5"
	>
		{#each Object.keys(data.props.data) as sensorId}
			<Marker
				lat={data.props.data[sensorId].latitude}
				lng={data.props.data[sensorId].longitude}
				label={data.props.data[sensorId].name}
				popupClassName="none"
			>
				<div slot="popup">
					<a href="/nodes/{data.props.data[sensorId].sensor_index}">
						{JSON.stringify(data.props.data[sensorId])}
					</a>
				</div>
				<div class="crosshair" />
			</Marker>
		{/each}
	</Map>
</div>

<style>
	.map-wrap {
		width: 100%;
		height: 100%;
		z-index: -1;
		position: absolute;
	}

	.crosshair {
		position: relative;
		width: 50px;
		height: 50px;
	}

	.crosshair:before,
	.crosshair:after {
		content: '';
		position: absolute;
		background-color: #8c97e6;
	}

	.crosshair:before {
		width: 2px;
		height: 100%;
		left: 50%;
		margin-left: -1px;
	}

	.crosshair:after {
		width: 100%;
		height: 2px;
		top: 50%;
		margin-top: -1px;
	}
</style>

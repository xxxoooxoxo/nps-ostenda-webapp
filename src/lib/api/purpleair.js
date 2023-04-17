import { PUBLIC_PURPLE_AIR_API_TOKEN } from '$env/static/public';
import { data } from '$lib/sensors';

const headers = new Headers({ 'X-API-Key': PUBLIC_PURPLE_AIR_API_TOKEN });

const requestOptions = {
	method: 'GET',
	headers: headers,
	redirect: 'follow'
};

// fields used by the purpleAir API
const fields = [
	'humidity',
	'temperature',
	'pressure',
	'pm2.5_alt',
	'pm10.0_atm',
	'latitude',
	'longitude',
	'name'
];

// fetch data from purpleAir API
export async function getCurrentData() {
	for (const id in data) {
		const url = `https://api.purpleair.com/v1/sensors/${id}?fields=${fields.join(',')}`;
		try {
			const response = await fetch(url, requestOptions);
			const result = await response.json();
			data[id] = await result.sensor;
		} catch (error) {
			console.log('error', error);
		}
	}

	return data;
}

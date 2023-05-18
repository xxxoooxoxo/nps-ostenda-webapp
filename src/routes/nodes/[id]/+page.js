import { getHistoricalData } from '$lib/api/purpleair';
import { historicalDataStore } from '$lib/historicalDataStore.js';

export async function load({ params: sensorId }) {
	try {
		const data = await getHistoricalData(sensorId.id);
		historicalDataStore.set(data);
	} catch (error) {
		console.log('error', error);
		return {
			status: 500,
			error: 'Failed to fetch data'
		};
	}
}

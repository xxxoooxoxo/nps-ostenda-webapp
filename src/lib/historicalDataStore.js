import { writable } from 'svelte/store';

export const historicalDataStore = writable({
	humidity: [],
	temperature: [],
	pressure: [],
	'pm2.5_alt': [],
	'pm10.0_atm': []
});

export function resetStore() {
	historicalDataStore.set({
		humidity: [],
		temperature: [],
		pressure: [],
		'pm2.5_alt': [],
		'pm10.0_atm': []
	});
}

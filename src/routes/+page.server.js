import { getCurrentData } from '../lib/api/purpleair';

export async function load() {
	try {
		const data = await getCurrentData();
		return {
			status: 200,
			props: {
				data
			}
		};
	} catch (error) {
		console.log('error', error);
		return {
			status: 500,
			error: 'Failed to fetch data'
		};
	}
}

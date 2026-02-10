const TMDB_BASE = 'https://api.themoviedb.org/3';

export async function tmdb(path, params = {}) {
	const apiKey = import.meta.env.TMDB_API_KEY;
	if (!apiKey) {
		throw new Error('Missing TMDB_API_KEY. Add it to frontend/.env before running the server.');
	}
	const url = new URL(`${TMDB_BASE}${path}`);
	url.searchParams.set('api_key', apiKey);
	Object.entries(params).forEach(([key, value]) => {
		if (value === undefined || value === null || value === '') return;
		url.searchParams.set(key, String(value));
	});

	const response = await fetch(url);
	if (!response.ok) {
		const text = await response.text();
		throw new Error(`TMDB request failed (${response.status}): ${text}`);
	}
	return response.json();
}

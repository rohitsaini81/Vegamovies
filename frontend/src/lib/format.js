const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(input) {
	if (!input) return 'Unknown';
	const date = new Date(input);
	const day = String(date.getDate()).padStart(2, '0');
	return `${day} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDuration(minutes) {
	if (!minutes && minutes !== 0) return 'Unknown';
	if (minutes < 60) return `${minutes} minute`;
	const hours = Math.floor(minutes / 60);
	const remaining = minutes % 60;
	return `${hours} hour${hours > 1 ? 's' : ''} ${remaining} minute${remaining !== 1 ? 's' : ''}`;
}

export function formatReviewDate(input) {
	if (!input) return 'Unknown';
	const date = new Date(input);
	const day = String(date.getDate()).padStart(2, '0');
	const hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const suffix = hours >= 13 ? 'pm' : 'am';
	return `${MONTHS[date.getMonth()]} ${day} ${date.getFullYear()} at ${hours}:${minutes} ${suffix}`;
}

export function slugify(value) {
	return value
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '');
}

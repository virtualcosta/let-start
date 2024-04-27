const fullName = name || 'buddy';
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const updated = numbers.filter(element => element > 6);
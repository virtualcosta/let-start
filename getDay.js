const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
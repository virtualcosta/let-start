const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
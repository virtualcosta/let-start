const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const uniqueArr = (arr) => [...new Set(arr)];
var c = new Counter(); c.add(); c.add(); c.add();
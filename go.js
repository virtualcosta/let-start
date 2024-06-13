const merge = [...new Set([...a, ...b])];
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const arrayContains = (arr, element) => arr.includes(element);
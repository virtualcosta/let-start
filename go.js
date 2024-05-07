const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
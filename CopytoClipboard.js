const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
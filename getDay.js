const isEmptyObject = obj => Object.keys(obj).length === 0;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
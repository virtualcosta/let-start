const currentDate = () => new Date().toLocaleDateString('en-US');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
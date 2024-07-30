console.log(false == '0');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
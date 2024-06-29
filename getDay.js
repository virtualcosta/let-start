const uniqueArr = (arr) => [...new Set(arr)];
const repositoryRootPath = path.resolve(__dirname, '..');
const isEmptyObject = obj => Object.keys(obj).length === 0;
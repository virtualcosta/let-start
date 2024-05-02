console.log(1 +  "2" + "2");
const scriptRootPath = path.join(repositoryRootPath, 'script');
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
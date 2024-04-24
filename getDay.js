const resultingPromises = urls.map((url) => makHttpRequest(url));
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const executableName = getExecutableName(channel, appName);
const allResults = await Promise.all(items.map(async (item) => {}));
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const getRandomBoolean = () => Math.random() >= 0.5;
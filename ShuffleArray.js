const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const getRandomBoolean = () => Math.random() >= 0.5;
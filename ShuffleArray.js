function myAPITS(someString: string, someNum: number) { ... };
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
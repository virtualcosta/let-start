const randomString = () => Math.random().toString(36).slice(2);
const isEmptyObject = obj => Object.keys(obj).length === 0;
const toggleBool = () => (bool = !bool);
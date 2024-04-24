var DELIM_SIZE = 4;
const merge = Object.assign({}, obj1, obj2);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const symbolsPath = path.join(buildOutputPath, 'symbols');
const channel = getChannel(computedAppVersion);
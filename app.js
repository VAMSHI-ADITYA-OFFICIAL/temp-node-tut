const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newITems = _.flattenDeep(items);

console.log(newITems);

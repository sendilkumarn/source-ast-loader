import constVal from './const-import';
import multiplyFunction from './multiply';
import simpleModule from './sample-export';

function add(value) {
    return value + constVal + (multiplyFunction(value, constVal));
};

module.exports = "import-three";
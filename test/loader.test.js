import compiler from './compiler.js';
import { runLoaders } from "loader-runner";
const path = require("path");
const fixtures = path.resolve(__dirname, "");


test('it should parse a sample module', async () => {
  const stats = await compiler(require('./sample-export'));
  const output = stats.toJson().modules;
  expect(output.length).toBe(1);
  expect(output[0].source).toBe('// This is a sample file with export\nmodule.exports= \"sample-export\";');
});


test('it should parse a multi level module imports ', async () => {
  const stats = await compiler(require('./module'));
  const output = stats.toJson().modules;
  expect(output.length).toBe(5);
  expect(output[0].source).toBe('import constVal from \'./const-import\';\nimport multiplyFunction from \'./multiply\';\nimport simpleModule from \'./sample-export\';\n\nfunction add(value) {\n    return value + constVal + (multiplyFunction(value, constVal));\n};\n\nmodule.exports = "import-three";')
});

test('it should get the ast for the simple module import', async () => {
  runLoaders({
    resource: path.resolve(fixtures, './sample-export.js'),
    loaders: [path.resolve(fixtures, '../src/loader.js')]
  }, function(err, result) {
      expect(result.result.length).toBe(3);
      expect(result.result[2].webpackAST.Node.comments.length).toBe(1);
      expect(result.result[2].webpackAST.Node.comments[0]).toBe('This is a sample file with export');
  })
});

test('it should get the ast for the simple module import', async () => {
  runLoaders({
    resource: path.resolve(fixtures, './module.js'),
    loaders: [path.resolve(fixtures, '../src/loader.js')]
  }, function(err, result) {
    expect(result.result.length).toBe(3);
    expect(result.result[2].webpackAST.Node.body.length).toBe(2);
    expect(result.result[2].webpackAST.Node.comments.length).toBe(1);
  })
});
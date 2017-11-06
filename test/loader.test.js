import compiler from './compiler.js';

test('it should return the ', async () => {
  const stats = await compiler(require("./module"));
  // the AST is not present in the below object
  const output = stats.toJson().modules[0];
  // check for the AST
});

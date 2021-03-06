"use strict";

const acorn = require("acorn-dynamic-import").default;

module.exports = function(source, map) {
	const comments = [];
	const ast = acorn.parse(source, {
		ranges: true,
		locations: true,
		ecmaVersion: 2017,
		sourceType: "module",
		plugins: {
			dynamicImport: true
		},
		onComment: comments
	});
	
	ast.comments = comments;
	this.callback(null, source, map, {
		webpackAST: ast
	});
	return;
};
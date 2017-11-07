# Source-AST Loader

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon.svg">
  </a>
  <h1>Bundle Loader</h1>
  <p>Bundle loader for webpack<p>
</div>

<h2 align="center">Install</h2>

```bash
npm i source-ast-loader --save
```

<h2 align="center"><a href="https://webpack.js.org/concepts/loaders">Usage</a></h2>

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: 'source-ast-loader'
      }
    ]
  }
}
```
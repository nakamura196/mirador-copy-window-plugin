# mirador-copy-window-plugin

<!-- [![Travis][build-badge]][build]
[![npm package][npm-badge]][npm] -->
[![Coveralls][coveralls-badge]][coveralls]

`mirador-copy-window-plugin` is a Mirador 3 plugin that adds copy window functions to the window options menu. <!-- A [live demo](https://mirador-download-plugin.netlify.app/) with several institutions' manifests is available for testing. -->

![copy window option in menu](https://github.com/nakamura196/mirador-copy-window-plugin/assets/5351691/58ddc3d3-90e3-4c75-99a2-d5722fcdb23d)

![mirador-copy-window-options](https://github.com/nakamura196/mirador-copy-window-plugin/assets/5351691/23432a0d-3132-4cbe-8290-dadf23ed4b35)


[build-badge]: https://img.shields.io/travis/projectmirador/mirador-copy-window-plugin/main.png?style=flat-square
[build]: https://travis-ci.org/projectmirador/mirador-copy-window-plugin

[npm-badge]: https://img.shields.io/npm/v/mirador-copy-window-plugin.png?style=flat-square
[npm]: https://www.npmjs.org/package/mirador-copy-window-plugin

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/main.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

## Installation

`mirador-copy-window-plugin` requires an instance of Mirador 3. See the [Mirador wiki](https://github.com/ProjectMirador/mirador/wiki) for examples of embedding Mirador within an application and additional information about plugins. See the [live demo's index.js](https://github.com/ProjectMirador/mirador-copy-window-plugin/blob/main/demo/src/index.js) for an example of importing and configuring `mirador-copy-window-plugin`.

<!-- 

## Configuration

Configurations for this plugin are injected when Mirador is initialized under the `miradorCopyWindowPlugin` key.

```js
...
  id: 'mirador',
  miradorCopyWindowPlugin: {
    ...
  }
...
```

| Config Key | Type | Description |
| --- | --- | --- |
| `restrictDownloadOnSizeDefinition` | boolean (default: false) | If set to true the `Zoomed region` link will not be rendered if the image API returns a single size in the `sizes` section and the single size height/width is the same size or smaller than the reported height/width. |

-->

## Contribute
Mirador's development, design, and maintenance is driven by community needs and ongoing feedback and discussion. Join us at our regularly scheduled community calls, on [IIIF slack #mirador](http://bit.ly/iiif-slack), or the [mirador-tech](https://groups.google.com/forum/#!forum/mirador-tech) and [iiif-discuss](https://groups.google.com/forum/#!forum/iiif-discuss) mailing lists. To suggest features, report bugs, and clarify usage, please submit a GitHub issue.

ECharts-X
=======

ECharts-X is an extension pack of [ECharts](http://echarts.baidu.com) providing globe visualization and 3D plots. Maintained by [ECharts](http://echarts.baidu.com/doc/about.html) team.

It is built on top of Canvas library [ZRender](https://github.com/uooo/zrender) and WebGL graphic library [QTEK](https://github.com/uooo/qtek)。

[![NPM version][npm-badge]][npm] [![Gitter][gitter-badge]][gitter]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

[npm-badge]: https://img.shields.io/npm/v/echarts-x.svg?style=flat-square
[npm]: http://badge.fury.io/js/echarts-x

[gitter-badge]: https://img.shields.io/badge/gitter-join%20chat-f81a65.svg?style=flat-square
[gitter]: https://gitter.im/uooo/echarts-x?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

[deps-badge]: https://david-dm.org/uooo/echarts-x.svg
[deps]: https://david-dm.org/uooo/echarts-x

[dev-deps-badge]: https://david-dm.org/uooo/echarts-x/dev-status.svg
[dev-deps]: https://david-dm.org/uooo/echarts-x#info=devDependencies

[peer-deps-badge]: https://david-dm.org/uooo/echarts-x/peer-status.svg
[peer-deps]: https://david-dm.org/uooo/echarts-x#info=peerDependencies

### Installation

Using npm:

```sh
$ {sudo -H} npm i -g npm
$ npm i --save echarts-x
```

in [webpack](https://github.com/webpack/webpack):

```sh
$ npm i --save text-loader
```

```js
import echarts from 'echarts/echarts';
import 'echarts-x/echarts-x';
import 'echarts/chart/map';
import 'echarts/chart/bar';
import 'echarts-x/chart/map3d';

let mychart = echarts.init(dom);
mychart.setOption({...});
```

webpack example: https://github.com/uooo/echarts-x/tree/master/examples/webpack

webpack online demo: http://uooo.github.io/echarts-x/examples/webpack

### [Download v0.2](http://echarts.baidu.com/x/build/echarts-x-0.2.0.zip)

### [Documentation](http://echarts.baidu.com/x/doc/cn/article/getting_started.html)

### [Examples](http://echarts.baidu.com/x/doc/example.html)

### [Changelog](https://github.com/ecomfe/echarts-x/wiki/Changelog)

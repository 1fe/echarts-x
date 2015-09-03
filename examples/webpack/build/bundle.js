/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _echartsEcharts = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts/echarts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _echartsEcharts2 = _interopRequireDefault(_echartsEcharts);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts-x/echarts-x\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(141);
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts/chart/bar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts-x/chart/map3d\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jquery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function setOption(chart) {
	    chart.setOption({
	        title: {
	            text: 'World Population (2010)',
	            subtext: 'Data from United Nations, Total population, both sexes combined, as of 1 July (thousands)',
	            sublink: 'http://esa.un.org/wpp/Excel-Data/population.htm',
	            x: 'center',
	            y: 'top',
	            textStyle: {
	                color: 'white'
	            }
	        },
	        tooltip: {
	            show: true
	        },
	        dataRange: {
	            min: 0,
	            max: 1000000,
	            text: ['High', 'Low'],
	            realtime: false,
	            calculable: true,
	            color: ['orangered', 'yellow', 'lightskyblue']
	        },
	        series: [{
	            name: 'World Population',
	            type: 'map3d',
	
	            mapType: 'world',
	
	            baseLayer: {
	                backgroundColor: '#d9dcf7'
	            },
	
	            itemStyle: {
	                normal: {
	                    borderWidth: 1
	                }
	            },
	
	            data: [{ name: 'Afghanistan', value: 28397.812 }, { name: 'Angola', value: 19549.124 }, { name: 'Albania', value: 3150.143 }, { name: 'United Arab Emirates', value: 8441.537 }, { name: 'Argentina', value: 40374.224 }, { name: 'Armenia', value: 2963.496 }, { name: 'French Southern and Antarctic Lands', value: 268.065 }, { name: 'Australia', value: 22404.488 }, { name: 'Austria', value: 8401.924 }, { name: 'Azerbaijan', value: 9094.718 }, { name: 'Burundi', value: 9232.753 }, { name: 'Belgium', value: 10941.288 }, { name: 'Benin', value: 9509.798 }, { name: 'Burkina Faso', value: 15540.284 }, { name: 'Bangladesh', value: 151125.475 }, { name: 'Bulgaria', value: 7389.175 }, { name: 'The Bahamas', value: 66402.316 }, { name: 'Bosnia and Herzegovina', value: 3845.929 }, { name: 'Belarus', value: 9491.07 }, { name: 'Belize', value: 308.595 }, { name: 'Bermuda', value: 64.951 }, { name: 'Bolivia', value: 716.939 }, { name: 'Brazil', value: 195210.154 }, { name: 'Brunei', value: 27.223 }, { name: 'Bhutan', value: 716.939 }, { name: 'Botswana', value: 1969.341 }, { name: 'Central African Republic', value: 4349.921 }, { name: 'Canada', value: 34126.24 }, { name: 'Switzerland', value: 7830.534 }, { name: 'Chile', value: 17150.76 }, { name: 'China', value: 1359821.465 }, { name: 'Ivory Coast', value: 60508.978 }, { name: 'Cameroon', value: 20624.343 }, { name: 'Democratic Republic of the Congo', value: 62191.161 }, { name: 'Republic of the Congo', value: 3573.024 }, { name: 'Colombia', value: 46444.798 }, { name: 'Costa Rica', value: 4669.685 }, { name: 'Cuba', value: 11281.768 }, { name: 'Northern Cyprus', value: 1.468 }, { name: 'Cyprus', value: 1103.685 }, { name: 'Czech Republic', value: 10553.701 }, { name: 'Germany', value: 83017.404 }, { name: 'Djibouti', value: 834.036 }, { name: 'Denmark', value: 5550.959 }, { name: 'Dominican Republic', value: 10016.797 }, { name: 'Algeria', value: 37062.82 }, { name: 'Ecuador', value: 15001.072 }, { name: 'Egypt', value: 78075.705 }, { name: 'Eritrea', value: 5741.159 }, { name: 'Spain', value: 46182.038 }, { name: 'Estonia', value: 1298.533 }, { name: 'Ethiopia', value: 87095.281 }, { name: 'Finland', value: 5367.693 }, { name: 'Fiji', value: 860.559 }, { name: 'Falkland Islands', value: 49.581 }, { name: 'France', value: 63230.866 }, { name: 'Gabon', value: 1556.222 }, { name: 'United Kingdom', value: 62066.35 }, { name: 'Georgia', value: 4388.674 }, { name: 'Ghana', value: 24262.901 }, { name: 'Guinea', value: 10876.033 }, { name: 'Gambia', value: 1680.64 }, { name: 'Guinea Bissau', value: 10876.033 }, { name: 'Equatorial Guinea', value: 696.167 }, { name: 'Greece', value: 11109.999 }, { name: 'Greenland', value: 56.546 }, { name: 'Guatemala', value: 14341.576 }, { name: 'French Guiana', value: 231.169 }, { name: 'Guyana', value: 786.126 }, { name: 'Honduras', value: 7621.204 }, { name: 'Croatia', value: 4338.027 }, { name: 'Haiti', value: 9896.4 }, { name: 'Hungary', value: 10014.633 }, { name: 'Indonesia', value: 240676.485 }, { name: 'India', value: 1205624.648 }, { name: 'Ireland', value: 4467.561 }, { name: 'Iran', value: 240676.485 }, { name: 'Iraq', value: 30962.38 }, { name: 'Iceland', value: 318.042 }, { name: 'Israel', value: 7420.368 }, { name: 'Italy', value: 60508.978 }, { name: 'Jamaica', value: 2741.485 }, { name: 'Jordan', value: 6454.554 }, { name: 'Japan', value: 127352.833 }, { name: 'Kazakhstan', value: 15921.127 }, { name: 'Kenya', value: 40909.194 }, { name: 'Kyrgyzstan', value: 5334.223 }, { name: 'Cambodia', value: 14364.931 }, { name: 'South Korea', value: 51452.352 }, { name: 'Kosovo', value: 97.743 }, { name: 'Kuwait', value: 2991.58 }, { name: 'Laos', value: 6395.713 }, { name: 'Lebanon', value: 4341.092 }, { name: 'Liberia', value: 3957.99 }, { name: 'Libya', value: 6040.612 }, { name: 'Sri Lanka', value: 20758.779 }, { name: 'Lesotho', value: 2008.921 }, { name: 'Lithuania', value: 3068.457 }, { name: 'Luxembourg', value: 507.885 }, { name: 'Latvia', value: 2090.519 }, { name: 'Morocco', value: 31642.36 }, { name: 'Moldova', value: 103.619 }, { name: 'Madagascar', value: 21079.532 }, { name: 'Mexico', value: 117886.404 }, { name: 'Macedonia', value: 507.885 }, { name: 'Mali', value: 13985.961 }, { name: 'Myanmar', value: 51931.231 }, { name: 'Montenegro', value: 620.078 }, { name: 'Mongolia', value: 2712.738 }, { name: 'Mozambique', value: 23967.265 }, { name: 'Mauritania', value: 3609.42 }, { name: 'Malawi', value: 15013.694 }, { name: 'Malaysia', value: 28275.835 }, { name: 'Namibia', value: 2178.967 }, { name: 'New Caledonia', value: 246.379 }, { name: 'Niger', value: 15893.746 }, { name: 'Nigeria', value: 159707.78 }, { name: 'Nicaragua', value: 5822.209 }, { name: 'Netherlands', value: 16615.243 }, { name: 'Norway', value: 4891.251 }, { name: 'Nepal', value: 26846.016 }, { name: 'New Zealand', value: 4368.136 }, { name: 'Oman', value: 2802.768 }, { name: 'Pakistan', value: 173149.306 }, { name: 'Panama', value: 3678.128 }, { name: 'Peru', value: 29262.83 }, { name: 'Philippines', value: 93444.322 }, { name: 'Papua New Guinea', value: 6858.945 }, { name: 'Poland', value: 38198.754 }, { name: 'Puerto Rico', value: 3709.671 }, { name: 'North Korea', value: 1.468 }, { name: 'Portugal', value: 10589.792 }, { name: 'Paraguay', value: 6459.721 }, { name: 'Qatar', value: 1749.713 }, { name: 'Romania', value: 21861.476 }, { name: 'Russia', value: 21861.476 }, { name: 'Rwanda', value: 10836.732 }, { name: 'Western Sahara', value: 514.648 }, { name: 'Saudi Arabia', value: 27258.387 }, { name: 'Sudan', value: 35652.002 }, { name: 'South Sudan', value: 9940.929 }, { name: 'Senegal', value: 12950.564 }, { name: 'Solomon Islands', value: 526.447 }, { name: 'Sierra Leone', value: 5751.976 }, { name: 'El Salvador', value: 6218.195 }, { name: 'Somaliland', value: 9636.173 }, { name: 'Somalia', value: 9636.173 }, { name: 'Republic of Serbia', value: 3573.024 }, { name: 'Suriname', value: 524.96 }, { name: 'Slovakia', value: 5433.437 }, { name: 'Slovenia', value: 2054.232 }, { name: 'Sweden', value: 9382.297 }, { name: 'Swaziland', value: 1193.148 }, { name: 'Syria', value: 7830.534 }, { name: 'Chad', value: 11720.781 }, { name: 'Togo', value: 6306.014 }, { name: 'Thailand', value: 66402.316 }, { name: 'Tajikistan', value: 7627.326 }, { name: 'Turkmenistan', value: 5041.995 }, { name: 'East Timor', value: 10016.797 }, { name: 'Trinidad and Tobago', value: 1328.095 }, { name: 'Tunisia', value: 10631.83 }, { name: 'Turkey', value: 72137.546 }, { name: 'United Republic of Tanzania', value: 44973.33 }, { name: 'Uganda', value: 33987.213 }, { name: 'Ukraine', value: 46050.22 }, { name: 'Uruguay', value: 3371.982 }, { name: 'United States of America', value: 312247.116 }, { name: 'Uzbekistan', value: 27769.27 }, { name: 'Venezuela', value: 236.299 }, { name: 'Vietnam', value: 89047.397 }, { name: 'Vanuatu', value: 236.299 }, { name: 'West Bank', value: 13.565 }, { name: 'Yemen', value: 22763.008 }, { name: 'South Africa', value: 51452.352 }, { name: 'Zambia', value: 13216.985 }, { name: 'Zimbabwe', value: 13076.978 }]
	        }]
	    });
	}
	
	function init() {
	    function resize() {
	        (0, _jquery2['default'])('#main').height((0, _jquery2['default'])(window).height() - (0, _jquery2['default'])('#header').height());
	    }
	
	    (0, _jquery2['default'])(window).resize(resize);
	    resize();
	
	    var chart = _echartsEcharts2['default'].init(document.getElementById('chart'));
	
	    setOption(chart);
	
	    (0, _jquery2['default'])(window).resize(function () {
	        chart.resize();
	    });
	}
	
	init();

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件基类
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var ecConfig = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var ecData = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/ecData\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var ecQuery = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/ecQuery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var number = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/number\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    function Base(ecTheme, messageCenter, zr, option, myChart) {
	        this.ecTheme = ecTheme;
	        this.messageCenter = messageCenter;
	        this.zr = zr;
	        this.option = option;
	        this.series = option.series;
	        this.myChart = myChart;
	        this.component = myChart.component;
	
	        this.shapeList = [];
	        this.effectList = [];
	
	        var self = this;
	
	        self._onlegendhoverlink = function (param) {
	            if (self.legendHoverLink) {
	                var targetName = param.target;
	                var name;
	                for (var i = self.shapeList.length - 1; i >= 0; i--) {
	                    name = self.type == ecConfig.CHART_TYPE_PIE || self.type == ecConfig.CHART_TYPE_FUNNEL ? ecData.get(self.shapeList[i], 'name') : (ecData.get(self.shapeList[i], 'series') || {}).name;
	                    if (name == targetName && !self.shapeList[i].invisible && !self.shapeList[i].__animating) {
	                        self.zr.addHoverShape(self.shapeList[i]);
	                    }
	                }
	            }
	        };
	        messageCenter && messageCenter.bind(ecConfig.EVENT.LEGEND_HOVERLINK, this._onlegendhoverlink);
	    }
	
	    /**
	     * 基类方法
	     */
	    Base.prototype = {
	        canvasSupported: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/env\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).canvasSupported,
	        _getZ: function _getZ(zWhat) {
	            if (this[zWhat] != null) {
	                return this[zWhat];
	            }
	            var opt = this.ecTheme[this.type];
	            if (opt && opt[zWhat] != null) {
	                return opt[zWhat];
	            }
	            opt = ecConfig[this.type];
	            if (opt && opt[zWhat] != null) {
	                return opt[zWhat];
	            }
	            return 0;
	        },
	
	        /**
	         * 获取zlevel基数配置
	         */
	        getZlevelBase: function getZlevelBase() {
	            return this._getZ('zlevel');
	        },
	
	        /**
	         * 获取z基数配置
	         */
	        getZBase: function getZBase() {
	            return this._getZ('z');
	        },
	
	        /**
	         * 参数修正&默认值赋值
	         * @param {Object} opt 参数
	         *
	         * @return {Object} 修正后的参数
	         */
	        reformOption: function reformOption(opt) {
	            // 默认配置项动态多级合并，依赖加载的组件选项未被merge到ecTheme里，需要从config里取
	            opt = zrUtil.merge(zrUtil.merge(opt || {}, zrUtil.clone(this.ecTheme[this.type] || {})), zrUtil.clone(ecConfig[this.type] || {}));
	            this.z = opt.z;
	            this.zlevel = opt.zlevel;
	            return opt;
	        },
	
	        /**
	         * css类属性数组补全，如padding，margin等~
	         */
	        reformCssArray: function reformCssArray(p) {
	            if (p instanceof Array) {
	                switch (p.length + '') {
	                    case '4':
	                        return p;
	                    case '3':
	                        return [p[0], p[1], p[2], p[1]];
	                    case '2':
	                        return [p[0], p[1], p[0], p[1]];
	                    case '1':
	                        return [p[0], p[0], p[0], p[0]];
	                    case '0':
	                        return [0, 0, 0, 0];
	                }
	            } else {
	                return [p, p, p, p];
	            }
	        },
	
	        getShapeById: function getShapeById(id) {
	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                if (this.shapeList[i].id === id) {
	                    return this.shapeList[i];
	                }
	            }
	            return null;
	        },
	
	        /**
	         * 获取自定义和默认配置合并后的字体设置
	         */
	        getFont: function getFont(textStyle) {
	            var finalTextStyle = this.getTextStyle(zrUtil.clone(textStyle));
	            return finalTextStyle.fontStyle + ' ' + finalTextStyle.fontWeight + ' ' + finalTextStyle.fontSize + 'px ' + finalTextStyle.fontFamily;
	        },
	
	        /**
	         * 获取统一主题字体样式
	         */
	        getTextStyle: function getTextStyle(targetStyle) {
	            return zrUtil.merge(zrUtil.merge(targetStyle || {}, this.ecTheme.textStyle), ecConfig.textStyle);
	        },
	
	        getItemStyleColor: function getItemStyleColor(itemColor, seriesIndex, dataIndex, data) {
	            return typeof itemColor === 'function' ? itemColor.call(this.myChart, {
	                seriesIndex: seriesIndex,
	                series: this.series[seriesIndex],
	                dataIndex: dataIndex,
	                data: data
	            }) : itemColor;
	        },
	
	        /**
	         * @parmas {object | number} data 目标data
	         * @params {string= | number=} defaultData 无数据时默认返回
	         */
	        getDataFromOption: function getDataFromOption(data, defaultData) {
	            return data != null ? data.value != null ? data.value : data : defaultData;
	        },
	
	        // 亚像素优化
	        subPixelOptimize: function subPixelOptimize(position, lineWidth) {
	            if (lineWidth % 2 === 1) {
	                //position += position === Math.ceil(position) ? 0.5 : 0;
	                position = Math.floor(position) + 0.5;
	            } else {
	                position = Math.round(position);
	            }
	            return position;
	        },
	
	        // 默认resize
	        resize: function resize() {
	            this.refresh && this.refresh();
	            this.clearEffectShape && this.clearEffectShape(true);
	            var self = this;
	            setTimeout(function () {
	                self.animationEffect && self.animationEffect();
	            }, 200);
	        },
	
	        /**
	         * 清除图形数据，实例仍可用
	         */
	        clear: function clear() {
	            this.clearEffectShape && this.clearEffectShape();
	            this.zr && this.zr.delShape(this.shapeList);
	            this.shapeList = [];
	        },
	
	        /**
	         * 释放后实例不可用
	         */
	        dispose: function dispose() {
	            this.onbeforDispose && this.onbeforDispose();
	            this.clear();
	            this.shapeList = null;
	            this.effectList = null;
	            this.messageCenter && this.messageCenter.unbind(ecConfig.EVENT.LEGEND_HOVERLINK, this._onlegendhoverlink);
	            this.onafterDispose && this.onafterDispose();
	        },
	
	        query: ecQuery.query,
	        deepQuery: ecQuery.deepQuery,
	        deepMerge: ecQuery.deepMerge,
	
	        parsePercent: number.parsePercent,
	        parseCenter: number.parseCenter,
	        parseRadius: number.parseRadius,
	        numAddCommas: number.addCommas
	    };
	
	    return Base;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts图表类：地图
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var ChartBase = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./base\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    // 图形依赖
	    var TextShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Text\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var PathShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Path\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var CircleShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Circle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var RectangleShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Rectangle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var LineShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Line\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var PolygonShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Polygon\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var EllipseShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Ellipse\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    // 组件依赖
	    __webpack_require__(144);
	    __webpack_require__(146);
	
	    var ecConfig = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    // 地图默认参数
	    ecConfig.map = {
	        zlevel: 0, // 一级层叠
	        z: 2, // 二级层叠
	        mapType: 'china', // 各省的mapType暂时都用中文
	        //mapLocation: {
	        // x: 'center' | 'left' | 'right' | 'x%' | {number},
	        // y: 'center' | 'top' | 'bottom' | 'x%' | {number}
	        // width    // 自适应
	        // height   // 自适应
	        //},
	        // mapValueCalculation: 'sum',  // 数值合并方式，默认加和，可选为：
	        // 'sum' | 'average' | 'max' | 'min'
	        mapValuePrecision: 0, // 地图数值计算结果小数精度
	        showLegendSymbol: true, // 显示图例颜色标识（系列标识的小圆点），存在legend时生效
	        // selectedMode: false,         // 选择模式，默认关闭，可选single，multiple
	        dataRangeHoverLink: true,
	        hoverable: true,
	        clickable: true,
	        // roam: false,                 // 是否开启缩放及漫游模式
	        // scaleLimit: null,
	        itemStyle: {
	            normal: {
	                // color: 各异,
	                borderColor: 'rgba(0,0,0,0)',
	                borderWidth: 1,
	                areaStyle: {
	                    color: '#ccc'
	                },
	                label: {
	                    show: false,
	                    textStyle: {
	                        color: 'rgb(139,69,19)'
	                    }
	                }
	            },
	            emphasis: { // 也是选中样式
	                // color: 各异,
	                borderColor: 'rgba(0,0,0,0)',
	                borderWidth: 1,
	                areaStyle: {
	                    color: 'rgba(255,215,0,0.8)'
	                },
	                label: {
	                    show: false,
	                    textStyle: {
	                        color: 'rgb(100,0,0)'
	                    }
	                }
	            }
	        }
	    };
	
	    var ecData = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/ecData\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrConfig = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrEvent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    var _mapParams = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/mapData/params\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).params;
	    var _textFixed = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/mapData/textFixed\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var _geoCoord = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/mapData/geoCoord\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} series 数据
	     * @param {Object} component 组件
	     */
	    function Map(ecTheme, messageCenter, zr, option, myChart) {
	        // 图表基类
	        ChartBase.call(this, ecTheme, messageCenter, zr, option, myChart);
	
	        var self = this;
	        self._onmousewheel = function (params) {
	            return self.__onmousewheel(params);
	        };
	        self._onmousedown = function (params) {
	            return self.__onmousedown(params);
	        };
	        self._onmousemove = function (params) {
	            return self.__onmousemove(params);
	        };
	        self._onmouseup = function (params) {
	            return self.__onmouseup(params);
	        };
	        self._onroamcontroller = function (params) {
	            return self.__onroamcontroller(params);
	        };
	        self._ondrhoverlink = function (params) {
	            return self.__ondrhoverlink(params);
	        };
	
	        this._isAlive = true; // 活着标记
	        this._selectedMode = {}; // 选择模式
	        this._activeMapType = {}; // 当前活跃的地图类型
	        this._clickable = {}; // 悬浮高亮模式，索引到图表
	        this._hoverable = {}; // 悬浮高亮模式，索引到图表
	        this._showLegendSymbol = {}; // 显示图例颜色标识
	        this._selected = {}; // 地图选择状态
	        this._mapTypeMap = {}; // 图例类型索引
	        this._mapDataMap = {}; // 根据地图类型索引bbox,transform,path
	        this._nameMap = {}; // 个性化地名
	        this._specialArea = {}; // 特殊
	        this._refreshDelayTicket; // 滚轮缩放时让refresh飞一会
	        this._mapDataRequireCounter; // 异步回调计数器
	        this._markAnimation = false;
	        this._hoverLinkMap = {};
	
	        // 漫游相关信息
	        this._roamMap = {};
	        this._scaleLimitMap = {};
	        this._mx;
	        this._my;
	        this._mousedown;
	        this._justMove; // 避免移动响应点击
	        this._curMapType; // 当前移动的地图类型
	
	        this.refresh(option);
	
	        this.zr.on(zrConfig.EVENT.MOUSEWHEEL, this._onmousewheel);
	        this.zr.on(zrConfig.EVENT.MOUSEDOWN, this._onmousedown);
	        messageCenter.bind(ecConfig.EVENT.ROAMCONTROLLER, this._onroamcontroller);
	        messageCenter.bind(ecConfig.EVENT.DATA_RANGE_HOVERLINK, this._ondrhoverlink);
	    }
	
	    Map.prototype = {
	        type: ecConfig.CHART_TYPE_MAP,
	        /**
	         * 绘制图形
	         */
	        _buildShape: function _buildShape() {
	            var series = this.series;
	            this.selectedMap = {}; // 系列
	            this._activeMapType = {}; // 当前活跃的地图类型
	
	            var legend = this.component.legend;
	            var seriesName;
	            var valueData = {};
	            var mapType;
	            var data;
	            var name;
	            var mapSeries = {};
	            var mapValuePrecision = {};
	            var valueCalculation = {};
	            for (var i = 0, l = series.length; i < l; i++) {
	                if (series[i].type == ecConfig.CHART_TYPE_MAP) {
	                    // map
	                    series[i] = this.reformOption(series[i]);
	                    mapType = series[i].mapType;
	                    mapSeries[mapType] = mapSeries[mapType] || {};
	                    mapSeries[mapType][i] = true;
	                    mapValuePrecision[mapType] = mapValuePrecision[mapType] || series[i].mapValuePrecision;
	                    this._scaleLimitMap[mapType] = this._scaleLimitMap[mapType] || {};
	                    series[i].scaleLimit && zrUtil.merge(this._scaleLimitMap[mapType], series[i].scaleLimit, true);
	
	                    this._roamMap[mapType] = series[i].roam || this._roamMap[mapType];
	
	                    if (this._hoverLinkMap[mapType] == null || this._hoverLinkMap[mapType]) {
	                        // false 1票否决
	                        this._hoverLinkMap[mapType] = series[i].dataRangeHoverLink;
	                    }
	
	                    this._nameMap[mapType] = this._nameMap[mapType] || {};
	                    series[i].nameMap && zrUtil.merge(this._nameMap[mapType], series[i].nameMap, true);
	                    this._activeMapType[mapType] = true;
	
	                    if (series[i].textFixed) {
	                        zrUtil.merge(_textFixed, series[i].textFixed, true);
	                    }
	                    if (series[i].geoCoord) {
	                        zrUtil.merge(_geoCoord, series[i].geoCoord, true);
	                    }
	
	                    this._selectedMode[mapType] = this._selectedMode[mapType] || series[i].selectedMode;
	                    if (this._hoverable[mapType] == null || this._hoverable[mapType]) {
	                        // false 1票否决
	                        this._hoverable[mapType] = series[i].hoverable;
	                    }
	                    if (this._clickable[mapType] == null || this._clickable[mapType]) {
	                        // false 1票否决
	                        this._clickable[mapType] = series[i].clickable;
	                    }
	                    if (this._showLegendSymbol[mapType] == null || this._showLegendSymbol[mapType]) {
	                        // false 1票否决
	                        this._showLegendSymbol[mapType] = series[i].showLegendSymbol;
	                    }
	
	                    valueCalculation[mapType] = valueCalculation[mapType] || series[i].mapValueCalculation;
	
	                    seriesName = series[i].name;
	                    this.selectedMap[seriesName] = legend ? legend.isSelected(seriesName) : true;
	                    if (this.selectedMap[seriesName]) {
	                        valueData[mapType] = valueData[mapType] || {};
	                        data = series[i].data;
	                        for (var j = 0, k = data.length; j < k; j++) {
	                            name = this._nameChange(mapType, data[j].name);
	                            valueData[mapType][name] = valueData[mapType][name] || {
	                                seriesIndex: [],
	                                valueMap: {}
	                            };
	                            for (var key in data[j]) {
	                                if (key != 'value') {
	                                    valueData[mapType][name][key] = data[j][key];
	                                } else if (!isNaN(data[j].value)) {
	                                    // value
	                                    valueData[mapType][name].value == null && (valueData[mapType][name].value = 0);
	
	                                    valueData[mapType][name].value += +data[j].value;
	                                    valueData[mapType][name].valueMap[i] = +data[j].value;
	                                }
	                            }
	                            //索引有该区域的系列样式
	                            valueData[mapType][name].seriesIndex.push(i);
	                        }
	                    }
	                }
	            }
	
	            this._mapDataRequireCounter = 0;
	            for (var mt in valueData) {
	                this._mapDataRequireCounter++;
	            }
	            //清空
	            this._clearSelected();
	            if (this._mapDataRequireCounter === 0) {
	                this.clear();
	                this.zr && this.zr.delShape(this.lastShapeList);
	                this.lastShapeList = [];
	            }
	            for (var mt in valueData) {
	                if (valueCalculation[mt] && valueCalculation[mt] == 'average') {
	                    for (var k in valueData[mt]) {
	                        valueData[mt][k].value = (valueData[mt][k].value / valueData[mt][k].seriesIndex.length).toFixed(mapValuePrecision[mt]) - 0;
	                    }
	                }
	
	                this._mapDataMap[mt] = this._mapDataMap[mt] || {};
	
	                if (this._mapDataMap[mt].mapData) {
	                    // 已经缓存了则直接用
	                    this._mapDataCallback(mt, valueData[mt], mapSeries[mt])(this._mapDataMap[mt].mapData);
	                } else if (_mapParams[mt.replace(/\|.*/, '')].getGeoJson) {
	                    // 特殊区域
	                    this._specialArea[mt] = _mapParams[mt.replace(/\|.*/, '')].specialArea || this._specialArea[mt];
	                    _mapParams[mt.replace(/\|.*/, '')].getGeoJson(this._mapDataCallback(mt, valueData[mt], mapSeries[mt]));
	                }
	            }
	        },
	
	        /**
	         * @param {string} mt mapType
	         * @parma {Object} vd valueData
	         * @param {Object} ms mapSeries
	         */
	        _mapDataCallback: function _mapDataCallback(mt, vd, ms) {
	            var self = this;
	            return function (md) {
	                if (!self._isAlive || self._activeMapType[mt] == null) {
	                    // 异步地图数据回调时有可能实例已经被释放
	                    return;
	                }
	                // 缓存这份数据
	                if (mt.indexOf('|') != -1) {
	                    // 子地图，加工一份新的mapData
	                    md = self._getSubMapData(mt, md);
	                }
	                self._mapDataMap[mt].mapData = md;
	
	                if (md.firstChild) {
	                    self._mapDataMap[mt].rate = 1;
	                    self._mapDataMap[mt].projection = __webpack_require__(186);
	                } else {
	                    self._mapDataMap[mt].rate = 0.75;
	                    self._mapDataMap[mt].projection = __webpack_require__(187);
	                }
	
	                self._buildMap(mt, // 类型
	                self._getProjectionData(mt, md, ms), // 地图数据
	                vd, // 用户数据
	                ms // 系列
	                );
	                self._buildMark(mt, ms);
	                if (--self._mapDataRequireCounter <= 0) {
	                    self.addShapeList();
	                    self.zr.refreshNextFrame();
	                }
	            };
	        },
	
	        _clearSelected: function _clearSelected() {
	            for (var k in this._selected) {
	                if (!this._activeMapType[this._mapTypeMap[k]]) {
	                    delete this._selected[k];
	                    delete this._mapTypeMap[k];
	                }
	            }
	        },
	
	        _getSubMapData: function _getSubMapData(mapType, mapData) {
	            var subType = mapType.replace(/^.*\|/, '');
	            var features = mapData.features;
	            for (var i = 0, l = features.length; i < l; i++) {
	                if (features[i].properties && features[i].properties.name == subType) {
	                    features = features[i];
	                    if (subType == 'United States of America' && features.geometry.coordinates.length > 1 // 未被简化
	                    ) {
	                            features = {
	                                geometry: {
	                                    coordinates: features.geometry.coordinates.slice(5, 6),
	                                    type: features.geometry.type
	                                },
	                                id: features.id,
	                                properties: features.properties,
	                                type: features.type
	                            };
	                        }
	                    break;
	                }
	            }
	            return {
	                'type': 'FeatureCollection',
	                'features': [features]
	            };
	        },
	
	        /**
	         * 按需加载相关地图 
	         */
	        _getProjectionData: function _getProjectionData(mapType, mapData, mapSeries) {
	            var normalProjection = this._mapDataMap[mapType].projection;
	            var province = [];
	
	            // bbox永远不变
	            var bbox = this._mapDataMap[mapType].bbox || normalProjection.getBbox(mapData, this._specialArea[mapType]);
	            //console.log(bbox)
	
	            var transform;
	            //console.log(1111,transform)
	            if (!this._mapDataMap[mapType].hasRoam) {
	                // 第一次或者发生了resize，需要判断
	                transform = this._getTransform(bbox, mapSeries, this._mapDataMap[mapType].rate);
	            } else {
	                //经过用户漫游不再响应resize
	                transform = this._mapDataMap[mapType].transform;
	            }
	            //console.log(bbox,transform)
	            var lastTransform = this._mapDataMap[mapType].lastTransform || { scale: {} };
	
	            var pathArray;
	            if (transform.left != lastTransform.left || transform.top != lastTransform.top || transform.scale.x != lastTransform.scale.x || transform.scale.y != lastTransform.scale.y) {
	                // 发生过变化，需要重新生成pathArray
	                // 一般投射
	                //console.log(transform)
	                pathArray = normalProjection.geoJson2Path(mapData, transform, this._specialArea[mapType]);
	                lastTransform = zrUtil.clone(transform);
	            } else {
	                transform = this._mapDataMap[mapType].transform;
	                pathArray = this._mapDataMap[mapType].pathArray;
	            }
	
	            this._mapDataMap[mapType].bbox = bbox;
	            this._mapDataMap[mapType].transform = transform;
	            this._mapDataMap[mapType].lastTransform = lastTransform;
	            this._mapDataMap[mapType].pathArray = pathArray;
	
	            //console.log(pathArray)
	            var position = [transform.left, transform.top];
	            for (var i = 0, l = pathArray.length; i < l; i++) {
	                /* for test
	                console.log(
	                    mapData.features[i].properties.cp, // 经纬度度
	                    pathArray[i].cp                    // 平面坐标
	                );
	                console.log(
	                    this.pos2geo(mapType, pathArray[i].cp),  // 平面坐标转经纬度
	                    this.geo2pos(mapType, mapData.features[i].properties.cp)
	                )
	                */
	                province.push(this._getSingleProvince(mapType, pathArray[i], position));
	            }
	
	            if (this._specialArea[mapType]) {
	                for (var area in this._specialArea[mapType]) {
	                    province.push(this._getSpecialProjectionData(mapType, mapData, area, this._specialArea[mapType][area], position));
	                }
	            }
	
	            // 中国地图加入南海诸岛
	            if (mapType == 'china') {
	                var leftTop = this.geo2pos(mapType, _geoCoord['南海诸岛'] || _mapParams['南海诸岛'].textCoord);
	                // scale.x : width  = 10.51 : 64
	                var scale = transform.scale.x / 10.5;
	                var textPosition = [32 * scale + leftTop[0], 83 * scale + leftTop[1]];
	                if (_textFixed['南海诸岛']) {
	                    textPosition[0] += _textFixed['南海诸岛'][0];
	                    textPosition[1] += _textFixed['南海诸岛'][1];
	                }
	                province.push({
	                    name: this._nameChange(mapType, '南海诸岛'),
	                    path: _mapParams['南海诸岛'].getPath(leftTop, scale),
	                    position: position,
	                    textX: textPosition[0],
	                    textY: textPosition[1]
	                });
	            }
	            //console.log(JSON.stringify(province));
	            //console.log(JSON.stringify(this._mapDataMap[mapType].transform));
	            return province;
	        },
	
	        /**
	         * 特殊地区投射数据
	         */
	        _getSpecialProjectionData: function _getSpecialProjectionData(mapType, mapData, areaName, mapSize, position) {
	            //console.log('_getSpecialProjectionData--------------')
	            // 构造单独的geoJson地图数据
	            mapData = this._getSubMapData('x|' + areaName, mapData);
	
	            // bbox
	            var normalProjection = __webpack_require__(187);
	            var bbox = normalProjection.getBbox(mapData);
	            //console.log('bbox', bbox)
	
	            // transform
	            var leftTop = this.geo2pos(mapType, [mapSize.left, mapSize.top]);
	            var rightBottom = this.geo2pos(mapType, [mapSize.left + mapSize.width, mapSize.top + mapSize.height]);
	            //console.log('leftright' , leftTop, rightBottom);
	            var width = Math.abs(rightBottom[0] - leftTop[0]);
	            var height = Math.abs(rightBottom[1] - leftTop[1]);
	            var mapWidth = bbox.width;
	            var mapHeight = bbox.height;
	            //var minScale;
	            var xScale = width / 0.75 / mapWidth;
	            var yScale = height / mapHeight;
	            if (xScale > yScale) {
	                xScale = yScale * 0.75;
	                width = mapWidth * xScale;
	            } else {
	                yScale = xScale;
	                xScale = yScale * 0.75;
	                height = mapHeight * yScale;
	            }
	            var transform = {
	                OffsetLeft: leftTop[0],
	                OffsetTop: leftTop[1],
	                //width: width,
	                //height: height,
	                scale: {
	                    x: xScale,
	                    y: yScale
	                }
	            };
	
	            //console.log('**',areaName, transform)
	            var pathArray = normalProjection.geoJson2Path(mapData, transform);
	
	            //console.log(pathArray)
	            return this._getSingleProvince(mapType, pathArray[0], position);
	        },
	
	        _getSingleProvince: function _getSingleProvince(mapType, path, position) {
	            var textPosition;
	            var name = path.properties.name;
	            var textFixed = _textFixed[name] || [0, 0];
	            if (_geoCoord[name]) {
	                // 经纬度直接定位不加textFixed
	                textPosition = this.geo2pos(mapType, _geoCoord[name]);
	            } else if (path.cp) {
	                textPosition = [path.cp[0] + textFixed[0], path.cp[1] + textFixed[1]];
	            } else {
	                var bbox = this._mapDataMap[mapType].bbox;
	                textPosition = this.geo2pos(mapType, [bbox.left + bbox.width / 2, bbox.top + bbox.height / 2]);
	                textPosition[0] += textFixed[0];
	                textPosition[1] += textFixed[1];
	            }
	
	            //console.log(textPosition)
	            path.name = this._nameChange(mapType, name);
	            path.position = position;
	            path.textX = textPosition[0];
	            path.textY = textPosition[1];
	            return path;
	        },
	
	        /**
	         * 获取缩放 
	         */
	        _getTransform: function _getTransform(bbox, mapSeries, rate) {
	            var series = this.series;
	            var mapLocation;
	            var x;
	            var cusX;
	            var y;
	            var cusY;
	            var width;
	            var height;
	            var zrWidth = this.zr.getWidth();
	            var zrHeight = this.zr.getHeight();
	            //上下左右留空
	            var padding = Math.round(Math.min(zrWidth, zrHeight) * 0.02);
	            for (var key in mapSeries) {
	                mapLocation = series[key].mapLocation || {};
	                cusX = mapLocation.x || cusX;
	                cusY = mapLocation.y || cusY;
	                width = mapLocation.width || width;
	                height = mapLocation.height || height;
	            }
	
	            //x = isNaN(cusX) ? padding : cusX;
	            x = this.parsePercent(cusX, zrWidth);
	            x = isNaN(x) ? padding : x;
	            //y = isNaN(cusY) ? padding : cusY;
	            y = this.parsePercent(cusY, zrHeight);
	            y = isNaN(y) ? padding : y;
	
	            width = width == null ? zrWidth - x - 2 * padding : this.parsePercent(width, zrWidth);
	            height = height == null ? zrHeight - y - 2 * padding : this.parsePercent(height, zrHeight);
	
	            var mapWidth = bbox.width;
	            var mapHeight = bbox.height;
	            //var minScale;
	            var xScale = width / rate / mapWidth;
	            var yScale = height / mapHeight;
	            if (xScale > yScale) {
	                //minScale = yScale;
	                xScale = yScale * rate;
	                width = mapWidth * xScale;
	            } else {
	                //minScale = xScale;
	                yScale = xScale;
	                xScale = yScale * rate;
	                height = mapHeight * yScale;
	            }
	            //console.log(minScale)
	            //width = mapWidth * minScale;
	            //height = mapHeight * minScale;
	
	            if (isNaN(cusX)) {
	                cusX = cusX || 'center';
	                switch (cusX + '') {
	                    case 'center':
	                        x = Math.floor((zrWidth - width) / 2);
	                        break;
	                    case 'right':
	                        x = zrWidth - width;
	                        break;
	                    //case 'left' :
	                    //x = padding;
	                }
	            }
	            //console.log(cusX,x,zrWidth,width,'kener')
	            if (isNaN(cusY)) {
	                cusY = cusY || 'center';
	                switch (cusY + '') {
	                    case 'center':
	                        y = Math.floor((zrHeight - height) / 2);
	                        break;
	                    case 'bottom':
	                        y = zrHeight - height;
	                        break;
	                    //case 'top' :
	                    //y = padding;
	                }
	            }
	            //console.log(x,y,width,height)
	            return {
	                left: x,
	                top: y,
	                width: width,
	                height: height,
	                //scale : minScale * 50,  // wtf 50
	                baseScale: 1,
	                scale: {
	                    x: xScale,
	                    y: yScale
	                }
	                //translate : [x + width / 2, y + height / 2]
	            };
	        },
	
	        /**
	         * 构建地图
	         * @param {Object} mapData 图形数据
	         * @param {Object} valueData 用户数据
	         */
	        _buildMap: function _buildMap(mapType, mapData, valueData, mapSeries) {
	            var series = this.series;
	            var legend = this.component.legend;
	            var dataRange = this.component.dataRange;
	            var seriesName;
	            var name;
	            var data;
	            var value;
	            var queryTarget;
	
	            var color;
	            var font;
	            var style;
	            var highlightStyle;
	
	            var shape;
	            var textShape;
	            for (var i = 0, l = mapData.length; i < l; i++) {
	                style = zrUtil.clone(mapData[i]);
	                highlightStyle = {
	                    name: style.name,
	                    path: style.path,
	                    position: zrUtil.clone(style.position)
	                };
	                name = style.name;
	                data = valueData[name]; // 多系列合并后的数据
	                if (data) {
	                    queryTarget = [data]; // level 3
	                    seriesName = '';
	                    for (var j = 0, k = data.seriesIndex.length; j < k; j++) {
	                        // level 2
	                        queryTarget.push(series[data.seriesIndex[j]]);
	                        seriesName += series[data.seriesIndex[j]].name + ' ';
	                        if (legend && this._showLegendSymbol[mapType] && legend.hasColor(series[data.seriesIndex[j]].name)) {
	                            this.shapeList.push(new CircleShape({
	                                zlevel: this.getZlevelBase(),
	                                z: this.getZBase() + 1,
	                                position: zrUtil.clone(style.position),
	                                _mapType: mapType,
	                                /*
	                                _geo : this.pos2geo(
	                                           mapType, [style.textX + 3 + j * 7, style.textY - 10]
	                                       ),
	                                       */
	                                style: {
	                                    x: style.textX + 3 + j * 7,
	                                    y: style.textY - 10,
	                                    r: 3,
	                                    color: legend.getColor(series[data.seriesIndex[j]].name)
	                                },
	                                hoverable: false
	                            }));
	                        }
	                    }
	                    value = data.value;
	                } else {
	                    data = {
	                        name: name,
	                        value: '-'
	                    };
	                    seriesName = '';
	                    queryTarget = [];
	                    for (var key in mapSeries) {
	                        queryTarget.push(series[key]);
	                    }
	                    value = '-';
	                }
	                this.ecTheme.map && queryTarget.push(this.ecTheme.map); // level 1
	                queryTarget.push(ecConfig); // level 1
	
	                // 值域控件控制
	                color = dataRange && !isNaN(value) ? dataRange.getColor(value) : null;
	
	                // 常规设置
	                style.color = style.color || color || this.getItemStyleColor(this.deepQuery(queryTarget, 'itemStyle.normal.color'), data.seriesIndex, -1, data) || this.deepQuery(queryTarget, 'itemStyle.normal.areaStyle.color');
	                style.strokeColor = style.strokeColor || this.deepQuery(queryTarget, 'itemStyle.normal.borderColor');
	                style.lineWidth = style.lineWidth || this.deepQuery(queryTarget, 'itemStyle.normal.borderWidth');
	
	                // 高亮
	                highlightStyle.color = this.getItemStyleColor(this.deepQuery(queryTarget, 'itemStyle.emphasis.color'), data.seriesIndex, -1, data) || this.deepQuery(queryTarget, 'itemStyle.emphasis.areaStyle.color') || style.color;
	                highlightStyle.strokeColor = this.deepQuery(queryTarget, 'itemStyle.emphasis.borderColor') || style.strokeColor;
	                highlightStyle.lineWidth = this.deepQuery(queryTarget, 'itemStyle.emphasis.borderWidth') || style.lineWidth;
	
	                style.brushType = highlightStyle.brushType = style.brushType || 'both';
	                style.lineJoin = highlightStyle.lineJoin = 'round';
	                style._name = highlightStyle._name = name;
	
	                font = this.deepQuery(queryTarget, 'itemStyle.normal.label.textStyle');
	                // 文字标签避免覆盖单独一个shape
	                textShape = {
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase() + 1,
	                    //hoverable: this._hoverable[mapType],
	                    //clickable: this._clickable[mapType],
	                    position: zrUtil.clone(style.position),
	                    _mapType: mapType,
	                    _geo: this.pos2geo(mapType, [style.textX, style.textY]),
	                    style: {
	                        brushType: 'fill',
	                        x: style.textX,
	                        y: style.textY,
	                        text: this.getLabelText(name, value, queryTarget, 'normal'),
	                        _name: name,
	                        textAlign: 'center',
	                        color: this.deepQuery(queryTarget, 'itemStyle.normal.label.show') ? this.deepQuery(queryTarget, 'itemStyle.normal.label.textStyle.color') : 'rgba(0,0,0,0)',
	                        textFont: this.getFont(font)
	                    }
	                };
	                textShape._style = zrUtil.clone(textShape.style);
	
	                textShape.highlightStyle = zrUtil.clone(textShape.style);
	                if (this.deepQuery(queryTarget, 'itemStyle.emphasis.label.show')) {
	                    textShape.highlightStyle.text = this.getLabelText(name, value, queryTarget, 'emphasis');
	                    textShape.highlightStyle.color = this.deepQuery(queryTarget, 'itemStyle.emphasis.label.textStyle.color') || textShape.style.color;
	                    font = this.deepQuery(queryTarget, 'itemStyle.emphasis.label.textStyle') || font;
	                    textShape.highlightStyle.textFont = this.getFont(font);
	                } else {
	                    textShape.highlightStyle.color = 'rgba(0,0,0,0)';
	                }
	
	                shape = {
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase(),
	                    //hoverable: this._hoverable[mapType],
	                    //clickable: this._clickable[mapType],
	                    position: zrUtil.clone(style.position),
	                    style: style,
	                    highlightStyle: highlightStyle,
	                    _style: zrUtil.clone(style),
	                    _mapType: mapType
	                };
	                if (style.scale != null) {
	                    shape.scale = zrUtil.clone(style.scale);
	                }
	
	                textShape = new TextShape(textShape);
	                switch (shape.style.shapeType) {
	                    case 'rectangle':
	                        shape = new RectangleShape(shape);
	                        break;
	                    case 'line':
	                        shape = new LineShape(shape);
	                        break;
	                    case 'circle':
	                        shape = new CircleShape(shape);
	                        break;
	                    case 'polygon':
	                        shape = new PolygonShape(shape);
	                        break;
	                    case 'ellipse':
	                        shape = new EllipseShape(shape);
	                        break;
	                    default:
	                        shape = new PathShape(shape);
	                        if (shape.buildPathArray) {
	                            shape.style.pathArray = shape.buildPathArray(shape.style.path);
	                        }
	                        break;
	                }
	
	                if (this._selectedMode[mapType] && this._selected[name] || data.selected && this._selected[name] !== false) {
	                    textShape.style = textShape.highlightStyle;
	                    shape.style = shape.highlightStyle;
	                }
	
	                textShape.clickable = shape.clickable = this._clickable[mapType] && (data.clickable == null || data.clickable);
	
	                if (this._selectedMode[mapType]) {
	                    this._selected[name] = this._selected[name] != null ? this._selected[name] : data.selected;
	                    this._mapTypeMap[name] = mapType;
	
	                    if (data.selectable == null || data.selectable) {
	                        shape.clickable = textShape.clickable = true;
	                        shape.onclick = textShape.onclick = this.shapeHandler.onclick;
	                    }
	                }
	
	                if (this._hoverable[mapType] && (data.hoverable == null || data.hoverable)) {
	                    textShape.hoverable = shape.hoverable = true;
	                    shape.hoverConnect = textShape.id;
	                    textShape.hoverConnect = shape.id;
	                } else {
	                    textShape.hoverable = shape.hoverable = false;
	                }
	
	                // console.log(name,shape);
	                ecData.pack(textShape, {
	                    name: seriesName,
	                    tooltip: this.deepQuery(queryTarget, 'tooltip')
	                }, 0, data, 0, name);
	                this.shapeList.push(textShape);
	
	                ecData.pack(shape, {
	                    name: seriesName,
	                    tooltip: this.deepQuery(queryTarget, 'tooltip')
	                }, 0, data, 0, name);
	                this.shapeList.push(shape);
	            }
	            //console.log(this._selected);
	        },
	
	        // 添加标注
	        _buildMark: function _buildMark(mapType, mapSeries) {
	            this._seriesIndexToMapType = this._seriesIndexToMapType || {};
	            this.markAttachStyle = this.markAttachStyle || {};
	            var position = [this._mapDataMap[mapType].transform.left, this._mapDataMap[mapType].transform.top];
	            if (mapType == 'none') {
	                position = [0, 0];
	            }
	            for (var sIdx in mapSeries) {
	                this._seriesIndexToMapType[sIdx] = mapType;
	                this.markAttachStyle[sIdx] = {
	                    position: position,
	                    _mapType: mapType
	                };
	                this.buildMark(sIdx);
	            }
	        },
	
	        // 位置转换
	        getMarkCoord: function getMarkCoord(seriesIndex, mpData) {
	            return mpData.geoCoord || _geoCoord[mpData.name] ? this.geo2pos(this._seriesIndexToMapType[seriesIndex], mpData.geoCoord || _geoCoord[mpData.name]) : [0, 0];
	        },
	
	        getMarkGeo: function getMarkGeo(mpData) {
	            return mpData.geoCoord || _geoCoord[mpData.name];
	        },
	
	        _nameChange: function _nameChange(mapType, name) {
	            return this._nameMap[mapType][name] || name;
	        },
	
	        /**
	         * 根据lable.format计算label text
	         */
	        getLabelText: function getLabelText(name, value, queryTarget, status) {
	            var formatter = this.deepQuery(queryTarget, 'itemStyle.' + status + '.label.formatter');
	            if (formatter) {
	                if (typeof formatter == 'function') {
	                    return formatter.call(this.myChart, name, value);
	                } else if (typeof formatter == 'string') {
	                    formatter = formatter.replace('{a}', '{a0}').replace('{b}', '{b0}');
	                    formatter = formatter.replace('{a0}', name).replace('{b0}', value);
	                    return formatter;
	                }
	            } else {
	                return name;
	            }
	        },
	
	        _findMapTypeByPos: function _findMapTypeByPos(mx, my) {
	            var transform;
	            var left;
	            var top;
	            var width;
	            var height;
	            for (var mapType in this._mapDataMap) {
	                transform = this._mapDataMap[mapType].transform;
	                if (!transform || !this._roamMap[mapType] || !this._activeMapType[mapType]) {
	                    continue;
	                }
	
	                left = transform.left;
	                top = transform.top;
	                width = transform.width;
	                height = transform.height;
	                if (mx >= left && mx <= left + width && my >= top && my <= top + height) {
	                    return mapType;
	                }
	            }
	            return;
	        },
	
	        /**
	         * 滚轮缩放 
	         */
	        __onmousewheel: function __onmousewheel(params) {
	            if (this.shapeList.length <= 0) {
	                return;
	            }
	
	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                var shape = this.shapeList[i];
	                // If any shape is still animating
	                if (shape.__animating) {
	                    return;
	                }
	            }
	
	            var event = params.event;
	            var mx = zrEvent.getX(event);
	            var my = zrEvent.getY(event);
	            var delta;
	            var eventDelta = zrEvent.getDelta(event);
	            //eventDelta = eventDelta > 0 ? (-1) : 1;
	            var mapType;
	            var mapTypeControl = params.mapTypeControl;
	            if (!mapTypeControl) {
	                mapTypeControl = {};
	                mapType = this._findMapTypeByPos(mx, my);
	                if (mapType && this._roamMap[mapType] && this._roamMap[mapType] != 'move') {
	                    mapTypeControl[mapType] = true;
	                }
	            }
	
	            function scalePolyline(shapeStyle, delta) {
	                for (var i = 0; i < shapeStyle.pointList.length; i++) {
	                    var point = shapeStyle.pointList[i];
	                    point[0] *= delta;
	                    point[1] *= delta;
	                }
	                //If smoothness > 0
	                var controlPointList = shapeStyle.controlPointList;
	                if (controlPointList) {
	                    for (var i = 0; i < controlPointList.length; i++) {
	                        var point = controlPointList[i];
	                        point[0] *= delta;
	                        point[1] *= delta;
	                    }
	                }
	            }
	
	            function scaleMarkline(shapeStyle, delta) {
	                shapeStyle.xStart *= delta;
	                shapeStyle.yStart *= delta;
	                shapeStyle.xEnd *= delta;
	                shapeStyle.yEnd *= delta;
	                if (shapeStyle.cpX1 != null) {
	                    shapeStyle.cpX1 *= delta;
	                    shapeStyle.cpY1 *= delta;
	                }
	            }
	
	            var haveScale = false;
	            for (mapType in mapTypeControl) {
	                if (mapTypeControl[mapType]) {
	                    haveScale = true;
	                    var transform = this._mapDataMap[mapType].transform;
	                    var left = transform.left;
	                    var top = transform.top;
	                    var width = transform.width;
	                    var height = transform.height;
	                    // 位置转经纬度
	                    var geoAndPos = this.pos2geo(mapType, [mx - left, my - top]);
	                    if (eventDelta > 0) {
	                        delta = 1.2; // 放大
	                        if (this._scaleLimitMap[mapType].max != null && transform.baseScale >= this._scaleLimitMap[mapType].max) {
	                            continue; // 缩放限制
	                        }
	                    } else {
	                            delta = 1 / 1.2; // 缩小
	                            if (this._scaleLimitMap[mapType].min != null && transform.baseScale <= this._scaleLimitMap[mapType].min) {
	                                continue; // 缩放限制
	                            }
	                        }
	
	                    transform.baseScale *= delta;
	                    transform.scale.x *= delta;
	                    transform.scale.y *= delta;
	                    transform.width = width * delta;
	                    transform.height = height * delta;
	
	                    this._mapDataMap[mapType].hasRoam = true;
	                    this._mapDataMap[mapType].transform = transform;
	                    // 经纬度转位置
	                    geoAndPos = this.geo2pos(mapType, geoAndPos);
	                    // 保持视觉中心
	                    transform.left -= geoAndPos[0] - (mx - left);
	                    transform.top -= geoAndPos[1] - (my - top);
	                    this._mapDataMap[mapType].transform = transform;
	
	                    this.clearEffectShape(true);
	                    for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                        var shape = this.shapeList[i];
	                        if (shape._mapType == mapType) {
	                            var shapeType = shape.type;
	                            var shapeStyle = shape.style;
	                            shape.position[0] = transform.left;
	                            shape.position[1] = transform.top;
	
	                            switch (shapeType) {
	                                case 'path':
	                                case 'symbol':
	                                case 'circle':
	                                case 'rectangle':
	                                case 'polygon':
	                                case 'line':
	                                case 'ellipse':
	                                    shape.scale[0] *= delta;
	                                    shape.scale[1] *= delta;
	                                    break;
	                                case 'mark-line':
	                                    scaleMarkline(shapeStyle, delta);
	                                    break;
	                                case 'polyline':
	                                    scalePolyline(shapeStyle, delta);
	                                    break;
	                                case 'shape-bundle':
	                                    for (var j = 0; j < shapeStyle.shapeList.length; j++) {
	                                        var subShape = shapeStyle.shapeList[j];
	                                        if (subShape.type == 'mark-line') {
	                                            scaleMarkline(subShape.style, delta);
	                                        } else if (subShape.type == 'polyline') {
	                                            scalePolyline(subShape.style, delta);
	                                        }
	                                    }
	                                    break;
	                                case 'icon':
	                                case 'image':
	                                    geoAndPos = this.geo2pos(mapType, shape._geo);
	                                    shapeStyle.x = shapeStyle._x = geoAndPos[0] - shapeStyle.width / 2;
	                                    shapeStyle.y = shapeStyle._y = geoAndPos[1] - shapeStyle.height / 2;
	                                    break;
	                                default:
	                                    geoAndPos = this.geo2pos(mapType, shape._geo);
	                                    shapeStyle.x = geoAndPos[0];
	                                    shapeStyle.y = geoAndPos[1];
	                                    if (shapeType == 'text') {
	                                        shape._style.x = shape.highlightStyle.x = geoAndPos[0];
	                                        shape._style.y = shape.highlightStyle.y = geoAndPos[1];
	                                    }
	                            }
	
	                            this.zr.modShape(shape.id);
	                        }
	                    }
	                }
	            }
	            if (haveScale) {
	                zrEvent.stop(event);
	                this.zr.refreshNextFrame();
	
	                var self = this;
	                clearTimeout(this._refreshDelayTicket);
	                this._refreshDelayTicket = setTimeout(function () {
	                    self && self.shapeList && self.animationEffect();
	                }, 100);
	
	                this.messageCenter.dispatch(ecConfig.EVENT.MAP_ROAM, params.event, { type: 'scale' }, this.myChart);
	            }
	        },
	
	        __onmousedown: function __onmousedown(params) {
	            if (this.shapeList.length <= 0) {
	                return;
	            }
	            var target = params.target;
	            if (target && target.draggable) {
	                return;
	            }
	            var event = params.event;
	            var mx = zrEvent.getX(event);
	            var my = zrEvent.getY(event);
	            var mapType = this._findMapTypeByPos(mx, my);
	            if (mapType && this._roamMap[mapType] && this._roamMap[mapType] != 'scale') {
	                this._mousedown = true;
	                this._mx = mx;
	                this._my = my;
	                this._curMapType = mapType;
	                this.zr.on(zrConfig.EVENT.MOUSEUP, this._onmouseup);
	                var self = this;
	                setTimeout(function () {
	                    self.zr.on(zrConfig.EVENT.MOUSEMOVE, self._onmousemove);
	                }, 100);
	            }
	        },
	
	        __onmousemove: function __onmousemove(params) {
	            if (!this._mousedown || !this._isAlive) {
	                return;
	            }
	            var event = params.event;
	            var mx = zrEvent.getX(event);
	            var my = zrEvent.getY(event);
	            var transform = this._mapDataMap[this._curMapType].transform;
	            transform.hasRoam = true;
	            transform.left -= this._mx - mx;
	            transform.top -= this._my - my;
	            this._mx = mx;
	            this._my = my;
	            this._mapDataMap[this._curMapType].transform = transform;
	
	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                if (this.shapeList[i]._mapType == this._curMapType) {
	                    this.shapeList[i].position[0] = transform.left;
	                    this.shapeList[i].position[1] = transform.top;
	                    this.zr.modShape(this.shapeList[i].id);
	                }
	            }
	
	            this.messageCenter.dispatch(ecConfig.EVENT.MAP_ROAM, params.event, { type: 'move' }, this.myChart);
	
	            this.clearEffectShape(true);
	            this.zr.refreshNextFrame();
	
	            this._justMove = true;
	            zrEvent.stop(event);
	        },
	
	        __onmouseup: function __onmouseup(params) {
	            var event = params.event;
	            this._mx = zrEvent.getX(event);
	            this._my = zrEvent.getY(event);
	            this._mousedown = false;
	            var self = this;
	            setTimeout(function () {
	                self._justMove && self.animationEffect();
	                self._justMove = false;
	                self.zr.un(zrConfig.EVENT.MOUSEMOVE, self._onmousemove);
	                self.zr.un(zrConfig.EVENT.MOUSEUP, self._onmouseup);
	            }, 120);
	        },
	
	        /**
	         * 漫游组件事件响应
	         */
	        __onroamcontroller: function __onroamcontroller(params) {
	            var event = params.event;
	            event.zrenderX = this.zr.getWidth() / 2;
	            event.zrenderY = this.zr.getHeight() / 2;
	            var mapTypeControl = params.mapTypeControl;
	            var top = 0;
	            var left = 0;
	            var step = params.step;
	
	            switch (params.roamType) {
	                case 'scaleUp':
	                    event.zrenderDelta = 1;
	                    this.__onmousewheel({
	                        event: event,
	                        mapTypeControl: mapTypeControl
	                    });
	                    return;
	                case 'scaleDown':
	                    event.zrenderDelta = -1;
	                    this.__onmousewheel({
	                        event: event,
	                        mapTypeControl: mapTypeControl
	                    });
	                    return;
	                case 'up':
	                    top = -step;
	                    break;
	                case 'down':
	                    top = step;
	                    break;
	                case 'left':
	                    left = -step;
	                    break;
	                case 'right':
	                    left = step;
	                    break;
	            }
	
	            var transform;
	            var curMapType;
	            for (curMapType in mapTypeControl) {
	                if (!this._mapDataMap[curMapType] || !this._activeMapType[curMapType]) {
	                    continue;
	                }
	                transform = this._mapDataMap[curMapType].transform;
	                transform.hasRoam = true;
	                transform.left -= left;
	                transform.top -= top;
	                this._mapDataMap[curMapType].transform = transform;
	            }
	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                curMapType = this.shapeList[i]._mapType;
	                if (!mapTypeControl[curMapType] || !this._activeMapType[curMapType]) {
	                    continue;
	                }
	                transform = this._mapDataMap[curMapType].transform;
	                this.shapeList[i].position[0] = transform.left;
	                this.shapeList[i].position[1] = transform.top;
	                this.zr.modShape(this.shapeList[i].id);
	            }
	
	            this.messageCenter.dispatch(ecConfig.EVENT.MAP_ROAM, params.event, { type: 'move' }, this.myChart);
	
	            this.clearEffectShape(true);
	            this.zr.refreshNextFrame();
	
	            clearTimeout(this.dircetionTimer);
	            var self = this;
	            this.dircetionTimer = setTimeout(function () {
	                self.animationEffect();
	            }, 150);
	        },
	
	        /**
	         * dataRange hoverlink 事件响应
	         */
	        __ondrhoverlink: function __ondrhoverlink(param) {
	            var curMapType;
	            var value;
	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                curMapType = this.shapeList[i]._mapType;
	                if (!this._hoverLinkMap[curMapType] || !this._activeMapType[curMapType]) {
	                    continue;
	                }
	                value = ecData.get(this.shapeList[i], 'value');
	                if (value != null && value >= param.valueMin && value <= param.valueMax) {
	                    this.zr.addHoverShape(this.shapeList[i]);
	                }
	            }
	        },
	
	        /**
	         * 点击响应 
	         */
	        onclick: function onclick(params) {
	            if (!this.isClick || !params.target || this._justMove || params.target.type == 'icon') {
	                // 没有在当前实例上发生点击直接返回
	                return;
	            }
	            this.isClick = false;
	
	            var target = params.target;
	            var name = target.style._name;
	            var len = this.shapeList.length;
	            var mapType = target._mapType || '';
	
	            if (this._selectedMode[mapType] == 'single') {
	                for (var p in this._selected) {
	                    // 同一地图类型
	                    if (this._selected[p] && this._mapTypeMap[p] == mapType) {
	                        // 复位那些生效shape（包括文字）
	                        for (var i = 0; i < len; i++) {
	                            if (this.shapeList[i].style._name == p && this.shapeList[i]._mapType == mapType) {
	                                this.shapeList[i].style = this.shapeList[i]._style;
	                                this.zr.modShape(this.shapeList[i].id);
	                            }
	                        }
	                        p != name && (this._selected[p] = false);
	                    }
	                }
	            }
	
	            this._selected[name] = !this._selected[name];
	
	            // 更新当前点击shape（包括文字）
	            for (var i = 0; i < len; i++) {
	                if (this.shapeList[i].style._name == name && this.shapeList[i]._mapType == mapType) {
	                    if (this._selected[name]) {
	                        this.shapeList[i].style = this.shapeList[i].highlightStyle;
	                    } else {
	                        this.shapeList[i].style = this.shapeList[i]._style;
	                    }
	                    this.zr.modShape(this.shapeList[i].id);
	                }
	            }
	            this.messageCenter.dispatch(ecConfig.EVENT.MAP_SELECTED, params.event, {
	                selected: this._selected,
	                target: name
	            }, this.myChart);
	            this.zr.refreshNextFrame();
	
	            var self = this;
	            setTimeout(function () {
	                self.zr.trigger(zrConfig.EVENT.MOUSEMOVE, params.event);
	            }, 100);
	        },
	
	        /**
	         * 刷新
	         */
	        refresh: function refresh(newOption) {
	            if (newOption) {
	                this.option = newOption;
	                this.series = newOption.series;
	            }
	
	            if (this._mapDataRequireCounter > 0) {
	                this.clear();
	            } else {
	                this.backupShapeList();
	            }
	            this._buildShape();
	            this.zr.refreshHover();
	        },
	
	        /**
	         * 值域响应
	         * @param {Object} param
	         * @param {Object} status
	         */
	        ondataRange: function ondataRange(param, status) {
	            if (this.component.dataRange) {
	                this.refresh();
	                status.needRefresh = true;
	            }
	            return;
	        },
	
	        /**
	         * 平面坐标转经纬度
	         */
	        pos2geo: function pos2geo(mapType, p) {
	            if (!this._mapDataMap[mapType].transform) {
	                return null;
	            }
	            return this._mapDataMap[mapType].projection.pos2geo(this._mapDataMap[mapType].transform, p);
	        },
	
	        /**
	         * 公开接口 : 平面坐标转经纬度
	         */
	        getGeoByPos: function getGeoByPos(mapType, p) {
	            if (!this._mapDataMap[mapType].transform) {
	                return null;
	            }
	            var position = [this._mapDataMap[mapType].transform.left, this._mapDataMap[mapType].transform.top];
	            if (p instanceof Array) {
	                p[0] -= position[0];
	                p[1] -= position[1];
	            } else {
	                p.x -= position[0];
	                p.y -= position[1];
	            }
	            return this.pos2geo(mapType, p);
	        },
	
	        /**
	         * 经纬度转平面坐标
	         * @param {Object} p
	         */
	        geo2pos: function geo2pos(mapType, p) {
	            if (!this._mapDataMap[mapType].transform) {
	                return null;
	            }
	            return this._mapDataMap[mapType].projection.geo2pos(this._mapDataMap[mapType].transform, p);
	        },
	
	        /**
	         * 公开接口 : 经纬度转平面坐标
	         */
	        getPosByGeo: function getPosByGeo(mapType, p) {
	            if (!this._mapDataMap[mapType].transform) {
	                return null;
	            }
	            var pos = this.geo2pos(mapType, p);
	            pos[0] += this._mapDataMap[mapType].transform.left;
	            pos[1] += this._mapDataMap[mapType].transform.top;
	            return pos;
	        },
	
	        /**
	         * 公开接口 : 地图参考坐标
	         */
	        getMapPosition: function getMapPosition(mapType) {
	            if (!this._mapDataMap[mapType].transform) {
	                return null;
	            }
	            return [this._mapDataMap[mapType].transform.left, this._mapDataMap[mapType].transform.top];
	        },
	
	        /*
	        appendShape : function (mapType, shapeList) {
	            shapeList = shapeList instanceof Array
	                        ? shapeList : [shapeList];
	            for (var i = 0, l = shapeList.length; i < l; i++) {
	                if (typeof shapeList[i].zlevel == 'undefined') {
	                    shapeList[i].zlevel = this.getZlevelBase();
	                    shapeList[i].z = this.getZBase() + 1;
	                }
	                shapeList[i]._mapType = mapType;
	                this.shapeList.push(shapeList[i]);
	                this.zr.addShape(shapeList[i]);
	            }
	            this.zr.refresh();
	        },
	        */
	
	        /**
	         * 释放后实例不可用
	         */
	        onbeforDispose: function onbeforDispose() {
	            this._isAlive = false;
	            this.zr.un(zrConfig.EVENT.MOUSEWHEEL, this._onmousewheel);
	            this.zr.un(zrConfig.EVENT.MOUSEDOWN, this._onmousedown);
	            this.messageCenter.unbind(ecConfig.EVENT.ROAMCONTROLLER, this._onroamcontroller);
	            this.messageCenter.unbind(ecConfig.EVENT.DATA_RANGE_HOVERLINK, this._ondrhoverlink);
	        }
	    };
	
	    zrUtil.inherits(Map, ChartBase);
	
	    // 图表注册
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../chart\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).define('map', Map);
	
	    return Map;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件：值域
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(55);
	
	    // 图形依赖
	    var TextShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Text\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var RectangleShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Rectangle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var HandlePolygonShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../util/shape/HandlePolygon\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    var ecConfig = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    // 值域
	    ecConfig.dataRange = {
	        zlevel: 0, // 一级层叠
	        z: 4, // 二级层叠
	        show: true,
	        orient: 'vertical', // 布局方式，默认为垂直布局，可选为：
	        // 'horizontal' ¦ 'vertical'
	        x: 'left', // 水平安放位置，默认为全图左对齐，可选为：
	        // 'center' ¦ 'left' ¦ 'right'
	        // ¦ {number}（x坐标，单位px）
	        y: 'bottom', // 垂直安放位置，默认为全图底部，可选为：
	        // 'top' ¦ 'bottom' ¦ 'center'
	        // ¦ {number}（y坐标，单位px）
	        backgroundColor: 'rgba(0,0,0,0)',
	        borderColor: '#ccc', // 值域边框颜色
	        borderWidth: 0, // 值域边框线宽，单位px，默认为0（无边框）
	        padding: 5, // 值域内边距，单位px，默认各方向内边距为5，
	        // 接受数组分别设定上右下左边距，同css
	        itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
	        // 横向布局时为水平间隔，纵向布局时为纵向间隔
	        itemWidth: 20, // 值域图形宽度，线性渐变水平布局宽度为该值 * 10
	        itemHeight: 14, // 值域图形高度，线性渐变垂直布局高度为该值 * 10
	        // min: null,              // 最小值
	        // max: null,              // 最大值
	        precision: 0, // 小数精度，默认为0，无小数点
	        splitNumber: 5, // 分割段数，默认为5，为0时为线性渐变
	        calculable: false, // 是否值域漫游，启用后无视splitNumber，线性渐变
	        selectedMode: true, // 选择模式，默认开启值域开关
	        hoverLink: true,
	        realtime: true,
	        color: ['#006edd', '#e0ffff'], //颜色
	        // formatter: null,
	        // text:['高','低'],         // 文本，默认为数值文本
	        textStyle: {
	            color: '#333' // 值域文字颜色
	        }
	    };
	
	    var zrUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrEvent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrArea = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/area\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrColor = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/color\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 图表参数
	     * @param {Object=} selected 用于状态保持
	     */
	    function DataRange(ecTheme, messageCenter, zr, option, myChart) {
	        if (typeof this.query(option, 'dataRange.min') == 'undefined' || typeof this.query(option, 'dataRange.max') == 'undefined') {
	            console.error('option.dataRange.min or option.dataRange.max has not been defined.');
	            return;
	        }
	
	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);
	
	        var self = this;
	        self._ondrift = function (dx, dy) {
	            return self.__ondrift(this, dx, dy);
	        };
	        self._ondragend = function () {
	            return self.__ondragend();
	        };
	        self._dataRangeSelected = function (param) {
	            return self.__dataRangeSelected(param);
	        };
	        self._dispatchHoverLink = function (param) {
	            return self.__dispatchHoverLink(param);
	        };
	        self._onhoverlink = function (params) {
	            return self.__onhoverlink(params);
	        };
	        this._selectedMap = {};
	        this._range = {};
	
	        this.refresh(option);
	
	        messageCenter.bind(ecConfig.EVENT.HOVER, this._onhoverlink);
	    }
	
	    DataRange.prototype = {
	        type: ecConfig.COMPONENT_TYPE_DATARANGE,
	        _textGap: 10, // 非值文字间隔
	        _buildShape: function _buildShape() {
	            // 值域元素组的位置参数，通过计算所得x, y, width, height
	            this._itemGroupLocation = this._getItemGroupLocation();
	            this._buildBackground();
	            if (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) {
	                this._buildGradient();
	            } else {
	                this._buildItem();
	            }
	
	            if (this.dataRangeOption.show) {
	                for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                    this.zr.addShape(this.shapeList[i]);
	                }
	            }
	
	            this._syncShapeFromRange();
	        },
	
	        /**
	         * 构建图例型的值域元素
	         */
	        _buildItem: function _buildItem() {
	            var data = this._valueTextList;
	            var dataLength = data.length;
	            var itemName;
	            var itemShape;
	            var textShape;
	            var font = this.getFont(this.dataRangeOption.textStyle);
	
	            var lastX = this._itemGroupLocation.x;
	            var lastY = this._itemGroupLocation.y;
	            var itemWidth = this.dataRangeOption.itemWidth;
	            var itemHeight = this.dataRangeOption.itemHeight;
	            var itemGap = this.dataRangeOption.itemGap;
	            var textHeight = zrArea.getTextHeight('国', font);
	            var color;
	
	            if (this.dataRangeOption.orient == 'vertical' && this.dataRangeOption.x == 'right') {
	                lastX = this._itemGroupLocation.x + this._itemGroupLocation.width - itemWidth;
	            }
	            var needValueText = true;
	            if (this.dataRangeOption.text) {
	                needValueText = false;
	                // 第一个文字
	                if (this.dataRangeOption.text[0]) {
	                    textShape = this._getTextShape(lastX, lastY, this.dataRangeOption.text[0]);
	                    if (this.dataRangeOption.orient == 'horizontal') {
	                        lastX += zrArea.getTextWidth(this.dataRangeOption.text[0], font) + this._textGap;
	                    } else {
	                        lastY += textHeight + this._textGap;
	                        textShape.style.y += textHeight / 2 + this._textGap;
	                        textShape.style.textBaseline = 'bottom';
	                    }
	                    this.shapeList.push(new TextShape(textShape));
	                }
	            }
	
	            for (var i = 0; i < dataLength; i++) {
	                itemName = data[i];
	                color = this.getColorByIndex(i);
	                // 图形
	                itemShape = this._getItemShape(lastX, lastY, itemWidth, itemHeight, this._selectedMap[i] ? color : '#ccc');
	                itemShape._idx = i;
	                itemShape.onmousemove = this._dispatchHoverLink;
	                if (this.dataRangeOption.selectedMode) {
	                    itemShape.clickable = true;
	                    itemShape.onclick = this._dataRangeSelected;
	                }
	                this.shapeList.push(new RectangleShape(itemShape));
	
	                if (needValueText) {
	                    // 文字
	                    textShape = {
	                        zlevel: this.getZlevelBase(),
	                        z: this.getZBase(),
	                        style: {
	                            x: lastX + itemWidth + 5,
	                            y: lastY,
	                            color: this._selectedMap[i] ? this.dataRangeOption.textStyle.color : '#ccc',
	                            text: data[i],
	                            textFont: font,
	                            textBaseline: 'top'
	                        },
	                        highlightStyle: {
	                            brushType: 'fill'
	                        }
	                    };
	                    if (this.dataRangeOption.orient == 'vertical' && this.dataRangeOption.x == 'right') {
	                        textShape.style.x -= itemWidth + 10;
	                        textShape.style.textAlign = 'right';
	                    }
	                    textShape._idx = i;
	                    textShape.onmousemove = this._dispatchHoverLink;
	                    if (this.dataRangeOption.selectedMode) {
	                        textShape.clickable = true;
	                        textShape.onclick = this._dataRangeSelected;
	                    }
	                    this.shapeList.push(new TextShape(textShape));
	                }
	
	                if (this.dataRangeOption.orient == 'horizontal') {
	                    lastX += itemWidth + (needValueText ? 5 : 0) + (needValueText ? zrArea.getTextWidth(itemName, font) : 0) + itemGap;
	                } else {
	                    lastY += itemHeight + itemGap;
	                }
	            }
	
	            if (!needValueText && this.dataRangeOption.text[1]) {
	                if (this.dataRangeOption.orient == 'horizontal') {
	                    lastX = lastX - itemGap + this._textGap;
	                } else {
	                    lastY = lastY - itemGap + this._textGap;
	                }
	                // 最后一个文字
	                textShape = this._getTextShape(lastX, lastY, this.dataRangeOption.text[1]);
	
	                if (this.dataRangeOption.orient != 'horizontal') {
	                    textShape.style.y -= 5;
	                    textShape.style.textBaseline = 'top';
	                }
	
	                this.shapeList.push(new TextShape(textShape));
	            }
	        },
	
	        /**
	         * 构建渐变型的值域元素 
	         */
	        _buildGradient: function _buildGradient() {
	            var itemShape;
	            var textShape;
	            var font = this.getFont(this.dataRangeOption.textStyle);
	
	            var lastX = this._itemGroupLocation.x;
	            var lastY = this._itemGroupLocation.y;
	            var itemWidth = this.dataRangeOption.itemWidth;
	            var itemHeight = this.dataRangeOption.itemHeight;
	            var textHeight = zrArea.getTextHeight('国', font);
	            var mSize = 10;
	
	            var needValueText = true;
	            if (this.dataRangeOption.text) {
	                needValueText = false;
	                // 第一个文字
	                if (this.dataRangeOption.text[0]) {
	                    textShape = this._getTextShape(lastX, lastY, this.dataRangeOption.text[0]);
	                    if (this.dataRangeOption.orient == 'horizontal') {
	                        lastX += zrArea.getTextWidth(this.dataRangeOption.text[0], font) + this._textGap;
	                    } else {
	                        lastY += textHeight + this._textGap;
	                        textShape.style.y += textHeight / 2 + this._textGap;
	                        textShape.style.textBaseline = 'bottom';
	                    }
	                    this.shapeList.push(new TextShape(textShape));
	                }
	            }
	
	            var zrColor = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/color\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	            var per = 1 / (this.dataRangeOption.color.length - 1);
	            var colorList = [];
	            for (var i = 0, l = this.dataRangeOption.color.length; i < l; i++) {
	                colorList.push([i * per, this.dataRangeOption.color[i]]);
	            }
	            if (this.dataRangeOption.orient == 'horizontal') {
	                itemShape = {
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase(),
	                    style: {
	                        x: lastX,
	                        y: lastY,
	                        width: itemWidth * mSize,
	                        height: itemHeight,
	                        color: zrColor.getLinearGradient(lastX, lastY, lastX + itemWidth * mSize, lastY, colorList)
	                    },
	                    hoverable: false
	                };
	                lastX += itemWidth * mSize + this._textGap;
	            } else {
	                itemShape = {
	                    zlevel: this.getZlevelBase(),
	                    z: this.getZBase(),
	                    style: {
	                        x: lastX,
	                        y: lastY,
	                        width: itemWidth,
	                        height: itemHeight * mSize,
	                        color: zrColor.getLinearGradient(lastX, lastY, lastX, lastY + itemHeight * mSize, colorList)
	                    },
	                    hoverable: false
	                };
	                lastY += itemHeight * mSize + this._textGap;
	            }
	            this.shapeList.push(new RectangleShape(itemShape));
	            // 可计算元素的位置缓存
	            this._calculableLocation = itemShape.style;
	            if (this.dataRangeOption.calculable) {
	                this._buildFiller();
	                this._bulidMask();
	                this._bulidHandle();
	            }
	            this._buildIndicator();
	
	            if (!needValueText && this.dataRangeOption.text[1]) {
	                // 最后一个文字
	                textShape = this._getTextShape(lastX, lastY, this.dataRangeOption.text[1]);
	
	                this.shapeList.push(new TextShape(textShape));
	            }
	        },
	
	        /**
	         * 构建指示器 
	         */
	        _buildIndicator: function _buildIndicator() {
	            var x = this._calculableLocation.x;
	            var y = this._calculableLocation.y;
	            var width = this._calculableLocation.width;
	            var height = this._calculableLocation.height;
	
	            var size = 5;
	            var pointList;
	            var textPosition;
	            if (this.dataRangeOption.orient == 'horizontal') {
	                // 水平
	                if (this.dataRangeOption.y != 'bottom') {
	                    // 手柄统统在下方
	                    pointList = [[x, y + height], [x - size, y + height + size], [x + size, y + height + size]];
	                    textPosition = 'bottom';
	                } else {
	                    // 手柄在上方
	                    pointList = [[x, y], [x - size, y - size], [x + size, y - size]];
	                    textPosition = 'top';
	                }
	            } else {
	                // 垂直
	                if (this.dataRangeOption.x != 'right') {
	                    // 手柄统统在右侧
	                    pointList = [[x + width, y], [x + width + size, y - size], [x + width + size, y + size]];
	                    textPosition = 'right';
	                } else {
	                    // 手柄在左侧
	                    pointList = [[x, y], [x - size, y - size], [x - size, y + size]];
	                    textPosition = 'left';
	                }
	            }
	            this._indicatorShape = {
	                style: {
	                    pointList: pointList,
	                    color: '#fff',
	                    __rect: {
	                        x: Math.min(pointList[0][0], pointList[1][0]),
	                        y: Math.min(pointList[0][1], pointList[1][1]),
	                        width: size * (this.dataRangeOption.orient == 'horizontal' ? 2 : 1),
	                        height: size * (this.dataRangeOption.orient == 'horizontal' ? 1 : 2)
	                    }
	                },
	                highlightStyle: {
	                    brushType: 'fill',
	                    textPosition: textPosition,
	                    textColor: this.dataRangeOption.textStyle.color
	                },
	                hoverable: false
	            };
	            this._indicatorShape = new HandlePolygonShape(this._indicatorShape);
	        },
	
	        /**
	         * 构建填充物
	         */
	        _buildFiller: function _buildFiller() {
	            this._fillerShape = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase() + 1,
	                style: {
	                    x: this._calculableLocation.x,
	                    y: this._calculableLocation.y,
	                    width: this._calculableLocation.width,
	                    height: this._calculableLocation.height,
	                    color: 'rgba(255,255,255,0)'
	                },
	                highlightStyle: {
	                    strokeColor: 'rgba(255,255,255,0.5)',
	                    lineWidth: 1
	                },
	                draggable: true,
	                ondrift: this._ondrift,
	                ondragend: this._ondragend,
	                onmousemove: this._dispatchHoverLink,
	                _type: 'filler'
	            };
	            this._fillerShape = new RectangleShape(this._fillerShape);
	            this.shapeList.push(this._fillerShape);
	        },
	
	        /**
	         * 构建拖拽手柄
	         */
	        _bulidHandle: function _bulidHandle() {
	            var x = this._calculableLocation.x;
	            var y = this._calculableLocation.y;
	            var width = this._calculableLocation.width;
	            var height = this._calculableLocation.height;
	
	            var font = this.getFont(this.dataRangeOption.textStyle);
	            var textHeight = zrArea.getTextHeight('国', font);
	            var textWidth = Math.max(zrArea.getTextWidth(this._textFormat(this.dataRangeOption.max), font), zrArea.getTextWidth(this._textFormat(this.dataRangeOption.min), font)) + 2;
	
	            var pointListStart;
	            var textXStart;
	            var textYStart;
	            var coverRectStart;
	            var pointListEnd;
	            var textXEnd;
	            var textYEnd;
	            var coverRectEnd;
	            if (this.dataRangeOption.orient == 'horizontal') {
	                // 水平
	                if (this.dataRangeOption.y != 'bottom') {
	                    // 手柄统统在下方
	                    pointListStart = [[x, y], [x, y + height + textHeight], [x - textHeight, y + height + textHeight], [x - 1, y + height], [x - 1, y]];
	                    textXStart = x - textWidth / 2 - textHeight;
	                    textYStart = y + height + textHeight / 2 + 2;
	                    coverRectStart = {
	                        x: x - textWidth - textHeight,
	                        y: y + height,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	
	                    pointListEnd = [[x + width, y], [x + width, y + height + textHeight], [x + width + textHeight, y + height + textHeight], [x + width + 1, y + height], [x + width + 1, y]];
	                    textXEnd = x + width + textWidth / 2 + textHeight;
	                    textYEnd = textYStart;
	                    coverRectEnd = {
	                        x: x + width,
	                        y: y + height,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	                } else {
	                    // 手柄在上方
	                    pointListStart = [[x, y + height], [x, y - textHeight], [x - textHeight, y - textHeight], [x - 1, y], [x - 1, y + height]];
	                    textXStart = x - textWidth / 2 - textHeight;
	                    textYStart = y - textHeight / 2 - 2;
	                    coverRectStart = {
	                        x: x - textWidth - textHeight,
	                        y: y - textHeight,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	
	                    pointListEnd = [[x + width, y + height], [x + width, y - textHeight], [x + width + textHeight, y - textHeight], [x + width + 1, y], [x + width + 1, y + height]];
	                    textXEnd = x + width + textWidth / 2 + textHeight;
	                    textYEnd = textYStart;
	                    coverRectEnd = {
	                        x: x + width,
	                        y: y - textHeight,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	                }
	            } else {
	                textWidth += textHeight;
	                // 垂直
	                if (this.dataRangeOption.x != 'right') {
	                    // 手柄统统在右侧
	                    pointListStart = [[x, y], [x + width + textHeight, y], [x + width + textHeight, y - textHeight], [x + width, y - 1], [x, y - 1]];
	                    textXStart = x + width + textWidth / 2 + textHeight / 2;
	                    textYStart = y - textHeight / 2;
	                    coverRectStart = {
	                        x: x + width,
	                        y: y - textHeight,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	
	                    pointListEnd = [[x, y + height], [x + width + textHeight, y + height], [x + width + textHeight, y + textHeight + height], [x + width, y + 1 + height], [x, y + height + 1]];
	                    textXEnd = textXStart;
	                    textYEnd = y + height + textHeight / 2;
	                    coverRectEnd = {
	                        x: x + width,
	                        y: y + height,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	                } else {
	                    // 手柄在左侧
	                    pointListStart = [[x + width, y], [x - textHeight, y], [x - textHeight, y - textHeight], [x, y - 1], [x + width, y - 1]];
	                    textXStart = x - textWidth / 2 - textHeight / 2;
	                    textYStart = y - textHeight / 2;
	                    coverRectStart = {
	                        x: x - textWidth - textHeight,
	                        y: y - textHeight,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	
	                    pointListEnd = [[x + width, y + height], [x - textHeight, y + height], [x - textHeight, y + textHeight + height], [x, y + 1 + height], [x + width, y + height + 1]];
	                    textXEnd = textXStart;
	                    textYEnd = y + height + textHeight / 2;
	                    coverRectEnd = {
	                        x: x - textWidth - textHeight,
	                        y: y + height,
	                        width: textWidth + textHeight,
	                        height: textHeight
	                    };
	                }
	            }
	
	            this._startShape = {
	                style: {
	                    pointList: pointListStart,
	                    text: this._textFormat(this.dataRangeOption.max),
	                    textX: textXStart,
	                    textY: textYStart,
	                    textFont: font,
	                    color: this.getColor(this.dataRangeOption.max),
	                    rect: coverRectStart,
	                    x: pointListStart[0][0],
	                    y: pointListStart[0][1],
	                    _x: pointListStart[0][0], // 拖拽区域控制缓存
	                    _y: pointListStart[0][1]
	                }
	            };
	            this._startShape.highlightStyle = {
	                strokeColor: this._startShape.style.color,
	                lineWidth: 1
	            };
	
	            this._endShape = {
	                style: {
	                    pointList: pointListEnd,
	                    text: this._textFormat(this.dataRangeOption.min),
	                    textX: textXEnd,
	                    textY: textYEnd,
	                    textFont: font,
	                    color: this.getColor(this.dataRangeOption.min),
	                    rect: coverRectEnd,
	                    x: pointListEnd[0][0],
	                    y: pointListEnd[0][1],
	                    _x: pointListEnd[0][0], // 拖拽区域控制缓存
	                    _y: pointListEnd[0][1]
	                }
	            };
	            this._endShape.highlightStyle = {
	                strokeColor: this._endShape.style.color,
	                lineWidth: 1
	            };
	
	            // 统一参数
	            this._startShape.zlevel = this._endShape.zlevel = this.getZlevelBase();
	            this._startShape.z = this._endShape.z = this.getZBase() + 1;
	            this._startShape.draggable = this._endShape.draggable = true;
	            this._startShape.ondrift = this._endShape.ondrift = this._ondrift;
	            this._startShape.ondragend = this._endShape.ondragend = this._ondragend;
	
	            this._startShape.style.textColor = this._endShape.style.textColor = this.dataRangeOption.textStyle.color;
	            this._startShape.style.textAlign = this._endShape.style.textAlign = 'center';
	            this._startShape.style.textPosition = this._endShape.style.textPosition = 'specific';
	            this._startShape.style.textBaseline = this._endShape.style.textBaseline = 'middle';
	            // for ondrif计算统一
	            this._startShape.style.width = this._endShape.style.width = 0;
	            this._startShape.style.height = this._endShape.style.height = 0;
	            this._startShape.style.textPosition = this._endShape.style.textPosition = 'specific';
	
	            this._startShape = new HandlePolygonShape(this._startShape);
	            this._endShape = new HandlePolygonShape(this._endShape);
	            this.shapeList.push(this._startShape);
	            this.shapeList.push(this._endShape);
	        },
	
	        _bulidMask: function _bulidMask() {
	            var x = this._calculableLocation.x;
	            var y = this._calculableLocation.y;
	            var width = this._calculableLocation.width;
	            var height = this._calculableLocation.height;
	            this._startMask = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase() + 1,
	                style: {
	                    x: x,
	                    y: y,
	                    width: this.dataRangeOption.orient == 'horizontal' ? 0 : width,
	                    height: this.dataRangeOption.orient == 'horizontal' ? height : 0,
	                    color: '#ccc'
	                },
	                hoverable: false
	            };
	            this._endMask = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase() + 1,
	                style: {
	                    x: this.dataRangeOption.orient == 'horizontal' ? x + width : x,
	                    y: this.dataRangeOption.orient == 'horizontal' ? y : y + height,
	                    width: this.dataRangeOption.orient == 'horizontal' ? 0 : width,
	                    height: this.dataRangeOption.orient == 'horizontal' ? height : 0,
	                    color: '#ccc'
	                },
	                hoverable: false
	            };
	            this._startMask = new RectangleShape(this._startMask);
	            this._endMask = new RectangleShape(this._endMask);
	            this.shapeList.push(this._startMask);
	            this.shapeList.push(this._endMask);
	        },
	
	        _buildBackground: function _buildBackground() {
	            var padding = this.reformCssArray(this.dataRangeOption.padding);
	
	            this.shapeList.push(new RectangleShape({
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                hoverable: false,
	                style: {
	                    x: this._itemGroupLocation.x - padding[3],
	                    y: this._itemGroupLocation.y - padding[0],
	                    width: this._itemGroupLocation.width + padding[3] + padding[1],
	                    height: this._itemGroupLocation.height + padding[0] + padding[2],
	                    brushType: this.dataRangeOption.borderWidth === 0 ? 'fill' : 'both',
	                    color: this.dataRangeOption.backgroundColor,
	                    strokeColor: this.dataRangeOption.borderColor,
	                    lineWidth: this.dataRangeOption.borderWidth
	                }
	            }));
	        },
	
	        /**
	         * 根据选项计算值域实体的位置坐标
	         */
	        _getItemGroupLocation: function _getItemGroupLocation() {
	            var data = this._valueTextList;
	            var dataLength = data.length;
	            var itemGap = this.dataRangeOption.itemGap;
	            var itemWidth = this.dataRangeOption.itemWidth;
	            var itemHeight = this.dataRangeOption.itemHeight;
	            var totalWidth = 0;
	            var totalHeight = 0;
	            var font = this.getFont(this.dataRangeOption.textStyle);
	            var textHeight = zrArea.getTextHeight('国', font);
	            var mSize = 10;
	
	            if (this.dataRangeOption.orient == 'horizontal') {
	                // 水平布局，计算总宽度
	                if (this.dataRangeOption.text || this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) {
	                    // 指定文字或线性渐变
	                    totalWidth = (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? itemWidth * mSize + itemGap : dataLength * (itemWidth + itemGap)) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[0] != 'undefined' ? zrArea.getTextWidth(this.dataRangeOption.text[0], font) + this._textGap : 0) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[1] != 'undefined' ? zrArea.getTextWidth(this.dataRangeOption.text[1], font) + this._textGap : 0);
	                } else {
	                    // 值标签
	                    itemWidth += 5;
	                    for (var i = 0; i < dataLength; i++) {
	                        totalWidth += itemWidth + zrArea.getTextWidth(data[i], font) + itemGap;
	                    }
	                }
	                totalWidth -= itemGap; // 减去最后一个的itemGap
	                totalHeight = Math.max(textHeight, itemHeight);
	            } else {
	                // 垂直布局，计算总高度
	                var maxWidth;
	                if (this.dataRangeOption.text || this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) {
	                    // 指定文字或线性渐变
	                    totalHeight = (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? itemHeight * mSize + itemGap : dataLength * (itemHeight + itemGap)) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[0] != 'undefined' ? this._textGap + textHeight : 0) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[1] != 'undefined' ? this._textGap + textHeight : 0);
	
	                    maxWidth = Math.max(zrArea.getTextWidth(this.dataRangeOption.text && this.dataRangeOption.text[0] || '', font), zrArea.getTextWidth(this.dataRangeOption.text && this.dataRangeOption.text[1] || '', font));
	                    totalWidth = Math.max(itemWidth, maxWidth);
	                } else {
	                    totalHeight = (itemHeight + itemGap) * dataLength;
	                    // 值标签
	                    itemWidth += 5;
	                    maxWidth = 0;
	                    for (var i = 0; i < dataLength; i++) {
	                        maxWidth = Math.max(maxWidth, zrArea.getTextWidth(data[i], font));
	                    }
	                    totalWidth = itemWidth + maxWidth;
	                }
	                totalHeight -= itemGap; // 减去最后一个的itemGap;
	            }
	
	            var padding = this.reformCssArray(this.dataRangeOption.padding);
	            var x;
	            var zrWidth = this.zr.getWidth();
	            switch (this.dataRangeOption.x) {
	                case 'center':
	                    x = Math.floor((zrWidth - totalWidth) / 2);
	                    break;
	                case 'left':
	                    x = padding[3] + this.dataRangeOption.borderWidth;
	                    break;
	                case 'right':
	                    x = zrWidth - totalWidth - padding[1] - this.dataRangeOption.borderWidth;
	                    break;
	                default:
	                    x = this.parsePercent(this.dataRangeOption.x, zrWidth);
	                    x = isNaN(x) ? 0 : x;
	                    break;
	            }
	
	            var y;
	            var zrHeight = this.zr.getHeight();
	            switch (this.dataRangeOption.y) {
	                case 'top':
	                    y = padding[0] + this.dataRangeOption.borderWidth;
	                    break;
	                case 'bottom':
	                    y = zrHeight - totalHeight - padding[2] - this.dataRangeOption.borderWidth;
	                    break;
	                case 'center':
	                    y = Math.floor((zrHeight - totalHeight) / 2);
	                    break;
	                default:
	                    y = this.parsePercent(this.dataRangeOption.y, zrHeight);
	                    y = isNaN(y) ? 0 : y;
	                    break;
	            }
	
	            if (this.dataRangeOption.calculable) {
	                // 留出手柄控件
	                var handlerWidth = Math.max(zrArea.getTextWidth(this.dataRangeOption.max, font), zrArea.getTextWidth(this.dataRangeOption.min, font)) + textHeight;
	                if (this.dataRangeOption.orient == 'horizontal') {
	                    if (x < handlerWidth) {
	                        x = handlerWidth;
	                    }
	                    if (x + totalWidth + handlerWidth > zrWidth) {
	                        x -= handlerWidth;
	                    }
	                } else {
	                    if (y < textHeight) {
	                        y = textHeight;
	                    }
	                    if (y + totalHeight + textHeight > zrHeight) {
	                        y -= textHeight;
	                    }
	                }
	            }
	
	            return {
	                x: x,
	                y: y,
	                width: totalWidth,
	                height: totalHeight
	            };
	        },
	
	        // 指定文本
	        _getTextShape: function _getTextShape(x, y, text) {
	            return {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                style: {
	                    x: this.dataRangeOption.orient == 'horizontal' ? x : this._itemGroupLocation.x + this._itemGroupLocation.width / 2,
	                    y: this.dataRangeOption.orient == 'horizontal' ? this._itemGroupLocation.y + this._itemGroupLocation.height / 2 : y,
	                    color: this.dataRangeOption.textStyle.color,
	                    text: text,
	                    textFont: this.getFont(this.dataRangeOption.textStyle),
	                    textBaseline: this.dataRangeOption.orient == 'horizontal' ? 'middle' : 'top',
	                    textAlign: this.dataRangeOption.orient == 'horizontal' ? 'left' : 'center'
	                },
	                hoverable: false
	            };
	        },
	
	        // 色尺legend item shape
	        _getItemShape: function _getItemShape(x, y, width, height, color) {
	            return {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                style: {
	                    x: x,
	                    y: y + 1,
	                    width: width,
	                    height: height - 2,
	                    color: color
	                },
	                highlightStyle: {
	                    strokeColor: color,
	                    lineWidth: 1
	                }
	            };
	        },
	
	        /**
	         * 拖拽范围控制
	         */
	        __ondrift: function __ondrift(shape, dx, dy) {
	            var x = this._calculableLocation.x;
	            var y = this._calculableLocation.y;
	            var width = this._calculableLocation.width;
	            var height = this._calculableLocation.height;
	
	            if (this.dataRangeOption.orient == 'horizontal') {
	                if (shape.style.x + dx <= x) {
	                    shape.style.x = x;
	                } else if (shape.style.x + dx + shape.style.width >= x + width) {
	                    shape.style.x = x + width - shape.style.width;
	                } else {
	                    shape.style.x += dx;
	                }
	            } else {
	                if (shape.style.y + dy <= y) {
	                    shape.style.y = y;
	                } else if (shape.style.y + dy + shape.style.height >= y + height) {
	                    shape.style.y = y + height - shape.style.height;
	                } else {
	                    shape.style.y += dy;
	                }
	            }
	
	            if (shape._type == 'filler') {
	                this._syncHandleShape();
	            } else {
	                this._syncFillerShape(shape);
	            }
	
	            if (this.dataRangeOption.realtime) {
	                this._dispatchDataRange();
	            }
	
	            return true;
	        },
	
	        __ondragend: function __ondragend() {
	            this.isDragend = true;
	        },
	
	        /**
	         * 数据项被拖拽出去
	         */
	        ondragend: function ondragend(param, status) {
	            if (!this.isDragend || !param.target) {
	                // 没有在当前实例上发生拖拽行为则直接返回
	                return;
	            }
	
	            // 别status = {}赋值啊！！
	            status.dragOut = true;
	            status.dragIn = true;
	
	            if (!this.dataRangeOption.realtime) {
	                this._dispatchDataRange();
	            }
	
	            status.needRefresh = false; // 会有消息触发fresh，不用再刷一遍
	            // 处理完拖拽事件后复位
	            this.isDragend = false;
	
	            return;
	        },
	
	        // 外部传入range
	        _syncShapeFromRange: function _syncShapeFromRange() {
	            var range = this.dataRangeOption.range || {};
	            // 做一个反转
	            this._range.end = typeof this._range.end != 'undefined' ? this._range.end : typeof range.start != 'undefined' ? range.start : 0;
	            this._range.start = typeof this._range.start != 'undefined' ? this._range.start : typeof range.end != 'undefined' ? range.end : 100;
	
	            if (this._range.start != 100 || this._range.end !== 0) {
	                // 非默认满值同步一下图形
	                if (this.dataRangeOption.orient == 'horizontal') {
	                    // 横向
	                    var width = this._fillerShape.style.width;
	                    this._fillerShape.style.x += width * (100 - this._range.start) / 100;
	                    this._fillerShape.style.width = width * (this._range.start - this._range.end) / 100;
	                } else {
	                    // 纵向
	                    var height = this._fillerShape.style.height;
	                    this._fillerShape.style.y += height * (100 - this._range.start) / 100;
	                    this._fillerShape.style.height = height * (this._range.start - this._range.end) / 100;
	                }
	                this.zr.modShape(this._fillerShape.id);
	                this._syncHandleShape();
	            }
	        },
	
	        _syncHandleShape: function _syncHandleShape() {
	            var x = this._calculableLocation.x;
	            var y = this._calculableLocation.y;
	            var width = this._calculableLocation.width;
	            var height = this._calculableLocation.height;
	
	            if (this.dataRangeOption.orient == 'horizontal') {
	                this._startShape.style.x = this._fillerShape.style.x;
	                this._startMask.style.width = this._startShape.style.x - x;
	
	                this._endShape.style.x = this._fillerShape.style.x + this._fillerShape.style.width;
	                this._endMask.style.x = this._endShape.style.x;
	                this._endMask.style.width = x + width - this._endShape.style.x;
	
	                this._range.start = Math.ceil(100 - (this._startShape.style.x - x) / width * 100);
	                this._range.end = Math.floor(100 - (this._endShape.style.x - x) / width * 100);
	            } else {
	                this._startShape.style.y = this._fillerShape.style.y;
	                this._startMask.style.height = this._startShape.style.y - y;
	
	                this._endShape.style.y = this._fillerShape.style.y + this._fillerShape.style.height;
	                this._endMask.style.y = this._endShape.style.y;
	                this._endMask.style.height = y + height - this._endShape.style.y;
	
	                this._range.start = Math.ceil(100 - (this._startShape.style.y - y) / height * 100);
	                this._range.end = Math.floor(100 - (this._endShape.style.y - y) / height * 100);
	            }
	
	            this._syncShape();
	        },
	
	        _syncFillerShape: function _syncFillerShape(e) {
	            var x = this._calculableLocation.x;
	            var y = this._calculableLocation.y;
	            var width = this._calculableLocation.width;
	            var height = this._calculableLocation.height;
	
	            var a;
	            var b;
	            if (this.dataRangeOption.orient == 'horizontal') {
	                a = this._startShape.style.x;
	                b = this._endShape.style.x;
	                if (e.id == this._startShape.id && a >= b) {
	                    // _startShape触发
	                    b = a;
	                    this._endShape.style.x = a;
	                } else if (e.id == this._endShape.id && a >= b) {
	                    // _endShape触发
	                    a = b;
	                    this._startShape.style.x = a;
	                }
	                this._fillerShape.style.x = a;
	                this._fillerShape.style.width = b - a;
	                this._startMask.style.width = a - x;
	                this._endMask.style.x = b;
	                this._endMask.style.width = x + width - b;
	
	                this._range.start = Math.ceil(100 - (a - x) / width * 100);
	                this._range.end = Math.floor(100 - (b - x) / width * 100);
	            } else {
	                a = this._startShape.style.y;
	                b = this._endShape.style.y;
	                if (e.id == this._startShape.id && a >= b) {
	                    // _startShape触发
	                    b = a;
	                    this._endShape.style.y = a;
	                } else if (e.id == this._endShape.id && a >= b) {
	                    // _endShape触发
	                    a = b;
	                    this._startShape.style.y = a;
	                }
	                this._fillerShape.style.y = a;
	                this._fillerShape.style.height = b - a;
	                this._startMask.style.height = a - y;
	                this._endMask.style.y = b;
	                this._endMask.style.height = y + height - b;
	
	                this._range.start = Math.ceil(100 - (a - y) / height * 100);
	                this._range.end = Math.floor(100 - (b - y) / height * 100);
	            }
	
	            this._syncShape();
	        },
	
	        _syncShape: function _syncShape() {
	            this._startShape.position = [this._startShape.style.x - this._startShape.style._x, this._startShape.style.y - this._startShape.style._y];
	
	            this._startShape.style.text = this._textFormat(this._gap * this._range.start + this.dataRangeOption.min);
	
	            this._startShape.style.color = this._startShape.highlightStyle.strokeColor = this.getColor(this._gap * this._range.start + this.dataRangeOption.min);
	
	            this._endShape.position = [this._endShape.style.x - this._endShape.style._x, this._endShape.style.y - this._endShape.style._y];
	
	            this._endShape.style.text = this._textFormat(this._gap * this._range.end + this.dataRangeOption.min);
	
	            this._endShape.style.color = this._endShape.highlightStyle.strokeColor = this.getColor(this._gap * this._range.end + this.dataRangeOption.min);
	
	            this.zr.modShape(this._startShape.id);
	            this.zr.modShape(this._endShape.id);
	            this.zr.modShape(this._startMask.id);
	            this.zr.modShape(this._endMask.id);
	            this.zr.modShape(this._fillerShape.id);
	            this.zr.refreshNextFrame();
	        },
	
	        _dispatchDataRange: function _dispatchDataRange() {
	            this.messageCenter.dispatch(ecConfig.EVENT.DATA_RANGE, null, {
	                range: {
	                    start: this._range.end,
	                    end: this._range.start
	                }
	            }, this.myChart);
	        },
	
	        __dataRangeSelected: function __dataRangeSelected(param) {
	            if (this.dataRangeOption.selectedMode === 'single') {
	                for (var k in this._selectedMap) {
	                    this._selectedMap[k] = false;
	                }
	            }
	            var idx = param.target._idx;
	            this._selectedMap[idx] = !this._selectedMap[idx];
	            var valueMax = (this._colorList.length - idx) * this._gap + this.dataRangeOption.min;
	            this.messageCenter.dispatch(ecConfig.EVENT.DATA_RANGE_SELECTED, param.event, {
	                selected: this._selectedMap,
	                target: idx,
	                valueMax: valueMax,
	                valueMin: valueMax - this._gap
	            }, this.myChart);
	
	            this.messageCenter.dispatch(ecConfig.EVENT.REFRESH, null, null, this.myChart);
	        },
	
	        /**
	         * 产生hover link事件 
	         */
	        __dispatchHoverLink: function __dispatchHoverLink(param) {
	            var valueMin;
	            var valueMax;
	            if (this.dataRangeOption.calculable) {
	                var totalValue = this.dataRangeOption.max - this.dataRangeOption.min;
	                var curValue;
	                if (this.dataRangeOption.orient == 'horizontal') {
	                    curValue = (1 - (zrEvent.getX(param.event) - this._calculableLocation.x) / this._calculableLocation.width) * totalValue;
	                } else {
	                    curValue = (1 - (zrEvent.getY(param.event) - this._calculableLocation.y) / this._calculableLocation.height) * totalValue;
	                }
	                valueMin = curValue - totalValue * 0.05;
	                valueMax = curValue + totalValue * 0.05;
	            } else {
	                var idx = param.target._idx;
	                valueMax = (this._colorList.length - idx) * this._gap + this.dataRangeOption.min;
	                valueMin = valueMax - this._gap;
	            }
	
	            this.messageCenter.dispatch(ecConfig.EVENT.DATA_RANGE_HOVERLINK, param.event, {
	                valueMin: valueMin,
	                valueMax: valueMax
	            }, this.myChart);
	
	            // console.log(param,curValue);
	            return;
	        },
	
	        __onhoverlink: function __onhoverlink(param) {
	            if (this.dataRangeOption.show && this.dataRangeOption.hoverLink && this._indicatorShape && param && param.seriesIndex != null && param.dataIndex != null) {
	                var curValue = param.value;
	                if (curValue === '' || isNaN(curValue)) {
	                    return;
	                }
	                if (curValue < this.dataRangeOption.min) {
	                    curValue = this.dataRangeOption.min;
	                } else if (curValue > this.dataRangeOption.max) {
	                    curValue = this.dataRangeOption.max;
	                }
	
	                if (this.dataRangeOption.orient == 'horizontal') {
	                    this._indicatorShape.position = [(this.dataRangeOption.max - curValue) / (this.dataRangeOption.max - this.dataRangeOption.min) * this._calculableLocation.width, 0];
	                } else {
	                    this._indicatorShape.position = [0, (this.dataRangeOption.max - curValue) / (this.dataRangeOption.max - this.dataRangeOption.min) * this._calculableLocation.height];
	                }
	                this._indicatorShape.style.text = this._textFormat(param.value);
	                this._indicatorShape.style.color = this.getColor(curValue);
	                this.zr.addHoverShape(this._indicatorShape);
	            }
	        },
	
	        _textFormat: function _textFormat(valueStart, valueEnd) {
	            valueStart = (+valueStart).toFixed(this.dataRangeOption.precision);
	            valueEnd = valueEnd != null ? (+valueEnd).toFixed(this.dataRangeOption.precision) : '';
	            if (this.dataRangeOption.formatter) {
	                if (typeof this.dataRangeOption.formatter == 'string') {
	                    return this.dataRangeOption.formatter.replace('{value}', valueStart).replace('{value2}', valueEnd);
	                } else if (typeof this.dataRangeOption.formatter == 'function') {
	                    return this.dataRangeOption.formatter.call(this.myChart, valueStart, valueEnd);
	                }
	            }
	
	            if (valueEnd !== '') {
	                return valueStart + ' - ' + valueEnd;
	            }
	
	            return valueStart;
	        },
	
	        /**
	         * 刷新
	         */
	        refresh: function refresh(newOption) {
	            if (newOption) {
	                this.option = newOption;
	                this.option.dataRange = this.reformOption(this.option.dataRange);
	                this.dataRangeOption = this.option.dataRange;
	                if (!this.myChart.canvasSupported) {
	                    // 不支持Canvas的强制关闭实时动画
	                    this.dataRangeOption.realtime = false;
	                }
	
	                var splitNumber = this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? 100 : this.dataRangeOption.splitNumber;
	                this._colorList = zrColor.getGradientColors(this.dataRangeOption.color, Math.max((splitNumber - this.dataRangeOption.color.length) / (this.dataRangeOption.color.length - 1), 0) + 1);
	
	                if (this._colorList.length > splitNumber) {
	                    var len = this._colorList.length;
	                    var newColorList = [this._colorList[0]];
	                    var step = len / (splitNumber - 1);
	                    for (var i = 1; i < splitNumber - 1; i++) {
	                        newColorList.push(this._colorList[Math.floor(i * step)]);
	                    }
	                    newColorList.push(this._colorList[len - 1]);
	                    this._colorList = newColorList;
	                }
	                // console.log(this._colorList.length)
	
	                var precision = this.dataRangeOption.precision;
	                this._gap = (this.dataRangeOption.max - this.dataRangeOption.min) / splitNumber;
	                while (this._gap.toFixed(precision) - 0 != this._gap && precision < 5) {
	                    // 精度自适应
	                    precision++;
	                }
	                this.dataRangeOption.precision = precision;
	
	                this._gap = ((this.dataRangeOption.max - this.dataRangeOption.min) / splitNumber).toFixed(precision) - 0;
	
	                this._valueTextList = [];
	                for (var i = 0; i < splitNumber; i++) {
	                    this._selectedMap[i] = true;
	                    this._valueTextList.unshift(this._textFormat(i * this._gap + this.dataRangeOption.min, (i + 1) * this._gap + this.dataRangeOption.min));
	                }
	            }
	
	            this.clear();
	            this._buildShape();
	        },
	
	        getColor: function getColor(value) {
	            if (isNaN(value)) {
	                return null;
	            }
	
	            if (this.dataRangeOption.min == this.dataRangeOption.max) {
	                return this._colorList[0];
	            }
	
	            if (value < this.dataRangeOption.min) {
	                value = this.dataRangeOption.min;
	            } else if (value > this.dataRangeOption.max) {
	                value = this.dataRangeOption.max;
	            }
	
	            if (this.dataRangeOption.calculable) {
	                if (value - (this._gap * this._range.start + this.dataRangeOption.min) > 0.00005 || value - (this._gap * this._range.end + this.dataRangeOption.min) < -0.00005) {
	                    return null;
	                }
	            }
	
	            var idx = this._colorList.length - Math.ceil((value - this.dataRangeOption.min) / (this.dataRangeOption.max - this.dataRangeOption.min) * this._colorList.length);
	            if (idx == this._colorList.length) {
	                idx--;
	            }
	
	            //console.log(value, idx,this._colorList[idx])
	            if (this._selectedMap[idx]) {
	                return this._colorList[idx];
	            } else {
	                return null;
	            }
	        },
	
	        getColorByIndex: function getColorByIndex(idx) {
	            if (idx >= this._colorList.length) {
	                idx = this._colorList.length - 1;
	            } else if (idx < 0) {
	                idx = 0;
	            }
	            return this._colorList[idx];
	        },
	
	        /**
	         * 释放后实例不可用
	         */
	        onbeforDispose: function onbeforDispose() {
	            this.messageCenter.unbind(ecConfig.EVENT.HOVER, this._onhoverlink);
	        }
	    };
	
	    zrUtil.inherits(DataRange, Base);
	
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../component\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).define('dataRange', DataRange);
	
	    return DataRange;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts组件：漫游控制器
	 *
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    var Base = __webpack_require__(55);
	
	    // 图形依赖
	    var RectangleShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Rectangle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var SectorShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Sector\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var CircleShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Circle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    var ecConfig = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    ecConfig.roamController = {
	        zlevel: 0, // 一级层叠
	        z: 4, // 二级层叠
	        show: true,
	        x: 'left', // 水平安放位置，默认为全图左对齐，可选为：
	        // 'center' ¦ 'left' ¦ 'right'
	        // ¦ {number}（x坐标，单位px）
	        y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
	        // 'top' ¦ 'bottom' ¦ 'center'
	        // ¦ {number}（y坐标，单位px）
	        width: 80,
	        height: 120,
	        backgroundColor: 'rgba(0,0,0,0)',
	        borderColor: '#ccc', // 图例边框颜色
	        borderWidth: 0, // 图例边框线宽，单位px，默认为0（无边框）
	        padding: 5, // 图例内边距，单位px，默认各方向内边距为5，
	        // 接受数组分别设定上右下左边距，同css
	        handleColor: '#6495ed',
	        fillerColor: '#fff',
	        step: 15, // 移动幅度
	        mapTypeControl: null
	    };
	
	    var zrUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/util\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrColor = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/color\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var zrEvent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/tool/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	    /**
	     * 构造函数
	     * @param {Object} messageCenter echart消息中心
	     * @param {ZRender} zr zrender实例
	     * @param {Object} option 图表参数
	     */
	    function RoamController(ecTheme, messageCenter, zr, option, myChart) {
	        if (!option.roamController || !option.roamController.show) {
	            return;
	        }
	        if (!option.roamController.mapTypeControl) {
	            console.error('option.roamController.mapTypeControl has not been defined.');
	            return;
	        }
	
	        Base.call(this, ecTheme, messageCenter, zr, option, myChart);
	
	        this.rcOption = option.roamController;
	
	        var self = this;
	        this._drictionMouseDown = function (params) {
	            return self.__drictionMouseDown(params);
	        };
	        this._drictionMouseUp = function (params) {
	            return self.__drictionMouseUp(params);
	        };
	        this._drictionMouseMove = function (params) {
	            return self.__drictionMouseMove(params);
	        };
	        this._drictionMouseOut = function (params) {
	            return self.__drictionMouseOut(params);
	        };
	        this._scaleHandler = function (params) {
	            return self.__scaleHandler(params);
	        };
	        this.refresh(option);
	    }
	
	    RoamController.prototype = {
	        type: ecConfig.COMPONENT_TYPE_ROAMCONTROLLER,
	        _buildShape: function _buildShape() {
	            if (!this.rcOption.show) {
	                return;
	            }
	            // 元素组的位置参数，通过计算所得x, y, width, height
	            this._itemGroupLocation = this._getItemGroupLocation();
	
	            this._buildBackground();
	            this._buildItem();
	
	            for (var i = 0, l = this.shapeList.length; i < l; i++) {
	                this.zr.addShape(this.shapeList[i]);
	            }
	        },
	
	        /**
	         * 构建所有漫游控制器元素
	         */
	        _buildItem: function _buildItem() {
	            this.shapeList.push(this._getDirectionShape('up'));
	            this.shapeList.push(this._getDirectionShape('down'));
	            this.shapeList.push(this._getDirectionShape('left'));
	            this.shapeList.push(this._getDirectionShape('right'));
	            this.shapeList.push(this._getScaleShape('scaleUp'));
	            this.shapeList.push(this._getScaleShape('scaleDown'));
	        },
	
	        _getDirectionShape: function _getDirectionShape(direction) {
	            var r = this._itemGroupLocation.r;
	            var x = this._itemGroupLocation.x + r;
	            var y = this._itemGroupLocation.y + r;
	
	            var sectorShape = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                style: {
	                    x: x, // 圆心横坐标
	                    y: y, // 圆心纵坐标
	                    r: r, // 圆环外半径
	                    startAngle: -45,
	                    endAngle: 45,
	                    color: this.rcOption.handleColor,
	                    text: '>',
	                    textX: x + r / 2 + 4,
	                    textY: y - 0.5,
	                    textAlign: 'center',
	                    textBaseline: 'middle',
	                    textPosition: 'specific',
	                    textColor: this.rcOption.fillerColor,
	                    textFont: Math.floor(r / 2) + 'px arial'
	                },
	                highlightStyle: {
	                    color: zrColor.lift(this.rcOption.handleColor, -0.2),
	                    brushType: 'fill'
	                },
	                clickable: true
	            };
	            switch (direction) {
	                case 'up':
	                    sectorShape.rotation = [Math.PI / 2, x, y];
	                    break;
	                case 'left':
	                    sectorShape.rotation = [Math.PI, x, y];
	                    break;
	                case 'down':
	                    sectorShape.rotation = [-Math.PI / 2, x, y];
	                    break;
	            }
	
	            sectorShape = new SectorShape(sectorShape);
	            sectorShape._roamType = direction;
	            sectorShape.onmousedown = this._drictionMouseDown;
	            sectorShape.onmouseup = this._drictionMouseUp;
	            sectorShape.onmousemove = this._drictionMouseMove;
	            sectorShape.onmouseout = this._drictionMouseOut;
	
	            return sectorShape;
	        },
	
	        _getScaleShape: function _getScaleShape(text) {
	            var width = this._itemGroupLocation.width;
	            var height = this._itemGroupLocation.height - width;
	            height = height < 0 ? 20 : height; // 确保height不为负
	
	            var r = Math.min(width / 2 - 5, height) / 2;
	            var x = this._itemGroupLocation.x + (text === 'scaleDown' ? width - r : r);
	            var y = this._itemGroupLocation.y + this._itemGroupLocation.height - r;
	
	            var scaleShape = {
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                style: {
	                    x: x,
	                    y: y,
	                    r: r,
	                    color: this.rcOption.handleColor,
	                    text: text === 'scaleDown' ? '-' : '+',
	                    textX: x,
	                    textY: y - 2,
	                    textAlign: 'center',
	                    textBaseline: 'middle',
	                    textPosition: 'specific',
	                    textColor: this.rcOption.fillerColor,
	                    textFont: Math.floor(r) + 'px verdana'
	                },
	                highlightStyle: {
	                    color: zrColor.lift(this.rcOption.handleColor, -0.2),
	                    brushType: 'fill'
	                },
	                clickable: true
	            };
	
	            scaleShape = new CircleShape(scaleShape);
	            scaleShape._roamType = text;
	            scaleShape.onmousedown = this._scaleHandler;
	
	            return scaleShape;
	        },
	
	        _buildBackground: function _buildBackground() {
	            var padding = this.reformCssArray(this.rcOption.padding);
	
	            this.shapeList.push(new RectangleShape({
	                zlevel: this.getZlevelBase(),
	                z: this.getZBase(),
	                hoverable: false,
	                style: {
	                    x: this._itemGroupLocation.x - padding[3],
	                    y: this._itemGroupLocation.y - padding[0],
	                    width: this._itemGroupLocation.width + padding[3] + padding[1],
	                    height: this._itemGroupLocation.height + padding[0] + padding[2],
	                    brushType: this.rcOption.borderWidth === 0 ? 'fill' : 'both',
	                    color: this.rcOption.backgroundColor,
	                    strokeColor: this.rcOption.borderColor,
	                    lineWidth: this.rcOption.borderWidth
	                }
	            }));
	        },
	
	        /**
	         * 根据选项计算漫游控制器实体的位置坐标
	         */
	        _getItemGroupLocation: function _getItemGroupLocation() {
	            var padding = this.reformCssArray(this.rcOption.padding);
	            var width = this.rcOption.width;
	            var height = this.rcOption.height;
	
	            var zrWidth = this.zr.getWidth();
	            var zrHeight = this.zr.getHeight();
	            var x;
	            switch (this.rcOption.x) {
	                case 'center':
	                    x = Math.floor((zrWidth - width) / 2);
	                    break;
	                case 'left':
	                    x = padding[3] + this.rcOption.borderWidth;
	                    break;
	                case 'right':
	                    x = zrWidth - width - padding[1] - padding[3] - this.rcOption.borderWidth * 2;
	                    break;
	                default:
	                    x = this.parsePercent(this.rcOption.x, zrWidth);
	                    break;
	            }
	
	            var y;
	            switch (this.rcOption.y) {
	                case 'top':
	                    y = padding[0] + this.rcOption.borderWidth;
	                    break;
	                case 'bottom':
	                    y = zrHeight - height - padding[0] - padding[2] - this.rcOption.borderWidth * 2;
	                    break;
	                case 'center':
	                    y = Math.floor((zrHeight - height) / 2);
	                    break;
	                default:
	                    y = this.parsePercent(this.rcOption.y, zrHeight);
	                    break;
	            }
	
	            return {
	                x: x,
	                y: y,
	                r: width / 2,
	                width: width,
	                height: height
	            };
	        },
	
	        __drictionMouseDown: function __drictionMouseDown(params) {
	            this.mousedown = true;
	            this._drictionHandlerOn(params);
	        },
	
	        __drictionMouseUp: function __drictionMouseUp(params) {
	            this.mousedown = false;
	            this._drictionHandlerOff(params);
	        },
	
	        __drictionMouseMove: function __drictionMouseMove(params) {
	            if (this.mousedown) {
	                this._drictionHandlerOn(params);
	            }
	        },
	
	        __drictionMouseOut: function __drictionMouseOut(params) {
	            this._drictionHandlerOff(params);
	        },
	
	        _drictionHandlerOn: function _drictionHandlerOn(params) {
	            this._dispatchEvent(params.event, params.target._roamType);
	            clearInterval(this.dircetionTimer);
	            var self = this;
	            this.dircetionTimer = setInterval(function () {
	                self._dispatchEvent(params.event, params.target._roamType);
	            }, 100);
	            zrEvent.stop(params.event);
	        },
	
	        _drictionHandlerOff: function _drictionHandlerOff(params) {
	            clearInterval(this.dircetionTimer);
	        },
	
	        __scaleHandler: function __scaleHandler(params) {
	            this._dispatchEvent(params.event, params.target._roamType);
	            zrEvent.stop(params.event);
	        },
	
	        _dispatchEvent: function _dispatchEvent(event, roamType) {
	            this.messageCenter.dispatch(ecConfig.EVENT.ROAMCONTROLLER, event, {
	                roamType: roamType,
	                mapTypeControl: this.rcOption.mapTypeControl,
	                step: this.rcOption.step
	            }, this.myChart);
	        },
	        /**
	         * 刷新
	         */
	        refresh: function refresh(newOption) {
	            if (newOption) {
	                this.option = newOption || this.option;
	                this.option.roamController = this.reformOption(this.option.roamController);
	                this.rcOption = this.option.roamController;
	            }
	            this.clear();
	            this._buildShape();
	        }
	    };
	
	    zrUtil.inherits(RoamController, Base);
	
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../component\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).define('roamController', RoamController);
	
	    return RoamController;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts地图一般投射算法
	 * modify from GeoMap v0.5.3 https://github.com/x6doooo/GeoMap
	 * 
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
	    var PathShape = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"zrenderjs/shape/Path\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    function toFloat(str) {
	        return parseFloat(str || 0);
	    }
	
	    function getBbox(root) {
	        var svgNode = root.firstChild;
	        // Find the svg node
	        while (!(svgNode.nodeName.toLowerCase() == 'svg' && svgNode.nodeType == 1)) {
	            svgNode = svgNode.nextSibling;
	        }
	
	        var x = toFloat(svgNode.getAttribute('x'));
	        var y = toFloat(svgNode.getAttribute('y'));
	        var width = toFloat(svgNode.getAttribute('width'));
	        var height = toFloat(svgNode.getAttribute('height'));
	        return {
	            left: x,
	            top: y,
	            width: width,
	            height: height
	        };
	    }
	
	    function geoJson2Path(root, transform) {
	        var scale = [transform.scale.x, transform.scale.y];
	        var elList = [];
	        function _getShape(root) {
	            var tagName = root.tagName;
	            if (shapeBuilders[tagName]) {
	                var obj = shapeBuilders[tagName](root, scale);
	
	                if (obj) {
	                    // Common attributes
	                    obj.scale = scale;
	                    obj.properties = {
	                        name: root.getAttribute('name') || ''
	                    };
	                    obj.id = root.id;
	                    extendCommonAttributes(obj, root);
	
	                    elList.push(obj);
	                }
	            }
	            var shapes = root.childNodes;
	            for (var i = 0, len = shapes.length; i < len; i++) {
	                _getShape(shapes[i]);
	            }
	        }
	        _getShape(root);
	        return elList;
	    }
	
	    /**
	     * 平面坐标转经纬度
	     * @param {Array} p
	     */
	    function pos2geo(obj, p) {
	        var point = p instanceof Array ? [p[0] * 1, p[1] * 1] : [p.x * 1, p.y * 1];
	        return [point[0] / obj.scale.x, point[1] / obj.scale.y];
	    }
	
	    /**
	     * 经纬度转平面坐标
	     * @param {Array | Object} p
	     */
	    function geo2pos(obj, p) {
	        var point = p instanceof Array ? [p[0] * 1, p[1] * 1] : [p.x * 1, p.y * 1];
	        return [point[0] * obj.scale.x, point[1] * obj.scale.y];
	    }
	
	    function trim(str) {
	        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	    }
	
	    function extendCommonAttributes(obj, xmlNode) {
	
	        var color = xmlNode.getAttribute('fill');
	        var strokeColor = xmlNode.getAttribute('stroke');
	        var lineWidth = xmlNode.getAttribute('stroke-width');
	        var opacity = xmlNode.getAttribute('opacity');
	
	        if (color && color != 'none') {
	            obj.color = color;
	            if (strokeColor) {
	                obj.brushType = 'both';
	                obj.strokeColor = strokeColor;
	            } else {
	                obj.brushType = 'fill';
	            }
	        } else if (strokeColor && strokeColor != 'none') {
	            obj.strokeColor = strokeColor;
	            obj.brushType = 'stroke';
	        }
	        if (lineWidth && lineWidth != 'none') {
	            obj.lineWidth = parseFloat(lineWidth);
	        }
	        if (opacity && opacity != 'none') {
	            obj.opacity = parseFloat(opacity);
	        }
	    }
	
	    function parsePoints(str) {
	        var list = trim(str).replace(/,/g, ' ').split(/\s+/);
	        var points = [];
	
	        for (var i = 0; i < list.length;) {
	            var x = parseFloat(list[i++]);
	            var y = parseFloat(list[i++]);
	            points.push([x, y]);
	        }
	        return points;
	    }
	
	    // Regular svg shapes
	    var shapeBuilders = {
	        path: function path(xmlNode, scale) {
	            var path = xmlNode.getAttribute('d');
	            var rect = PathShape.prototype.getRect({ path: path });
	            return {
	                shapeType: 'path',
	                path: path,
	                cp: [(rect.x + rect.width / 2) * scale[0], (rect.y + rect.height / 2) * scale[1]]
	            };
	        },
	
	        rect: function rect(xmlNode, scale) {
	            var x = toFloat(xmlNode.getAttribute('x'));
	            var y = toFloat(xmlNode.getAttribute('y'));
	            var width = toFloat(xmlNode.getAttribute('width'));
	            var height = toFloat(xmlNode.getAttribute('height'));
	
	            return {
	                shapeType: 'rectangle',
	                x: x,
	                y: y,
	                width: width,
	                height: height,
	                cp: [(x + width / 2) * scale[0], (y + height / 2) * scale[1]]
	            };
	        },
	
	        line: function line(xmlNode, scale) {
	            var x1 = toFloat(xmlNode.getAttribute('x1'));
	            var y1 = toFloat(xmlNode.getAttribute('y1'));
	            var x2 = toFloat(xmlNode.getAttribute('x2'));
	            var y2 = toFloat(xmlNode.getAttribute('y2'));
	
	            return {
	                shapeType: 'line',
	                xStart: x1,
	                yStart: y1,
	                xEnd: x2,
	                yEnd: y2,
	                cp: [(x1 + x2) * 0.5 * scale[0], (y1 + y2) * 0.5 * scale[1]]
	            };
	        },
	
	        circle: function circle(xmlNode, scale) {
	            var cx = toFloat(xmlNode.getAttribute('cx'));
	            var cy = toFloat(xmlNode.getAttribute('cy'));
	            var r = toFloat(xmlNode.getAttribute('r'));
	
	            return {
	                shapeType: 'circle',
	                x: cx,
	                y: cy,
	                r: r,
	                cp: [cx * scale[0], cy * scale[1]]
	            };
	        },
	
	        ellipse: function ellipse(xmlNode, scale) {
	            var cx = parseFloat(xmlNode.getAttribute('cx') || 0);
	            var cy = parseFloat(xmlNode.getAttribute('cy') || 0);
	            var rx = parseFloat(xmlNode.getAttribute('rx') || 0);
	            var ry = parseFloat(xmlNode.getAttribute('ry') || 0);
	
	            return {
	                shapeType: 'ellipse',
	                x: cx,
	                y: cy,
	                a: rx,
	                b: ry,
	                cp: [cx * scale[0], cy * scale[1]]
	            };
	        },
	
	        polygon: function polygon(xmlNode, scale) {
	            var points = xmlNode.getAttribute('points');
	            var min = [Infinity, Infinity];
	            var max = [-Infinity, -Infinity];
	            if (points) {
	                points = parsePoints(points);
	
	                for (var i = 0; i < points.length; i++) {
	                    var p = points[i];
	
	                    min[0] = Math.min(p[0], min[0]);
	                    min[1] = Math.min(p[1], min[1]);
	
	                    max[0] = Math.max(p[0], max[0]);
	                    max[1] = Math.max(p[1], max[1]);
	                }
	                return {
	                    shapeType: 'polygon',
	                    pointList: points,
	                    cp: [(min[0] + max[0]) / 2 * scale[0], (min[1] + max[1]) / 2 * scale[0]]
	                };
	            }
	        },
	
	        polyline: function polyline(xmlNode, scale) {
	            var obj = shapeBuilders.polygon(xmlNode, scale);
	            return obj;
	        }
	    };
	
	    return {
	        getBbox: getBbox,
	        geoJson2Path: geoJson2Path,
	        pos2geo: pos2geo,
	        geo2pos: geo2pos
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * echarts地图一般投射算法
	 * modify from GeoMap v0.5.3 https://github.com/x6doooo/GeoMap
	 * 
	 * @desc echarts基于Canvas，纯Javascript图表库，提供直观，生动，可交互，可个性化定制的数据统计图表。
	 * @author Kener (@Kener-林峰, kener.linfeng@gmail.com)
	 *
	 */
	'use strict';
	
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    function getBbox(json, specialArea) {
	        specialArea = specialArea || {};
	        if (!json.srcSize) {
	            parseSrcSize(json, specialArea);
	        }
	
	        return json.srcSize;
	    }
	
	    function parseSrcSize(json, specialArea) {
	        specialArea = specialArea || {};
	        convertorParse.xmin = 360;
	        convertorParse.xmax = -360;
	        convertorParse.ymin = 180;
	        convertorParse.ymax = -180;
	
	        var shapes = json.features;
	        var geometries;
	        var shape;
	        for (var i = 0, len = shapes.length; i < len; i++) {
	            shape = shapes[i];
	            if (shape.properties.name && specialArea[shape.properties.name]) {
	                continue;
	            }
	
	            switch (shape.type) {
	                case 'Feature':
	                    convertorParse[shape.geometry.type](shape.geometry.coordinates);
	                    break;
	                case 'GeometryCollection':
	                    geometries = shape.geometries;
	                    for (var j = 0, len2 = geometries.length; j < len2; j++) {
	                        convertorParse[geometries[j].type](geometries[j].coordinates);
	                    }
	                    break;
	            }
	        }
	
	        json.srcSize = {
	            left: convertorParse.xmin.toFixed(4) * 1,
	            top: convertorParse.ymin.toFixed(4) * 1,
	            width: (convertorParse.xmax - convertorParse.xmin).toFixed(4) * 1,
	            height: (convertorParse.ymax - convertorParse.ymin).toFixed(4) * 1
	        };
	
	        return json;
	    }
	
	    var convertor = {
	        //调整俄罗斯东部到地图右侧与俄罗斯相连
	        formatPoint: function formatPoint(p) {
	            return [(p[0] < -168.5 && p[1] > 63.8 ? p[0] + 360 : p[0]) + 168.5, 90 - p[1]];
	        },
	        makePoint: function makePoint(p) {
	            var self = this;
	            var point = self.formatPoint(p);
	            // for cp
	            if (self._bbox.xmin > p[0]) {
	                self._bbox.xmin = p[0];
	            }
	            if (self._bbox.xmax < p[0]) {
	                self._bbox.xmax = p[0];
	            }
	            if (self._bbox.ymin > p[1]) {
	                self._bbox.ymin = p[1];
	            }
	            if (self._bbox.ymax < p[1]) {
	                self._bbox.ymax = p[1];
	            }
	            var x = (point[0] - convertor.offset.x) * convertor.scale.x + convertor.offset.left;
	            var y = (point[1] - convertor.offset.y) * convertor.scale.y + convertor.offset.top;
	            return [x, y];
	        },
	        Point: function Point(coordinates) {
	            coordinates = this.makePoint(coordinates);
	            return coordinates.join(',');
	        },
	        LineString: function LineString(coordinates) {
	            var str = '';
	            var point;
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                point = convertor.makePoint(coordinates[i]);
	                if (i === 0) {
	                    str = 'M' + point.join(',');
	                } else {
	                    str = str + 'L' + point.join(',');
	                }
	            }
	            return str;
	        },
	        Polygon: function Polygon(coordinates) {
	            var str = '';
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                str = str + convertor.LineString(coordinates[i]) + 'z';
	            }
	            return str;
	        },
	        MultiPoint: function MultiPoint(coordinates) {
	            var arr = [];
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                arr.push(convertor.Point(coordinates[i]));
	            }
	            return arr;
	        },
	        MultiLineString: function MultiLineString(coordinates) {
	            var str = '';
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                str += convertor.LineString(coordinates[i]);
	            }
	            return str;
	        },
	        MultiPolygon: function MultiPolygon(coordinates) {
	            var str = '';
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                str += convertor.Polygon(coordinates[i]);
	            }
	            return str;
	        }
	    };
	
	    var convertorParse = {
	        formatPoint: convertor.formatPoint,
	
	        makePoint: function makePoint(p) {
	            var self = this;
	            var point = self.formatPoint(p);
	            var x = point[0];
	            var y = point[1];
	            if (self.xmin > x) {
	                self.xmin = x;
	            }
	            if (self.xmax < x) {
	                self.xmax = x;
	            }
	            if (self.ymin > y) {
	                self.ymin = y;
	            }
	            if (self.ymax < y) {
	                self.ymax = y;
	            }
	        },
	        Point: function Point(coordinates) {
	            this.makePoint(coordinates);
	        },
	        LineString: function LineString(coordinates) {
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                this.makePoint(coordinates[i]);
	            }
	        },
	        Polygon: function Polygon(coordinates) {
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                this.LineString(coordinates[i]);
	            }
	        },
	        MultiPoint: function MultiPoint(coordinates) {
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                this.Point(coordinates[i]);
	            }
	        },
	        MultiLineString: function MultiLineString(coordinates) {
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                this.LineString(coordinates[i]);
	            }
	        },
	        MultiPolygon: function MultiPolygon(coordinates) {
	            for (var i = 0, len = coordinates.length; i < len; i++) {
	                this.Polygon(coordinates[i]);
	            }
	        }
	    };
	
	    function geoJson2Path(json, transform, specialArea) {
	        specialArea = specialArea || {};
	        convertor.scale = null;
	        convertor.offset = null;
	
	        if (!json.srcSize) {
	            parseSrcSize(json, specialArea);
	        }
	
	        transform.offset = {
	            x: json.srcSize.left,
	            y: json.srcSize.top,
	            left: transform.OffsetLeft || 0,
	            top: transform.OffsetTop || 0
	        };
	
	        convertor.scale = transform.scale;
	        convertor.offset = transform.offset;
	
	        var shapes = json.features;
	        var geometries;
	        var pathArray = [];
	        var val;
	        var shape;
	        for (var i = 0, len = shapes.length; i < len; i++) {
	            shape = shapes[i];
	            if (shape.properties.name && specialArea[shape.properties.name]) {
	                // 忽略specialArea
	                continue;
	            }
	            if (shape.type == 'Feature') {
	                pushApath(shape.geometry, shape);
	            } else if (shape.type == 'GeometryCollection') {
	                geometries = shape.geometries;
	                for (var j = 0, len2 = geometries.length; j < len2; j++) {
	                    val = geometries[j];
	                    pushApath(val, val);
	                }
	            }
	        }
	
	        var shapeType;
	        var shapeCoordinates;
	        var str;
	        function pushApath(gm, shape) {
	            shapeType = gm.type;
	            shapeCoordinates = gm.coordinates;
	            convertor._bbox = {
	                xmin: 360,
	                xmax: -360,
	                ymin: 180,
	                ymax: -180
	            };
	            str = convertor[shapeType](shapeCoordinates);
	            pathArray.push({
	                // type: shapeType,
	                path: str,
	                cp: shape.properties.cp ? convertor.makePoint(shape.properties.cp) : convertor.makePoint([(convertor._bbox.xmin + convertor._bbox.xmax) / 2, (convertor._bbox.ymin + convertor._bbox.ymax) / 2]),
	                properties: shape.properties,
	                id: shape.id
	            });
	        }
	
	        return pathArray;
	    }
	
	    /**
	     * 平面坐标转经纬度
	     * @param {Array} p
	     */
	    function pos2geo(obj, p) {
	        var x;
	        var y;
	        if (p instanceof Array) {
	            x = p[0] * 1;
	            y = p[1] * 1;
	        } else {
	            x = p.x * 1;
	            y = p.y * 1;
	        }
	
	        x = x / obj.scale.x + obj.offset.x - 168.5;
	        x = x > 180 ? x - 360 : x;
	        y = 90 - (y / obj.scale.y + obj.offset.y);
	        return [x, y];
	    }
	
	    /**
	     * 经纬度转平面坐标
	     * @param {Array | Object} p
	     */
	    function geo2pos(obj, p) {
	        convertor.offset = obj.offset;
	        convertor.scale = obj.scale;
	        return p instanceof Array ? convertor.makePoint([p[0] * 1, p[1] * 1]) : convertor.makePoint([p.x * 1, p.y * 1]);
	    }
	
	    return {
	        getBbox: getBbox,
	        geoJson2Path: geoJson2Path,
	        pos2geo: pos2geo,
	        geo2pos: geo2pos
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjE5YTE3YTQxNTg2NDExNmY5M2QiLCJ3ZWJwYWNrOi8vL0U6L1dvcmtzcGFjZS9naXRodWIvZWNoYXJ0cy14LWV4YW1wbGVzMi9zcmMvYXBwLmpzIiwid2VicGFjazovLy9FOi9Xb3Jrc3BhY2UvZ2l0aHViL2VjaGFydHMteC1leGFtcGxlczIvfi9lY2hhcnRzL2NvbXBvbmVudC9iYXNlLmpzIiwid2VicGFjazovLy9FOi9Xb3Jrc3BhY2UvZ2l0aHViL2VjaGFydHMteC1leGFtcGxlczIvfi9lY2hhcnRzL2NoYXJ0L21hcC5qcyIsIndlYnBhY2s6Ly8vRTovV29ya3NwYWNlL2dpdGh1Yi9lY2hhcnRzLXgtZXhhbXBsZXMyL34vZWNoYXJ0cy9jb21wb25lbnQvZGF0YVJhbmdlLmpzIiwid2VicGFjazovLy9FOi9Xb3Jrc3BhY2UvZ2l0aHViL2VjaGFydHMteC1leGFtcGxlczIvfi9lY2hhcnRzL2NvbXBvbmVudC9yb2FtQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vRTovV29ya3NwYWNlL2dpdGh1Yi9lY2hhcnRzLXgtZXhhbXBsZXMyL34vZWNoYXJ0cy91dGlsL3Byb2plY3Rpb24vc3ZnLmpzIiwid2VicGFjazovLy9FOi9Xb3Jrc3BhY2UvZ2l0aHViL2VjaGFydHMteC1leGFtcGxlczIvfi9lY2hhcnRzL3V0aWwvcHJvamVjdGlvbi9ub3JtYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OzsyQ0N0Q29CLDJJQUFpQjs7OztxQkFDOUIsK0lBQXFCOztxQkFDckIsR0FBbUI7O3FCQUNuQiw2SUFB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LEtBQUssRUFBRSxVQUFVLEVBQUMsRUFDdEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUMsRUFDbkMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDL0IsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDdEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDckMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDdkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFDL0IsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDaEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDL0IsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDaEMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDckMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDdEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsRUFDbkMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDbkMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDaEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDbkMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbkMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDdEMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDbEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUMsRUFDdkMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDbkMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDcEMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDdkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDdEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDL0IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsRUFDckMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsRUFDL0IsRUFBQyxJQUFJLEVBQUUsYUFBYSxF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SSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksWUFBWSxFQUFFO0FBQzdDLGtCQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzdCLGtCQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNCLHFCQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs7QUFFdkMsc0JBQUMsR0FBRyxDQUFDLENBQUM7QUFDTix5QkFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDOUIsTUFDSSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTs7QUFFMUMsc0JBQUMsR0FBRyxDQUFDLENBQUM7QUFDTix5QkFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDaEM7QUFDRCxxQkFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QixxQkFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEMscUJBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLHFCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLHFCQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O0FBRTFDLHFCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FB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TSxDQUFDO0FBQzlCLGtCQUFTLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDNUIsZ0JBQU8sQ0FBQyxZQUFZLEtBQUssR0FDaEIsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQ3pDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEQ7O0FBRUQsWUFBTztBQUNILGdCQUFPLEVBQUUsT0FBTztBQUNoQixxQkFBWSxFQUFFLFlBQVk7QUFDMUIsZ0JBQU8sRUFBRSxPQUFPO0FBQ2hCLGdCQUFPLEVBQUUsT0FBTztNQUNuQixDQUFDO0VBQ0wsc0pBQUMsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjE5YTE3YTQxNTg2NDExNmY5M2RcbiAqKi8iLCJpbXBvcnQgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2VjaGFydHMnO1xuaW1wb3J0ICdlY2hhcnRzLXgvZWNoYXJ0cy14JztcbmltcG9ydCAnZWNoYXJ0cy9jaGFydC9tYXAnO1xuaW1wb3J0ICdlY2hhcnRzL2NoYXJ0L2Jhcic7XG5pbXBvcnQgJ2VjaGFydHMteC9jaGFydC9tYXAzZCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmZ1bmN0aW9uIHNldE9wdGlvbihjaGFydCkge1xuICAgIGNoYXJ0LnNldE9wdGlvbih7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0ZXh0OiAnV29ybGQgUG9wdWxhdGlvbiAoMjAxMCknLFxuICAgICAgICAgICAgc3VidGV4dDogJ0RhdGEgZnJvbSBVbml0ZWQgTmF0aW9ucywgVG90YWwgcG9wdWxhdGlvbiwgYm90aCBzZXhlcyBjb21iaW5lZCwgYXMgb2YgMSBKdWx5ICh0aG91c2FuZHMpJyxcbiAgICAgICAgICAgIHN1Ymxpbms6ICdodHRwOi8vZXNhLnVuLm9yZy93cHAvRXhjZWwtRGF0YS9wb3B1bGF0aW9uLmh0bScsXG4gICAgICAgICAgICB4OiAnY2VudGVyJyxcbiAgICAgICAgICAgIHk6ICd0b3AnLFxuICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhUmFuZ2U6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMTAwMDAwMCxcbiAgICAgICAgICAgIHRleHQ6IFsnSGlnaCcsICdMb3cnXSxcbiAgICAgICAgICAgIHJlYWx0aW1lOiBmYWxzZSxcbiAgICAgICAgICAgIGNhbGN1bGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogWydvcmFuZ2VyZWQnLCAneWVsbG93JywgJ2xpZ2h0c2t5Ymx1ZSddXG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdXb3JsZCBQb3B1bGF0aW9uJyxcbiAgICAgICAgICAgIHR5cGU6ICdtYXAzZCcsXG5cbiAgICAgICAgICAgIG1hcFR5cGU6ICd3b3JsZCcsXG5cbiAgICAgICAgICAgIGJhc2VMYXllcjoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNkOWRjZjcnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICdBZmdoYW5pc3RhbicsIHZhbHVlOiAyODM5Ny44MTJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQW5nb2xhJywgdmFsdWU6IDE5NTQ5LjEyNH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdBbGJhbmlhJywgdmFsdWU6IDMxNTAuMTQzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJywgdmFsdWU6IDg0NDEuNTM3fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0FyZ2VudGluYScsIHZhbHVlOiA0MDM3NC4yMjR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQXJtZW5pYScsIHZhbHVlOiAyOTYzLjQ5Nn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdGcmVuY2ggU291dGhlcm4gYW5kIEFudGFyY3RpYyBMYW5kcycsIHZhbHVlOiAyNjguMDY1fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0F1c3RyYWxpYScsIHZhbHVlOiAyMjQwNC40ODh9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQXVzdHJpYScsIHZhbHVlOiA4NDAxLjkyNH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdBemVyYmFpamFuJywgdmFsdWU6IDkwOTQuNzE4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0J1cnVuZGknLCB2YWx1ZTogOTIzMi43NTN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQmVsZ2l1bScsIHZhbHVlOiAxMDk0MS4yODh9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQmVuaW4nLCB2YWx1ZTogOTUwOS43OTh9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQnVya2luYSBGYXNvJywgdmFsdWU6IDE1NTQwLjI4NH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdCYW5nbGFkZXNoJywgdmFsdWU6IDE1MTEyNS40NzV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQnVsZ2FyaWEnLCB2YWx1ZTogNzM4OS4xNzV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVGhlIEJhaGFtYXMnLCB2YWx1ZTogNjY0MDIuMzE2fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLCB2YWx1ZTogMzg0NS45Mjl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQmVsYXJ1cycsIHZhbHVlOiA5NDkxLjA3fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0JlbGl6ZScsIHZhbHVlOiAzMDguNTk1fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0Jlcm11ZGEnLCB2YWx1ZTogNjQuOTUxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0JvbGl2aWEnLCB2YWx1ZTogNzE2LjkzOX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdCcmF6aWwnLCB2YWx1ZTogMTk1MjEwLjE1NH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdCcnVuZWknLCB2YWx1ZTogMjcuMjIzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0JodXRhbicsIHZhbHVlOiA3MTYuOTM5fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0JvdHN3YW5hJywgdmFsdWU6IDE5NjkuMzQxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsIHZhbHVlOiA0MzQ5LjkyMX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdDYW5hZGEnLCB2YWx1ZTogMzQxMjYuMjR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU3dpdHplcmxhbmQnLCB2YWx1ZTogNzgzMC41MzR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQ2hpbGUnLCB2YWx1ZTogMTcxNTAuNzZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQ2hpbmEnLCB2YWx1ZTogMTM1OTgyMS40NjV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnSXZvcnkgQ29hc3QnLCB2YWx1ZTogNjA1MDguOTc4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0NhbWVyb29uJywgdmFsdWU6IDIwNjI0LjM0M30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSBDb25nbycsIHZhbHVlOiA2MjE5MS4xNjF9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUmVwdWJsaWMgb2YgdGhlIENvbmdvJywgdmFsdWU6IDM1NzMuMDI0fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0NvbG9tYmlhJywgdmFsdWU6IDQ2NDQ0Ljc5OH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdDb3N0YSBSaWNhJywgdmFsdWU6IDQ2NjkuNjg1fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0N1YmEnLCB2YWx1ZTogMTEyODEuNzY4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ05vcnRoZXJuIEN5cHJ1cycsIHZhbHVlOiAxLjQ2OH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdDeXBydXMnLCB2YWx1ZTogMTEwMy42ODV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQ3plY2ggUmVwdWJsaWMnLCB2YWx1ZTogMTA1NTMuNzAxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0dlcm1hbnknLCB2YWx1ZTogODMwMTcuNDA0fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0RqaWJvdXRpJywgdmFsdWU6IDgzNC4wMzZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnRGVubWFyaycsIHZhbHVlOiA1NTUwLjk1OX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdEb21pbmljYW4gUmVwdWJsaWMnLCB2YWx1ZTogMTAwMTYuNzk3fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0FsZ2VyaWEnLCB2YWx1ZTogMzcwNjIuODJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnRWN1YWRvcicsIHZhbHVlOiAxNTAwMS4wNzJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnRWd5cHQnLCB2YWx1ZTogNzgwNzUuNzA1fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0VyaXRyZWEnLCB2YWx1ZTogNTc0MS4xNTl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU3BhaW4nLCB2YWx1ZTogNDYxODIuMDM4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0VzdG9uaWEnLCB2YWx1ZTogMTI5OC41MzN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnRXRoaW9waWEnLCB2YWx1ZTogODcwOTUuMjgxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0ZpbmxhbmQnLCB2YWx1ZTogNTM2Ny42OTN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnRmlqaScsIHZhbHVlOiA4NjAuNTU5fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0ZhbGtsYW5kIElzbGFuZHMnLCB2YWx1ZTogNDkuNTgxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0ZyYW5jZScsIHZhbHVlOiA2MzIzMC44NjZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnR2Fib24nLCB2YWx1ZTogMTU1Ni4yMjJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVW5pdGVkIEtpbmdkb20nLCB2YWx1ZTogNjIwNjYuMzV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnR2VvcmdpYScsIHZhbHVlOiA0Mzg4LjY3NH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdHaGFuYScsIHZhbHVlOiAyNDI2Mi45MDF9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnR3VpbmVhJywgdmFsdWU6IDEwODc2LjAzM30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdHYW1iaWEnLCB2YWx1ZTogMTY4MC42NH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdHdWluZWEgQmlzc2F1JywgdmFsdWU6IDEwODc2LjAzM30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdFcXVhdG9yaWFsIEd1aW5lYScsIHZhbHVlOiA2OTYuMTY3fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0dyZWVjZScsIHZhbHVlOiAxMTEwOS45OTl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnR3JlZW5sYW5kJywgdmFsdWU6IDU2LjU0Nn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdHdWF0ZW1hbGEnLCB2YWx1ZTogMTQzNDEuNTc2fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0ZyZW5jaCBHdWlhbmEnLCB2YWx1ZTogMjMxLjE2OX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdHdXlhbmEnLCB2YWx1ZTogNzg2LjEyNn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdIb25kdXJhcycsIHZhbHVlOiA3NjIxLjIwNH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdDcm9hdGlhJywgdmFsdWU6IDQzMzguMDI3fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0hhaXRpJywgdmFsdWU6IDk4OTYuNH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdIdW5nYXJ5JywgdmFsdWU6IDEwMDE0LjYzM30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdJbmRvbmVzaWEnLCB2YWx1ZTogMjQwNjc2LjQ4NX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdJbmRpYScsIHZhbHVlOiAxMjA1NjI0LjY0OH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdJcmVsYW5kJywgdmFsdWU6IDQ0NjcuNTYxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0lyYW4nLCB2YWx1ZTogMjQwNjc2LjQ4NX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdJcmFxJywgdmFsdWU6IDMwOTYyLjM4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0ljZWxhbmQnLCB2YWx1ZTogMzE4LjA0Mn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdJc3JhZWwnLCB2YWx1ZTogNzQyMC4zNjh9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnSXRhbHknLCB2YWx1ZTogNjA1MDguOTc4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0phbWFpY2EnLCB2YWx1ZTogMjc0MS40ODV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnSm9yZGFuJywgdmFsdWU6IDY0NTQuNTU0fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0phcGFuJywgdmFsdWU6IDEyNzM1Mi44MzN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnS2F6YWtoc3RhbicsIHZhbHVlOiAxNTkyMS4xMjd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnS2VueWEnLCB2YWx1ZTogNDA5MDkuMTk0fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0t5cmd5enN0YW4nLCB2YWx1ZTogNTMzNC4yMjN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQ2FtYm9kaWEnLCB2YWx1ZTogMTQzNjQuOTMxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1NvdXRoIEtvcmVhJywgdmFsdWU6IDUxNDUyLjM1Mn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdLb3Nvdm8nLCB2YWx1ZTogOTcuNzQzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0t1d2FpdCcsIHZhbHVlOiAyOTkxLjU4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0xhb3MnLCB2YWx1ZTogNjM5NS43MTN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTGViYW5vbicsIHZhbHVlOiA0MzQxLjA5Mn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdMaWJlcmlhJywgdmFsdWU6IDM5NTcuOTl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTGlieWEnLCB2YWx1ZTogNjA0MC42MTJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU3JpIExhbmthJywgdmFsdWU6IDIwNzU4Ljc3OX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdMZXNvdGhvJywgdmFsdWU6IDIwMDguOTIxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0xpdGh1YW5pYScsIHZhbHVlOiAzMDY4LjQ1N30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdMdXhlbWJvdXJnJywgdmFsdWU6IDUwNy44ODV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTGF0dmlhJywgdmFsdWU6IDIwOTAuNTE5fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ01vcm9jY28nLCB2YWx1ZTogMzE2NDIuMzZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTW9sZG92YScsIHZhbHVlOiAxMDMuNjE5fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ01hZGFnYXNjYXInLCB2YWx1ZTogMjEwNzkuNTMyfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ01leGljbycsIHZhbHVlOiAxMTc4ODYuNDA0fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ01hY2Vkb25pYScsIHZhbHVlOiA1MDcuODg1fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ01hbGknLCB2YWx1ZTogMTM5ODUuOTYxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ015YW5tYXInLCB2YWx1ZTogNTE5MzEuMjMxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ01vbnRlbmVncm8nLCB2YWx1ZTogNjIwLjA3OH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdNb25nb2xpYScsIHZhbHVlOiAyNzEyLjczOH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdNb3phbWJpcXVlJywgdmFsdWU6IDIzOTY3LjI2NX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdNYXVyaXRhbmlhJywgdmFsdWU6IDM2MDkuNDJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTWFsYXdpJywgdmFsdWU6IDE1MDEzLjY5NH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdNYWxheXNpYScsIHZhbHVlOiAyODI3NS44MzV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTmFtaWJpYScsIHZhbHVlOiAyMTc4Ljk2N30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdOZXcgQ2FsZWRvbmlhJywgdmFsdWU6IDI0Ni4zNzl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTmlnZXInLCB2YWx1ZTogMTU4OTMuNzQ2fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ05pZ2VyaWEnLCB2YWx1ZTogMTU5NzA3Ljc4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ05pY2FyYWd1YScsIHZhbHVlOiA1ODIyLjIwOX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdOZXRoZXJsYW5kcycsIHZhbHVlOiAxNjYxNS4yNDN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnTm9yd2F5JywgdmFsdWU6IDQ4OTEuMjUxfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ05lcGFsJywgdmFsdWU6IDI2ODQ2LjAxNn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdOZXcgWmVhbGFuZCcsIHZhbHVlOiA0MzY4LjEzNn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdPbWFuJywgdmFsdWU6IDI4MDIuNzY4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1Bha2lzdGFuJywgdmFsdWU6IDE3MzE0OS4zMDZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUGFuYW1hJywgdmFsdWU6IDM2NzguMTI4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1BlcnUnLCB2YWx1ZTogMjkyNjIuODN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUGhpbGlwcGluZXMnLCB2YWx1ZTogOTM0NDQuMzIyfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1BhcHVhIE5ldyBHdWluZWEnLCB2YWx1ZTogNjg1OC45NDV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUG9sYW5kJywgdmFsdWU6IDM4MTk4Ljc1NH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdQdWVydG8gUmljbycsIHZhbHVlOiAzNzA5LjY3MX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdOb3J0aCBLb3JlYScsIHZhbHVlOiAxLjQ2OH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdQb3J0dWdhbCcsIHZhbHVlOiAxMDU4OS43OTJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUGFyYWd1YXknLCB2YWx1ZTogNjQ1OS43MjF9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUWF0YXInLCB2YWx1ZTogMTc0OS43MTN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUm9tYW5pYScsIHZhbHVlOiAyMTg2MS40NzZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnUnVzc2lhJywgdmFsdWU6IDIxODYxLjQ3Nn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdSd2FuZGEnLCB2YWx1ZTogMTA4MzYuNzMyfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1dlc3Rlcm4gU2FoYXJhJywgdmFsdWU6IDUxNC42NDh9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU2F1ZGkgQXJhYmlhJywgdmFsdWU6IDI3MjU4LjM4N30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdTdWRhbicsIHZhbHVlOiAzNTY1Mi4wMDJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU291dGggU3VkYW4nLCB2YWx1ZTogOTk0MC45Mjl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU2VuZWdhbCcsIHZhbHVlOiAxMjk1MC41NjR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU29sb21vbiBJc2xhbmRzJywgdmFsdWU6IDUyNi40NDd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU2llcnJhIExlb25lJywgdmFsdWU6IDU3NTEuOTc2fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ0VsIFNhbHZhZG9yJywgdmFsdWU6IDYyMTguMTk1fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1NvbWFsaWxhbmQnLCB2YWx1ZTogOTYzNi4xNzN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU29tYWxpYScsIHZhbHVlOiA5NjM2LjE3M30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdSZXB1YmxpYyBvZiBTZXJiaWEnLCB2YWx1ZTogMzU3My4wMjR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU3VyaW5hbWUnLCB2YWx1ZTogNTI0Ljk2fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1Nsb3Zha2lhJywgdmFsdWU6IDU0MzMuNDM3fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1Nsb3ZlbmlhJywgdmFsdWU6IDIwNTQuMjMyfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1N3ZWRlbicsIHZhbHVlOiA5MzgyLjI5N30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdTd2F6aWxhbmQnLCB2YWx1ZTogMTE5My4xNDh9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnU3lyaWEnLCB2YWx1ZTogNzgzMC41MzR9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnQ2hhZCcsIHZhbHVlOiAxMTcyMC43ODF9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVG9nbycsIHZhbHVlOiA2MzA2LjAxNH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdUaGFpbGFuZCcsIHZhbHVlOiA2NjQwMi4zMTZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVGFqaWtpc3RhbicsIHZhbHVlOiA3NjI3LjMyNn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdUdXJrbWVuaXN0YW4nLCB2YWx1ZTogNTA0MS45OTV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnRWFzdCBUaW1vcicsIHZhbHVlOiAxMDAxNi43OTd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsIHZhbHVlOiAxMzI4LjA5NX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdUdW5pc2lhJywgdmFsdWU6IDEwNjMxLjgzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1R1cmtleScsIHZhbHVlOiA3MjEzNy41NDZ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVW5pdGVkIFJlcHVibGljIG9mIFRhbnphbmlhJywgdmFsdWU6IDQ0OTczLjMzfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1VnYW5kYScsIHZhbHVlOiAzMzk4Ny4yMTN9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVWtyYWluZScsIHZhbHVlOiA0NjA1MC4yMn0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdVcnVndWF5JywgdmFsdWU6IDMzNzEuOTgyfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYScsIHZhbHVlOiAzMTIyNDcuMTE2fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1V6YmVraXN0YW4nLCB2YWx1ZTogMjc3NjkuMjd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVmVuZXp1ZWxhJywgdmFsdWU6IDIzNi4yOTl9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVmlldG5hbScsIHZhbHVlOiA4OTA0Ny4zOTd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnVmFudWF0dScsIHZhbHVlOiAyMzYuMjk5fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1dlc3QgQmFuaycsIHZhbHVlOiAxMy41NjV9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnWWVtZW4nLCB2YWx1ZTogMjI3NjMuMDA4fSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ1NvdXRoIEFmcmljYScsIHZhbHVlOiA1MTQ1Mi4zNTJ9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnWmFtYmlhJywgdmFsdWU6IDEzMjE2Ljk4NX0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdaaW1iYWJ3ZScsIHZhbHVlOiAxMzA3Ni45Nzh9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1dXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZnVuY3Rpb24gcmVzaXplKCkge1xuICAgICAgICAkKCcjbWFpbicpLmhlaWdodCgkKHdpbmRvdykuaGVpZ2h0KCkgLSAkKCcjaGVhZGVyJykuaGVpZ2h0KCkpO1xuICAgIH1cblxuICAgICQod2luZG93KS5yZXNpemUocmVzaXplKTtcbiAgICByZXNpemUoKTtcblxuICAgIHZhciBjaGFydCA9IGVjaGFydHMuaW5pdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKSk7XG5cbiAgICBzZXRPcHRpb24oY2hhcnQpO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoYXJ0LnJlc2l6ZSgpO1xuICAgIH0pO1xufVxuXG5pbml0KCk7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L1dvcmtzcGFjZS9naXRodWIvZWNoYXJ0cy14LWV4YW1wbGVzMi9zcmMvYXBwLmpzXG4gKiovIiwiLyoqXHJcbiAqIGVjaGFydHPnu4Tku7bln7rnsbtcclxuICpcclxuICogQGRlc2MgZWNoYXJ0c+WfuuS6jkNhbnZhc++8jOe6r0phdmFzY3JpcHTlm77ooajlupPvvIzmj5Dkvpvnm7Top4LvvIznlJ/liqjvvIzlj6/kuqTkupLvvIzlj6/kuKrmgKfljJblrprliLbnmoTmlbDmja7nu5/orqHlm77ooajjgIJcclxuICogQGF1dGhvciBLZW5lciAoQEtlbmVyLeael+WzsCwga2VuZXIubGluZmVuZ0BnbWFpbC5jb20pXHJcbiAqXHJcbiAqL1xyXG5kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUpIHtcclxuICAgIHZhciBlY0NvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xyXG4gICAgdmFyIGVjRGF0YSA9IHJlcXVpcmUoJy4uL3V0aWwvZWNEYXRhJyk7XHJcbiAgICB2YXIgZWNRdWVyeSA9IHJlcXVpcmUoJy4uL3V0aWwvZWNRdWVyeScpO1xyXG4gICAgdmFyIG51bWJlciA9IHJlcXVpcmUoJy4uL3V0aWwvbnVtYmVyJyk7XHJcbiAgICB2YXIgenJVdGlsID0gcmVxdWlyZSgnenJlbmRlcmpzL3Rvb2wvdXRpbCcpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBCYXNlKGVjVGhlbWUsIG1lc3NhZ2VDZW50ZXIsIHpyLCBvcHRpb24sIG15Q2hhcnQpe1xyXG4gICAgICAgIHRoaXMuZWNUaGVtZSA9IGVjVGhlbWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQ2VudGVyID0gbWVzc2FnZUNlbnRlcjtcclxuICAgICAgICB0aGlzLnpyID16cjtcclxuICAgICAgICB0aGlzLm9wdGlvbiA9IG9wdGlvbjtcclxuICAgICAgICB0aGlzLnNlcmllcyA9IG9wdGlvbi5zZXJpZXM7XHJcbiAgICAgICAgdGhpcy5teUNoYXJ0ID0gbXlDaGFydDtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG15Q2hhcnQuY29tcG9uZW50O1xyXG5cclxuICAgICAgICB0aGlzLnNoYXBlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0TGlzdCA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBzZWxmLl9vbmxlZ2VuZGhvdmVybGluayA9IGZ1bmN0aW9uKHBhcmFtKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmxlZ2VuZEhvdmVyTGluaykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldE5hbWUgPSBwYXJhbS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzZWxmLnNoYXBlTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBzZWxmLnR5cGUgPT0gZWNDb25maWcuQ0hBUlRfVFlQRV9QSUVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc2VsZi50eXBlID09IGVjQ29uZmlnLkNIQVJUX1RZUEVfRlVOTkVMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZWNEYXRhLmdldChzZWxmLnNoYXBlTGlzdFtpXSwgJ25hbWUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IChlY0RhdGEuZ2V0KHNlbGYuc2hhcGVMaXN0W2ldLCAnc2VyaWVzJykgfHwge30pLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT0gdGFyZ2V0TmFtZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIXNlbGYuc2hhcGVMaXN0W2ldLmludmlzaWJsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgIXNlbGYuc2hhcGVMaXN0W2ldLl9fYW5pbWF0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuenIuYWRkSG92ZXJTaGFwZShzZWxmLnNoYXBlTGlzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXNzYWdlQ2VudGVyICYmIG1lc3NhZ2VDZW50ZXIuYmluZChcclxuICAgICAgICAgICAgZWNDb25maWcuRVZFTlQuTEVHRU5EX0hPVkVSTElOSywgdGhpcy5fb25sZWdlbmRob3ZlcmxpbmtcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Z+657G75pa55rOVXHJcbiAgICAgKi9cclxuICAgIEJhc2UucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGNhbnZhc1N1cHBvcnRlZDogcmVxdWlyZSgnenJlbmRlcmpzL3Rvb2wvZW52JykuY2FudmFzU3VwcG9ydGVkLFxyXG4gICAgICAgIF9nZXRaIDogZnVuY3Rpb24oeldoYXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNbeldoYXRdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3pXaGF0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb3B0ID0gdGhpcy5lY1RoZW1lW3RoaXMudHlwZV07XHJcbiAgICAgICAgICAgIGlmIChvcHQgJiYgb3B0W3pXaGF0XSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0W3pXaGF0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHQgPSBlY0NvbmZpZ1t0aGlzLnR5cGVdO1xyXG4gICAgICAgICAgICBpZiAob3B0ICYmIG9wdFt6V2hhdF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdFt6V2hhdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6I635Y+WemxldmVs5Z+65pWw6YWN572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0WmxldmVsQmFzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0WignemxldmVsJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDojrflj5Z65Z+65pWw6YWN572uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0WkJhc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0WigneicpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWPguaVsOS/ruatoybpu5jorqTlgLzotYvlgLxcclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0IOWPguaVsFxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSDkv67mraPlkI7nmoTlj4LmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICByZWZvcm1PcHRpb246IGZ1bmN0aW9uIChvcHQpIHtcclxuICAgICAgICAgICAgLy8g6buY6K6k6YWN572u6aG55Yqo5oCB5aSa57qn5ZCI5bm277yM5L6d6LWW5Yqg6L2955qE57uE5Lu26YCJ6aG55pyq6KKrbWVyZ2XliLBlY1RoZW1l6YeM77yM6ZyA6KaB5LuOY29uZmln6YeM5Y+WXHJcbiAgICAgICAgICAgIG9wdCA9IHpyVXRpbC5tZXJnZShcclxuICAgICAgICAgICAgICAgICAgICAgICB6clV0aWwubWVyZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdCB8fCB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgenJVdGlsLmNsb25lKHRoaXMuZWNUaGVtZVt0aGlzLnR5cGVdIHx8IHt9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgenJVdGlsLmNsb25lKGVjQ29uZmlnW3RoaXMudHlwZV0gfHwge30pXHJcbiAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnogPSBvcHQuejtcclxuICAgICAgICAgICAgdGhpcy56bGV2ZWwgPSBvcHQuemxldmVsO1xyXG4gICAgICAgICAgICByZXR1cm4gb3B0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogY3Nz57G75bGe5oCn5pWw57uE6KGl5YWo77yM5aaCcGFkZGluZ++8jG1hcmdpbuetiX5cclxuICAgICAgICAgKi9cclxuICAgICAgICByZWZvcm1Dc3NBcnJheTogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgaWYgKHAgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwLmxlbmd0aCArICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3BbMF0sIHBbMV0sIHBbMl0sIHBbMV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3BbMF0sIHBbMV0sIHBbMF0sIHBbMV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3BbMF0sIHBbMF0sIHBbMF0sIHBbMF1dO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzAnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzAsIDAsIDAsIDBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtwLCBwLCBwLCBwXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2V0U2hhcGVCeUlkOiBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuc2hhcGVMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcGVMaXN0W2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoYXBlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPluiHquWumuS5ieWSjOm7mOiupOmFjee9ruWQiOW5tuWQjueahOWtl+S9k+iuvue9rlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEZvbnQ6IGZ1bmN0aW9uICh0ZXh0U3R5bGUpIHtcclxuICAgICAgICAgICAgdmFyIGZpbmFsVGV4dFN0eWxlID0gdGhpcy5nZXRUZXh0U3R5bGUoXHJcbiAgICAgICAgICAgICAgICB6clV0aWwuY2xvbmUodGV4dFN0eWxlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmluYWxUZXh0U3R5bGUuZm9udFN0eWxlICsgJyAnXHJcbiAgICAgICAgICAgICAgICAgICArIGZpbmFsVGV4dFN0eWxlLmZvbnRXZWlnaHQgKyAnICdcclxuICAgICAgICAgICAgICAgICAgICsgZmluYWxUZXh0U3R5bGUuZm9udFNpemUgKyAncHggJ1xyXG4gICAgICAgICAgICAgICAgICAgKyBmaW5hbFRleHRTdHlsZS5mb250RmFtaWx5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPlue7n+S4gOS4u+mimOWtl+S9k+agt+W8j1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFRleHRTdHlsZTogZnVuY3Rpb24odGFyZ2V0U3R5bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHpyVXRpbC5tZXJnZShcclxuICAgICAgICAgICAgICAgICAgICAgICB6clV0aWwubWVyZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFN0eWxlIHx8IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVjVGhlbWUudGV4dFN0eWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICBlY0NvbmZpZy50ZXh0U3R5bGVcclxuICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBnZXRJdGVtU3R5bGVDb2xvcjogZnVuY3Rpb24gKGl0ZW1Db2xvciwgc2VyaWVzSW5kZXgsIGRhdGFJbmRleCwgZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGl0ZW1Db2xvciA9PT0gJ2Z1bmN0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgPyBpdGVtQ29sb3IuY2FsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teUNoYXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNJbmRleDogc2VyaWVzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IHRoaXMuc2VyaWVzW3Nlcmllc0luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogZGF0YUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICA6IGl0ZW1Db2xvcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJtYXMge29iamVjdCB8IG51bWJlcn0gZGF0YSDnm67moIdkYXRhXHJcbiAgICAgICAgICogQHBhcmFtcyB7c3RyaW5nPSB8IG51bWJlcj19IGRlZmF1bHREYXRhIOaXoOaVsOaNruaXtum7mOiupOi/lOWbnlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldERhdGFGcm9tT3B0aW9uOiBmdW5jdGlvbiAoZGF0YSwgZGVmYXVsdERhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgIT0gbnVsbCA/IChkYXRhLnZhbHVlICE9IG51bGwgPyBkYXRhLnZhbHVlIDogZGF0YSkgOiBkZWZhdWx0RGF0YTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS6muWDj+e0oOS8mOWMllxyXG4gICAgICAgIHN1YlBpeGVsT3B0aW1pemU6IGZ1bmN0aW9uIChwb3NpdGlvbiwgbGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIGlmIChsaW5lV2lkdGggJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uICs9IHBvc2l0aW9uID09PSBNYXRoLmNlaWwocG9zaXRpb24pID8gMC41IDogMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gTWF0aC5mbG9vcihwb3NpdGlvbikgKyAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IE1hdGgucm91bmQocG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOm7mOiupHJlc2l6ZVxyXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2ggJiYgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJFZmZlY3RTaGFwZSAmJiB0aGlzLmNsZWFyRWZmZWN0U2hhcGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb25FZmZlY3QgJiYgc2VsZi5hbmltYXRpb25FZmZlY3QoKTtcclxuICAgICAgICAgICAgfSwyMDApO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa4hemZpOWbvuW9ouaVsOaNru+8jOWunuS+i+S7jeWPr+eUqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNsZWFyIDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJFZmZlY3RTaGFwZSAmJiB0aGlzLmNsZWFyRWZmZWN0U2hhcGUoKTtcclxuICAgICAgICAgICAgdGhpcy56ciAmJiB0aGlzLnpyLmRlbFNoYXBlKHRoaXMuc2hhcGVMaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QgPSBbXTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDph4rmlL7lkI7lrp7kvovkuI3lj6/nlKhcclxuICAgICAgICAgKi9cclxuICAgICAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25iZWZvckRpc3Bvc2UgJiYgdGhpcy5vbmJlZm9yRGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcGVMaXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RMaXN0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2VudGVyICYmIHRoaXMubWVzc2FnZUNlbnRlci51bmJpbmQoXHJcbiAgICAgICAgICAgICAgICBlY0NvbmZpZy5FVkVOVC5MRUdFTkRfSE9WRVJMSU5LLCB0aGlzLl9vbmxlZ2VuZGhvdmVybGlua1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLm9uYWZ0ZXJEaXNwb3NlICYmIHRoaXMub25hZnRlckRpc3Bvc2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHF1ZXJ5OiBlY1F1ZXJ5LnF1ZXJ5LFxyXG4gICAgICAgIGRlZXBRdWVyeTogZWNRdWVyeS5kZWVwUXVlcnksXHJcbiAgICAgICAgZGVlcE1lcmdlOiBlY1F1ZXJ5LmRlZXBNZXJnZSxcclxuICAgICAgICBcclxuICAgICAgICBwYXJzZVBlcmNlbnQ6IG51bWJlci5wYXJzZVBlcmNlbnQsXHJcbiAgICAgICAgcGFyc2VDZW50ZXI6IG51bWJlci5wYXJzZUNlbnRlcixcclxuICAgICAgICBwYXJzZVJhZGl1czogbnVtYmVyLnBhcnNlUmFkaXVzLFxyXG4gICAgICAgIG51bUFkZENvbW1hczogbnVtYmVyLmFkZENvbW1hc1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIEJhc2U7XHJcbn0pO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9Xb3Jrc3BhY2UvZ2l0aHViL2VjaGFydHMteC1leGFtcGxlczIvfi9lY2hhcnRzL2NvbXBvbmVudC9iYXNlLmpzXG4gKiovIiwiLyoqXHJcbiAqIGVjaGFydHPlm77ooajnsbvvvJrlnLDlm75cclxuICpcclxuICogQGRlc2MgZWNoYXJ0c+WfuuS6jkNhbnZhc++8jOe6r0phdmFzY3JpcHTlm77ooajlupPvvIzmj5Dkvpvnm7Top4LvvIznlJ/liqjvvIzlj6/kuqTkupLvvIzlj6/kuKrmgKfljJblrprliLbnmoTmlbDmja7nu5/orqHlm77ooajjgIJcclxuICogQGF1dGhvciBLZW5lciAoQEtlbmVyLeael+WzsCwga2VuZXIubGluZmVuZ0BnbWFpbC5jb20pXHJcbiAqXHJcbiAqL1xyXG5kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUpIHtcclxuICAgIHZhciBDaGFydEJhc2UgPSByZXF1aXJlKCcuL2Jhc2UnKTtcclxuICAgIFxyXG4gICAgLy8g5Zu+5b2i5L6d6LWWXHJcbiAgICB2YXIgVGV4dFNoYXBlID0gcmVxdWlyZSgnenJlbmRlcmpzL3NoYXBlL1RleHQnKTtcclxuICAgIHZhciBQYXRoU2hhcGUgPSByZXF1aXJlKCd6cmVuZGVyanMvc2hhcGUvUGF0aCcpO1xyXG4gICAgdmFyIENpcmNsZVNoYXBlID0gcmVxdWlyZSgnenJlbmRlcmpzL3NoYXBlL0NpcmNsZScpO1xyXG4gICAgdmFyIFJlY3RhbmdsZVNoYXBlID0gcmVxdWlyZSgnenJlbmRlcmpzL3NoYXBlL1JlY3RhbmdsZScpO1xyXG4gICAgdmFyIExpbmVTaGFwZSA9IHJlcXVpcmUoJ3pyZW5kZXJqcy9zaGFwZS9MaW5lJyk7XHJcbiAgICB2YXIgUG9seWdvblNoYXBlID0gcmVxdWlyZSgnenJlbmRlcmpzL3NoYXBlL1BvbHlnb24nKTtcclxuICAgIHZhciBFbGxpcHNlU2hhcGUgPSByZXF1aXJlKCd6cmVuZGVyanMvc2hhcGUvRWxsaXBzZScpO1xyXG4gICAgLy8g57uE5Lu25L6d6LWWXHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnQvZGF0YVJhbmdlJyk7XHJcbiAgICByZXF1aXJlKCcuLi9jb21wb25lbnQvcm9hbUNvbnRyb2xsZXInKTtcclxuICAgIFxyXG4gICAgdmFyIGVjQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcbiAgICAvLyDlnLDlm77pu5jorqTlj4LmlbBcclxuICAgIGVjQ29uZmlnLm1hcCA9IHtcclxuICAgICAgICB6bGV2ZWw6IDAsICAgICAgICAgICAgICAgICAgLy8g5LiA57qn5bGC5Y+gXHJcbiAgICAgICAgejogMiwgICAgICAgICAgICAgICAgICAgICAgIC8vIOS6jOe6p+WxguWPoFxyXG4gICAgICAgIG1hcFR5cGU6ICdjaGluYScsICAgLy8g5ZCE55yB55qEbWFwVHlwZeaaguaXtumDveeUqOS4reaWh1xyXG4gICAgICAgIC8vbWFwTG9jYXRpb246IHtcclxuICAgICAgICAgICAgLy8geDogJ2NlbnRlcicgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ3glJyB8IHtudW1iZXJ9LFxyXG4gICAgICAgICAgICAvLyB5OiAnY2VudGVyJyB8ICd0b3AnIHwgJ2JvdHRvbScgfCAneCUnIHwge251bWJlcn1cclxuICAgICAgICAgICAgLy8gd2lkdGggICAgLy8g6Ieq6YCC5bqUXHJcbiAgICAgICAgICAgIC8vIGhlaWdodCAgIC8vIOiHqumAguW6lFxyXG4gICAgICAgIC8vfSxcclxuICAgICAgICAvLyBtYXBWYWx1ZUNhbGN1bGF0aW9uOiAnc3VtJywgIC8vIOaVsOWAvOWQiOW5tuaWueW8j++8jOm7mOiupOWKoOWSjO+8jOWPr+mAieS4uu+8mlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ3N1bScgfCAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nIFxyXG4gICAgICAgIG1hcFZhbHVlUHJlY2lzaW9uOiAwLCAgICAgICAgICAgLy8g5Zyw5Zu+5pWw5YC86K6h566X57uT5p6c5bCP5pWw57K+5bqmXHJcbiAgICAgICAgc2hvd0xlZ2VuZFN5bWJvbDogdHJ1ZSwgICAgICAgICAvLyDmmL7npLrlm77kvovpopzoibLmoIfor4bvvIjns7vliJfmoIfor4bnmoTlsI/lnIbngrnvvInvvIzlrZjlnKhsZWdlbmTml7bnlJ/mlYhcclxuICAgICAgICAvLyBzZWxlY3RlZE1vZGU6IGZhbHNlLCAgICAgICAgIC8vIOmAieaLqeaooeW8j++8jOm7mOiupOWFs+mXre+8jOWPr+mAiXNpbmdsZe+8jG11bHRpcGxlXHJcbiAgICAgICAgZGF0YVJhbmdlSG92ZXJMaW5rOiB0cnVlLFxyXG4gICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgLy8gcm9hbTogZmFsc2UsICAgICAgICAgICAgICAgICAvLyDmmK/lkKblvIDlkK/nvKnmlL7lj4rmvKvmuLjmqKHlvI9cclxuICAgICAgICAvLyBzY2FsZUxpbWl0OiBudWxsLFxyXG4gICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiDlkITlvIIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNjY2MnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTM5LDY5LDE5KSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVtcGhhc2lzOiB7ICAgICAgICAgICAgICAgICAvLyDkuZ/mmK/pgInkuK3moLflvI9cclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiDlkITlvIIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDIxNSwwLDAuOCknXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMTAwLDAsMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZWNEYXRhID0gcmVxdWlyZSgnLi4vdXRpbC9lY0RhdGEnKTtcclxuICAgIHZhciB6clV0aWwgPSByZXF1aXJlKCd6cmVuZGVyanMvdG9vbC91dGlsJyk7XHJcbiAgICB2YXIgenJDb25maWcgPSByZXF1aXJlKCd6cmVuZGVyanMvY29uZmlnJyk7XHJcbiAgICB2YXIgenJFdmVudCA9IHJlcXVpcmUoJ3pyZW5kZXJqcy90b29sL2V2ZW50Jyk7XHJcbiAgICBcclxuICAgIHZhciBfbWFwUGFyYW1zID0gcmVxdWlyZSgnLi4vdXRpbC9tYXBEYXRhL3BhcmFtcycpLnBhcmFtcztcclxuICAgIHZhciBfdGV4dEZpeGVkID0gcmVxdWlyZSgnLi4vdXRpbC9tYXBEYXRhL3RleHRGaXhlZCcpO1xyXG4gICAgdmFyIF9nZW9Db29yZCA9IHJlcXVpcmUoJy4uL3V0aWwvbWFwRGF0YS9nZW9Db29yZCcpO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOaehOmAoOWHveaVsFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VDZW50ZXIgZWNoYXJ05raI5oGv5Lit5b+DXHJcbiAgICAgKiBAcGFyYW0ge1pSZW5kZXJ9IHpyIHpyZW5kZXLlrp7kvotcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZXJpZXMg5pWw5o2uXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29tcG9uZW50IOe7hOS7tlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBNYXAoZWNUaGVtZSwgbWVzc2FnZUNlbnRlciwgenIsIG9wdGlvbiwgbXlDaGFydCl7XHJcbiAgICAgICAgLy8g5Zu+6KGo5Z+657G7XHJcbiAgICAgICAgQ2hhcnRCYXNlLmNhbGwodGhpcywgZWNUaGVtZSwgbWVzc2FnZUNlbnRlciwgenIsIG9wdGlvbiwgbXlDaGFydCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuX29ubW91c2V3aGVlbCA9IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fX29ubW91c2V3aGVlbChwYXJhbXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VsZi5fb25tb3VzZWRvd24gPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19vbm1vdXNlZG93bihwYXJhbXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VsZi5fb25tb3VzZW1vdmUgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19vbm1vdXNlbW92ZShwYXJhbXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VsZi5fb25tb3VzZXVwID0gZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9fb25tb3VzZXVwKHBhcmFtcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLl9vbnJvYW1jb250cm9sbGVyID0gZnVuY3Rpb24ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9fb25yb2FtY29udHJvbGxlcihwYXJhbXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VsZi5fb25kcmhvdmVybGluayA9IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fX29uZHJob3ZlcmxpbmsocGFyYW1zKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2lzQWxpdmUgPSB0cnVlOyAgICAgICAgICAgLy8g5rS7552A5qCH6K6wXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb2RlID0ge307ICAgICAgICAvLyDpgInmi6nmqKHlvI9cclxuICAgICAgICB0aGlzLl9hY3RpdmVNYXBUeXBlID0ge307ICAgICAgIC8vIOW9k+WJjea0u+i3g+eahOWcsOWbvuexu+Wei1xyXG4gICAgICAgIHRoaXMuX2NsaWNrYWJsZSA9IHt9OyAgICAgICAgICAgLy8g5oKs5rWu6auY5Lqu5qih5byP77yM57Si5byV5Yiw5Zu+6KGoXHJcbiAgICAgICAgdGhpcy5faG92ZXJhYmxlID0ge307ICAgICAgICAgICAvLyDmgqzmta7pq5jkuq7mqKHlvI/vvIzntKLlvJXliLDlm77ooahcclxuICAgICAgICB0aGlzLl9zaG93TGVnZW5kU3ltYm9sID0ge307ICAgIC8vIOaYvuekuuWbvuS+i+minOiJsuagh+ivhlxyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0ge307ICAgICAgICAgICAgLy8g5Zyw5Zu+6YCJ5oup54q25oCBXHJcbiAgICAgICAgdGhpcy5fbWFwVHlwZU1hcCA9IHt9OyAgICAgICAgICAvLyDlm77kvovnsbvlnovntKLlvJVcclxuICAgICAgICB0aGlzLl9tYXBEYXRhTWFwID0ge307ICAgICAgICAgIC8vIOagueaNruWcsOWbvuexu+Wei+e0ouW8lWJib3gsdHJhbnNmb3JtLHBhdGhcclxuICAgICAgICB0aGlzLl9uYW1lTWFwID0ge307ICAgICAgICAgICAgIC8vIOS4quaAp+WMluWcsOWQjVxyXG4gICAgICAgIHRoaXMuX3NwZWNpYWxBcmVhID0ge307ICAgICAgICAgLy8g54m55q6KXHJcbiAgICAgICAgdGhpcy5fcmVmcmVzaERlbGF5VGlja2V0OyAgICAgICAvLyDmu5rova7nvKnmlL7ml7borqlyZWZyZXNo6aOe5LiA5LyaXHJcbiAgICAgICAgdGhpcy5fbWFwRGF0YVJlcXVpcmVDb3VudGVyOyAgICAvLyDlvILmraXlm57osIPorqHmlbDlmahcclxuICAgICAgICB0aGlzLl9tYXJrQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faG92ZXJMaW5rTWFwID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5ryr5ri455u45YWz5L+h5oGvXHJcbiAgICAgICAgdGhpcy5fcm9hbU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuX3NjYWxlTGltaXRNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLl9teDtcclxuICAgICAgICB0aGlzLl9teTtcclxuICAgICAgICB0aGlzLl9tb3VzZWRvd247XHJcbiAgICAgICAgdGhpcy5fanVzdE1vdmU7ICAgLy8g6YG/5YWN56e75Yqo5ZON5bqU54K55Ye7XHJcbiAgICAgICAgdGhpcy5fY3VyTWFwVHlwZTsgLy8g5b2T5YmN56e75Yqo55qE5Zyw5Zu+57G75Z6LXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKG9wdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy56ci5vbih6ckNvbmZpZy5FVkVOVC5NT1VTRVdIRUVMLCB0aGlzLl9vbm1vdXNld2hlZWwpO1xyXG4gICAgICAgIHRoaXMuenIub24oenJDb25maWcuRVZFTlQuTU9VU0VET1dOLCB0aGlzLl9vbm1vdXNlZG93bik7XHJcbiAgICAgICAgbWVzc2FnZUNlbnRlci5iaW5kKGVjQ29uZmlnLkVWRU5ULlJPQU1DT05UUk9MTEVSLCB0aGlzLl9vbnJvYW1jb250cm9sbGVyKTtcclxuICAgICAgICBtZXNzYWdlQ2VudGVyLmJpbmQoZWNDb25maWcuRVZFTlQuREFUQV9SQU5HRV9IT1ZFUkxJTkssIHRoaXMuX29uZHJob3ZlcmxpbmspO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBNYXAucHJvdG90eXBlID0ge1xyXG4gICAgICAgIHR5cGUgOiBlY0NvbmZpZy5DSEFSVF9UWVBFX01BUCxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnu5jliLblm77lvaJcclxuICAgICAgICAgKi9cclxuICAgICAgICBfYnVpbGRTaGFwZSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNlcmllcyA9IHRoaXMuc2VyaWVzO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFwID0ge307IC8vIOezu+WIl1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVNYXBUeXBlID0ge307IC8vIOW9k+WJjea0u+i3g+eahOWcsOWbvuexu+Wei1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGxlZ2VuZCA9IHRoaXMuY29tcG9uZW50LmxlZ2VuZDtcclxuICAgICAgICAgICAgdmFyIHNlcmllc05hbWU7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZURhdGEgPSB7fTtcclxuICAgICAgICAgICAgdmFyIG1hcFR5cGU7XHJcbiAgICAgICAgICAgIHZhciBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgbmFtZTtcclxuICAgICAgICAgICAgdmFyIG1hcFNlcmllcyA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgbWFwVmFsdWVQcmVjaXNpb24gPSB7fTtcclxuICAgICAgICAgICAgdmFyIHZhbHVlQ2FsY3VsYXRpb24gPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzZXJpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWVzW2ldLnR5cGUgPT0gZWNDb25maWcuQ0hBUlRfVFlQRV9NQVApIHsgLy8gbWFwXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzW2ldID0gdGhpcy5yZWZvcm1PcHRpb24oc2VyaWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXBUeXBlID0gc2VyaWVzW2ldLm1hcFR5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwU2VyaWVzW21hcFR5cGVdID0gbWFwU2VyaWVzW21hcFR5cGVdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcFNlcmllc1ttYXBUeXBlXVtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWVQcmVjaXNpb25bbWFwVHlwZV0gPSBtYXBWYWx1ZVByZWNpc2lvblttYXBUeXBlXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc2VyaWVzW2ldLm1hcFZhbHVlUHJlY2lzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjYWxlTGltaXRNYXBbbWFwVHlwZV0gPSB0aGlzLl9zY2FsZUxpbWl0TWFwW21hcFR5cGVdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllc1tpXS5zY2FsZUxpbWl0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB6clV0aWwubWVyZ2UodGhpcy5fc2NhbGVMaW1pdE1hcFttYXBUeXBlXSwgc2VyaWVzW2ldLnNjYWxlTGltaXQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvYW1NYXBbbWFwVHlwZV0gPSBzZXJpZXNbaV0ucm9hbSB8fCB0aGlzLl9yb2FtTWFwW21hcFR5cGVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faG92ZXJMaW5rTWFwW21hcFR5cGVdID09IG51bGwgfHwgdGhpcy5faG92ZXJMaW5rTWFwW21hcFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhbHNlIDHnpajlkKblhrNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faG92ZXJMaW5rTWFwW21hcFR5cGVdID0gc2VyaWVzW2ldLmRhdGFSYW5nZUhvdmVyTGluazsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uYW1lTWFwW21hcFR5cGVdID0gdGhpcy5fbmFtZU1hcFttYXBUeXBlXSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpZXNbaV0ubmFtZU1hcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB6clV0aWwubWVyZ2UodGhpcy5fbmFtZU1hcFttYXBUeXBlXSwgc2VyaWVzW2ldLm5hbWVNYXAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZU1hcFR5cGVbbWFwVHlwZV0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VyaWVzW2ldLnRleHRGaXhlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6clV0aWwubWVyZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGV4dEZpeGVkLCBzZXJpZXNbaV0udGV4dEZpeGVkLCB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJpZXNbaV0uZ2VvQ29vcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgenJVdGlsLm1lcmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2dlb0Nvb3JkLCBzZXJpZXNbaV0uZ2VvQ29vcmQsIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb2RlW21hcFR5cGVdID0gdGhpcy5fc2VsZWN0ZWRNb2RlW21hcFR5cGVdIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHNlcmllc1tpXS5zZWxlY3RlZE1vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyYWJsZVttYXBUeXBlXSA9PSBudWxsIHx8IHRoaXMuX2hvdmVyYWJsZVttYXBUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWxzZSAx56Wo5ZCm5YazXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyYWJsZVttYXBUeXBlXSA9IHNlcmllc1tpXS5ob3ZlcmFibGU7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2xpY2thYmxlW21hcFR5cGVdID09IG51bGwgfHwgdGhpcy5fY2xpY2thYmxlW21hcFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhbHNlIDHnpajlkKblhrNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpY2thYmxlW21hcFR5cGVdID0gc2VyaWVzW2ldLmNsaWNrYWJsZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zaG93TGVnZW5kU3ltYm9sW21hcFR5cGVdID09IG51bGwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuX3Nob3dMZWdlbmRTeW1ib2xbbWFwVHlwZV1cclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFsc2UgMeelqOWQpuWGs1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaG93TGVnZW5kU3ltYm9sW21hcFR5cGVdID0gc2VyaWVzW2ldLnNob3dMZWdlbmRTeW1ib2w7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ2FsY3VsYXRpb25bbWFwVHlwZV0gPSB2YWx1ZUNhbGN1bGF0aW9uW21hcFR5cGVdIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzZXJpZXNbaV0ubWFwVmFsdWVDYWxjdWxhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzZXJpZXNOYW1lID0gc2VyaWVzW2ldLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcFtzZXJpZXNOYW1lXSA9IGxlZ2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGxlZ2VuZC5pc1NlbGVjdGVkKHNlcmllc05hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1hcFtzZXJpZXNOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZURhdGFbbWFwVHlwZV0gPSB2YWx1ZURhdGFbbWFwVHlwZV0gfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSBzZXJpZXNbaV0uZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBkYXRhLmxlbmd0aDsgaiA8IGs7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVDaGFuZ2UobWFwVHlwZSwgZGF0YVtqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRGF0YVttYXBUeXBlXVtuYW1lXSA9IHZhbHVlRGF0YVttYXBUeXBlXVtuYW1lXSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNJbmRleCA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTWFwOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPSAndmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRGF0YVttYXBUeXBlXVtuYW1lXVtrZXldID0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2pdW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc05hTihkYXRhW2pdLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZURhdGFbbWFwVHlwZV1bbmFtZV0udmFsdWUgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAodmFsdWVEYXRhW21hcFR5cGVdW25hbWVdLnZhbHVlID0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZURhdGFbbWFwVHlwZV1bbmFtZV0udmFsdWUgKz0gKCtkYXRhW2pdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVEYXRhW21hcFR5cGVdW25hbWVdLnZhbHVlTWFwW2ldID0gK2RhdGFbal0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ntKLlvJXmnInor6XljLrln5/nmoTns7vliJfmoLflvI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlRGF0YVttYXBUeXBlXVtuYW1lXS5zZXJpZXNJbmRleC5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9tYXBEYXRhUmVxdWlyZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtdCBpbiB2YWx1ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcERhdGFSZXF1aXJlQ291bnRlcisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5riF56m6XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFyU2VsZWN0ZWQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX21hcERhdGFSZXF1aXJlQ291bnRlciA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy56ciAmJiB0aGlzLnpyLmRlbFNoYXBlKHRoaXMubGFzdFNoYXBlTGlzdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RTaGFwZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBtdCBpbiB2YWx1ZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUNhbGN1bGF0aW9uW210XSAmJiB2YWx1ZUNhbGN1bGF0aW9uW210XSA9PSAnYXZlcmFnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHZhbHVlRGF0YVttdF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVEYXRhW210XVtrXS52YWx1ZSA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHZhbHVlRGF0YVttdF1ba10udmFsdWUgLyB2YWx1ZURhdGFbbXRdW2tdLnNlcmllc0luZGV4Lmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b0ZpeGVkKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlUHJlY2lzaW9uW210XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW210XSA9IHRoaXMuX21hcERhdGFNYXBbbXRdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFwRGF0YU1hcFttdF0ubWFwRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOW3sue7j+e8k+WtmOS6huWImeebtOaOpeeUqFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcERhdGFDYWxsYmFjayhtdCwgdmFsdWVEYXRhW210XSwgbWFwU2VyaWVzW210XSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcERhdGFNYXBbbXRdLm1hcERhdGFcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX21hcFBhcmFtc1ttdC5yZXBsYWNlKC9cXHwuKi8sICcnKV0uZ2V0R2VvSnNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeJueauiuWMuuWfn1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwZWNpYWxBcmVhW210XSA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbWFwUGFyYW1zW210LnJlcGxhY2UoL1xcfC4qLywgJycpXS5zcGVjaWFsQXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLl9zcGVjaWFsQXJlYVttdF07XHJcbiAgICAgICAgICAgICAgICAgICAgX21hcFBhcmFtc1ttdC5yZXBsYWNlKC9cXHwuKi8sICcnKV0uZ2V0R2VvSnNvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YUNhbGxiYWNrKG10LCB2YWx1ZURhdGFbbXRdLCBtYXBTZXJpZXNbbXRdKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtdCBtYXBUeXBlXHJcbiAgICAgICAgICogQHBhcm1hIHtPYmplY3R9IHZkIHZhbHVlRGF0YVxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtcyBtYXBTZXJpZXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBfbWFwRGF0YUNhbGxiYWNrIDogZnVuY3Rpb24gKG10LCB2ZCwgbXMpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1kKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuX2lzQWxpdmUgfHwgc2VsZi5fYWN0aXZlTWFwVHlwZVttdF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8guatpeWcsOWbvuaVsOaNruWbnuiwg+aXtuacieWPr+iDveWunuS+i+W3sue7j+iiq+mHiuaUvlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOe8k+WtmOi/meS7veaVsOaNrlxyXG4gICAgICAgICAgICAgICAgaWYgKG10LmluZGV4T2YoJ3wnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWtkOWcsOWbvu+8jOWKoOW3peS4gOS7veaWsOeahG1hcERhdGFcclxuICAgICAgICAgICAgICAgICAgICBtZCA9IHNlbGYuX2dldFN1Yk1hcERhdGEobXQsIG1kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuX21hcERhdGFNYXBbbXRdLm1hcERhdGEgPSBtZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKG1kLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9tYXBEYXRhTWFwW210XS5yYXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9tYXBEYXRhTWFwW210XS5wcm9qZWN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9wcm9qZWN0aW9uL3N2ZycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fbWFwRGF0YU1hcFttdF0ucmF0ZSA9IDAuNzU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fbWFwRGF0YU1hcFttdF0ucHJvamVjdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWwvcHJvamVjdGlvbi9ub3JtYWwnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2VsZi5fYnVpbGRNYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgbXQsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnsbvlnotcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9nZXRQcm9qZWN0aW9uRGF0YShtdCwgbWQsIG1zKSwgICAgICAvLyDlnLDlm77mlbDmja5cclxuICAgICAgICAgICAgICAgICAgICB2ZCwgICAgICAgICAgICAgICAgICAvLyDnlKjmiLfmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICBtcyAgICAgICAgICAgICAgICAgICAvLyDns7vliJdcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9idWlsZE1hcmsobXQsIG1zKTtcclxuICAgICAgICAgICAgICAgIGlmICgtLXNlbGYuX21hcERhdGFSZXF1aXJlQ291bnRlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRTaGFwZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnpyLnJlZnJlc2hOZXh0RnJhbWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIF9jbGVhclNlbGVjdGVkIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fYWN0aXZlTWFwVHlwZVt0aGlzLl9tYXBUeXBlTWFwW2tdXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zZWxlY3RlZFtrXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fbWFwVHlwZU1hcFtrXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX2dldFN1Yk1hcERhdGEgOiBmdW5jdGlvbiAobWFwVHlwZSwgbWFwRGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgc3ViVHlwZSA9IG1hcFR5cGUucmVwbGFjZSgvXi4qXFx8LywgJycpO1xyXG4gICAgICAgICAgICB2YXIgZmVhdHVyZXMgPSBtYXBEYXRhLmZlYXR1cmVzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZlYXR1cmVzW2ldLnByb3BlcnRpZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZmVhdHVyZXNbaV0ucHJvcGVydGllcy5uYW1lID09IHN1YlR5cGVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzID0gZmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YlR5cGUgPT0gJ1VuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgZmVhdHVyZXMuZ2VvbWV0cnkuY29vcmRpbmF0ZXMubGVuZ3RoID4gMSAvLyDmnKrooqvnroDljJZcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBmZWF0dXJlcy5nZW9tZXRyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb29yZGluYXRlcy5zbGljZSg1LDYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZlYXR1cmVzLmdlb21ldHJ5LnR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZmVhdHVyZXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBmZWF0dXJlcy5wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmVhdHVyZXMudHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgJ3R5cGUnIDogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICdmZWF0dXJlcyc6W1xyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmjInpnIDliqDovb3nm7jlhbPlnLDlm74gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2dldFByb2plY3Rpb25EYXRhIDogZnVuY3Rpb24gKG1hcFR5cGUsIG1hcERhdGEsIG1hcFNlcmllcykge1xyXG4gICAgICAgICAgICB2YXIgbm9ybWFsUHJvamVjdGlvbiA9IHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0ucHJvamVjdGlvbjtcclxuICAgICAgICAgICAgdmFyIHByb3ZpbmNlID0gW107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBiYm945rC46L+c5LiN5Y+YXHJcbiAgICAgICAgICAgIHZhciBiYm94ID0gdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS5iYm94IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIHx8IG5vcm1hbFByb2plY3Rpb24uZ2V0QmJveChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YSwgdGhpcy5fc3BlY2lhbEFyZWFbbWFwVHlwZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGJib3gpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKDExMTEsdHJhbnNmb3JtKVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0uaGFzUm9hbSkge1xyXG4gICAgICAgICAgICAgICAgLy8g56ys5LiA5qyh5oiW6ICF5Y+R55Sf5LqGcmVzaXpl77yM6ZyA6KaB5Yik5patXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0aGlzLl9nZXRUcmFuc2Zvcm0oXHJcbiAgICAgICAgICAgICAgICAgICAgYmJveCxcclxuICAgICAgICAgICAgICAgICAgICBtYXBTZXJpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS5yYXRlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/nu4/ov4fnlKjmiLfmvKvmuLjkuI3lho3lk43lupRyZXNpemVcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0udHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYmJveCx0cmFuc2Zvcm0pXHJcbiAgICAgICAgICAgIHZhciBsYXN0VHJhbnNmb3JtID0gdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS5sYXN0VHJhbnNmb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHtzY2FsZTp7fX07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcGF0aEFycmF5O1xyXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtLmxlZnQgIT0gbGFzdFRyYW5zZm9ybS5sZWZ0XHJcbiAgICAgICAgICAgICAgICB8fCB0cmFuc2Zvcm0udG9wICE9IGxhc3RUcmFuc2Zvcm0udG9wXHJcbiAgICAgICAgICAgICAgICB8fCB0cmFuc2Zvcm0uc2NhbGUueCAhPSBsYXN0VHJhbnNmb3JtLnNjYWxlLnhcclxuICAgICAgICAgICAgICAgIHx8IHRyYW5zZm9ybS5zY2FsZS55ICE9IGxhc3RUcmFuc2Zvcm0uc2NhbGUueVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8vIOWPkeeUn+i/h+WPmOWMlu+8jOmcgOimgemHjeaWsOeUn+aIkHBhdGhBcnJheVxyXG4gICAgICAgICAgICAgICAgLy8g5LiA6Iis5oqV5bCEXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRyYW5zZm9ybSlcclxuICAgICAgICAgICAgICAgIHBhdGhBcnJheSA9IG5vcm1hbFByb2plY3Rpb24uZ2VvSnNvbjJQYXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEsIHRyYW5zZm9ybSwgdGhpcy5fc3BlY2lhbEFyZWFbbWFwVHlwZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBsYXN0VHJhbnNmb3JtID0genJVdGlsLmNsb25lKHRyYW5zZm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgIHBhdGhBcnJheSA9IHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0ucGF0aEFycmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLmJib3ggPSBiYm94O1xyXG4gICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS5sYXN0VHJhbnNmb3JtID0gbGFzdFRyYW5zZm9ybTtcclxuICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS5wYXRoQXJyYXkgPSBwYXRoQXJyYXk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhdGhBcnJheSlcclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gW3RyYW5zZm9ybS5sZWZ0LCB0cmFuc2Zvcm0udG9wXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRoQXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBmb3IgdGVzdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS5mZWF0dXJlc1tpXS5wcm9wZXJ0aWVzLmNwLCAvLyDnu4/nuqzluqbluqZcclxuICAgICAgICAgICAgICAgICAgICBwYXRoQXJyYXlbaV0uY3AgICAgICAgICAgICAgICAgICAgIC8vIOW5s+mdouWdkOagh1xyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zMmdlbyhtYXBUeXBlLCBwYXRoQXJyYXlbaV0uY3ApLCAgLy8g5bmz6Z2i5Z2Q5qCH6L2s57uP57qs5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW8ycG9zKG1hcFR5cGUsIG1hcERhdGEuZmVhdHVyZXNbaV0ucHJvcGVydGllcy5jcClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBwcm92aW5jZS5wdXNoKHRoaXMuX2dldFNpbmdsZVByb3ZpbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGUsIHBhdGhBcnJheVtpXSwgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3BlY2lhbEFyZWFbbWFwVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGFyZWEgaW4gdGhpcy5fc3BlY2lhbEFyZWFbbWFwVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZS5wdXNoKHRoaXMuX2dldFNwZWNpYWxQcm9qZWN0aW9uRGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwVHlwZSwgbWFwRGF0YSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZWEsIHRoaXMuX3NwZWNpYWxBcmVhW21hcFR5cGVdW2FyZWFdLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDkuK3lm73lnLDlm77liqDlhaXljZfmtbfor7jlsptcclxuICAgICAgICAgICAgaWYgKG1hcFR5cGUgPT0gJ2NoaW5hJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdlbzJwb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgX2dlb0Nvb3JkWyfljZfmtbfor7jlspsnXSB8fCBfbWFwUGFyYW1zWyfljZfmtbfor7jlspsnXS50ZXh0Q29vcmRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAvLyBzY2FsZS54IDogd2lkdGggID0gMTAuNTEgOiA2NFxyXG4gICAgICAgICAgICAgICAgdmFyIHNjYWxlID0gdHJhbnNmb3JtLnNjYWxlLnggLyAxMC41O1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHRQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgICAgICAgICAzMiAqIHNjYWxlICsgbGVmdFRvcFswXSwgXHJcbiAgICAgICAgICAgICAgICAgICAgODMgKiBzY2FsZSArIGxlZnRUb3BbMV1cclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RleHRGaXhlZFsn5Y2X5rW36K+45bKbJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb25bMF0gKz0gX3RleHRGaXhlZFsn5Y2X5rW36K+45bKbJ11bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFBvc2l0aW9uWzFdICs9IF90ZXh0Rml4ZWRbJ+WNl+a1t+ivuOWymyddWzFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvdmluY2UucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6IHRoaXMuX25hbWVDaGFuZ2UobWFwVHlwZSwgJ+WNl+a1t+ivuOWymycpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggOiBfbWFwUGFyYW1zWyfljZfmtbfor7jlspsnXS5nZXRQYXRoKGxlZnRUb3AsIHNjYWxlKSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA6IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRYIDogdGV4dFBvc2l0aW9uWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRZIDogdGV4dFBvc2l0aW9uWzFdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvdmluY2UpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJvdmluY2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDnibnmrorlnLDljLrmipXlsITmlbDmja5cclxuICAgICAgICAgKi9cclxuICAgICAgICBfZ2V0U3BlY2lhbFByb2plY3Rpb25EYXRhIDogZnVuY3Rpb24gKG1hcFR5cGUsIG1hcERhdGEsIGFyZWFOYW1lLCBtYXBTaXplLCBwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdfZ2V0U3BlY2lhbFByb2plY3Rpb25EYXRhLS0tLS0tLS0tLS0tLS0nKVxyXG4gICAgICAgICAgICAvLyDmnoTpgKDljZXni6znmoRnZW9Kc29u5Zyw5Zu+5pWw5o2uXHJcbiAgICAgICAgICAgIG1hcERhdGEgPSB0aGlzLl9nZXRTdWJNYXBEYXRhKCd4fCcgKyBhcmVhTmFtZSwgbWFwRGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBiYm94XHJcbiAgICAgICAgICAgIHZhciBub3JtYWxQcm9qZWN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbC9wcm9qZWN0aW9uL25vcm1hbCcpO1xyXG4gICAgICAgICAgICB2YXIgYmJveCA9IG5vcm1hbFByb2plY3Rpb24uZ2V0QmJveChtYXBEYXRhKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYmJveCcsIGJib3gpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm1cclxuICAgICAgICAgICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdlbzJwb3MoXHJcbiAgICAgICAgICAgICAgICBtYXBUeXBlLCBcclxuICAgICAgICAgICAgICAgIFttYXBTaXplLmxlZnQsIG1hcFNpemUudG9wXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHRCb3R0b20gPSB0aGlzLmdlbzJwb3MoXHJcbiAgICAgICAgICAgICAgICBtYXBUeXBlLCBcclxuICAgICAgICAgICAgICAgIFttYXBTaXplLmxlZnQgKyBtYXBTaXplLndpZHRoLCBtYXBTaXplLnRvcCArIG1hcFNpemUuaGVpZ2h0XVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdsZWZ0cmlnaHQnICwgbGVmdFRvcCwgcmlnaHRCb3R0b20pO1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBNYXRoLmFicyhyaWdodEJvdHRvbVswXSAtIGxlZnRUb3BbMF0pO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5hYnMocmlnaHRCb3R0b21bMV0gLSBsZWZ0VG9wWzFdKTtcclxuICAgICAgICAgICAgdmFyIG1hcFdpZHRoID0gYmJveC53aWR0aDtcclxuICAgICAgICAgICAgdmFyIG1hcEhlaWdodCA9IGJib3guaGVpZ2h0O1xyXG4gICAgICAgICAgICAvL3ZhciBtaW5TY2FsZTtcclxuICAgICAgICAgICAgdmFyIHhTY2FsZSA9ICh3aWR0aCAvIDAuNzUpIC8gbWFwV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciB5U2NhbGUgPSBoZWlnaHQgLyBtYXBIZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmICh4U2NhbGUgPiB5U2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHhTY2FsZSA9IHlTY2FsZSAqIDAuNzU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IG1hcFdpZHRoICogeFNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgeVNjYWxlID0geFNjYWxlO1xyXG4gICAgICAgICAgICAgICAgeFNjYWxlID0geVNjYWxlICogMC43NTtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IG1hcEhlaWdodCAqIHlTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0ge1xyXG4gICAgICAgICAgICAgICAgT2Zmc2V0TGVmdCA6IGxlZnRUb3BbMF0sXHJcbiAgICAgICAgICAgICAgICBPZmZzZXRUb3AgOiBsZWZ0VG9wWzFdLFxyXG4gICAgICAgICAgICAgICAgLy93aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAvL2hlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgc2NhbGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA6IHhTY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICB5IDogeVNjYWxlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcqKicsYXJlYU5hbWUsIHRyYW5zZm9ybSlcclxuICAgICAgICAgICAgdmFyIHBhdGhBcnJheSA9IG5vcm1hbFByb2plY3Rpb24uZ2VvSnNvbjJQYXRoKFxyXG4gICAgICAgICAgICAgICAgbWFwRGF0YSwgdHJhbnNmb3JtXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhdGhBcnJheSlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNpbmdsZVByb3ZpbmNlKFxyXG4gICAgICAgICAgICAgICAgbWFwVHlwZSwgcGF0aEFycmF5WzBdLCBwb3NpdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX2dldFNpbmdsZVByb3ZpbmNlIDogZnVuY3Rpb24gKG1hcFR5cGUsIHBhdGgsIHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0UG9zaXRpb247XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gcGF0aC5wcm9wZXJ0aWVzLm5hbWU7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0Rml4ZWQgPSBfdGV4dEZpeGVkW25hbWVdIHx8IFswLCAwXTtcclxuICAgICAgICAgICAgaWYgKF9nZW9Db29yZFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgLy8g57uP57qs5bqm55u05o6l5a6a5L2N5LiN5YqgdGV4dEZpeGVkXHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb24gPSB0aGlzLmdlbzJwb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgX2dlb0Nvb3JkW25hbWVdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGguY3ApIHtcclxuICAgICAgICAgICAgICAgIHRleHRQb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoLmNwWzBdICsgdGV4dEZpeGVkWzBdLCBcclxuICAgICAgICAgICAgICAgICAgICBwYXRoLmNwWzFdICsgdGV4dEZpeGVkWzFdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJib3ggPSB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLmJib3g7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb24gPSB0aGlzLmdlbzJwb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgW2Jib3gubGVmdCArIGJib3gud2lkdGggLyAyLCBiYm94LnRvcCArIGJib3guaGVpZ2h0IC8gMl1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb25bMF0gKz0gdGV4dEZpeGVkWzBdO1xyXG4gICAgICAgICAgICAgICAgdGV4dFBvc2l0aW9uWzFdICs9IHRleHRGaXhlZFsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXh0UG9zaXRpb24pXHJcbiAgICAgICAgICAgIHBhdGgubmFtZSA9IHRoaXMuX25hbWVDaGFuZ2UobWFwVHlwZSwgbmFtZSk7XHJcbiAgICAgICAgICAgIHBhdGgucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgcGF0aC50ZXh0WCA9IHRleHRQb3NpdGlvblswXTtcclxuICAgICAgICAgICAgcGF0aC50ZXh0WSA9IHRleHRQb3NpdGlvblsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDojrflj5bnvKnmlL4gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2dldFRyYW5zZm9ybSA6IGZ1bmN0aW9uIChiYm94LCBtYXBTZXJpZXMsIHJhdGUpIHtcclxuICAgICAgICAgICAgdmFyIHNlcmllcyA9IHRoaXMuc2VyaWVzO1xyXG4gICAgICAgICAgICB2YXIgbWFwTG9jYXRpb247XHJcbiAgICAgICAgICAgIHZhciB4O1xyXG4gICAgICAgICAgICB2YXIgY3VzWDtcclxuICAgICAgICAgICAgdmFyIHk7XHJcbiAgICAgICAgICAgIHZhciBjdXNZO1xyXG4gICAgICAgICAgICB2YXIgd2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHZhciB6cldpZHRoID0gdGhpcy56ci5nZXRXaWR0aCgpO1xyXG4gICAgICAgICAgICB2YXIgenJIZWlnaHQgPSB0aGlzLnpyLmdldEhlaWdodCgpO1xyXG4gICAgICAgICAgICAvL+S4iuS4i+W3puWPs+eVmeepulxyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IE1hdGgucm91bmQoTWF0aC5taW4oenJXaWR0aCwgenJIZWlnaHQpICogMC4wMik7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtYXBTZXJpZXMpIHtcclxuICAgICAgICAgICAgICAgIG1hcExvY2F0aW9uID0gc2VyaWVzW2tleV0ubWFwTG9jYXRpb24gfHwge307XHJcbiAgICAgICAgICAgICAgICBjdXNYID0gbWFwTG9jYXRpb24ueCB8fCBjdXNYO1xyXG4gICAgICAgICAgICAgICAgY3VzWSA9IG1hcExvY2F0aW9uLnkgfHwgY3VzWTtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gbWFwTG9jYXRpb24ud2lkdGggfHwgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSBtYXBMb2NhdGlvbi5oZWlnaHQgfHwgaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3ggPSBpc05hTihjdXNYKSA/IHBhZGRpbmcgOiBjdXNYO1xyXG4gICAgICAgICAgICB4ID0gdGhpcy5wYXJzZVBlcmNlbnQoY3VzWCwgenJXaWR0aCk7XHJcbiAgICAgICAgICAgIHggPSBpc05hTih4KSA/IHBhZGRpbmcgOiB4O1xyXG4gICAgICAgICAgICAvL3kgPSBpc05hTihjdXNZKSA/IHBhZGRpbmcgOiBjdXNZO1xyXG4gICAgICAgICAgICB5ID0gdGhpcy5wYXJzZVBlcmNlbnQoY3VzWSwgenJIZWlnaHQpO1xyXG4gICAgICAgICAgICB5ID0gaXNOYU4oeSkgPyBwYWRkaW5nIDogeTtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgID8gKHpyV2lkdGggLSB4IC0gMiAqIHBhZGRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5wYXJzZVBlcmNlbnQod2lkdGgsIHpyV2lkdGgpKTtcclxuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0ID09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgPyAoenJIZWlnaHQgLSB5IC0gMiAqIHBhZGRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgIDogKHRoaXMucGFyc2VQZXJjZW50KGhlaWdodCwgenJIZWlnaHQpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBtYXBXaWR0aCA9IGJib3gud2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBtYXBIZWlnaHQgPSBiYm94LmhlaWdodDtcclxuICAgICAgICAgICAgLy92YXIgbWluU2NhbGU7XHJcbiAgICAgICAgICAgIHZhciB4U2NhbGUgPSAod2lkdGggLyByYXRlKSAvIG1hcFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgeVNjYWxlID0gaGVpZ2h0IC8gbWFwSGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAoeFNjYWxlID4geVNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAvL21pblNjYWxlID0geVNjYWxlO1xyXG4gICAgICAgICAgICAgICAgeFNjYWxlID0geVNjYWxlICogcmF0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoID0gbWFwV2lkdGggKiB4U2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL21pblNjYWxlID0geFNjYWxlO1xyXG4gICAgICAgICAgICAgICAgeVNjYWxlID0geFNjYWxlO1xyXG4gICAgICAgICAgICAgICAgeFNjYWxlID0geVNjYWxlICogcmF0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IG1hcEhlaWdodCAqIHlTY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1pblNjYWxlKVxyXG4gICAgICAgICAgICAvL3dpZHRoID0gbWFwV2lkdGggKiBtaW5TY2FsZTtcclxuICAgICAgICAgICAgLy9oZWlnaHQgPSBtYXBIZWlnaHQgKiBtaW5TY2FsZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChpc05hTihjdXNYKSkge1xyXG4gICAgICAgICAgICAgICAgY3VzWCA9IGN1c1ggfHwgJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1c1ggKyAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NlbnRlcicgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcigoenJXaWR0aCAtIHdpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCcgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0genJXaWR0aCAtIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvL2Nhc2UgJ2xlZnQnIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy94ID0gcGFkZGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGN1c1gseCx6cldpZHRoLHdpZHRoLCdrZW5lcicpXHJcbiAgICAgICAgICAgIGlmIChpc05hTihjdXNZKSkge1xyXG4gICAgICAgICAgICAgICAgY3VzWSA9IGN1c1kgfHwgJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1c1kgKyAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NlbnRlcicgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5mbG9vcigoenJIZWlnaHQgLSBoZWlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbScgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0genJIZWlnaHQgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FzZSAndG9wJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8veSA9IHBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh4LHksd2lkdGgsaGVpZ2h0KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA6IHgsXHJcbiAgICAgICAgICAgICAgICB0b3AgOiB5LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAvL3NjYWxlIDogbWluU2NhbGUgKiA1MCwgIC8vIHd0ZiA1MFxyXG4gICAgICAgICAgICAgICAgYmFzZVNjYWxlIDogMSxcclxuICAgICAgICAgICAgICAgIHNjYWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHggOiB4U2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgeSA6IHlTY2FsZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90cmFuc2xhdGUgOiBbeCArIHdpZHRoIC8gMiwgeSArIGhlaWdodCAvIDJdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmnoTlu7rlnLDlm75cclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFwRGF0YSDlm77lvaLmlbDmja5cclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVEYXRhIOeUqOaIt+aVsOaNrlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9idWlsZE1hcCA6IGZ1bmN0aW9uIChtYXBUeXBlLCBtYXBEYXRhLCB2YWx1ZURhdGEsIG1hcFNlcmllcykge1xyXG4gICAgICAgICAgICB2YXIgc2VyaWVzID0gdGhpcy5zZXJpZXM7XHJcbiAgICAgICAgICAgIHZhciBsZWdlbmQgPSB0aGlzLmNvbXBvbmVudC5sZWdlbmQ7XHJcbiAgICAgICAgICAgIHZhciBkYXRhUmFuZ2UgPSB0aGlzLmNvbXBvbmVudC5kYXRhUmFuZ2U7XHJcbiAgICAgICAgICAgIHZhciBzZXJpZXNOYW1lO1xyXG4gICAgICAgICAgICB2YXIgbmFtZTtcclxuICAgICAgICAgICAgdmFyIGRhdGE7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICAgICAgdmFyIHF1ZXJ5VGFyZ2V0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGNvbG9yO1xyXG4gICAgICAgICAgICB2YXIgZm9udDtcclxuICAgICAgICAgICAgdmFyIHN0eWxlO1xyXG4gICAgICAgICAgICB2YXIgaGlnaGxpZ2h0U3R5bGU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2hhcGU7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0U2hhcGU7IFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG1hcERhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHpyVXRpbC5jbG9uZShtYXBEYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0eWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiBzdHlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggOiBzdHlsZS5wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogenJVdGlsLmNsb25lKHN0eWxlLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBzdHlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHZhbHVlRGF0YVtuYW1lXTsgLy8g5aSa57O75YiX5ZCI5bm25ZCO55qE5pWw5o2uXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5VGFyZ2V0ID0gW2RhdGFdOyAvLyBsZXZlbCAzXHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gZGF0YS5zZXJpZXNJbmRleC5sZW5ndGg7IGogPCBrOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV2ZWwgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRhcmdldC5wdXNoKHNlcmllc1tkYXRhLnNlcmllc0luZGV4W2pdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllc05hbWUgKz0gc2VyaWVzW2RhdGEuc2VyaWVzSW5kZXhbal1dLm5hbWUgKyAnICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsZWdlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX3Nob3dMZWdlbmRTeW1ib2xbbWFwVHlwZV0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBsZWdlbmQuaGFzQ29sb3Ioc2VyaWVzW2RhdGEuc2VyaWVzSW5kZXhbal1dLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChuZXcgQ2lyY2xlU2hhcGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHpsZXZlbCA6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHogOiB0aGlzLmdldFpCYXNlKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogenJVdGlsLmNsb25lKHN0eWxlLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbWFwVHlwZSA6IG1hcFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZ2VvIDogdGhpcy5wb3MyZ2VvKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVHlwZSwgW3N0eWxlLnRleHRYICsgMyArIGogKiA3LCBzdHlsZS50ZXh0WSAtIDEwXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IDogc3R5bGUudGV4dFggKyAzICsgaiAqIDcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgOiBzdHlsZS50ZXh0WSAtIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByIDogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBsZWdlbmQuZ2V0Q29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXNbZGF0YS5zZXJpZXNJbmRleFtqXV0ubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnLSdcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcmllc05hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVRhcmdldCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBtYXBTZXJpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUYXJnZXQucHVzaChzZXJpZXNba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lY1RoZW1lLm1hcCAmJiBxdWVyeVRhcmdldC5wdXNoKHRoaXMuZWNUaGVtZS5tYXApOyAvLyBsZXZlbCAxXHJcbiAgICAgICAgICAgICAgICBxdWVyeVRhcmdldC5wdXNoKGVjQ29uZmlnKTsgICAgICAvLyBsZXZlbCAxXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIOWAvOWfn+aOp+S7tuaOp+WItlxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAoZGF0YVJhbmdlICYmICFpc05hTih2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YVJhbmdlLmdldENvbG9yKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIOW4uOinhOiuvue9rlxyXG4gICAgICAgICAgICAgICAgc3R5bGUuY29sb3IgPSBzdHlsZS5jb2xvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29sb3IgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuZ2V0SXRlbVN0eWxlQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZXBRdWVyeShxdWVyeVRhcmdldCwgJ2l0ZW1TdHlsZS5ub3JtYWwuY29sb3InKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc2VyaWVzSW5kZXgsIC0xLCBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5kZWVwUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRhcmdldCwgJ2l0ZW1TdHlsZS5ub3JtYWwuYXJlYVN0eWxlLmNvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuc3Ryb2tlQ29sb3IgPSBzdHlsZS5zdHJva2VDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmRlZXBRdWVyeShxdWVyeVRhcmdldCwgJ2l0ZW1TdHlsZS5ub3JtYWwuYm9yZGVyQ29sb3InKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlLmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5kZWVwUXVlcnkocXVlcnlUYXJnZXQsICdpdGVtU3R5bGUubm9ybWFsLmJvcmRlcldpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIOmrmOS6rlxyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U3R5bGUuY29sb3IgPSB0aGlzLmdldEl0ZW1TdHlsZUNvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwUXVlcnkocXVlcnlUYXJnZXQsICdpdGVtU3R5bGUuZW1waGFzaXMuY29sb3InKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc2VyaWVzSW5kZXgsIC0xLCBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuZGVlcFF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUYXJnZXQsICdpdGVtU3R5bGUuZW1waGFzaXMuYXJlYVN0eWxlLmNvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBzdHlsZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0eWxlLnN0cm9rZUNvbG9yID0gdGhpcy5kZWVwUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRhcmdldCwgJ2l0ZW1TdHlsZS5lbXBoYXNpcy5ib3JkZXJDb2xvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc3R5bGUuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRTdHlsZS5saW5lV2lkdGggPSB0aGlzLmRlZXBRdWVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVRhcmdldCwgJ2l0ZW1TdHlsZS5lbXBoYXNpcy5ib3JkZXJXaWR0aCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHN0eWxlLmxpbmVXaWR0aDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUuYnJ1c2hUeXBlID0gaGlnaGxpZ2h0U3R5bGUuYnJ1c2hUeXBlID0gc3R5bGUuYnJ1c2hUeXBlIHx8ICdib3RoJztcclxuICAgICAgICAgICAgICAgIHN0eWxlLmxpbmVKb2luID0gaGlnaGxpZ2h0U3R5bGUubGluZUpvaW4gPSAncm91bmQnO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUuX25hbWUgPSBoaWdobGlnaHRTdHlsZS5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvbnQgPSB0aGlzLmRlZXBRdWVyeShxdWVyeVRhcmdldCwgJ2l0ZW1TdHlsZS5ub3JtYWwubGFiZWwudGV4dFN0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDmloflrZfmoIfnrb7pgb/lhY3opobnm5bljZXni6zkuIDkuKpzaGFwZVxyXG4gICAgICAgICAgICAgICAgdGV4dFNoYXBlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHpsZXZlbCA6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHogOiB0aGlzLmdldFpCYXNlKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vaG92ZXJhYmxlOiB0aGlzLl9ob3ZlcmFibGVbbWFwVHlwZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jbGlja2FibGU6IHRoaXMuX2NsaWNrYWJsZVttYXBUeXBlXSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA6IHpyVXRpbC5jbG9uZShzdHlsZS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgX21hcFR5cGUgOiBtYXBUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIF9nZW8gOiB0aGlzLnBvczJnZW8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBUeXBlLCBbc3R5bGUudGV4dFgsIHN0eWxlLnRleHRZXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicnVzaFR5cGUgOiAnZmlsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggOiBzdHlsZS50ZXh0WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA6IHN0eWxlLnRleHRZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogdGhpcy5nZXRMYWJlbFRleHQobmFtZSwgdmFsdWUsIHF1ZXJ5VGFyZ2V0LCAnbm9ybWFsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9uYW1lIDogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogdGhpcy5kZWVwUXVlcnkocXVlcnlUYXJnZXQsICdpdGVtU3R5bGUubm9ybWFsLmxhYmVsLnNob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5kZWVwUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlUYXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2l0ZW1TdHlsZS5ub3JtYWwubGFiZWwudGV4dFN0eWxlLmNvbG9yJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Rm9udCA6IHRoaXMuZ2V0Rm9udChmb250KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0ZXh0U2hhcGUuX3N0eWxlID0genJVdGlsLmNsb25lKHRleHRTaGFwZS5zdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRleHRTaGFwZS5oaWdobGlnaHRTdHlsZSA9IHpyVXRpbC5jbG9uZSh0ZXh0U2hhcGUuc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVlcFF1ZXJ5KHF1ZXJ5VGFyZ2V0LCAnaXRlbVN0eWxlLmVtcGhhc2lzLmxhYmVsLnNob3cnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5oaWdobGlnaHRTdHlsZS50ZXh0ID0gdGhpcy5nZXRMYWJlbFRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsIHZhbHVlLCBxdWVyeVRhcmdldCwgJ2VtcGhhc2lzJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLmhpZ2hsaWdodFN0eWxlLmNvbG9yID0gdGhpcy5kZWVwUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXRlbVN0eWxlLmVtcGhhc2lzLmxhYmVsLnRleHRTdHlsZS5jb2xvcidcclxuICAgICAgICAgICAgICAgICAgICApIHx8IHRleHRTaGFwZS5zdHlsZS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250ID0gdGhpcy5kZWVwUXVlcnkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5VGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaXRlbVN0eWxlLmVtcGhhc2lzLmxhYmVsLnRleHRTdHlsZSdcclxuICAgICAgICAgICAgICAgICAgICApIHx8IGZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLmhpZ2hsaWdodFN0eWxlLnRleHRGb250ID0gdGhpcy5nZXRGb250KGZvbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLmhpZ2hsaWdodFN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsMCknO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNoYXBlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHpsZXZlbCA6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHogOiB0aGlzLmdldFpCYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgLy9ob3ZlcmFibGU6IHRoaXMuX2hvdmVyYWJsZVttYXBUeXBlXSxcclxuICAgICAgICAgICAgICAgICAgICAvL2NsaWNrYWJsZTogdGhpcy5fY2xpY2thYmxlW21hcFR5cGVdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogenJVdGlsLmNsb25lKHN0eWxlLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA6IHN0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0eWxlIDogaGlnaGxpZ2h0U3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgX3N0eWxlOiB6clV0aWwuY2xvbmUoc3R5bGUpLFxyXG4gICAgICAgICAgICAgICAgICAgIF9tYXBUeXBlOiBtYXBUeXBlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlLnNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zY2FsZSA9IHpyVXRpbC5jbG9uZShzdHlsZS5zY2FsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRleHRTaGFwZSA9IG5ldyBUZXh0U2hhcGUodGV4dFNoYXBlKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2hhcGUuc3R5bGUuc2hhcGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJyA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZSA9IG5ldyBSZWN0YW5nbGVTaGFwZShzaGFwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmUnIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlID0gbmV3IExpbmVTaGFwZShzaGFwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NpcmNsZScgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUgPSBuZXcgQ2lyY2xlU2hhcGUoc2hhcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwb2x5Z29uJyA6IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZSA9IG5ldyBQb2x5Z29uU2hhcGUoc2hhcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUgPSBuZXcgRWxsaXBzZVNoYXBlKHNoYXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlID0gbmV3IFBhdGhTaGFwZShzaGFwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZS5idWlsZFBhdGhBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUuc3R5bGUucGF0aEFycmF5ID0gc2hhcGUuYnVpbGRQYXRoQXJyYXkoc2hhcGUuc3R5bGUucGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZE1vZGVbbWFwVHlwZV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRbbmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgfHwgKGRhdGEuc2VsZWN0ZWQgJiYgdGhpcy5fc2VsZWN0ZWRbbmFtZV0gIT09IGZhbHNlKSBcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5zdHlsZSA9IHRleHRTaGFwZS5oaWdobGlnaHRTdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zdHlsZSA9IHNoYXBlLmhpZ2hsaWdodFN0eWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0U2hhcGUuY2xpY2thYmxlID0gc2hhcGUuY2xpY2thYmxlID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGlja2FibGVbbWFwVHlwZV1cclxuICAgICAgICAgICAgICAgICAgICAmJiAoZGF0YS5jbGlja2FibGUgPT0gbnVsbCB8fCBkYXRhLmNsaWNrYWJsZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZE1vZGVbbWFwVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFtuYW1lXSA9IHRoaXMuX3NlbGVjdGVkW25hbWVdICE9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fc2VsZWN0ZWRbbmFtZV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YS5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXBUeXBlTWFwW25hbWVdID0gbWFwVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zZWxlY3RhYmxlID09IG51bGwgfHwgZGF0YS5zZWxlY3RhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLmNsaWNrYWJsZSA9IHRleHRTaGFwZS5jbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5vbmNsaWNrID0gdGV4dFNoYXBlLm9uY2xpY2sgPSB0aGlzLnNoYXBlSGFuZGxlci5vbmNsaWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyYWJsZVttYXBUeXBlXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIChkYXRhLmhvdmVyYWJsZSA9PSBudWxsIHx8IGRhdGEuaG92ZXJhYmxlKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLmhvdmVyYWJsZSA9IHNoYXBlLmhvdmVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuaG92ZXJDb25uZWN0ID0gdGV4dFNoYXBlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5ob3ZlckNvbm5lY3QgPSBzaGFwZS5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5ob3ZlcmFibGUgPSBzaGFwZS5ob3ZlcmFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSxzaGFwZSk7XHJcbiAgICAgICAgICAgICAgICBlY0RhdGEucGFjayhcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhcGUsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzZXJpZXNOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB0aGlzLmRlZXBRdWVyeShxdWVyeVRhcmdldCwgJ3Rvb2x0aXAnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKHRleHRTaGFwZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVjRGF0YS5wYWNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2VyaWVzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogdGhpcy5kZWVwUXVlcnkocXVlcnlUYXJnZXQsICd0b29sdGlwJylcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSwgMCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChzaGFwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9zZWxlY3RlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvLyDmt7vliqDmoIfms6hcclxuICAgICAgICBfYnVpbGRNYXJrIDogZnVuY3Rpb24gKG1hcFR5cGUsIG1hcFNlcmllcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJpZXNJbmRleFRvTWFwVHlwZSA9IHRoaXMuX3Nlcmllc0luZGV4VG9NYXBUeXBlIHx8IHt9O1xyXG4gICAgICAgICAgICB0aGlzLm1hcmtBdHRhY2hTdHlsZSA9IHRoaXMubWFya0F0dGFjaFN0eWxlIHx8IHt9O1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybS5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS50cmFuc2Zvcm0udG9wXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGlmIChtYXBUeXBlID09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSBbMCwgMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgc0lkeCBpbiBtYXBTZXJpZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nlcmllc0luZGV4VG9NYXBUeXBlW3NJZHhdID0gbWFwVHlwZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya0F0dGFjaFN0eWxlW3NJZHhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogcG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgX21hcFR5cGUgOiBtYXBUeXBlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZE1hcmsoc0lkeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOS9jee9rui9rOaNolxyXG4gICAgICAgIGdldE1hcmtDb29yZCA6IGZ1bmN0aW9uIChzZXJpZXNJbmRleCwgbXBEYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobXBEYXRhLmdlb0Nvb3JkIHx8IF9nZW9Db29yZFttcERhdGEubmFtZV0pXHJcbiAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2VvMnBvcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Nlcmllc0luZGV4VG9NYXBUeXBlW3Nlcmllc0luZGV4XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtcERhdGEuZ2VvQ29vcmQgfHwgX2dlb0Nvb3JkW21wRGF0YS5uYW1lXVxyXG4gICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICA6IFswLCAwXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGdldE1hcmtHZW8gOiBmdW5jdGlvbihtcERhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1wRGF0YS5nZW9Db29yZCB8fCBfZ2VvQ29vcmRbbXBEYXRhLm5hbWVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX25hbWVDaGFuZ2UgOiBmdW5jdGlvbiAobWFwVHlwZSwgbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZU1hcFttYXBUeXBlXVtuYW1lXSB8fCBuYW1lO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qC55o2ubGFibGUuZm9ybWF06K6h566XbGFiZWwgdGV4dFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldExhYmVsVGV4dCA6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgcXVlcnlUYXJnZXQsIHN0YXR1cykge1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVyID0gdGhpcy5kZWVwUXVlcnkoXHJcbiAgICAgICAgICAgICAgICBxdWVyeVRhcmdldCxcclxuICAgICAgICAgICAgICAgICdpdGVtU3R5bGUuJyArIHN0YXR1cyArICcubGFiZWwuZm9ybWF0dGVyJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZm9ybWF0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZvcm1hdHRlciA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlci5jYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2hhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXIucmVwbGFjZSgne2F9Jywne2EwfScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tifScsJ3tiMH0nKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXIucmVwbGFjZSgne2EwfScsIG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3tiMH0nLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBfZmluZE1hcFR5cGVCeVBvcyA6IGZ1bmN0aW9uIChteCwgbXkpIHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgdmFyIGxlZnQ7XHJcbiAgICAgICAgICAgIHZhciB0b3A7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aDtcclxuICAgICAgICAgICAgdmFyIGhlaWdodDtcclxuICAgICAgICAgICAgZm9yICh2YXIgbWFwVHlwZSBpbiB0aGlzLl9tYXBEYXRhTWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgIGlmICghdHJhbnNmb3JtIHx8ICF0aGlzLl9yb2FtTWFwW21hcFR5cGVdIHx8ICF0aGlzLl9hY3RpdmVNYXBUeXBlW21hcFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxlZnQgPSB0cmFuc2Zvcm0ubGVmdDtcclxuICAgICAgICAgICAgICAgIHRvcCA9IHRyYW5zZm9ybS50b3A7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHRyYW5zZm9ybS53aWR0aDtcclxuICAgICAgICAgICAgICAgIGhlaWdodCA9IHRyYW5zZm9ybS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobXggPj0gbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICYmIG14IDw9IChsZWZ0ICsgd2lkdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbXkgPj0gdG9wXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgbXkgPD0gKHRvcCArIGhlaWdodClcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXBUeXBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOa7mui9rue8qeaUviBcclxuICAgICAgICAgKi9cclxuICAgICAgICBfX29ubW91c2V3aGVlbCA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hhcGVMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5zaGFwZUxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2hhcGUgPSB0aGlzLnNoYXBlTGlzdFtpXTtcclxuICAgICAgICAgICAgICAgIC8vIElmIGFueSBzaGFwZSBpcyBzdGlsbCBhbmltYXRpbmdcclxuICAgICAgICAgICAgICAgIGlmIChzaGFwZS5fX2FuaW1hdGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gcGFyYW1zLmV2ZW50O1xyXG4gICAgICAgICAgICB2YXIgbXggPSB6ckV2ZW50LmdldFgoZXZlbnQpO1xyXG4gICAgICAgICAgICB2YXIgbXkgPSB6ckV2ZW50LmdldFkoZXZlbnQpO1xyXG4gICAgICAgICAgICB2YXIgZGVsdGE7XHJcbiAgICAgICAgICAgIHZhciBldmVudERlbHRhID0genJFdmVudC5nZXREZWx0YShldmVudCk7XHJcbiAgICAgICAgICAgIC8vZXZlbnREZWx0YSA9IGV2ZW50RGVsdGEgPiAwID8gKC0xKSA6IDE7XHJcbiAgICAgICAgICAgIHZhciBtYXBUeXBlO1xyXG4gICAgICAgICAgICB2YXIgbWFwVHlwZUNvbnRyb2wgPSBwYXJhbXMubWFwVHlwZUNvbnRyb2w7XHJcbiAgICAgICAgICAgIGlmICghbWFwVHlwZUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sID0ge307XHJcbiAgICAgICAgICAgICAgICBtYXBUeXBlID0gdGhpcy5fZmluZE1hcFR5cGVCeVBvcyhteCwgbXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcFR5cGUgJiYgdGhpcy5fcm9hbU1hcFttYXBUeXBlXSAmJiB0aGlzLl9yb2FtTWFwW21hcFR5cGVdICE9ICdtb3ZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sW21hcFR5cGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2NhbGVQb2x5bGluZShzaGFwZVN0eWxlLCBkZWx0YSkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaGFwZVN0eWxlLnBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IHNoYXBlU3R5bGUucG9pbnRMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50WzBdICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50WzFdICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9JZiBzbW9vdGhuZXNzID4gMFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRyb2xQb2ludExpc3QgPSBzaGFwZVN0eWxlLmNvbnRyb2xQb2ludExpc3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbFBvaW50TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udHJvbFBvaW50TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBjb250cm9sUG9pbnRMaXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludFswXSAqPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRbMV0gKj0gZGVsdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzY2FsZU1hcmtsaW5lKHNoYXBlU3R5bGUsIGRlbHRhKSB7XHJcbiAgICAgICAgICAgICAgICBzaGFwZVN0eWxlLnhTdGFydCAqPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHNoYXBlU3R5bGUueVN0YXJ0ICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgc2hhcGVTdHlsZS54RW5kICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgc2hhcGVTdHlsZS55RW5kICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoYXBlU3R5bGUuY3BYMSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVTdHlsZS5jcFgxICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlU3R5bGUuY3BZMSAqPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGhhdmVTY2FsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKG1hcFR5cGUgaW4gbWFwVHlwZUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXBUeXBlQ29udHJvbFttYXBUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhdmVTY2FsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0udHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gdHJhbnNmb3JtLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvcCA9IHRyYW5zZm9ybS50b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdHJhbnNmb3JtLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0cmFuc2Zvcm0uaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS9jee9rui9rOe7j+e6rOW6plxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBnZW9BbmRQb3MgPSB0aGlzLnBvczJnZW8obWFwVHlwZSwgW214IC0gbGVmdCwgbXkgLSB0b3BdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnREZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAxLjI7ICAgICAgICAvLyDmlL7lpKdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NjYWxlTGltaXRNYXBbbWFwVHlwZV0ubWF4ICE9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHRyYW5zZm9ybS5iYXNlU2NhbGUgPj0gdGhpcy5fc2NhbGVMaW1pdE1hcFttYXBUeXBlXS5tYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgICAgIC8vIOe8qeaUvumZkOWItlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YSA9IDEgLyAxLjI7ICAgIC8vIOe8qeWwj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NhbGVMaW1pdE1hcFttYXBUeXBlXS5taW4gIT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdHJhbnNmb3JtLmJhc2VTY2FsZSA8PSB0aGlzLl9zY2FsZUxpbWl0TWFwW21hcFR5cGVdLm1pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOyAgICAgLy8g57yp5pS+6ZmQ5Yi2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLmJhc2VTY2FsZSAqPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uc2NhbGUueCAqPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uc2NhbGUueSAqPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0ud2lkdGggPSB3aWR0aCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5oZWlnaHQgPSBoZWlnaHQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLmhhc1JvYW0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0udHJhbnNmb3JtID0gdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOe7j+e6rOW6pui9rOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIGdlb0FuZFBvcyA9IHRoaXMuZ2VvMnBvcyhtYXBUeXBlLCBnZW9BbmRQb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS/neaMgeinhuinieS4reW/g1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS5sZWZ0IC09IGdlb0FuZFBvc1swXSAtIChteCAtIGxlZnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS50b3AgLT0gZ2VvQW5kUG9zWzFdIC0gKG15IC0gdG9wKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRWZmZWN0U2hhcGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLnNoYXBlTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXBlID0gdGhpcy5zaGFwZUxpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNoYXBlLl9tYXBUeXBlID09IG1hcFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaGFwZVR5cGUgPSBzaGFwZS50eXBlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNoYXBlU3R5bGUgPSBzaGFwZS5zdHlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnBvc2l0aW9uWzBdID0gdHJhbnNmb3JtLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5wb3NpdGlvblsxXSA9IHRyYW5zZm9ybS50b3A7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzaGFwZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwYXRoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjdGFuZ2xlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdlbGxpcHNlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUuc2NhbGVbMF0gKj0gZGVsdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnNjYWxlWzFdICo9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtYXJrLWxpbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZU1hcmtsaW5lKHNoYXBlU3R5bGUsIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZVBvbHlsaW5lKHNoYXBlU3R5bGUsIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2hhcGUtYnVuZGxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzaGFwZVN0eWxlLnNoYXBlTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN1YlNoYXBlID0gc2hhcGVTdHlsZS5zaGFwZUxpc3Rbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ViU2hhcGUudHlwZSA9PSAnbWFyay1saW5lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTWFya2xpbmUoc3ViU2hhcGUuc3R5bGUsIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN1YlNoYXBlLnR5cGUgPT0gJ3BvbHlsaW5lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlUG9seWxpbmUoc3ViU2hhcGUuc3R5bGUsIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpY29uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb0FuZFBvcyA9IHRoaXMuZ2VvMnBvcyhtYXBUeXBlLCBzaGFwZS5fZ2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVTdHlsZS54ID0gc2hhcGVTdHlsZS5feCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9BbmRQb3NbMF0gLSBzaGFwZVN0eWxlLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVTdHlsZS55ID0gc2hhcGVTdHlsZS5feSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9BbmRQb3NbMV0gLSBzaGFwZVN0eWxlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb0FuZFBvcyA9IHRoaXMuZ2VvMnBvcyhtYXBUeXBlLCBzaGFwZS5fZ2VvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGVTdHlsZS54ID0gZ2VvQW5kUG9zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZVN0eWxlLnkgPSBnZW9BbmRQb3NbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFwZVR5cGUgPT0gJ3RleHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZS5fc3R5bGUueCA9IHNoYXBlLmhpZ2hsaWdodFN0eWxlLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gZ2VvQW5kUG9zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUuX3N0eWxlLnkgPSBzaGFwZS5oaWdobGlnaHRTdHlsZS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IGdlb0FuZFBvc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnpyLm1vZFNoYXBlKHNoYXBlLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGF2ZVNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICB6ckV2ZW50LnN0b3AoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy56ci5yZWZyZXNoTmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoRGVsYXlUaWNrZXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVmcmVzaERlbGF5VGlja2V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmICYmIHNlbGYuc2hhcGVMaXN0ICYmIHNlbGYuYW5pbWF0aW9uRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci5kaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICBlY0NvbmZpZy5FVkVOVC5NQVBfUk9BTSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAge3R5cGUgOiAnc2NhbGUnfSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2hhcnRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIF9fb25tb3VzZWRvd24gOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNoYXBlTGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBwYXJhbXMudGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5kcmFnZ2FibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBwYXJhbXMuZXZlbnQ7XHJcbiAgICAgICAgICAgIHZhciBteCA9IHpyRXZlbnQuZ2V0WChldmVudCk7XHJcbiAgICAgICAgICAgIHZhciBteSA9IHpyRXZlbnQuZ2V0WShldmVudCk7XHJcbiAgICAgICAgICAgIHZhciBtYXBUeXBlID0gdGhpcy5fZmluZE1hcFR5cGVCeVBvcyhteCwgbXkpO1xyXG4gICAgICAgICAgICBpZiAobWFwVHlwZSAmJiB0aGlzLl9yb2FtTWFwW21hcFR5cGVdICYmIHRoaXMuX3JvYW1NYXBbbWFwVHlwZV0gIT0gJ3NjYWxlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2Vkb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX214ID0gbXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9teSA9IG15O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyTWFwVHlwZSA9IG1hcFR5cGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpyLm9uKHpyQ29uZmlnLkVWRU5ULk1PVVNFVVAsIHRoaXMuX29ubW91c2V1cCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuenIub24oenJDb25maWcuRVZFTlQuTU9VU0VNT1ZFLCBzZWxmLl9vbm1vdXNlbW92ZSk7XHJcbiAgICAgICAgICAgICAgICB9LDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICBfX29ubW91c2Vtb3ZlIDogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX21vdXNlZG93biB8fCAhdGhpcy5faXNBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IHBhcmFtcy5ldmVudDtcclxuICAgICAgICAgICAgdmFyIG14ID0genJFdmVudC5nZXRYKGV2ZW50KTtcclxuICAgICAgICAgICAgdmFyIG15ID0genJFdmVudC5nZXRZKGV2ZW50KTtcclxuICAgICAgICAgICAgdmFyIHRyYW5zZm9ybSA9IHRoaXMuX21hcERhdGFNYXBbdGhpcy5fY3VyTWFwVHlwZV0udHJhbnNmb3JtO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0uaGFzUm9hbSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS5sZWZ0IC09IHRoaXMuX214IC0gbXg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS50b3AgLT0gdGhpcy5fbXkgLSBteTtcclxuICAgICAgICAgICAgdGhpcy5fbXggPSBteDtcclxuICAgICAgICAgICAgdGhpcy5fbXkgPSBteTtcclxuICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFt0aGlzLl9jdXJNYXBUeXBlXS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuc2hhcGVMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaGFwZUxpc3RbaV0uX21hcFR5cGUgPT0gdGhpcy5fY3VyTWFwVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcGVMaXN0W2ldLnBvc2l0aW9uWzBdID0gdHJhbnNmb3JtLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3RbaV0ucG9zaXRpb25bMV0gPSB0cmFuc2Zvcm0udG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuenIubW9kU2hhcGUodGhpcy5zaGFwZUxpc3RbaV0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VDZW50ZXIuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBlY0NvbmZpZy5FVkVOVC5NQVBfUk9BTSxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5ldmVudCxcclxuICAgICAgICAgICAgICAgIHt0eXBlIDogJ21vdmUnfSxcclxuICAgICAgICAgICAgICAgIHRoaXMubXlDaGFydFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5jbGVhckVmZmVjdFNoYXBlKHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLnpyLnJlZnJlc2hOZXh0RnJhbWUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2p1c3RNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgenJFdmVudC5zdG9wKGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIF9fb25tb3VzZXVwIDogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBwYXJhbXMuZXZlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuX214ID0genJFdmVudC5nZXRYKGV2ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5fbXkgPSB6ckV2ZW50LmdldFkoZXZlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VzZWRvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fanVzdE1vdmUgJiYgc2VsZi5hbmltYXRpb25FZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2p1c3RNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnpyLnVuKHpyQ29uZmlnLkVWRU5ULk1PVVNFTU9WRSwgc2VsZi5fb25tb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi56ci51bih6ckNvbmZpZy5FVkVOVC5NT1VTRVVQLCBzZWxmLl9vbm1vdXNldXApO1xyXG4gICAgICAgICAgICB9LDEyMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmvKvmuLjnu4Tku7bkuovku7blk43lupRcclxuICAgICAgICAgKi9cclxuICAgICAgICBfX29ucm9hbWNvbnRyb2xsZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xyXG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBwYXJhbXMuZXZlbnQ7XHJcbiAgICAgICAgICAgIGV2ZW50LnpyZW5kZXJYID0gdGhpcy56ci5nZXRXaWR0aCgpIC8gMjtcclxuICAgICAgICAgICAgZXZlbnQuenJlbmRlclkgPSB0aGlzLnpyLmdldEhlaWdodCgpIC8gMjtcclxuICAgICAgICAgICAgdmFyIG1hcFR5cGVDb250cm9sID0gcGFyYW1zLm1hcFR5cGVDb250cm9sO1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gMDtcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgc3RlcCA9IHBhcmFtcy5zdGVwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHBhcmFtcy5yb2FtVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnc2NhbGVVcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuenJlbmRlckRlbHRhID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fb25tb3VzZXdoZWVsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogbWFwVHlwZUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXNlICdzY2FsZURvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnpyZW5kZXJEZWx0YSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19vbm1vdXNld2hlZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBtYXBUeXBlQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSAtc3RlcDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IHN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gLXN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHN0ZXA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIHZhciBjdXJNYXBUeXBlO1xyXG4gICAgICAgICAgICBmb3IgKGN1ck1hcFR5cGUgaW4gbWFwVHlwZUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbWFwRGF0YU1hcFtjdXJNYXBUeXBlXSB8fCAhdGhpcy5fYWN0aXZlTWFwVHlwZVtjdXJNYXBUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gdGhpcy5fbWFwRGF0YU1hcFtjdXJNYXBUeXBlXS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0uaGFzUm9hbSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0ubGVmdCAtPSBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLnRvcCAtPSB0b3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW2N1ck1hcFR5cGVdLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuc2hhcGVMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY3VyTWFwVHlwZSA9IHRoaXMuc2hhcGVMaXN0W2ldLl9tYXBUeXBlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtYXBUeXBlQ29udHJvbFtjdXJNYXBUeXBlXSB8fCAhdGhpcy5fYWN0aXZlTWFwVHlwZVtjdXJNYXBUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gdGhpcy5fbWFwRGF0YU1hcFtjdXJNYXBUeXBlXS50cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXBlTGlzdFtpXS5wb3NpdGlvblswXSA9IHRyYW5zZm9ybS5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3RbaV0ucG9zaXRpb25bMV0gPSB0cmFuc2Zvcm0udG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy56ci5tb2RTaGFwZSh0aGlzLnNoYXBlTGlzdFtpXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci5kaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIGVjQ29uZmlnLkVWRU5ULk1BUF9ST0FNLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLmV2ZW50LFxyXG4gICAgICAgICAgICAgICAge3R5cGUgOiAnbW92ZSd9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5teUNoYXJ0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRWZmZWN0U2hhcGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuenIucmVmcmVzaE5leHRGcmFtZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlyY2V0aW9uVGltZXIpO1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyY2V0aW9uVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb25FZmZlY3QoKTtcclxuICAgICAgICAgICAgfSwgMTUwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRhdGFSYW5nZSBob3Zlcmxpbmsg5LqL5Lu25ZON5bqUXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX19vbmRyaG92ZXJsaW5rIDogZnVuY3Rpb24ocGFyYW0pIHtcclxuICAgICAgICAgICAgdmFyIGN1ck1hcFR5cGU7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0aGlzLnNoYXBlTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGN1ck1hcFR5cGUgPSB0aGlzLnNoYXBlTGlzdFtpXS5fbWFwVHlwZTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faG92ZXJMaW5rTWFwW2N1ck1hcFR5cGVdIHx8ICF0aGlzLl9hY3RpdmVNYXBUeXBlW2N1ck1hcFR5cGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVjRGF0YS5nZXQodGhpcy5zaGFwZUxpc3RbaV0sICd2YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgPj0gcGFyYW0udmFsdWVNaW4gJiYgdmFsdWUgPD0gcGFyYW0udmFsdWVNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnpyLmFkZEhvdmVyU2hhcGUodGhpcy5zaGFwZUxpc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDngrnlh7vlk43lupQgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25jbGljayA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2xpY2sgfHwgIXBhcmFtcy50YXJnZXQgfHwgdGhpcy5fanVzdE1vdmUgfHwgcGFyYW1zLnRhcmdldC50eXBlID09ICdpY29uJykge1xyXG4gICAgICAgICAgICAgICAgLy8g5rKh5pyJ5Zyo5b2T5YmN5a6e5L6L5LiK5Y+R55Sf54K55Ye755u05o6l6L+U5ZueXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc0NsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gcGFyYW1zLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSB0YXJnZXQuc3R5bGUuX25hbWU7XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLnNoYXBlTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBtYXBUeXBlID0gdGFyZ2V0Ll9tYXBUeXBlIHx8ICcnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkTW9kZVttYXBUeXBlXSA9PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiB0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQjOS4gOWcsOWbvuexu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFtwXSAmJiB0aGlzLl9tYXBUeXBlTWFwW3BdID09IG1hcFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aSN5L2N6YKj5Lqb55Sf5pWIc2hhcGXvvIjljIXmi6zmloflrZfvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcGVMaXN0W2ldLnN0eWxlLl9uYW1lID09IHAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5zaGFwZUxpc3RbaV0uX21hcFR5cGUgPT0gbWFwVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3RbaV0uc3R5bGUgPSB0aGlzLnNoYXBlTGlzdFtpXS5fc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy56ci5tb2RTaGFwZSh0aGlzLnNoYXBlTGlzdFtpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCAhPSBuYW1lICYmICh0aGlzLl9zZWxlY3RlZFtwXSA9IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkW25hbWVdID0gIXRoaXMuX3NlbGVjdGVkW25hbWVdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8g5pu05paw5b2T5YmN54K55Ye7c2hhcGXvvIjljIXmi6zmloflrZfvvIlcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hhcGVMaXN0W2ldLnN0eWxlLl9uYW1lID09IG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnNoYXBlTGlzdFtpXS5fbWFwVHlwZSA9PSBtYXBUeXBlXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFtuYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXBlTGlzdFtpXS5zdHlsZSA9IHRoaXMuc2hhcGVMaXN0W2ldLmhpZ2hsaWdodFN0eWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3RbaV0uc3R5bGUgPSB0aGlzLnNoYXBlTGlzdFtpXS5fc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuenIubW9kU2hhcGUodGhpcy5zaGFwZUxpc3RbaV0uaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci5kaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIGVjQ29uZmlnLkVWRU5ULk1BUF9TRUxFQ1RFRCxcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5ldmVudCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZCA6IHRoaXMuX3NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA6IG5hbWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15Q2hhcnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy56ci5yZWZyZXNoTmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuenIudHJpZ2dlcihcclxuICAgICAgICAgICAgICAgICAgICB6ckNvbmZpZy5FVkVOVC5NT1VTRU1PVkUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmV2ZW50XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LDEwMCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yi35pawXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmVmcmVzaCA6IGZ1bmN0aW9uIChuZXdPcHRpb24pIHtcclxuICAgICAgICAgICAgaWYgKG5ld09wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBuZXdPcHRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcmllcyA9IG5ld09wdGlvbi5zZXJpZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXBEYXRhUmVxdWlyZUNvdW50ZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2t1cFNoYXBlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2J1aWxkU2hhcGUoKTtcclxuICAgICAgICAgICAgdGhpcy56ci5yZWZyZXNoSG92ZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWAvOWfn+WTjeW6lFxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbVxyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0dXNcclxuICAgICAgICAgKi9cclxuICAgICAgICBvbmRhdGFSYW5nZSA6IGZ1bmN0aW9uIChwYXJhbSwgc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5kYXRhUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzLm5lZWRSZWZyZXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlubPpnaLlnZDmoIfovaznu4/nuqzluqZcclxuICAgICAgICAgKi9cclxuICAgICAgICBwb3MyZ2VvIDogZnVuY3Rpb24gKG1hcFR5cGUsIHApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0ucHJvamVjdGlvbi5wb3MyZ2VvKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS50cmFuc2Zvcm0sIHBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWFrOW8gOaOpeWPoyA6IOW5s+mdouWdkOagh+i9rOe7j+e6rOW6plxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldEdlb0J5UG9zIDogZnVuY3Rpb24gKG1hcFR5cGUsIHApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS50cmFuc2Zvcm0ubGVmdCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0udHJhbnNmb3JtLnRvcFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBpZiAocCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBwWzBdIC09IHBvc2l0aW9uWzBdO1xyXG4gICAgICAgICAgICAgICAgcFsxXSAtPSBwb3NpdGlvblsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHAueCAtPSBwb3NpdGlvblswXTtcclxuICAgICAgICAgICAgICAgIHAueSAtPSBwb3NpdGlvblsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3MyZ2VvKG1hcFR5cGUsIHApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog57uP57qs5bqm6L2s5bmz6Z2i5Z2Q5qCHXHJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHBcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZW8ycG9zIDogZnVuY3Rpb24gKG1hcFR5cGUsIHApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0ucHJvamVjdGlvbi5nZW8ycG9zKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS50cmFuc2Zvcm0sIHBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWFrOW8gOaOpeWPoyA6IOe7j+e6rOW6pui9rOW5s+mdouWdkOagh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFBvc0J5R2VvIDogZnVuY3Rpb24gKG1hcFR5cGUsIHApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBvcyA9IHRoaXMuZ2VvMnBvcyhtYXBUeXBlLCBwKTtcclxuICAgICAgICAgICAgcG9zWzBdICs9IHRoaXMuX21hcERhdGFNYXBbbWFwVHlwZV0udHJhbnNmb3JtLmxlZnQ7XHJcbiAgICAgICAgICAgIHBvc1sxXSArPSB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybS50b3A7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlhazlvIDmjqXlj6MgOiDlnLDlm77lj4LogIPlnZDmoIdcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRNYXBQb3NpdGlvbiA6IGZ1bmN0aW9uIChtYXBUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS50cmFuc2Zvcm0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXBEYXRhTWFwW21hcFR5cGVdLnRyYW5zZm9ybS5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwRGF0YU1hcFttYXBUeXBlXS50cmFuc2Zvcm0udG9wXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKlxyXG4gICAgICAgIGFwcGVuZFNoYXBlIDogZnVuY3Rpb24gKG1hcFR5cGUsIHNoYXBlTGlzdCkge1xyXG4gICAgICAgICAgICBzaGFwZUxpc3QgPSBzaGFwZUxpc3QgaW5zdGFuY2VvZiBBcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNoYXBlTGlzdCA6IFtzaGFwZUxpc3RdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNoYXBlTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc2hhcGVMaXN0W2ldLnpsZXZlbCA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlTGlzdFtpXS56bGV2ZWwgPSB0aGlzLmdldFpsZXZlbEJhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZUxpc3RbaV0ueiA9IHRoaXMuZ2V0WkJhc2UoKSArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzaGFwZUxpc3RbaV0uX21hcFR5cGUgPSBtYXBUeXBlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChzaGFwZUxpc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy56ci5hZGRTaGFwZShzaGFwZUxpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuenIucmVmcmVzaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKi9cclxuICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOmHiuaUvuWQjuWunuS+i+S4jeWPr+eUqFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIG9uYmVmb3JEaXNwb3NlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuenIudW4oenJDb25maWcuRVZFTlQuTU9VU0VXSEVFTCwgdGhpcy5fb25tb3VzZXdoZWVsKTtcclxuICAgICAgICAgICAgdGhpcy56ci51bih6ckNvbmZpZy5FVkVOVC5NT1VTRURPV04sIHRoaXMuX29ubW91c2Vkb3duKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2VudGVyLnVuYmluZChcclxuICAgICAgICAgICAgICAgIGVjQ29uZmlnLkVWRU5ULlJPQU1DT05UUk9MTEVSLCB0aGlzLl9vbnJvYW1jb250cm9sbGVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci51bmJpbmQoXHJcbiAgICAgICAgICAgICAgICBlY0NvbmZpZy5FVkVOVC5EQVRBX1JBTkdFX0hPVkVSTElOSywgdGhpcy5fb25kcmhvdmVybGlua1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHpyVXRpbC5pbmhlcml0cyhNYXAsIENoYXJ0QmFzZSk7XHJcbiAgICBcclxuICAgIC8vIOWbvuihqOazqOWGjFxyXG4gICAgcmVxdWlyZSgnLi4vY2hhcnQnKS5kZWZpbmUoJ21hcCcsIE1hcCk7XHJcbiAgICBcclxuICAgIHJldHVybiBNYXA7XHJcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L1dvcmtzcGFjZS9naXRodWIvZWNoYXJ0cy14LWV4YW1wbGVzMi9+L2VjaGFydHMvY2hhcnQvbWFwLmpzXG4gKiovIiwiLyoqXHJcbiAqIGVjaGFydHPnu4Tku7bvvJrlgLzln59cclxuICpcclxuICogQGRlc2MgZWNoYXJ0c+WfuuS6jkNhbnZhc++8jOe6r0phdmFzY3JpcHTlm77ooajlupPvvIzmj5Dkvpvnm7Top4LvvIznlJ/liqjvvIzlj6/kuqTkupLvvIzlj6/kuKrmgKfljJblrprliLbnmoTmlbDmja7nu5/orqHlm77ooajjgIJcclxuICogQGF1dGhvciBLZW5lciAoQEtlbmVyLeael+WzsCwga2VuZXIubGluZmVuZ0BnbWFpbC5jb20pXHJcbiAqXHJcbiAqL1xyXG5kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUpIHtcclxuICAgIHZhciBCYXNlID0gcmVxdWlyZSgnLi9iYXNlJyk7XHJcbiAgICBcclxuICAgIC8vIOWbvuW9ouS+nei1llxyXG4gICAgdmFyIFRleHRTaGFwZSA9IHJlcXVpcmUoJ3pyZW5kZXJqcy9zaGFwZS9UZXh0Jyk7XHJcbiAgICB2YXIgUmVjdGFuZ2xlU2hhcGUgPSByZXF1aXJlKCd6cmVuZGVyanMvc2hhcGUvUmVjdGFuZ2xlJyk7XHJcbiAgICB2YXIgSGFuZGxlUG9seWdvblNoYXBlID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFwZS9IYW5kbGVQb2x5Z29uJyk7XHJcblxyXG4gICAgdmFyIGVjQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XHJcbiAgICAvLyDlgLzln59cclxuICAgIGVjQ29uZmlnLmRhdGFSYW5nZSA9IHtcclxuICAgICAgICB6bGV2ZWw6IDAsICAgICAgICAgICAgICAgICAgLy8g5LiA57qn5bGC5Y+gXHJcbiAgICAgICAgejogNCwgICAgICAgICAgICAgICAgICAgICAgIC8vIOS6jOe6p+WxguWPoFxyXG4gICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgb3JpZW50OiAndmVydGljYWwnLCAgICAgICAgLy8g5biD5bGA5pa55byP77yM6buY6K6k5Li65Z6C55u05biD5bGA77yM5Y+v6YCJ5Li677yaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2hvcml6b250YWwnIMKmICd2ZXJ0aWNhbCdcclxuICAgICAgICB4OiAnbGVmdCcsICAgICAgICAgICAgICAgICAvLyDmsLTlubPlronmlL7kvY3nva7vvIzpu5jorqTkuLrlhajlm77lt6blr7npvZDvvIzlj6/pgInkuLrvvJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAnY2VudGVyJyDCpiAnbGVmdCcgwqYgJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIMKmIHtudW1iZXJ977yIeOWdkOagh++8jOWNleS9jXB477yJXHJcbiAgICAgICAgeTogJ2JvdHRvbScsICAgICAgICAgICAgICAgLy8g5Z6C55u05a6J5pS+5L2N572u77yM6buY6K6k5Li65YWo5Zu+5bqV6YOo77yM5Y+v6YCJ5Li677yaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ3RvcCcgwqYgJ2JvdHRvbScgwqYgJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDCpiB7bnVtYmVyfe+8iHnlnZDmoIfvvIzljZXkvY1weO+8iVxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiAnI2NjYycsICAgICAgIC8vIOWAvOWfn+i+ueahhuminOiJslxyXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLCAgICAgICAgICAgIC8vIOWAvOWfn+i+ueahhue6v+Wuve+8jOWNleS9jXB477yM6buY6K6k5Li6MO+8iOaXoOi+ueahhu+8iVxyXG4gICAgICAgIHBhZGRpbmc6IDUsICAgICAgICAgICAgICAgIC8vIOWAvOWfn+WGhei+uei3ne+8jOWNleS9jXB477yM6buY6K6k5ZCE5pa55ZCR5YaF6L656Led5Li6Ne+8jFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaOpeWPl+aVsOe7hOWIhuWIq+iuvuWumuS4iuWPs+S4i+W3pui+uei3ne+8jOWQjGNzc1xyXG4gICAgICAgIGl0ZW1HYXA6IDEwLCAgICAgICAgICAgICAgIC8vIOWQhOS4qml0ZW3kuYvpl7TnmoTpl7TpmpTvvIzljZXkvY1weO+8jOm7mOiupOS4ujEw77yMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5qiq5ZCR5biD5bGA5pe25Li65rC05bmz6Ze06ZqU77yM57q15ZCR5biD5bGA5pe25Li657q15ZCR6Ze06ZqUXHJcbiAgICAgICAgaXRlbVdpZHRoOiAyMCwgICAgICAgICAgICAgLy8g5YC85Z+f5Zu+5b2i5a695bqm77yM57q/5oCn5riQ5Y+Y5rC05bmz5biD5bGA5a695bqm5Li66K+l5YC8ICogMTBcclxuICAgICAgICBpdGVtSGVpZ2h0OiAxNCwgICAgICAgICAgICAvLyDlgLzln5/lm77lvaLpq5jluqbvvIznur/mgKfmuJDlj5jlnoLnm7TluIPlsYDpq5jluqbkuLror6XlgLwgKiAxMFxyXG4gICAgICAgIC8vIG1pbjogbnVsbCwgICAgICAgICAgICAgIC8vIOacgOWwj+WAvFxyXG4gICAgICAgIC8vIG1heDogbnVsbCwgICAgICAgICAgICAgIC8vIOacgOWkp+WAvFxyXG4gICAgICAgIHByZWNpc2lvbjogMCwgICAgICAgICAgICAgIC8vIOWwj+aVsOeyvuW6pu+8jOm7mOiupOS4ujDvvIzml6DlsI/mlbDngrlcclxuICAgICAgICBzcGxpdE51bWJlcjogNSwgICAgICAgICAgICAvLyDliIblibLmrrXmlbDvvIzpu5jorqTkuLo177yM5Li6MOaXtuS4uue6v+aAp+a4kOWPmFxyXG4gICAgICAgIGNhbGN1bGFibGU6IGZhbHNlLCAgICAgICAgIC8vIOaYr+WQpuWAvOWfn+a8q+a4uO+8jOWQr+eUqOWQjuaXoOinhnNwbGl0TnVtYmVy77yM57q/5oCn5riQ5Y+YXHJcbiAgICAgICAgc2VsZWN0ZWRNb2RlOiB0cnVlLCAgICAgICAgLy8g6YCJ5oup5qih5byP77yM6buY6K6k5byA5ZCv5YC85Z+f5byA5YWzXHJcbiAgICAgICAgaG92ZXJMaW5rOiB0cnVlLFxyXG4gICAgICAgIHJlYWx0aW1lOiB0cnVlLFxyXG4gICAgICAgIGNvbG9yOlsnIzAwNmVkZCcsJyNlMGZmZmYnXSwvL+minOiJsiBcclxuICAgICAgICAvLyBmb3JtYXR0ZXI6IG51bGwsXHJcbiAgICAgICAgLy8gdGV4dDpbJ+mrmCcsJ+S9jiddLCAgICAgICAgIC8vIOaWh+acrO+8jOm7mOiupOS4uuaVsOWAvOaWh+acrFxyXG4gICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMzMzMnICAgICAgICAgIC8vIOWAvOWfn+aWh+Wtl+minOiJslxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHpyVXRpbCA9IHJlcXVpcmUoJ3pyZW5kZXJqcy90b29sL3V0aWwnKTtcclxuICAgIHZhciB6ckV2ZW50ID0gcmVxdWlyZSgnenJlbmRlcmpzL3Rvb2wvZXZlbnQnKTtcclxuICAgIHZhciB6ckFyZWEgPSByZXF1aXJlKCd6cmVuZGVyanMvdG9vbC9hcmVhJyk7XHJcbiAgICB2YXIgenJDb2xvciA9IHJlcXVpcmUoJ3pyZW5kZXJqcy90b29sL2NvbG9yJyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoTpgKDlh73mlbBcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlQ2VudGVyIGVjaGFydOa2iOaBr+S4reW/g1xyXG4gICAgICogQHBhcmFtIHtaUmVuZGVyfSB6ciB6cmVuZGVy5a6e5L6LXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uIOWbvuihqOWPguaVsFxyXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBzZWxlY3RlZCDnlKjkuo7nirbmgIHkv53mjIFcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gRGF0YVJhbmdlKGVjVGhlbWUsIG1lc3NhZ2VDZW50ZXIsIHpyLCBvcHRpb24sIG15Q2hhcnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucXVlcnkob3B0aW9uLCAnZGF0YVJhbmdlLm1pbicpID09ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgIHx8IHR5cGVvZiB0aGlzLnF1ZXJ5KG9wdGlvbiwgJ2RhdGFSYW5nZS5tYXgnKSA9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdvcHRpb24uZGF0YVJhbmdlLm1pbiBvciBvcHRpb24uZGF0YVJhbmdlLm1heCBoYXMgbm90IGJlZW4gZGVmaW5lZC4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBCYXNlLmNhbGwodGhpcywgZWNUaGVtZSwgbWVzc2FnZUNlbnRlciwgenIsIG9wdGlvbiwgbXlDaGFydCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHNlbGYuX29uZHJpZnQgPSBmdW5jdGlvbihkeCwgZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19vbmRyaWZ0KHRoaXMsIGR4LCBkeSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLl9vbmRyYWdlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19vbmRyYWdlbmQoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlbGYuX2RhdGFSYW5nZVNlbGVjdGVkID0gZnVuY3Rpb24ocGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19kYXRhUmFuZ2VTZWxlY3RlZChwYXJhbSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWxmLl9kaXNwYXRjaEhvdmVyTGluayA9IGZ1bmN0aW9uKHBhcmFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9fZGlzcGF0Y2hIb3ZlckxpbmsocGFyYW0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VsZi5fb25ob3ZlcmxpbmsgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19vbmhvdmVybGluayhwYXJhbXMpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLl9yYW5nZSA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucmVmcmVzaChvcHRpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lc3NhZ2VDZW50ZXIuYmluZChlY0NvbmZpZy5FVkVOVC5IT1ZFUiwgdGhpcy5fb25ob3ZlcmxpbmspO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBEYXRhUmFuZ2UucHJvdG90eXBlID0ge1xyXG4gICAgICAgIHR5cGUgOiBlY0NvbmZpZy5DT01QT05FTlRfVFlQRV9EQVRBUkFOR0UsXHJcbiAgICAgICAgX3RleHRHYXAgOiAxMCwgLy8g6Z2e5YC85paH5a2X6Ze06ZqUXHJcbiAgICAgICAgX2J1aWxkU2hhcGUgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIOWAvOWfn+WFg+e0oOe7hOeahOS9jee9ruWPguaVsO+8jOmAmui/h+iuoeeul+aJgOW+l3gsIHksIHdpZHRoLCBoZWlnaHRcclxuICAgICAgICAgICAgdGhpcy5faXRlbUdyb3VwTG9jYXRpb24gPSB0aGlzLl9nZXRJdGVtR3JvdXBMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLl9idWlsZEJhY2tncm91bmQoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNwbGl0TnVtYmVyIDw9IDAgXHJcbiAgICAgICAgICAgICAgICB8fCB0aGlzLmRhdGFSYW5nZU9wdGlvbi5jYWxjdWxhYmxlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRHcmFkaWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5zaG93KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuc2hhcGVMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuenIuYWRkU2hhcGUodGhpcy5zaGFwZUxpc3RbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9zeW5jU2hhcGVGcm9tUmFuZ2UoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmnoTlu7rlm77kvovlnovnmoTlgLzln5/lhYPntKBcclxuICAgICAgICAgKi9cclxuICAgICAgICBfYnVpbGRJdGVtIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX3ZhbHVlVGV4dExpc3Q7XHJcbiAgICAgICAgICAgIHZhciBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBpdGVtTmFtZTtcclxuICAgICAgICAgICAgdmFyIGl0ZW1TaGFwZTtcclxuICAgICAgICAgICAgdmFyIHRleHRTaGFwZTtcclxuICAgICAgICAgICAgdmFyIGZvbnQgPSB0aGlzLmdldEZvbnQodGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBsYXN0WCA9IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLng7XHJcbiAgICAgICAgICAgIHZhciBsYXN0WSA9IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLnk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtV2lkdGggPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5pdGVtV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24uaXRlbUhlaWdodDtcclxuICAgICAgICAgICAgdmFyIGl0ZW1HYXAgPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5pdGVtR2FwO1xyXG4gICAgICAgICAgICB2YXIgdGV4dEhlaWdodCA9IHpyQXJlYS5nZXRUZXh0SGVpZ2h0KCflm70nLCBmb250KTtcclxuICAgICAgICAgICAgdmFyIGNvbG9yO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAndmVydGljYWwnXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmRhdGFSYW5nZU9wdGlvbi54ID09ICdyaWdodCdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBsYXN0WCA9IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi53aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIGl0ZW1XaWR0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbmVlZFZhbHVlVGV4dCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBuZWVkVmFsdWVUZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyDnrKzkuIDkuKrmloflrZdcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlID0gdGhpcy5fZ2V0VGV4dFNoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0WCwgbGFzdFksIHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRbMF1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RYICs9IHpyQXJlYS5nZXRUZXh0V2lkdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgdGhpcy5fdGV4dEdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RZICs9IHRleHRIZWlnaHQgKyB0aGlzLl90ZXh0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhcGUuc3R5bGUueSArPSB0ZXh0SGVpZ2h0IC8gMiArIHRoaXMuX3RleHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5zdHlsZS50ZXh0QmFzZWxpbmUgPSAnYm90dG9tJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChuZXcgVGV4dFNoYXBlKHRleHRTaGFwZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlbU5hbWUgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldENvbG9yQnlJbmRleChpKTtcclxuICAgICAgICAgICAgICAgIC8vIOWbvuW9olxyXG4gICAgICAgICAgICAgICAgaXRlbVNoYXBlID0gdGhpcy5fZ2V0SXRlbVNoYXBlKFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RYLCBsYXN0WSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtV2lkdGgsIGl0ZW1IZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3NlbGVjdGVkTWFwW2ldID8gY29sb3IgOiAnI2NjYycpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaXRlbVNoYXBlLl9pZHggPSBpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVNoYXBlLm9ubW91c2Vtb3ZlID0gdGhpcy5fZGlzcGF0Y2hIb3Zlckxpbms7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24uc2VsZWN0ZWRNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNoYXBlLmNsaWNrYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNoYXBlLm9uY2xpY2sgPSB0aGlzLl9kYXRhUmFuZ2VTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcGVMaXN0LnB1c2gobmV3IFJlY3RhbmdsZVNoYXBlKGl0ZW1TaGFwZSkpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAobmVlZFZhbHVlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgemxldmVsOiB0aGlzLmdldFpsZXZlbEJhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgejogdGhpcy5nZXRaQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggOiBsYXN0WCArIGl0ZW1XaWR0aCArIDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5IDogbGFzdFksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IHRoaXMuX3NlbGVjdGVkTWFwW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFN0eWxlLmNvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyNjY2MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZGF0YVtpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGb250OiBmb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEJhc2VsaW5lOiAndG9wJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRTdHlsZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicnVzaFR5cGU6ICdmaWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICd2ZXJ0aWNhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5kYXRhUmFuZ2VPcHRpb24ueCA9PSAncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5zdHlsZS54IC09IChpdGVtV2lkdGggKyAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhcGUuX2lkeCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLm9ubW91c2Vtb3ZlID0gdGhpcy5fZGlzcGF0Y2hIb3Zlckxpbms7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNlbGVjdGVkTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhcGUuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLm9uY2xpY2sgPSB0aGlzLl9kYXRhUmFuZ2VTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChuZXcgVGV4dFNoYXBlKHRleHRTaGFwZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFggKz0gaXRlbVdpZHRoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgKG5lZWRWYWx1ZVRleHQgPyA1IDogMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIChuZWVkVmFsdWVUZXh0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB6ckFyZWEuZ2V0VGV4dFdpZHRoKGl0ZW1OYW1lLCBmb250KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgaXRlbUdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RZICs9IGl0ZW1IZWlnaHQgKyBpdGVtR2FwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIW5lZWRWYWx1ZVRleHQgJiYgdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFsxXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0WCA9IGxhc3RYIC0gaXRlbUdhcCArIHRoaXMuX3RleHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0WSA9IGxhc3RZIC0gaXRlbUdhcCArIHRoaXMuX3RleHRHYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDmnIDlkI7kuIDkuKrmloflrZdcclxuICAgICAgICAgICAgICAgIHRleHRTaGFwZSA9IHRoaXMuX2dldFRleHRTaGFwZShcclxuICAgICAgICAgICAgICAgICAgICBsYXN0WCwgbGFzdFksIHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRbMV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgIT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLnN0eWxlLnkgLT0gNTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhcGUuc3R5bGUudGV4dEJhc2VsaW5lID0gJ3RvcCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChuZXcgVGV4dFNoYXBlKHRleHRTaGFwZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaehOW7uua4kOWPmOWei+eahOWAvOWfn+WFg+e0oCBcclxuICAgICAgICAgKi9cclxuICAgICAgICBfYnVpbGRHcmFkaWVudCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1TaGFwZTtcclxuICAgICAgICAgICAgdmFyIHRleHRTaGFwZTtcclxuICAgICAgICAgICAgdmFyIGZvbnQgPSB0aGlzLmdldEZvbnQodGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBsYXN0WCA9IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLng7XHJcbiAgICAgICAgICAgIHZhciBsYXN0WSA9IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLnk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtV2lkdGggPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5pdGVtV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24uaXRlbUhlaWdodDtcclxuICAgICAgICAgICAgdmFyIHRleHRIZWlnaHQgPSB6ckFyZWEuZ2V0VGV4dEhlaWdodCgn5Zu9JywgZm9udCk7XHJcbiAgICAgICAgICAgIHZhciBtU2l6ZSA9IDEwO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBuZWVkVmFsdWVUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIG5lZWRWYWx1ZVRleHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIOesrOS4gOS4quaWh+Wtl1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2hhcGUgPSB0aGlzLl9nZXRUZXh0U2hhcGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RYLCBsYXN0WSwgdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFswXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFggKz0genJBcmVhLmdldFRleHRXaWR0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLl90ZXh0R2FwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFkgKz0gdGV4dEhlaWdodCArIHRoaXMuX3RleHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTaGFwZS5zdHlsZS55ICs9IHRleHRIZWlnaHQgLyAyICsgdGhpcy5fdGV4dEdhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNoYXBlLnN0eWxlLnRleHRCYXNlbGluZSA9ICdib3R0b20nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKG5ldyBUZXh0U2hhcGUodGV4dFNoYXBlKSk7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgenJDb2xvciA9IHJlcXVpcmUoJ3pyZW5kZXJqcy90b29sL2NvbG9yJyk7XHJcbiAgICAgICAgICAgIHZhciBwZXIgPSAxIC8gKHRoaXMuZGF0YVJhbmdlT3B0aW9uLmNvbG9yLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB2YXIgY29sb3JMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24uY29sb3IubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvckxpc3QucHVzaChbaSAqIHBlciwgdGhpcy5kYXRhUmFuZ2VPcHRpb24uY29sb3JbaV1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgaXRlbVNoYXBlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHpsZXZlbDogdGhpcy5nZXRabGV2ZWxCYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgejogdGhpcy5nZXRaQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IDogbGFzdFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgOiBsYXN0WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBpdGVtV2lkdGggKiBtU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaXRlbUhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiB6ckNvbG9yLmdldExpbmVhckdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFgsIGxhc3RZLCBsYXN0WCArIGl0ZW1XaWR0aCAqIG1TaXplLCBsYXN0WSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxhc3RYICs9IGl0ZW1XaWR0aCAqIG1TaXplICsgdGhpcy5fdGV4dEdhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1TaGFwZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB6bGV2ZWw6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHo6IHRoaXMuZ2V0WkJhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA6IGxhc3RYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogbGFzdFksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogaXRlbVdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiBpdGVtSGVpZ2h0ICogbVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogenJDb2xvci5nZXRMaW5lYXJHcmFkaWVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RYLCBsYXN0WSwgbGFzdFgsIGxhc3RZICsgaXRlbUhlaWdodCAqIG1TaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGFzdFkgKz0gaXRlbUhlaWdodCAqIG1TaXplICsgdGhpcy5fdGV4dEdhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKG5ldyBSZWN0YW5nbGVTaGFwZShpdGVtU2hhcGUpKTtcclxuICAgICAgICAgICAgLy8g5Y+v6K6h566X5YWD57Sg55qE5L2N572u57yT5a2YXHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbiA9IGl0ZW1TaGFwZS5zdHlsZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLmNhbGN1bGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkRmlsbGVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9idWxpZE1hc2soKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2J1bGlkSGFuZGxlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fYnVpbGRJbmRpY2F0b3IoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghbmVlZFZhbHVlVGV4dCAmJiB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzFdKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmnIDlkI7kuIDkuKrmloflrZdcclxuICAgICAgICAgICAgICAgIHRleHRTaGFwZSA9IHRoaXMuX2dldFRleHRTaGFwZShcclxuICAgICAgICAgICAgICAgICAgICBsYXN0WCwgbGFzdFksIHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRbMV1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChuZXcgVGV4dFNoYXBlKHRleHRTaGFwZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmnoTlu7rmjIfnpLrlmaggXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2J1aWxkSW5kaWNhdG9yIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLng7XHJcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLnk7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IDU7XHJcbiAgICAgICAgICAgIHZhciBwb2ludExpc3Q7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0UG9zaXRpb247XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmsLTlubNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi55ICE9ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5omL5p+E57uf57uf5Zyo5LiL5pa5XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRMaXN0ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCwgeSArIGhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4IC0gc2l6ZSwgeSArIGhlaWdodCArIHNpemVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHNpemUsIHkgKyBoZWlnaHQgKyBzaXplXVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiYvmn4TlnKjkuIrmlrlcclxuICAgICAgICAgICAgICAgICAgICBwb2ludExpc3QgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSBzaXplLCB5IC0gc2l6ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgc2l6ZSwgeSAtIHNpemVdXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb24gPSAndG9wJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWeguebtFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnggIT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJi+afhOe7n+e7n+WcqOWPs+S+p1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50TGlzdCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyB3aWR0aCwgeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGggKyBzaXplLCB5IC0gc2l6ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGggKyBzaXplLCB5ICsgc2l6ZV1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRQb3NpdGlvbiA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiYvmn4TlnKjlt6bkvqdcclxuICAgICAgICAgICAgICAgICAgICBwb2ludExpc3QgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSBzaXplLCB5IC0gc2l6ZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4IC0gc2l6ZSwgeSArIHNpemVdXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yU2hhcGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludExpc3QgOiBwb2ludExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgX19yZWN0IDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IDogTWF0aC5taW4ocG9pbnRMaXN0WzBdWzBdLCBwb2ludExpc3RbMV1bMF0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogTWF0aC5taW4ocG9pbnRMaXN0WzBdWzFdLCBwb2ludExpc3RbMV1bMV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IHNpemUgKiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJyA/IDIgOiAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogc2l6ZSAqICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnID8gMSA6IDIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJydXNoVHlwZSA6ICdmaWxsJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb24gOiB0ZXh0UG9zaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yIDogdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFN0eWxlLmNvbG9yXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9pbmRpY2F0b3JTaGFwZSA9IG5ldyBIYW5kbGVQb2x5Z29uU2hhcGUodGhpcy5faW5kaWNhdG9yU2hhcGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5p6E5bu65aGr5YWF54mpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX2J1aWxkRmlsbGVyIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9maWxsZXJTaGFwZSA9IHtcclxuICAgICAgICAgICAgICAgIHpsZXZlbDogdGhpcy5nZXRabGV2ZWxCYXNlKCksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmdldFpCYXNlKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA6IHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIHkgOiB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA6IHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogJ3JnYmEoMjU1LDI1NSwyNTUsMCknXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3IgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGggOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uZHJpZnQgOiB0aGlzLl9vbmRyaWZ0LFxyXG4gICAgICAgICAgICAgICAgb25kcmFnZW5kIDogdGhpcy5fb25kcmFnZW5kLFxyXG4gICAgICAgICAgICAgICAgb25tb3VzZW1vdmUgOiB0aGlzLl9kaXNwYXRjaEhvdmVyTGluayxcclxuICAgICAgICAgICAgICAgIF90eXBlIDogJ2ZpbGxlcidcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fZmlsbGVyU2hhcGUgPSBuZXcgUmVjdGFuZ2xlU2hhcGUodGhpcy5fZmlsbGVyU2hhcGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKHRoaXMuX2ZpbGxlclNoYXBlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaehOW7uuaLluaLveaJi+afhFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9idWxpZEhhbmRsZSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueTtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLmhlaWdodDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBmb250ID0gdGhpcy5nZXRGb250KHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRTdHlsZSk7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0SGVpZ2h0ID0genJBcmVhLmdldFRleHRIZWlnaHQoJ+WbvScsIGZvbnQpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dFdpZHRoID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgenJBcmVhLmdldFRleHRXaWR0aCh0aGlzLl90ZXh0Rm9ybWF0KHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCksIGZvbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHpyQXJlYS5nZXRUZXh0V2lkdGgodGhpcy5fdGV4dEZvcm1hdCh0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW4pLCBmb250KVxyXG4gICAgICAgICAgICAgICAgKSArIDI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcG9pbnRMaXN0U3RhcnQ7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0WFN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgdGV4dFlTdGFydDtcclxuICAgICAgICAgICAgdmFyIGNvdmVyUmVjdFN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgcG9pbnRMaXN0RW5kO1xyXG4gICAgICAgICAgICB2YXIgdGV4dFhFbmQ7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0WUVuZDtcclxuICAgICAgICAgICAgdmFyIGNvdmVyUmVjdEVuZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIOawtOW5s1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnkgIT0gJ2JvdHRvbScpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmiYvmn4Tnu5/nu5/lnKjkuIvmlrlcclxuICAgICAgICAgICAgICAgICAgICBwb2ludExpc3RTdGFydCA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3gsIHldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCwgeSArIGhlaWdodCArIHRleHRIZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCAtIHRleHRIZWlnaHQsIHkgKyBoZWlnaHQgKyB0ZXh0SGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSAxLCB5ICsgaGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSAxLCB5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRYU3RhcnQgPSB4IC0gdGV4dFdpZHRoIC8gMiAtIHRleHRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFlTdGFydCA9IHkgKyBoZWlnaHQgKyB0ZXh0SGVpZ2h0IC8gMiArIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJSZWN0U3RhcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggOiB4IC0gdGV4dFdpZHRoIC0gdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA6IHkgKyBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGV4dFdpZHRoICsgdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGV4dEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRMaXN0RW5kID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoLCB5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyB3aWR0aCwgeSArIGhlaWdodCArIHRleHRIZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoICsgdGV4dEhlaWdodCwgeSArIGhlaWdodCArIHRleHRIZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoICsgMSwgeSArIGhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGggKyAxLCB5XVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFhFbmQgPSB4ICsgd2lkdGggKyB0ZXh0V2lkdGggLyAyICsgdGV4dEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0WUVuZCA9IHRleHRZU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJSZWN0RW5kID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IDogeCArIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogeSArIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiB0ZXh0V2lkdGggKyB0ZXh0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0ZXh0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJi+afhOWcqOS4iuaWuVxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50TGlzdFN0YXJ0ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCwgeSArIGhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5IC0gdGV4dEhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4IC0gdGV4dEhlaWdodCwgeSAtIHRleHRIZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCAtIDEsIHldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCAtIDEsIHkgKyBoZWlnaHRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFhTdGFydCA9IHggLSB0ZXh0V2lkdGggLyAyIC0gdGV4dEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0WVN0YXJ0ID0geSAtIHRleHRIZWlnaHQgLyAyIC0gMjtcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlclJlY3RTdGFydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA6IHggLSB0ZXh0V2lkdGggLSB0ZXh0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogeSAtIHRleHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGV4dFdpZHRoICsgdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGV4dEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRMaXN0RW5kID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoLCB5ICsgaGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyB3aWR0aCwgeSAtIHRleHRIZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoICsgdGV4dEhlaWdodCwgeSAtIHRleHRIZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoICsgMSwgeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGggKyAxLCB5ICsgaGVpZ2h0XVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFhFbmQgPSB4ICsgd2lkdGggKyB0ZXh0V2lkdGggLyAyICsgdGV4dEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0WUVuZCA9IHRleHRZU3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJSZWN0RW5kID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IDogeCArIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogeSAtIHRleHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGV4dFdpZHRoICsgdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGV4dEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0V2lkdGggKz0gdGV4dEhlaWdodDtcclxuICAgICAgICAgICAgICAgIC8vIOWeguebtFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnggIT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJi+afhOe7n+e7n+WcqOWPs+S+p1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50TGlzdFN0YXJ0ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCwgeV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGggKyB0ZXh0SGVpZ2h0LCB5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyB3aWR0aCArIHRleHRIZWlnaHQsIHkgLSB0ZXh0SGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyB3aWR0aCwgeSAtIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCwgeSAtIDFdXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0WFN0YXJ0ID0geCArIHdpZHRoICsgdGV4dFdpZHRoIC8gMiArIHRleHRIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRZU3RhcnQgPSB5IC0gdGV4dEhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJSZWN0U3RhcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggOiB4ICsgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgOiB5IC0gdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiB0ZXh0V2lkdGggKyB0ZXh0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0ZXh0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwb2ludExpc3RFbmQgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5ICsgaGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyB3aWR0aCArIHRleHRIZWlnaHQsIHkgKyBoZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoICsgdGV4dEhlaWdodCwgeSArIHRleHRIZWlnaHQgKyBoZWlnaHRdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoLCB5ICsgMSArIGhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5ICsgaGVpZ2h0ICsgMV1cclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRYRW5kID0gdGV4dFhTdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0WUVuZCA9IHkgICsgaGVpZ2h0ICsgdGV4dEhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY292ZXJSZWN0RW5kID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4IDogeCArIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogeSArIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiB0ZXh0V2lkdGggKyB0ZXh0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0ZXh0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaJi+afhOWcqOW3puS+p1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50TGlzdFN0YXJ0ID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoLCB5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSB0ZXh0SGVpZ2h0LCB5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSB0ZXh0SGVpZ2h0LCB5IC0gdGV4dEhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5IC0gMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGgsIHkgLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFhTdGFydCA9IHggLSB0ZXh0V2lkdGggLyAyIC0gdGV4dEhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFlTdGFydCA9IHkgLSB0ZXh0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlclJlY3RTdGFydCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA6IHggLSB0ZXh0V2lkdGggLSB0ZXh0SGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5IDogeSAtIHRleHRIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGV4dFdpZHRoICsgdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGV4dEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRMaXN0RW5kID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbeCArIHdpZHRoLCB5ICsgaGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSB0ZXh0SGVpZ2h0LCB5ICsgaGVpZ2h0XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSB0ZXh0SGVpZ2h0LCB5ICsgdGV4dEhlaWdodCArIGhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5ICsgMSArIGhlaWdodF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgd2lkdGgsIHkgKyBoZWlnaHQgKyAxXVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFhFbmQgPSB0ZXh0WFN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRZRW5kID0geSAgKyBoZWlnaHQgKyB0ZXh0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBjb3ZlclJlY3RFbmQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggOiB4IC0gdGV4dFdpZHRoIC0gdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA6IHkgKyBoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGV4dFdpZHRoICsgdGV4dEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGV4dEhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludExpc3QgOiBwb2ludExpc3RTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogdGhpcy5fdGV4dEZvcm1hdCh0aGlzLmRhdGFSYW5nZU9wdGlvbi5tYXgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRYIDogdGV4dFhTdGFydCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0WSA6IHRleHRZU3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZvbnQ6IGZvbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiB0aGlzLmdldENvbG9yKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdCA6IGNvdmVyUmVjdFN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHggOiBwb2ludExpc3RTdGFydFswXVswXSxcclxuICAgICAgICAgICAgICAgICAgICB5IDogcG9pbnRMaXN0U3RhcnRbMF1bMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgX3ggOiBwb2ludExpc3RTdGFydFswXVswXSwgICAvLyDmi5bmi73ljLrln5/mjqfliLbnvJPlrZhcclxuICAgICAgICAgICAgICAgICAgICBfeSA6IHBvaW50TGlzdFN0YXJ0WzBdWzFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuaGlnaGxpZ2h0U3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICBzdHJva2VDb2xvciA6IHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9lbmRTaGFwZSA9IHtcclxuICAgICAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50TGlzdCA6IHBvaW50TGlzdEVuZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogdGhpcy5fdGV4dEZvcm1hdCh0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW4pLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRYIDogdGV4dFhFbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFkgOiB0ZXh0WUVuZCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Rm9udDogZm9udCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IHRoaXMuZ2V0Q29sb3IodGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluKSxcclxuICAgICAgICAgICAgICAgICAgICByZWN0IDogY292ZXJSZWN0RW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHggOiBwb2ludExpc3RFbmRbMF1bMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgeSA6IHBvaW50TGlzdEVuZFswXVsxXSxcclxuICAgICAgICAgICAgICAgICAgICBfeCA6IHBvaW50TGlzdEVuZFswXVswXSwgICAvLyDmi5bmi73ljLrln5/mjqfliLbnvJPlrZhcclxuICAgICAgICAgICAgICAgICAgICBfeSA6IHBvaW50TGlzdEVuZFswXVsxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRTaGFwZS5oaWdobGlnaHRTdHlsZSA9IHtcclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yIDogdGhpcy5fZW5kU2hhcGUuc3R5bGUuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGggOiAxXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyDnu5/kuIDlj4LmlbBcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRTaGFwZS56bGV2ZWwgICAgICAgICAgICAgID0gdGhpcy5fZW5kU2hhcGUuemxldmVsICAgID0gdGhpcy5nZXRabGV2ZWxCYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUueiAgICAgICAgICAgICAgICAgICA9IHRoaXMuX2VuZFNoYXBlLnogICAgICAgICA9IHRoaXMuZ2V0WkJhc2UoKSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuZHJhZ2dhYmxlICAgICAgICAgICA9IHRoaXMuX2VuZFNoYXBlLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUub25kcmlmdCAgICAgICAgICAgICA9IHRoaXMuX2VuZFNoYXBlLm9uZHJpZnQgICA9IHRoaXMuX29uZHJpZnQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUub25kcmFnZW5kICAgICAgICAgICA9IHRoaXMuX2VuZFNoYXBlLm9uZHJhZ2VuZCA9IHRoaXMuX29uZHJhZ2VuZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUudGV4dENvbG9yICAgICA9IHRoaXMuX2VuZFNoYXBlLnN0eWxlLnRleHRDb2xvciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0U3R5bGUuY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUudGV4dEFsaWduICAgICA9IHRoaXMuX2VuZFNoYXBlLnN0eWxlLnRleHRBbGlnbiAgICAgPSAnY2VudGVyJztcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRTaGFwZS5zdHlsZS50ZXh0UG9zaXRpb24gID0gdGhpcy5fZW5kU2hhcGUuc3R5bGUudGV4dFBvc2l0aW9uICA9ICdzcGVjaWZpYyc7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUudGV4dEJhc2VsaW5lICA9IHRoaXMuX2VuZFNoYXBlLnN0eWxlLnRleHRCYXNlbGluZSAgPSAnbWlkZGxlJztcclxuICAgICAgICAgICAgLy8gZm9yIG9uZHJpZuiuoeeul+e7n+S4gFxyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLndpZHRoICAgICAgICAgPSB0aGlzLl9lbmRTaGFwZS5zdHlsZS53aWR0aCAgICAgICAgID0gMDsgXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUuaGVpZ2h0ICAgICAgICA9IHRoaXMuX2VuZFNoYXBlLnN0eWxlLmhlaWdodCAgICAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLnRleHRQb3NpdGlvbiAgPSB0aGlzLl9lbmRTaGFwZS5zdHlsZS50ZXh0UG9zaXRpb24gID0gJ3NwZWNpZmljJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUgPSBuZXcgSGFuZGxlUG9seWdvblNoYXBlKHRoaXMuX3N0YXJ0U2hhcGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmRTaGFwZSA9IG5ldyBIYW5kbGVQb2x5Z29uU2hhcGUodGhpcy5fZW5kU2hhcGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKHRoaXMuX3N0YXJ0U2hhcGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKHRoaXMuX2VuZFNoYXBlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIF9idWxpZE1hc2sgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLng7XHJcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLnk7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi53aWR0aDtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0TWFzayA9IHtcclxuICAgICAgICAgICAgICAgIHpsZXZlbDogdGhpcy5nZXRabGV2ZWxCYXNlKCksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmdldFpCYXNlKCkgKyAxLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA6IHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSA6IHksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggOiB0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDAgOiB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBoZWlnaHQgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogJyNjY2MnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOmZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZE1hc2sgPSB7XHJcbiAgICAgICAgICAgICAgICB6bGV2ZWw6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5nZXRaQmFzZSgpICsgMSxcclxuICAgICAgICAgICAgICAgIHN0eWxlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHggOiB0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8geCArIHdpZHRoIDogeCxcclxuICAgICAgICAgICAgICAgICAgICB5IDogdGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHkgOiB5ICsgaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAwIDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogdGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaGVpZ2h0IDogMCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6ICcjY2NjJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTpmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydE1hc2sgPSBuZXcgUmVjdGFuZ2xlU2hhcGUodGhpcy5fc3RhcnRNYXNrKTtcclxuICAgICAgICAgICAgdGhpcy5fZW5kTWFzayA9IG5ldyBSZWN0YW5nbGVTaGFwZSh0aGlzLl9lbmRNYXNrKTtcclxuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaCh0aGlzLl9zdGFydE1hc2spO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKHRoaXMuX2VuZE1hc2spO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX2J1aWxkQmFja2dyb3VuZCA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLnJlZm9ybUNzc0FycmF5KHRoaXMuZGF0YVJhbmdlT3B0aW9uLnBhZGRpbmcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaChuZXcgUmVjdGFuZ2xlU2hhcGUoe1xyXG4gICAgICAgICAgICAgICAgemxldmVsOiB0aGlzLmdldFpsZXZlbEJhc2UoKSxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuZ2V0WkJhc2UoKSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZSA6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB4IDogdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ueCAtIHBhZGRpbmdbM10sXHJcbiAgICAgICAgICAgICAgICAgICAgeSA6IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLnkgLSBwYWRkaW5nWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ud2lkdGggKyBwYWRkaW5nWzNdICsgcGFkZGluZ1sxXSxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQgOiB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi5oZWlnaHQgKyBwYWRkaW5nWzBdICsgcGFkZGluZ1syXSxcclxuICAgICAgICAgICAgICAgICAgICBicnVzaFR5cGUgOiB0aGlzLmRhdGFSYW5nZU9wdGlvbi5ib3JkZXJXaWR0aCA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ZpbGwnIDogJ2JvdGgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogdGhpcy5kYXRhUmFuZ2VPcHRpb24uYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yIDogdGhpcy5kYXRhUmFuZ2VPcHRpb24uYm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoIDogdGhpcy5kYXRhUmFuZ2VPcHRpb24uYm9yZGVyV2lkdGhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOagueaNrumAiemhueiuoeeul+WAvOWfn+WunuS9k+eahOS9jee9ruWdkOagh1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9nZXRJdGVtR3JvdXBMb2NhdGlvbiA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl92YWx1ZVRleHRMaXN0O1xyXG4gICAgICAgICAgICB2YXIgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgaXRlbUdhcCA9IHRoaXMuZGF0YVJhbmdlT3B0aW9uLml0ZW1HYXA7XHJcbiAgICAgICAgICAgIHZhciBpdGVtV2lkdGggPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5pdGVtV2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24uaXRlbUhlaWdodDtcclxuICAgICAgICAgICAgdmFyIHRvdGFsV2lkdGggPSAwO1xyXG4gICAgICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgZm9udCA9IHRoaXMuZ2V0Rm9udCh0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0U3R5bGUpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dEhlaWdodCA9IHpyQXJlYS5nZXRUZXh0SGVpZ2h0KCflm70nLCBmb250KTtcclxuICAgICAgICAgICAgdmFyIG1TaXplID0gMTA7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgLy8g5rC05bmz5biD5bGA77yM6K6h566X5oC75a695bqmXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dCBcclxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmRhdGFSYW5nZU9wdGlvbi5zcGxpdE51bWJlciA8PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5kYXRhUmFuZ2VPcHRpb24uY2FsY3VsYWJsZVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oyH5a6a5paH5a2X5oiW57q/5oCn5riQ5Y+YXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxXaWR0aCA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNwbGl0TnVtYmVyIDw9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmRhdGFSYW5nZU9wdGlvbi5jYWxjdWxhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKGl0ZW1XaWR0aCAqIG1TaXplICsgaXRlbUdhcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGFMZW5ndGggKiAoaXRlbVdpZHRoICsgaXRlbUdhcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzBdICE9ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHpyQXJlYS5nZXRUZXh0V2lkdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgdGhpcy5fdGV4dEdhcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArICh0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzFdICE9ICd1bmRlZmluZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHpyQXJlYS5nZXRUZXh0V2lkdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFSYW5nZU9wdGlvbi50ZXh0WzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICsgdGhpcy5fdGV4dEdhcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWAvOagh+etvlxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCArPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YUxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gaXRlbVdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB6ckFyZWEuZ2V0VGV4dFdpZHRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgaXRlbUdhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbFdpZHRoIC09IGl0ZW1HYXA7ICAgICAgLy8g5YeP5Y675pyA5ZCO5LiA5Liq55qEaXRlbUdhcFxyXG4gICAgICAgICAgICAgICAgdG90YWxIZWlnaHQgPSBNYXRoLm1heCh0ZXh0SGVpZ2h0LCBpdGVtSGVpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIOWeguebtOW4g+WxgO+8jOiuoeeul+aAu+mrmOW6plxyXG4gICAgICAgICAgICAgICAgdmFyIG1heFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRcclxuICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmRhdGFSYW5nZU9wdGlvbi5zcGxpdE51bWJlciA8PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5kYXRhUmFuZ2VPcHRpb24uY2FsY3VsYWJsZVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5oyH5a6a5paH5a2X5oiW57q/5oCn5riQ5Y+YXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxIZWlnaHQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNwbGl0TnVtYmVyIDw9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmRhdGFSYW5nZU9wdGlvbi5jYWxjdWxhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKGl0ZW1IZWlnaHQgKiBtU2l6ZSArIGl0ZW1HYXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhTGVuZ3RoICogKGl0ZW1IZWlnaHQgKyBpdGVtR2FwKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKyAodGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFswXSAhPSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAodGhpcy5fdGV4dEdhcCArIHRleHRIZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICsgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRbMV0gIT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHRoaXMuX3RleHRHYXAgKyB0ZXh0SGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6ckFyZWEuZ2V0VGV4dFdpZHRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHQgJiYgdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6ckFyZWEuZ2V0VGV4dFdpZHRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHQgJiYgdGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFsxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFdpZHRoID0gTWF0aC5tYXgoaXRlbVdpZHRoLCBtYXhXaWR0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEhlaWdodCA9IChpdGVtSGVpZ2h0ICsgaXRlbUdhcCkgKiBkYXRhTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWAvOagh+etvlxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1XaWR0aCArPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aCA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6ckFyZWEuZ2V0VGV4dFdpZHRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFdpZHRoID0gaXRlbVdpZHRoICsgbWF4V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEhlaWdodCAtPSBpdGVtR2FwOyAgICAgLy8g5YeP5Y675pyA5ZCO5LiA5Liq55qEaXRlbUdhcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLnJlZm9ybUNzc0FycmF5KHRoaXMuZGF0YVJhbmdlT3B0aW9uLnBhZGRpbmcpO1xyXG4gICAgICAgICAgICB2YXIgeDtcclxuICAgICAgICAgICAgdmFyIHpyV2lkdGggPSB0aGlzLnpyLmdldFdpZHRoKCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXRhUmFuZ2VPcHRpb24ueCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2VudGVyJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoKHpyV2lkdGggLSB0b3RhbFdpZHRoKSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCcgOlxyXG4gICAgICAgICAgICAgICAgICAgIHggPSBwYWRkaW5nWzNdICsgdGhpcy5kYXRhUmFuZ2VPcHRpb24uYm9yZGVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCcgOlxyXG4gICAgICAgICAgICAgICAgICAgIHggPSB6cldpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gdG90YWxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIHBhZGRpbmdbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5ib3JkZXJXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIHggPSB0aGlzLnBhcnNlUGVyY2VudCh0aGlzLmRhdGFSYW5nZU9wdGlvbi54LCB6cldpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICB4ID0gaXNOYU4oeCkgPyAwIDogeDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHk7XHJcbiAgICAgICAgICAgIHZhciB6ckhlaWdodCA9IHRoaXMuenIuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXRhUmFuZ2VPcHRpb24ueSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBhZGRpbmdbMF0gKyB0aGlzLmRhdGFSYW5nZU9wdGlvbi5ib3JkZXJXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbScgOlxyXG4gICAgICAgICAgICAgICAgICAgIHkgPSB6ckhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIHRvdGFsSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gcGFkZGluZ1syXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtIHRoaXMuZGF0YVJhbmdlT3B0aW9uLmJvcmRlcldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2VudGVyJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoKHpySGVpZ2h0IC0gdG90YWxIZWlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgICAgICB5ID0gdGhpcy5wYXJzZVBlcmNlbnQodGhpcy5kYXRhUmFuZ2VPcHRpb24ueSwgenJIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSBpc05hTih5KSA/IDAgOiB5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24uY2FsY3VsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8g55WZ5Ye65omL5p+E5o6n5Lu2XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlcldpZHRoID0gTWF0aC5tYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgenJBcmVhLmdldFRleHRXaWR0aCh0aGlzLmRhdGFSYW5nZU9wdGlvbi5tYXgsIGZvbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHpyQXJlYS5nZXRUZXh0V2lkdGgodGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluLCBmb250KVxyXG4gICAgICAgICAgICAgICAgKSArIHRleHRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgaGFuZGxlcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBoYW5kbGVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICsgdG90YWxXaWR0aCArIGhhbmRsZXJXaWR0aCA+IHpyV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAtPSBoYW5kbGVyV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgPCB0ZXh0SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSB0ZXh0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSArIHRvdGFsSGVpZ2h0ICsgdGV4dEhlaWdodCA+IHpySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgLT0gdGV4dEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB4IDogeCxcclxuICAgICAgICAgICAgICAgIHkgOiB5LFxyXG4gICAgICAgICAgICAgICAgd2lkdGggOiB0b3RhbFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IDogdG90YWxIZWlnaHRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyDmjIflrprmlofmnKxcclxuICAgICAgICBfZ2V0VGV4dFNoYXBlIDogZnVuY3Rpb24gKHgsIHksIHRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHpsZXZlbDogdGhpcy5nZXRabGV2ZWxCYXNlKCksXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmdldFpCYXNlKCksXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtcclxuICAgICAgICAgICAgICAgICAgICB4IDogKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ueCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICArIHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLndpZHRoIC8gMiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICB5IDogKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi55IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICsgdGhpcy5faXRlbUdyb3VwTG9jYXRpb24uaGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IHRoaXMuZGF0YVJhbmdlT3B0aW9uLnRleHRTdHlsZS5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRGb250OiB0aGlzLmdldEZvbnQodGhpcy5kYXRhUmFuZ2VPcHRpb24udGV4dFN0eWxlKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QmFzZWxpbmU6ICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnbWlkZGxlJyA6ICd0b3AnKSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdsZWZ0JyA6ICdjZW50ZXInKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZSA6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g6Imy5bC6bGVnZW5kIGl0ZW0gc2hhcGVcclxuICAgICAgICBfZ2V0SXRlbVNoYXBlIDogZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB6bGV2ZWw6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgejogdGhpcy5nZXRaQmFzZSgpLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA6IHgsXHJcbiAgICAgICAgICAgICAgICAgICAgeSA6IHkgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IDogaGVpZ2h0IC0gMixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoIDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5ouW5ou96IyD5Zu05o6n5Yi2XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgX19vbmRyaWZ0IDogZnVuY3Rpb24gKHNoYXBlLCBkeCwgZHkpIHtcclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueTtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLmhlaWdodDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuc3R5bGUueCArIGR4IDw9IHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zdHlsZS54ID0geDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNoYXBlLnN0eWxlLnggKyBkeCArIHNoYXBlLnN0eWxlLndpZHRoID49IHggKyB3aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnN0eWxlLnggPSB4ICsgd2lkdGggLSBzaGFwZS5zdHlsZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlLnN0eWxlLnggKz0gZHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hhcGUuc3R5bGUueSArIGR5IDw9IHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zdHlsZS55ID0geTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNoYXBlLnN0eWxlLnkgKyBkeSArIHNoYXBlLnN0eWxlLmhlaWdodCA+PSB5ICsgaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGUuc3R5bGUueSA9IHkgKyBoZWlnaHQgLSBzaGFwZS5zdHlsZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZS5zdHlsZS55ICs9IGR5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc2hhcGUuX3R5cGUgPT0gJ2ZpbGxlcicpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N5bmNIYW5kbGVTaGFwZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3luY0ZpbGxlclNoYXBlKHNoYXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnJlYWx0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXNwYXRjaERhdGFSYW5nZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIF9fb25kcmFnZW5kIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2VuZCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmlbDmja7pobnooqvmi5bmi73lh7rljrtcclxuICAgICAgICAgKi9cclxuICAgICAgICBvbmRyYWdlbmQgOiBmdW5jdGlvbiAocGFyYW0sIHN0YXR1cykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZW5kIHx8ICFwYXJhbS50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIOayoeacieWcqOW9k+WJjeWunuS+i+S4iuWPkeeUn+aLluaLveihjOS4uuWImeebtOaOpei/lOWbnlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDliKtzdGF0dXMgPSB7fei1i+WAvOWViu+8ge+8gVxyXG4gICAgICAgICAgICBzdGF0dXMuZHJhZ091dCA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0YXR1cy5kcmFnSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGFSYW5nZU9wdGlvbi5yZWFsdGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hEYXRhUmFuZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdHVzLm5lZWRSZWZyZXNoID0gZmFsc2U7IC8vIOS8muaciea2iOaBr+inpuWPkWZyZXNo77yM5LiN55So5YaN5Yi35LiA6YGNXHJcbiAgICAgICAgICAgIC8vIOWkhOeQhuWujOaLluaLveS6i+S7tuWQjuWkjeS9jVxyXG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5aSW6YOo5Lyg5YWlcmFuZ2VcclxuICAgICAgICBfc3luY1NoYXBlRnJvbVJhbmdlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5yYW5nZSB8fCB7fTtcclxuICAgICAgICAgICAgLy8g5YGa5LiA5Liq5Y+N6L2sXHJcbiAgICAgICAgICAgIHRoaXMuX3JhbmdlLmVuZCA9IHR5cGVvZiB0aGlzLl9yYW5nZS5lbmQgIT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9yYW5nZS5lbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIHJhbmdlLnN0YXJ0ICE9ICd1bmRlZmluZWQnID8gcmFuZ2Uuc3RhcnQgOiAwKTtcclxuICAgICAgICAgICAgdGhpcy5fcmFuZ2Uuc3RhcnQgPSB0eXBlb2YgdGhpcy5fcmFuZ2Uuc3RhcnQgIT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3JhbmdlLnN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIHJhbmdlLmVuZCAhPSAndW5kZWZpbmVkJyA/IHJhbmdlLmVuZCA6IDEwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmFuZ2Uuc3RhcnQgIT0gMTAwIHx8IHRoaXMuX3JhbmdlLmVuZCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8g6Z2e6buY6K6k5ruh5YC85ZCM5q2l5LiA5LiL5Zu+5b2iXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ub3JpZW50ID09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOaoquWQkVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLnggKz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggKiAoMTAwIC0gdGhpcy5fcmFuZ2Uuc3RhcnQpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLndpZHRoID0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICogKHRoaXMuX3JhbmdlLnN0YXJ0IC0gdGhpcy5fcmFuZ2UuZW5kKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOe6teWQkVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLl9maWxsZXJTaGFwZS5zdHlsZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsbGVyU2hhcGUuc3R5bGUueSArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgKiAoMTAwIC0gdGhpcy5fcmFuZ2Uuc3RhcnQpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLmhlaWdodCA9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgKiAodGhpcy5fcmFuZ2Uuc3RhcnQgLSB0aGlzLl9yYW5nZS5lbmQpIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy56ci5tb2RTaGFwZSh0aGlzLl9maWxsZXJTaGFwZS5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zeW5jSGFuZGxlU2hhcGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX3N5bmNIYW5kbGVTaGFwZSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueTtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLmhlaWdodDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLnggPSB0aGlzLl9maWxsZXJTaGFwZS5zdHlsZS54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRNYXNrLnN0eWxlLndpZHRoID0gdGhpcy5fc3RhcnRTaGFwZS5zdHlsZS54IC0geDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kU2hhcGUuc3R5bGUueCA9IHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLl9maWxsZXJTaGFwZS5zdHlsZS53aWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZE1hc2suc3R5bGUueCA9IHRoaXMuX2VuZFNoYXBlLnN0eWxlLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRNYXNrLnN0eWxlLndpZHRoID0geCArIHdpZHRoIC0gdGhpcy5fZW5kU2hhcGUuc3R5bGUueDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFuZ2Uuc3RhcnQgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwIC0gKHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUueCAtIHgpIC8gd2lkdGggKiAxMDBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYW5nZS5lbmQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCAtICh0aGlzLl9lbmRTaGFwZS5zdHlsZS54IC0geCkgLyB3aWR0aCAqIDEwMFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUueSA9IHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydE1hc2suc3R5bGUuaGVpZ2h0ID0gdGhpcy5fc3RhcnRTaGFwZS5zdHlsZS55IC0geTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kU2hhcGUuc3R5bGUueSA9IHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyB0aGlzLl9maWxsZXJTaGFwZS5zdHlsZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRNYXNrLnN0eWxlLnkgPSB0aGlzLl9lbmRTaGFwZS5zdHlsZS55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kTWFzay5zdHlsZS5oZWlnaHQgPSB5ICsgaGVpZ2h0IC0gdGhpcy5fZW5kU2hhcGUuc3R5bGUueTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFuZ2Uuc3RhcnQgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwIC0gKHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUueSAtIHkpIC8gaGVpZ2h0ICogMTAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFuZ2UuZW5kID0gTWF0aC5mbG9vcihcclxuICAgICAgICAgICAgICAgICAgICAxMDAgLSAodGhpcy5fZW5kU2hhcGUuc3R5bGUueSAtIHkpIC8gaGVpZ2h0ICogMTAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9zeW5jU2hhcGUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfc3luY0ZpbGxlclNoYXBlIDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueTtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLmhlaWdodDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBhO1xyXG4gICAgICAgICAgICB2YXIgYjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgIGEgPSB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLng7XHJcbiAgICAgICAgICAgICAgICBiID0gdGhpcy5fZW5kU2hhcGUuc3R5bGUueDtcclxuICAgICAgICAgICAgICAgIGlmIChlLmlkID09IHRoaXMuX3N0YXJ0U2hhcGUuaWQgJiYgYSA+PSBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gX3N0YXJ0U2hhcGXop6blj5FcclxuICAgICAgICAgICAgICAgICAgICBiID0gYTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmRTaGFwZS5zdHlsZS54ID0gYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuaWQgPT0gdGhpcy5fZW5kU2hhcGUuaWQgJiYgYSA+PSBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gX2VuZFNoYXBl6Kem5Y+RXHJcbiAgICAgICAgICAgICAgICAgICAgYSA9IGI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRTaGFwZS5zdHlsZS54ID0gYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbGxlclNoYXBlLnN0eWxlLnggPSBhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsbGVyU2hhcGUuc3R5bGUud2lkdGggPSBiIC0gYTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0TWFzay5zdHlsZS53aWR0aCA9IGEgLSB4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kTWFzay5zdHlsZS54ID0gYjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZE1hc2suc3R5bGUud2lkdGggPSB4ICsgd2lkdGggLSBiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYW5nZS5zdGFydCA9IE1hdGguY2VpbCgxMDAgLSAoYSAtIHgpIC8gd2lkdGggKiAxMDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmFuZ2UuZW5kID0gTWF0aC5mbG9vcigxMDAgLSAoYiAtIHgpIC8gd2lkdGggKiAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYSA9IHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUueTtcclxuICAgICAgICAgICAgICAgIGIgPSB0aGlzLl9lbmRTaGFwZS5zdHlsZS55O1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuaWQgPT0gdGhpcy5fc3RhcnRTaGFwZS5pZCAmJiBhID49IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBfc3RhcnRTaGFwZeinpuWPkVxyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZFNoYXBlLnN0eWxlLnkgPSBhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5pZCA9PSB0aGlzLl9lbmRTaGFwZS5pZCAmJiBhID49IGIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBfZW5kU2hhcGXop6blj5FcclxuICAgICAgICAgICAgICAgICAgICBhID0gYjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLnkgPSBhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsbGVyU2hhcGUuc3R5bGUueSA9IGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9maWxsZXJTaGFwZS5zdHlsZS5oZWlnaHQgPSBiIC0gYTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0TWFzay5zdHlsZS5oZWlnaHQgPSBhIC0geTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VuZE1hc2suc3R5bGUueSA9IGI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbmRNYXNrLnN0eWxlLmhlaWdodCA9IHkgKyBoZWlnaHQgLSBiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yYW5nZS5zdGFydCA9IE1hdGguY2VpbCgxMDAgLSAoYSAtIHkpIC8gaGVpZ2h0ICogMTAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JhbmdlLmVuZCA9IE1hdGguZmxvb3IoMTAwIC0gKGIgLSB5KSAvIGhlaWdodCAqIDEwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3N5bmNTaGFwZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX3N5bmNTaGFwZSA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRTaGFwZS5wb3NpdGlvbiA9IFtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUueCAtIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUuX3gsXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLnkgLSB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLl95XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFNoYXBlLnN0eWxlLnRleHQgPSB0aGlzLl90ZXh0Rm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FwICogdGhpcy5fcmFuZ2Uuc3RhcnQgKyB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0U2hhcGUuc3R5bGUuY29sb3IgXHJcbiAgICAgICAgICAgICAgICA9IHRoaXMuX3N0YXJ0U2hhcGUuaGlnaGxpZ2h0U3R5bGUuc3Ryb2tlQ29sb3JcclxuICAgICAgICAgICAgICAgID0gdGhpcy5nZXRDb2xvcihcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nYXAgKiB0aGlzLl9yYW5nZS5zdGFydCArIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuX2VuZFNoYXBlLnBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kU2hhcGUuc3R5bGUueCAtIHRoaXMuX2VuZFNoYXBlLnN0eWxlLl94LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZW5kU2hhcGUuc3R5bGUueSAtIHRoaXMuX2VuZFNoYXBlLnN0eWxlLl95XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLl9lbmRTaGFwZS5zdHlsZS50ZXh0ID0gdGhpcy5fdGV4dEZvcm1hdChcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhcCAqIHRoaXMuX3JhbmdlLmVuZCArIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pblxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5fZW5kU2hhcGUuc3R5bGUuY29sb3IgXHJcbiAgICAgICAgICAgICAgICA9IHRoaXMuX2VuZFNoYXBlLmhpZ2hsaWdodFN0eWxlLnN0cm9rZUNvbG9yIFxyXG4gICAgICAgICAgICAgICAgPSB0aGlzLmdldENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhcCAqIHRoaXMuX3JhbmdlLmVuZCArIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuenIubW9kU2hhcGUodGhpcy5fc3RhcnRTaGFwZS5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuenIubW9kU2hhcGUodGhpcy5fZW5kU2hhcGUuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnpyLm1vZFNoYXBlKHRoaXMuX3N0YXJ0TWFzay5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuenIubW9kU2hhcGUodGhpcy5fZW5kTWFzay5pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuenIubW9kU2hhcGUodGhpcy5fZmlsbGVyU2hhcGUuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLnpyLnJlZnJlc2hOZXh0RnJhbWUoKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfZGlzcGF0Y2hEYXRhUmFuZ2UgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci5kaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIGVjQ29uZmlnLkVWRU5ULkRBVEFfUkFOR0UsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA6IHRoaXMuX3JhbmdlLmVuZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kIDogdGhpcy5fcmFuZ2Uuc3RhcnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5teUNoYXJ0XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgIF9fZGF0YVJhbmdlU2VsZWN0ZWQgOiBmdW5jdGlvbiAocGFyYW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNlbGVjdGVkTW9kZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fc2VsZWN0ZWRNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZE1hcFtrXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBpZHggPSBwYXJhbS50YXJnZXQuX2lkeDtcclxuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRNYXBbaWR4XSA9ICF0aGlzLl9zZWxlY3RlZE1hcFtpZHhdO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVNYXggPSAodGhpcy5fY29sb3JMaXN0Lmxlbmd0aCAtIGlkeCkgKiB0aGlzLl9nYXAgKyB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW47XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci5kaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIGVjQ29uZmlnLkVWRU5ULkRBVEFfUkFOR0VfU0VMRUNURUQsXHJcbiAgICAgICAgICAgICAgICBwYXJhbS5ldmVudCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5fc2VsZWN0ZWRNYXAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpZHgsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVNYXg6IHZhbHVlTWF4LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTWluOiB2YWx1ZU1heCAtIHRoaXMuX2dhcFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXMubXlDaGFydFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2VudGVyLmRpc3BhdGNoKGVjQ29uZmlnLkVWRU5ULlJFRlJFU0gsIG51bGwsIG51bGwsIHRoaXMubXlDaGFydCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDkuqfnlJ9ob3ZlciBsaW5r5LqL5Lu2IFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9fZGlzcGF0Y2hIb3ZlckxpbmsgOiBmdW5jdGlvbihwYXJhbSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVNaW47XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZU1heDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLmNhbGN1bGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b3RhbFZhbHVlID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24ubWF4IC0gdGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluO1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1clZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm9yaWVudCA9PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJWYWx1ZSA9ICgxIC0gKHpyRXZlbnQuZ2V0WChwYXJhbS5ldmVudCkgLSB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB0b3RhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyVmFsdWUgPSAoMSAtICh6ckV2ZW50LmdldFkocGFyYW0uZXZlbnQpIC0gdGhpcy5fY2FsY3VsYWJsZUxvY2F0aW9uLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvIHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi5oZWlnaHQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiB0b3RhbFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVNaW4gPSBjdXJWYWx1ZSAtIHRvdGFsVmFsdWUgKiAwLjA1O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVNYXggPSBjdXJWYWx1ZSArIHRvdGFsVmFsdWUgKiAwLjA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkeCA9IHBhcmFtLnRhcmdldC5faWR4O1xyXG4gICAgICAgICAgICAgICAgdmFsdWVNYXggPSAodGhpcy5fY29sb3JMaXN0Lmxlbmd0aCAtIGlkeCkgKiB0aGlzLl9nYXAgKyB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW47XHJcbiAgICAgICAgICAgICAgICB2YWx1ZU1pbiA9IHZhbHVlTWF4IC0gdGhpcy5fZ2FwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VDZW50ZXIuZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICBlY0NvbmZpZy5FVkVOVC5EQVRBX1JBTkdFX0hPVkVSTElOSywgXHJcbiAgICAgICAgICAgICAgICBwYXJhbS5ldmVudCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZU1pbiA6IHZhbHVlTWluLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlTWF4IDogdmFsdWVNYXhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15Q2hhcnRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtLGN1clZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgX19vbmhvdmVybGluazogZnVuY3Rpb24ocGFyYW0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNob3dcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuZGF0YVJhbmdlT3B0aW9uLmhvdmVyTGlua1xyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5faW5kaWNhdG9yU2hhcGVcclxuICAgICAgICAgICAgICAgICYmIHBhcmFtIFxyXG4gICAgICAgICAgICAgICAgJiYgcGFyYW0uc2VyaWVzSW5kZXggIT0gbnVsbCAmJiBwYXJhbS5kYXRhSW5kZXggIT0gbnVsbFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJWYWx1ZSA9IHBhcmFtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1clZhbHVlID09PSAnJyB8fCBpc05hTihjdXJWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VyVmFsdWUgPCB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJWYWx1ZSA9IHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGN1clZhbHVlID4gdGhpcy5kYXRhUmFuZ2VPcHRpb24ubWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyVmFsdWUgPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5tYXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5vcmllbnQgPT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yU2hhcGUucG9zaXRpb24gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5tYXggLSBjdXJWYWx1ZSkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8gKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCAtIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKiB0aGlzLl9jYWxjdWxhYmxlTG9jYXRpb24ud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yU2hhcGUucG9zaXRpb24gPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5tYXggLSBjdXJWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyAodGhpcy5kYXRhUmFuZ2VPcHRpb24ubWF4IC0gdGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqIHRoaXMuX2NhbGN1bGFibGVMb2NhdGlvbi5oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yU2hhcGUuc3R5bGUudGV4dCA9IHRoaXMuX3RleHRGb3JtYXQocGFyYW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5kaWNhdG9yU2hhcGUuc3R5bGUuY29sb3IgPSB0aGlzLmdldENvbG9yKGN1clZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuenIuYWRkSG92ZXJTaGFwZSh0aGlzLl9pbmRpY2F0b3JTaGFwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBfdGV4dEZvcm1hdCA6IGZ1bmN0aW9uKHZhbHVlU3RhcnQsIHZhbHVlRW5kKSB7XHJcbiAgICAgICAgICAgIHZhbHVlU3RhcnQgPSAoK3ZhbHVlU3RhcnQpLnRvRml4ZWQodGhpcy5kYXRhUmFuZ2VPcHRpb24ucHJlY2lzaW9uKTtcclxuICAgICAgICAgICAgdmFsdWVFbmQgPSB2YWx1ZUVuZCAhPSBudWxsID8gKCt2YWx1ZUVuZCkudG9GaXhlZCh0aGlzLmRhdGFSYW5nZU9wdGlvbi5wcmVjaXNpb24pIDogJyc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5mb3JtYXR0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhUmFuZ2VPcHRpb24uZm9ybWF0dGVyID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVJhbmdlT3B0aW9uLmZvcm1hdHRlci5yZXBsYWNlKCd7dmFsdWV9JywgdmFsdWVTdGFydClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ3t2YWx1ZTJ9JywgdmFsdWVFbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMuZGF0YVJhbmdlT3B0aW9uLmZvcm1hdHRlciA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVJhbmdlT3B0aW9uLmZvcm1hdHRlci5jYWxsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2hhcnQsIHZhbHVlU3RhcnQsIHZhbHVlRW5kXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHZhbHVlRW5kICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlU3RhcnQgKyAnIC0gJyArIHZhbHVlRW5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVTdGFydDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIt+aWsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJlZnJlc2ggOiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdPcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uID0gbmV3T3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24uZGF0YVJhbmdlID0gdGhpcy5yZWZvcm1PcHRpb24odGhpcy5vcHRpb24uZGF0YVJhbmdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVJhbmdlT3B0aW9uID0gdGhpcy5vcHRpb24uZGF0YVJhbmdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm15Q2hhcnQuY2FudmFzU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5LiN5pSv5oyBQ2FudmFz55qE5by65Yi25YWz6Zet5a6e5pe25Yqo55S7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUmFuZ2VPcHRpb24ucmVhbHRpbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0TnVtYmVyID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24uc3BsaXROdW1iZXIgPD0gMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuZGF0YVJhbmdlT3B0aW9uLmNhbGN1bGFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZGF0YVJhbmdlT3B0aW9uLnNwbGl0TnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JMaXN0ID0genJDb2xvci5nZXRHcmFkaWVudENvbG9ycyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFSYW5nZU9wdGlvbi5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNwbGl0TnVtYmVyIC0gdGhpcy5kYXRhUmFuZ2VPcHRpb24uY29sb3IubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5jb2xvci5sZW5ndGggLSAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgICAgICkgKyAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29sb3JMaXN0Lmxlbmd0aCA+IHNwbGl0TnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMuX2NvbG9yTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NvbG9yTGlzdCA9IFt0aGlzLl9jb2xvckxpc3RbMF1dO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGVwID0gbGVuIC8gKHNwbGl0TnVtYmVyIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBzcGxpdE51bWJlciAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb2xvckxpc3QucHVzaCh0aGlzLl9jb2xvckxpc3RbTWF0aC5mbG9vcihpICogc3RlcCldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29sb3JMaXN0LnB1c2godGhpcy5fY29sb3JMaXN0W2xlbiAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xvckxpc3QgPSBuZXdDb2xvckxpc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9jb2xvckxpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJlY2lzaW9uID0gdGhpcy5kYXRhUmFuZ2VPcHRpb24ucHJlY2lzaW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FwID0gKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCAtIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbikgLyBzcGxpdE51bWJlcjtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9nYXAudG9GaXhlZChwcmVjaXNpb24pIC0gMCAhPSB0aGlzLl9nYXAgJiYgcHJlY2lzaW9uIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOeyvuW6puiHqumAguW6lFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhUmFuZ2VPcHRpb24ucHJlY2lzaW9uID0gcHJlY2lzaW9uO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYXAgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCAtIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbikgLyBzcGxpdE51bWJlclxyXG4gICAgICAgICAgICAgICAgKS50b0ZpeGVkKHByZWNpc2lvbikgLSAwO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZVRleHRMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNwbGl0TnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZE1hcFtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVUZXh0TGlzdC51bnNoaWZ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0Rm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSAqIHRoaXMuX2dhcCArIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpICsgMSkgKiB0aGlzLl9nYXAgKyB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5fYnVpbGRTaGFwZSgpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGdldENvbG9yIDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluID09IHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yTGlzdFswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1heCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5tYXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFSYW5nZU9wdGlvbi5jYWxjdWxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgLSAodGhpcy5fZ2FwICogdGhpcy5fcmFuZ2Uuc3RhcnQgKyB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW4pID4gMC4wMDAwNVxyXG4gICAgICAgICAgICAgICAgICAgIHx8IHZhbHVlIC0gKHRoaXMuX2dhcCAqIHRoaXMuX3JhbmdlLmVuZCArIHRoaXMuZGF0YVJhbmdlT3B0aW9uLm1pbikgPCAtMC4wMDAwNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2NvbG9yTGlzdC5sZW5ndGggLSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgICAgICAodmFsdWUgLSB0aGlzLmRhdGFSYW5nZU9wdGlvbi5taW4pIFxyXG4gICAgICAgICAgICAgICAgLyAodGhpcy5kYXRhUmFuZ2VPcHRpb24ubWF4IC0gdGhpcy5kYXRhUmFuZ2VPcHRpb24ubWluKVxyXG4gICAgICAgICAgICAgICAgKiB0aGlzLl9jb2xvckxpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT0gdGhpcy5fY29sb3JMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWR4LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codmFsdWUsIGlkeCx0aGlzLl9jb2xvckxpc3RbaWR4XSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkTWFwW2lkeF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xvckxpc3RbaWR4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2V0Q29sb3JCeUluZGV4IDogZnVuY3Rpb24gKGlkeCkge1xyXG4gICAgICAgICAgICBpZiAoaWR4ID49IHRoaXMuX2NvbG9yTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHRoaXMuX2NvbG9yTGlzdC5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlkeCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlkeCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yTGlzdFtpZHhdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeK5pS+5ZCO5a6e5L6L5LiN5Y+v55SoXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgb25iZWZvckRpc3Bvc2UgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUNlbnRlci51bmJpbmQoZWNDb25maWcuRVZFTlQuSE9WRVIsIHRoaXMuX29uaG92ZXJsaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB6clV0aWwuaW5oZXJpdHMoRGF0YVJhbmdlLCBCYXNlKTtcclxuICAgIFxyXG4gICAgcmVxdWlyZSgnLi4vY29tcG9uZW50JykuZGVmaW5lKCdkYXRhUmFuZ2UnLCBEYXRhUmFuZ2UpO1xyXG5cclxuICAgIHJldHVybiBEYXRhUmFuZ2U7XHJcbn0pO1xyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L1dvcmtzcGFjZS9naXRodWIvZWNoYXJ0cy14LWV4YW1wbGVzMi9+L2VjaGFydHMvY29tcG9uZW50L2RhdGFSYW5nZS5qc1xuICoqLyIsIi8qKlxuICogZWNoYXJ0c+e7hOS7tu+8mua8q+a4uOaOp+WItuWZqFxuICpcbiAqIEBkZXNjIGVjaGFydHPln7rkuo5DYW52YXPvvIznuq9KYXZhc2NyaXB05Zu+6KGo5bqT77yM5o+Q5L6b55u06KeC77yM55Sf5Yqo77yM5Y+v5Lqk5LqS77yM5Y+v5Liq5oCn5YyW5a6a5Yi255qE5pWw5o2u57uf6K6h5Zu+6KGo44CCXG4gKiBAYXV0aG9yIEtlbmVyIChAS2VuZXIt5p6X5bOwLCBrZW5lci5saW5mZW5nQGdtYWlsLmNvbSlcbiAqXG4gKi9cbmRlZmluZShmdW5jdGlvbiAocmVxdWlyZSkge1xuICAgIHZhciBCYXNlID0gcmVxdWlyZSgnLi9iYXNlJyk7XG4gICAgXG4gICAgLy8g5Zu+5b2i5L6d6LWWXG4gICAgdmFyIFJlY3RhbmdsZVNoYXBlID0gcmVxdWlyZSgnenJlbmRlcmpzL3NoYXBlL1JlY3RhbmdsZScpO1xuICAgIHZhciBTZWN0b3JTaGFwZSA9IHJlcXVpcmUoJ3pyZW5kZXJqcy9zaGFwZS9TZWN0b3InKTtcbiAgICB2YXIgQ2lyY2xlU2hhcGUgPSByZXF1aXJlKCd6cmVuZGVyanMvc2hhcGUvQ2lyY2xlJyk7XG4gICAgXG4gICAgdmFyIGVjQ29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG4gICAgZWNDb25maWcucm9hbUNvbnRyb2xsZXIgPSB7XG4gICAgICAgIHpsZXZlbDogMCwgICAgICAgICAgICAgICAgICAvLyDkuIDnuqflsYLlj6BcbiAgICAgICAgejogNCwgICAgICAgICAgICAgICAgICAgICAgIC8vIOS6jOe6p+WxguWPoFxuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICB4OiAnbGVmdCcsICAgICAgICAgICAgICAgICAvLyDmsLTlubPlronmlL7kvY3nva7vvIzpu5jorqTkuLrlhajlm77lt6blr7npvZDvvIzlj6/pgInkuLrvvJpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2NlbnRlcicgwqYgJ2xlZnQnIMKmICdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gwqYge251bWJlcn3vvIh45Z2Q5qCH77yM5Y2V5L2NcHjvvIlcbiAgICAgICAgeTogJ3RvcCcsICAgICAgICAgICAgICAgICAgLy8g5Z6C55u05a6J5pS+5L2N572u77yM6buY6K6k5Li65YWo5Zu+6aG256uv77yM5Y+v6YCJ5Li677yaXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICd0b3AnIMKmICdib3R0b20nIMKmICdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIMKmIHtudW1iZXJ977yIeeWdkOagh++8jOWNleS9jXB477yJXG4gICAgICAgIHdpZHRoOiA4MCxcbiAgICAgICAgaGVpZ2h0OiAxMjAsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICBib3JkZXJDb2xvcjogJyNjY2MnLCAgICAgICAvLyDlm77kvovovrnmoYbpopzoibJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDAsICAgICAgICAgICAgLy8g5Zu+5L6L6L655qGG57q/5a6977yM5Y2V5L2NcHjvvIzpu5jorqTkuLow77yI5peg6L655qGG77yJXG4gICAgICAgIHBhZGRpbmc6IDUsICAgICAgICAgICAgICAgIC8vIOWbvuS+i+WGhei+uei3ne+8jOWNleS9jXB477yM6buY6K6k5ZCE5pa55ZCR5YaF6L656Led5Li6Ne+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmjqXlj5fmlbDnu4TliIbliKvorr7lrprkuIrlj7PkuIvlt6bovrnot53vvIzlkIxjc3NcbiAgICAgICAgaGFuZGxlQ29sb3I6ICcjNjQ5NWVkJyxcbiAgICAgICAgZmlsbGVyQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgc3RlcDogMTUsICAgICAgICAgICAgICAgICAgLy8g56e75Yqo5bmF5bqmXG4gICAgICAgIG1hcFR5cGVDb250cm9sOiBudWxsXG4gICAgfTtcblxuICAgIHZhciB6clV0aWwgPSByZXF1aXJlKCd6cmVuZGVyanMvdG9vbC91dGlsJyk7XG4gICAgdmFyIHpyQ29sb3IgPSByZXF1aXJlKCd6cmVuZGVyanMvdG9vbC9jb2xvcicpO1xuICAgIHZhciB6ckV2ZW50ID0gcmVxdWlyZSgnenJlbmRlcmpzL3Rvb2wvZXZlbnQnKTtcblxuICAgIC8qKlxuICAgICAqIOaehOmAoOWHveaVsFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlQ2VudGVyIGVjaGFydOa2iOaBr+S4reW/g1xuICAgICAqIEBwYXJhbSB7WlJlbmRlcn0genIgenJlbmRlcuWunuS+i1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24g5Zu+6KGo5Y+C5pWwXG4gICAgICovXG4gICAgZnVuY3Rpb24gUm9hbUNvbnRyb2xsZXIoZWNUaGVtZSwgbWVzc2FnZUNlbnRlciwgenIsIG9wdGlvbiwgbXlDaGFydCkge1xuICAgICAgICBpZiAoIW9wdGlvbi5yb2FtQ29udHJvbGxlciB8fCAhb3B0aW9uLnJvYW1Db250cm9sbGVyLnNob3cpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdGlvbi5yb2FtQ29udHJvbGxlci5tYXBUeXBlQ29udHJvbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignb3B0aW9uLnJvYW1Db250cm9sbGVyLm1hcFR5cGVDb250cm9sIGhhcyBub3QgYmVlbiBkZWZpbmVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBCYXNlLmNhbGwodGhpcywgZWNUaGVtZSwgbWVzc2FnZUNlbnRlciwgenIsIG9wdGlvbiwgbXlDaGFydCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJjT3B0aW9uID0gb3B0aW9uLnJvYW1Db250cm9sbGVyO1xuICAgICAgICBcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9kcmljdGlvbk1vdXNlRG93biA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX19kcmljdGlvbk1vdXNlRG93bihwYXJhbXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9kcmljdGlvbk1vdXNlVXAgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9fZHJpY3Rpb25Nb3VzZVVwKHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2RyaWN0aW9uTW91c2VNb3ZlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fX2RyaWN0aW9uTW91c2VNb3ZlKHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2RyaWN0aW9uTW91c2VPdXQgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9fZHJpY3Rpb25Nb3VzZU91dChwYXJhbXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zY2FsZUhhbmRsZXIgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLl9fc2NhbGVIYW5kbGVyKHBhcmFtcyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVmcmVzaChvcHRpb24pO1xuICAgIH1cbiAgICBcbiAgICBSb2FtQ29udHJvbGxlci5wcm90b3R5cGUgPSB7XG4gICAgICAgIHR5cGU6IGVjQ29uZmlnLkNPTVBPTkVOVF9UWVBFX1JPQU1DT05UUk9MTEVSLFxuICAgICAgICBfYnVpbGRTaGFwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJjT3B0aW9uLnNob3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlhYPntKDnu4TnmoTkvY3nva7lj4LmlbDvvIzpgJrov4forqHnrpfmiYDlvpd4LCB5LCB3aWR0aCwgaGVpZ2h0XG4gICAgICAgICAgICB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbiA9IHRoaXMuX2dldEl0ZW1Hcm91cExvY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2J1aWxkQmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRJdGVtKCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy5zaGFwZUxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56ci5hZGRTaGFwZSh0aGlzLnNoYXBlTGlzdFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaehOW7uuaJgOaciea8q+a4uOaOp+WItuWZqOWFg+e0oFxuICAgICAgICAgKi9cbiAgICAgICAgX2J1aWxkSXRlbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaCh0aGlzLl9nZXREaXJlY3Rpb25TaGFwZSgndXAnKSk7XG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKHRoaXMuX2dldERpcmVjdGlvblNoYXBlKCdkb3duJykpO1xuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaCh0aGlzLl9nZXREaXJlY3Rpb25TaGFwZSgnbGVmdCcpKTtcbiAgICAgICAgICAgIHRoaXMuc2hhcGVMaXN0LnB1c2godGhpcy5fZ2V0RGlyZWN0aW9uU2hhcGUoJ3JpZ2h0JykpO1xuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaCh0aGlzLl9nZXRTY2FsZVNoYXBlKCdzY2FsZVVwJykpO1xuICAgICAgICAgICAgdGhpcy5zaGFwZUxpc3QucHVzaCh0aGlzLl9nZXRTY2FsZVNoYXBlKCdzY2FsZURvd24nKSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfZ2V0RGlyZWN0aW9uU2hhcGU6IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi5yO1xuICAgICAgICAgICAgdmFyIHggPSB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi54ICsgcjtcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ueSArIHI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBzZWN0b3JTaGFwZSA9IHtcbiAgICAgICAgICAgICAgICB6bGV2ZWw6IHRoaXMuZ2V0WmxldmVsQmFzZSgpLFxuICAgICAgICAgICAgICAgIHo6IHRoaXMuZ2V0WkJhc2UoKSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB4LCAgICAgICAgICAvLyDlnIblv4PmqKrlnZDmoIdcbiAgICAgICAgICAgICAgICAgICAgeTogeSwgICAgICAgICAgLy8g5ZyG5b+D57q15Z2Q5qCHXG4gICAgICAgICAgICAgICAgICAgIHI6IHIsICAgICAgICAgIC8vIOWchueOr+WkluWNiuW+hFxuICAgICAgICAgICAgICAgICAgICBzdGFydEFuZ2xlOiAtNDUsXG4gICAgICAgICAgICAgICAgICAgIGVuZEFuZ2xlOiA0NSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucmNPcHRpb24uaGFuZGxlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICc+JyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFg6IHggKyByIC8gMiArIDQsXG4gICAgICAgICAgICAgICAgICAgIHRleHRZOiB5IC0gMC41LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QmFzZWxpbmU6ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb246ICdzcGVjaWZpYycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogdGhpcy5yY09wdGlvbi5maWxsZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZvbnQ6IE1hdGguZmxvb3IociAvIDIpICsgJ3B4IGFyaWFsJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHpyQ29sb3IubGlmdCh0aGlzLnJjT3B0aW9uLmhhbmRsZUNvbG9yLCAtMC4yKSxcbiAgICAgICAgICAgICAgICAgICAgYnJ1c2hUeXBlOiAnZmlsbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgICAgICAgICAgICBzZWN0b3JTaGFwZS5yb3RhdGlvbiA9IFtNYXRoLlBJIC8gMiwgeCwgeV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBzZWN0b3JTaGFwZS5yb3RhdGlvbiA9IFtNYXRoLlBJLCB4LCB5XTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG4gICAgICAgICAgICAgICAgICAgIHNlY3RvclNoYXBlLnJvdGF0aW9uID0gWy1NYXRoLlBJIC8gMiwgeCwgeV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWN0b3JTaGFwZSA9IG5ldyBTZWN0b3JTaGFwZShzZWN0b3JTaGFwZSk7XG4gICAgICAgICAgICBzZWN0b3JTaGFwZS5fcm9hbVR5cGUgPSBkaXJlY3Rpb247XG4gICAgICAgICAgICBzZWN0b3JTaGFwZS5vbm1vdXNlZG93biA9IHRoaXMuX2RyaWN0aW9uTW91c2VEb3duO1xuICAgICAgICAgICAgc2VjdG9yU2hhcGUub25tb3VzZXVwID0gdGhpcy5fZHJpY3Rpb25Nb3VzZVVwO1xuICAgICAgICAgICAgc2VjdG9yU2hhcGUub25tb3VzZW1vdmUgPSB0aGlzLl9kcmljdGlvbk1vdXNlTW92ZTtcbiAgICAgICAgICAgIHNlY3RvclNoYXBlLm9ubW91c2VvdXQgPSB0aGlzLl9kcmljdGlvbk1vdXNlT3V0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc2VjdG9yU2hhcGU7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfZ2V0U2NhbGVTaGFwZTogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ud2lkdGg7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5faXRlbUdyb3VwTG9jYXRpb24uaGVpZ2h0IC0gd2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgPCAwID8gMjAgOiBoZWlnaHQ7ICAvLyDnoa7kv51oZWlnaHTkuI3kuLrotJ9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLm1pbih3aWR0aCAvIDIgLSA1LCBoZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ueCBcbiAgICAgICAgICAgICAgICAgICAgKyAodGV4dCA9PT0gJ3NjYWxlRG93bicgPyAod2lkdGggLSByKSA6IHIpO1xuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi55ICsgdGhpcy5faXRlbUdyb3VwTG9jYXRpb24uaGVpZ2h0IC0gcjtcblxuICAgICAgICAgICAgdmFyIHNjYWxlU2hhcGUgPSB7XG4gICAgICAgICAgICAgICAgemxldmVsOiB0aGlzLmdldFpsZXZlbEJhc2UoKSxcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmdldFpCYXNlKCksXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICAgICAgcjogcixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHRoaXMucmNPcHRpb24uaGFuZGxlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHQgPT09ICdzY2FsZURvd24nID8gJy0nIDogJysnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0WDogeCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFk6IHkgLSAyLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QmFzZWxpbmU6ICdtaWRkbGUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0UG9zaXRpb246ICdzcGVjaWZpYycsXG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogdGhpcy5yY09wdGlvbi5maWxsZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZvbnQ6IE1hdGguZmxvb3IocikgKyAncHggdmVyZGFuYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB6ckNvbG9yLmxpZnQodGhpcy5yY09wdGlvbi5oYW5kbGVDb2xvciwgLTAuMiksXG4gICAgICAgICAgICAgICAgICAgIGJydXNoVHlwZTogJ2ZpbGwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNjYWxlU2hhcGUgPSBuZXcgQ2lyY2xlU2hhcGUoc2NhbGVTaGFwZSk7XG4gICAgICAgICAgICBzY2FsZVNoYXBlLl9yb2FtVHlwZSA9IHRleHQ7XG4gICAgICAgICAgICBzY2FsZVNoYXBlLm9ubW91c2Vkb3duID0gdGhpcy5fc2NhbGVIYW5kbGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc2NhbGVTaGFwZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIF9idWlsZEJhY2tncm91bmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gdGhpcy5yZWZvcm1Dc3NBcnJheSh0aGlzLnJjT3B0aW9uLnBhZGRpbmcpO1xuXG4gICAgICAgICAgICB0aGlzLnNoYXBlTGlzdC5wdXNoKG5ldyBSZWN0YW5nbGVTaGFwZSh7XG4gICAgICAgICAgICAgICAgemxldmVsOiB0aGlzLmdldFpsZXZlbEJhc2UoKSxcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmdldFpCYXNlKCksXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlIDpmYWxzZSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi54IC0gcGFkZGluZ1szXSxcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5faXRlbUdyb3VwTG9jYXRpb24ueSAtIHBhZGRpbmdbMF0sXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLl9pdGVtR3JvdXBMb2NhdGlvbi53aWR0aCArIHBhZGRpbmdbM10gKyBwYWRkaW5nWzFdLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuX2l0ZW1Hcm91cExvY2F0aW9uLmhlaWdodCArIHBhZGRpbmdbMF0gKyBwYWRkaW5nWzJdLFxuICAgICAgICAgICAgICAgICAgICBicnVzaFR5cGU6IHRoaXMucmNPcHRpb24uYm9yZGVyV2lkdGggPT09IDAgPyAnZmlsbCcgOiAnYm90aCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnJjT3B0aW9uLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IHRoaXMucmNPcHRpb24uYm9yZGVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogdGhpcy5yY09wdGlvbi5ib3JkZXJXaWR0aFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICog5qC55o2u6YCJ6aG56K6h566X5ryr5ri45o6n5Yi25Zmo5a6e5L2T55qE5L2N572u5Z2Q5qCHXG4gICAgICAgICAqL1xuICAgICAgICBfZ2V0SXRlbUdyb3VwTG9jYXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYWRkaW5nID0gdGhpcy5yZWZvcm1Dc3NBcnJheSh0aGlzLnJjT3B0aW9uLnBhZGRpbmcpO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5yY09wdGlvbi53aWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLnJjT3B0aW9uLmhlaWdodDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHpyV2lkdGggPSB0aGlzLnpyLmdldFdpZHRoKCk7XG4gICAgICAgICAgICB2YXIgenJIZWlnaHQgPSB0aGlzLnpyLmdldEhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHg7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucmNPcHRpb24ueCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NlbnRlcicgOlxuICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcigoenJXaWR0aCAtIHdpZHRoKSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JyA6XG4gICAgICAgICAgICAgICAgICAgIHggPSBwYWRkaW5nWzNdICsgdGhpcy5yY09wdGlvbi5ib3JkZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnIDpcbiAgICAgICAgICAgICAgICAgICAgeCA9IHpyV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gd2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gcGFkZGluZ1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgLSBwYWRkaW5nWzNdXG4gICAgICAgICAgICAgICAgICAgICAgICAtIHRoaXMucmNPcHRpb24uYm9yZGVyV2lkdGggKiAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICAgICAgeCA9IHRoaXMucGFyc2VQZXJjZW50KHRoaXMucmNPcHRpb24ueCwgenJXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgeTtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5yY09wdGlvbi55KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wJyA6XG4gICAgICAgICAgICAgICAgICAgIHkgPSBwYWRkaW5nWzBdICsgdGhpcy5yY09wdGlvbi5ib3JkZXJXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJyA6XG4gICAgICAgICAgICAgICAgICAgIHkgPSB6ckhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgLSBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC0gcGFkZGluZ1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgLSBwYWRkaW5nWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICAtIHRoaXMucmNPcHRpb24uYm9yZGVyV2lkdGggKiAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjZW50ZXInIDpcbiAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoKHpySGVpZ2h0IC0gaGVpZ2h0KSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDpcbiAgICAgICAgICAgICAgICAgICAgeSA9IHRoaXMucGFyc2VQZXJjZW50KHRoaXMucmNPcHRpb24ueSwgenJIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICAgICAgcjogd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBfX2RyaWN0aW9uTW91c2VEb3duOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2RyaWN0aW9uSGFuZGxlck9uKHBhcmFtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfX2RyaWN0aW9uTW91c2VVcDogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5fZHJpY3Rpb25IYW5kbGVyT2ZmKHBhcmFtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfX2RyaWN0aW9uTW91c2VNb3ZlOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlZG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyaWN0aW9uSGFuZGxlck9uKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfX2RyaWN0aW9uTW91c2VPdXQ6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgICAgdGhpcy5fZHJpY3Rpb25IYW5kbGVyT2ZmKHBhcmFtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfZHJpY3Rpb25IYW5kbGVyT246IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudChwYXJhbXMuZXZlbnQsIHBhcmFtcy50YXJnZXQuX3JvYW1UeXBlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kaXJjZXRpb25UaW1lcik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmRpcmNldGlvblRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZGlzcGF0Y2hFdmVudChwYXJhbXMuZXZlbnQsIHBhcmFtcy50YXJnZXQuX3JvYW1UeXBlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB6ckV2ZW50LnN0b3AocGFyYW1zLmV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIF9kcmljdGlvbkhhbmRsZXJPZmY6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmRpcmNldGlvblRpbWVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIF9fc2NhbGVIYW5kbGVyOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQocGFyYW1zLmV2ZW50LCBwYXJhbXMudGFyZ2V0Ll9yb2FtVHlwZSk7XG4gICAgICAgICAgICB6ckV2ZW50LnN0b3AocGFyYW1zLmV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50OiBmdW5jdGlvbihldmVudCwgcm9hbVR5cGUpe1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2VudGVyLmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIGVjQ29uZmlnLkVWRU5ULlJPQU1DT05UUk9MTEVSLFxuICAgICAgICAgICAgICAgIGV2ZW50LCBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJvYW1UeXBlOiByb2FtVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IHRoaXMucmNPcHRpb24ubWFwVHlwZUNvbnRyb2wsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IHRoaXMucmNPcHRpb24uc3RlcFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5teUNoYXJ0XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICog5Yi35pawXG4gICAgICAgICAqL1xuICAgICAgICByZWZyZXNoOiBmdW5jdGlvbiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24gPSBuZXdPcHRpb24gfHwgdGhpcy5vcHRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24ucm9hbUNvbnRyb2xsZXIgPSB0aGlzLnJlZm9ybU9wdGlvbih0aGlzLm9wdGlvbi5yb2FtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5yY09wdGlvbiA9IHRoaXMub3B0aW9uLnJvYW1Db250cm9sbGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fYnVpbGRTaGFwZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICBcbiAgICB6clV0aWwuaW5oZXJpdHMoUm9hbUNvbnRyb2xsZXIsIEJhc2UpO1xuICAgIFxuICAgIHJlcXVpcmUoJy4uL2NvbXBvbmVudCcpLmRlZmluZSgncm9hbUNvbnRyb2xsZXInLCBSb2FtQ29udHJvbGxlcik7XG4gICAgXG4gICAgcmV0dXJuIFJvYW1Db250cm9sbGVyO1xufSk7XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogRTovV29ya3NwYWNlL2dpdGh1Yi9lY2hhcnRzLXgtZXhhbXBsZXMyL34vZWNoYXJ0cy9jb21wb25lbnQvcm9hbUNvbnRyb2xsZXIuanNcbiAqKi8iLCIvKipcbiAqIGVjaGFydHPlnLDlm77kuIDoiKzmipXlsITnrpfms5VcbiAqIG1vZGlmeSBmcm9tIEdlb01hcCB2MC41LjMgaHR0cHM6Ly9naXRodWIuY29tL3g2ZG9vb28vR2VvTWFwXG4gKiBcbiAqIEBkZXNjIGVjaGFydHPln7rkuo5DYW52YXPvvIznuq9KYXZhc2NyaXB05Zu+6KGo5bqT77yM5o+Q5L6b55u06KeC77yM55Sf5Yqo77yM5Y+v5Lqk5LqS77yM5Y+v5Liq5oCn5YyW5a6a5Yi255qE5pWw5o2u57uf6K6h5Zu+6KGo44CCXG4gKiBAYXV0aG9yIEtlbmVyIChAS2VuZXIt5p6X5bOwLCBrZW5lci5saW5mZW5nQGdtYWlsLmNvbSlcbiAqXG4gKi9cbmRlZmluZShmdW5jdGlvbihyZXF1aXJlKSB7XG5cbiAgICB2YXIgUGF0aFNoYXBlID0gcmVxdWlyZSgnenJlbmRlcmpzL3NoYXBlL1BhdGgnKTtcbiAgICBmdW5jdGlvbiB0b0Zsb2F0KHN0cikge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHIgfHwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QmJveChyb290KSB7XG4gICAgICAgIHZhciBzdmdOb2RlID0gcm9vdC5maXJzdENoaWxkO1xuICAgICAgICAvLyBGaW5kIHRoZSBzdmcgbm9kZVxuICAgICAgICB3aGlsZSAoIShzdmdOb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3N2ZycgJiYgc3ZnTm9kZS5ub2RlVHlwZSA9PSAxKSkge1xuICAgICAgICAgICAgc3ZnTm9kZSA9IHN2Z05vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeCA9IHRvRmxvYXQoc3ZnTm9kZS5nZXRBdHRyaWJ1dGUoJ3gnKSk7XG4gICAgICAgIHZhciB5ID0gdG9GbG9hdChzdmdOb2RlLmdldEF0dHJpYnV0ZSgneScpKTtcbiAgICAgICAgdmFyIHdpZHRoID0gdG9GbG9hdChzdmdOb2RlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSk7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0b0Zsb2F0KHN2Z05vZGUuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB4LFxuICAgICAgICAgICAgdG9wOiB5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZ2VvSnNvbjJQYXRoKHJvb3QsIHRyYW5zZm9ybSkge1xuICAgICAgICB2YXIgc2NhbGUgPSBbdHJhbnNmb3JtLnNjYWxlLngsIHRyYW5zZm9ybS5zY2FsZS55XTtcbiAgICAgICAgdmFyIGVsTGlzdCA9IFtdO1xuICAgICAgICBmdW5jdGlvbiBfZ2V0U2hhcGUocm9vdCkge1xuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSByb290LnRhZ05hbWU7XG4gICAgICAgICAgICBpZiAoc2hhcGVCdWlsZGVyc1t0YWdOYW1lXSkge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBzaGFwZUJ1aWxkZXJzW3RhZ05hbWVdKHJvb3QsIHNjYWxlKTtcblxuICAgICAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tbW9uIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgb2JqLnNjYWxlID0gc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIG9iai5wcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9vdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBvYmouaWQgPSByb290LmlkO1xuICAgICAgICAgICAgICAgICAgICBleHRlbmRDb21tb25BdHRyaWJ1dGVzKG9iaiwgcm9vdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxMaXN0LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2hhcGVzID0gcm9vdC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNoYXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIF9nZXRTaGFwZShzaGFwZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9nZXRTaGFwZShyb290KTtcbiAgICAgICAgcmV0dXJuIGVsTGlzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlubPpnaLlnZDmoIfovaznu4/nuqzluqZcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwXG4gICAgICovXG4gICAgZnVuY3Rpb24gcG9zMmdlbyhvYmosIHApIHtcbiAgICAgICAgdmFyIHBvaW50ID0gcCBpbnN0YW5jZW9mIEFycmF5ID8gW3BbMF0gKiAxLCBwWzFdICogMV0gOiBbcC54ICogMSwgcC55ICogMV07XG4gICAgICAgIHJldHVybiBbcG9pbnRbMF0gLyBvYmouc2NhbGUueCwgcG9pbnRbMV0gLyBvYmouc2NhbGUueV07XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIOe7j+e6rOW6pui9rOW5s+mdouWdkOagh1xuICAgICAqIEBwYXJhbSB7QXJyYXkgfCBPYmplY3R9IHBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZW8ycG9zKG9iaiwgcCkge1xuICAgICAgICB2YXIgcG9pbnQgPSBwIGluc3RhbmNlb2YgQXJyYXkgPyBbcFswXSAqIDEsIHBbMV0gKiAxXSA6IFtwLnggKiAxLCBwLnkgKiAxXTtcbiAgICAgICAgcmV0dXJuIFtwb2ludFswXSAqIG9iai5zY2FsZS54LCBwb2ludFsxXSAqIG9iai5zY2FsZS55XTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmltKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHNcXHMqLywgJycpLnJlcGxhY2UoL1xcc1xccyokLywgJycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4dGVuZENvbW1vbkF0dHJpYnV0ZXMob2JqLCB4bWxOb2RlKSB7XG5cbiAgICAgICAgdmFyIGNvbG9yID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKTtcbiAgICAgICAgdmFyIHN0cm9rZUNvbG9yID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ3N0cm9rZScpO1xuICAgICAgICB2YXIgbGluZVdpZHRoID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcpO1xuICAgICAgICB2YXIgb3BhY2l0eSA9IHhtbE5vZGUuZ2V0QXR0cmlidXRlKCdvcGFjaXR5Jyk7XG5cbiAgICAgICAgaWYgKGNvbG9yICYmIGNvbG9yICE9ICdub25lJykge1xuICAgICAgICAgICAgb2JqLmNvbG9yID0gY29sb3I7XG4gICAgICAgICAgICBpZiAoc3Ryb2tlQ29sb3IpIHtcbiAgICAgICAgICAgICAgICBvYmouYnJ1c2hUeXBlID0gJ2JvdGgnO1xuICAgICAgICAgICAgICAgIG9iai5zdHJva2VDb2xvciA9IHN0cm9rZUNvbG9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmouYnJ1c2hUeXBlID0gJ2ZpbGwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0cm9rZUNvbG9yICYmIHN0cm9rZUNvbG9yICE9ICdub25lJykge1xuICAgICAgICAgICAgb2JqLnN0cm9rZUNvbG9yID0gc3Ryb2tlQ29sb3I7XG4gICAgICAgICAgICBvYmouYnJ1c2hUeXBlID0gJ3N0cm9rZSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmVXaWR0aCAmJiBsaW5lV2lkdGggIT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBvYmoubGluZVdpZHRoID0gcGFyc2VGbG9hdChsaW5lV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcGFjaXR5ICYmIG9wYWNpdHkgIT0gJ25vbmUnKSB7XG4gICAgICAgICAgICBvYmoub3BhY2l0eSA9IHBhcnNlRmxvYXQob3BhY2l0eSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVBvaW50cyhzdHIpIHtcbiAgICAgICAgdmFyIGxpc3QgPSB0cmltKHN0cikucmVwbGFjZSgvLC9nLCAnICcpLnNwbGl0KC9cXHMrLyk7XG4gICAgICAgIHZhciBwb2ludHMgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOykge1xuICAgICAgICAgICAgdmFyIHggPSBwYXJzZUZsb2F0KGxpc3RbaSsrXSk7XG4gICAgICAgICAgICB2YXIgeSA9IHBhcnNlRmxvYXQobGlzdFtpKytdKTtcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9XG5cbiAgICAvLyBSZWd1bGFyIHN2ZyBzaGFwZXNcbiAgICB2YXIgc2hhcGVCdWlsZGVycyA9IHtcbiAgICAgICAgcGF0aDogZnVuY3Rpb24oeG1sTm9kZSwgc2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBwYXRoID0geG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2QnKTtcbiAgICAgICAgICAgIHZhciByZWN0ID0gUGF0aFNoYXBlLnByb3RvdHlwZS5nZXRSZWN0KHsgcGF0aCA6IHBhdGggfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNoYXBlVHlwZTogJ3BhdGgnLFxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgY3A6IFtcbiAgICAgICAgICAgICAgICAgICAgKHJlY3QueCArIHJlY3Qud2lkdGggLyAyKSAqIHNjYWxlWzBdLCBcbiAgICAgICAgICAgICAgICAgICAgKHJlY3QueSArIHJlY3QuaGVpZ2h0IC8gMikgKiBzY2FsZVsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVjdDogZnVuY3Rpb24oeG1sTm9kZSwgc2NhbGUpIHtcbiAgICAgICAgICAgIHZhciB4ID0gdG9GbG9hdCh4bWxOb2RlLmdldEF0dHJpYnV0ZSgneCcpKTtcbiAgICAgICAgICAgIHZhciB5ID0gdG9GbG9hdCh4bWxOb2RlLmdldEF0dHJpYnV0ZSgneScpKTtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IHRvRmxvYXQoeG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRvRmxvYXQoeG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaGFwZVR5cGU6ICdyZWN0YW5nbGUnLFxuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICAgICAgY3A6IFtcbiAgICAgICAgICAgICAgICAgICAgKHggKyB3aWR0aCAvIDIpICogc2NhbGVbMF0sIFxuICAgICAgICAgICAgICAgICAgICAoeSArIGhlaWdodCAvIDIpICogc2NhbGVbMV1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGxpbmU6IGZ1bmN0aW9uKHhtbE5vZGUsIHNjYWxlKSB7XG4gICAgICAgICAgICB2YXIgeDEgPSB0b0Zsb2F0KHhtbE5vZGUuZ2V0QXR0cmlidXRlKCd4MScpKTtcbiAgICAgICAgICAgIHZhciB5MSA9IHRvRmxvYXQoeG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ3kxJykpO1xuICAgICAgICAgICAgdmFyIHgyID0gdG9GbG9hdCh4bWxOb2RlLmdldEF0dHJpYnV0ZSgneDInKSk7XG4gICAgICAgICAgICB2YXIgeTIgPSB0b0Zsb2F0KHhtbE5vZGUuZ2V0QXR0cmlidXRlKCd5MicpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaGFwZVR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICB4U3RhcnQ6IHgxLFxuICAgICAgICAgICAgICAgIHlTdGFydDogeTEsXG4gICAgICAgICAgICAgICAgeEVuZDogeDIsXG4gICAgICAgICAgICAgICAgeUVuZDogeTIsXG4gICAgICAgICAgICAgICAgY3A6IFtcbiAgICAgICAgICAgICAgICAgICAgKHgxICsgeDIpICogMC41ICogc2NhbGVbMF0sIFxuICAgICAgICAgICAgICAgICAgICAoeTEgKyB5MikgKiAwLjUgKiBzY2FsZVsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2lyY2xlOiBmdW5jdGlvbih4bWxOb2RlLCBzY2FsZSkge1xuICAgICAgICAgICAgdmFyIGN4ID0gdG9GbG9hdCh4bWxOb2RlLmdldEF0dHJpYnV0ZSgnY3gnKSk7XG4gICAgICAgICAgICB2YXIgY3kgPSB0b0Zsb2F0KHhtbE5vZGUuZ2V0QXR0cmlidXRlKCdjeScpKTtcbiAgICAgICAgICAgIHZhciByID0gdG9GbG9hdCh4bWxOb2RlLmdldEF0dHJpYnV0ZSgncicpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzaGFwZVR5cGU6ICdjaXJjbGUnLFxuICAgICAgICAgICAgICAgIHg6IGN4LFxuICAgICAgICAgICAgICAgIHk6IGN5LFxuICAgICAgICAgICAgICAgIHI6IHIsXG4gICAgICAgICAgICAgICAgY3A6IFtcbiAgICAgICAgICAgICAgICAgICAgY3ggKiBzY2FsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgY3kgKiBzY2FsZVsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZWxsaXBzZTogZnVuY3Rpb24oeG1sTm9kZSwgc2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBjeCA9IHBhcnNlRmxvYXQoeG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ2N4JykgfHwgMCk7XG4gICAgICAgICAgICB2YXIgY3kgPSBwYXJzZUZsb2F0KHhtbE5vZGUuZ2V0QXR0cmlidXRlKCdjeScpIHx8IDApO1xuICAgICAgICAgICAgdmFyIHJ4ID0gcGFyc2VGbG9hdCh4bWxOb2RlLmdldEF0dHJpYnV0ZSgncngnKSB8fCAwKTtcbiAgICAgICAgICAgIHZhciByeSA9IHBhcnNlRmxvYXQoeG1sTm9kZS5nZXRBdHRyaWJ1dGUoJ3J5JykgfHwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2hhcGVUeXBlOiAnZWxsaXBzZScsXG4gICAgICAgICAgICAgICAgeDogY3gsXG4gICAgICAgICAgICAgICAgeTogY3ksXG4gICAgICAgICAgICAgICAgYTogcngsXG4gICAgICAgICAgICAgICAgYjogcnksXG4gICAgICAgICAgICAgICAgY3A6IFtcbiAgICAgICAgICAgICAgICAgICAgY3ggKiBzY2FsZVswXSxcbiAgICAgICAgICAgICAgICAgICAgY3kgKiBzY2FsZVsxXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9seWdvbjogZnVuY3Rpb24oeG1sTm9kZSwgc2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBwb2ludHMgPSB4bWxOb2RlLmdldEF0dHJpYnV0ZSgncG9pbnRzJyk7XG4gICAgICAgICAgICB2YXIgbWluID0gW0luZmluaXR5LCBJbmZpbml0eV07XG4gICAgICAgICAgICB2YXIgbWF4ID0gWy1JbmZpbml0eSwgLUluZmluaXR5XTtcbiAgICAgICAgICAgIGlmIChwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMgPSBwYXJzZVBvaW50cyhwb2ludHMpO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBwb2ludHNbaV07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtaW5bMF0gPSBNYXRoLm1pbihwWzBdLCBtaW5bMF0pO1xuICAgICAgICAgICAgICAgICAgICBtaW5bMV0gPSBNYXRoLm1pbihwWzFdLCBtaW5bMV0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG1heFswXSA9IE1hdGgubWF4KHBbMF0sIG1heFswXSk7XG4gICAgICAgICAgICAgICAgICAgIG1heFsxXSA9IE1hdGgubWF4KHBbMV0sIG1heFsxXSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhcGVUeXBlOiAncG9seWdvbicsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50TGlzdDogcG9pbnRzLFxuICAgICAgICAgICAgICAgICAgICBjcDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgKG1pblswXSArIG1heFswXSkgLyAyICogc2NhbGVbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAobWluWzFdICsgbWF4WzFdKSAvIDIgKiBzY2FsZVswXVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwb2x5bGluZTogZnVuY3Rpb24oeG1sTm9kZSwgc2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBzaGFwZUJ1aWxkZXJzLnBvbHlnb24oeG1sTm9kZSwgc2NhbGUpO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0QmJveDogZ2V0QmJveCxcbiAgICAgICAgZ2VvSnNvbjJQYXRoOiBnZW9Kc29uMlBhdGgsXG4gICAgICAgIHBvczJnZW86IHBvczJnZW8sXG4gICAgICAgIGdlbzJwb3M6IGdlbzJwb3NcbiAgICB9O1xufSk7IFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEU6L1dvcmtzcGFjZS9naXRodWIvZWNoYXJ0cy14LWV4YW1wbGVzMi9+L2VjaGFydHMvdXRpbC9wcm9qZWN0aW9uL3N2Zy5qc1xuICoqLyIsIi8qKlxuICogZWNoYXJ0c+WcsOWbvuS4gOiIrOaKleWwhOeul+azlVxuICogbW9kaWZ5IGZyb20gR2VvTWFwIHYwLjUuMyBodHRwczovL2dpdGh1Yi5jb20veDZkb29vby9HZW9NYXBcbiAqIFxuICogQGRlc2MgZWNoYXJ0c+WfuuS6jkNhbnZhc++8jOe6r0phdmFzY3JpcHTlm77ooajlupPvvIzmj5Dkvpvnm7Top4LvvIznlJ/liqjvvIzlj6/kuqTkupLvvIzlj6/kuKrmgKfljJblrprliLbnmoTmlbDmja7nu5/orqHlm77ooajjgIJcbiAqIEBhdXRob3IgS2VuZXIgKEBLZW5lci3mnpfls7AsIGtlbmVyLmxpbmZlbmdAZ21haWwuY29tKVxuICpcbiAqL1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGdldEJib3goanNvbiwgc3BlY2lhbEFyZWEpIHtcbiAgICAgICAgc3BlY2lhbEFyZWEgPSBzcGVjaWFsQXJlYSB8fCB7fTtcbiAgICAgICAgaWYgKCFqc29uLnNyY1NpemUpIHtcbiAgICAgICAgICAgIHBhcnNlU3JjU2l6ZShqc29uLCBzcGVjaWFsQXJlYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBqc29uLnNyY1NpemU7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHBhcnNlU3JjU2l6ZShqc29uLCBzcGVjaWFsQXJlYSkge1xuICAgICAgICBzcGVjaWFsQXJlYSA9IHNwZWNpYWxBcmVhIHx8IHt9O1xuICAgICAgICBjb252ZXJ0b3JQYXJzZS54bWluID0gMzYwO1xuICAgICAgICBjb252ZXJ0b3JQYXJzZS54bWF4ID0gLTM2MDtcbiAgICAgICAgY29udmVydG9yUGFyc2UueW1pbiA9IDE4MDtcbiAgICAgICAgY29udmVydG9yUGFyc2UueW1heCA9IC0xODA7XG5cbiAgICAgICAgdmFyIHNoYXBlcyA9IGpzb24uZmVhdHVyZXM7XG4gICAgICAgIHZhciBnZW9tZXRyaWVzO1xuICAgICAgICB2YXIgc2hhcGU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzaGFwZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHNoYXBlID0gc2hhcGVzW2ldO1xuICAgICAgICAgICAgaWYgKHNoYXBlLnByb3BlcnRpZXMubmFtZSAmJiBzcGVjaWFsQXJlYVtzaGFwZS5wcm9wZXJ0aWVzLm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0ZlYXR1cmUnOlxuICAgICAgICAgICAgICAgICAgICBjb252ZXJ0b3JQYXJzZVtzaGFwZS5nZW9tZXRyeS50eXBlXShzaGFwZS5nZW9tZXRyeS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0dlb21ldHJ5Q29sbGVjdGlvbicgOlxuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyaWVzID0gc2hhcGUuZ2VvbWV0cmllcztcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbjIgPSBnZW9tZXRyaWVzLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydG9yUGFyc2VbZ2VvbWV0cmllc1tqXS50eXBlXShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyaWVzW2pdLmNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAganNvbi5zcmNTaXplID0ge1xuICAgICAgICAgICAgbGVmdDogY29udmVydG9yUGFyc2UueG1pbi50b0ZpeGVkKDQpKjEsXG4gICAgICAgICAgICB0b3A6IGNvbnZlcnRvclBhcnNlLnltaW4udG9GaXhlZCg0KSoxLFxuICAgICAgICAgICAgd2lkdGg6IChjb252ZXJ0b3JQYXJzZS54bWF4IC0gY29udmVydG9yUGFyc2UueG1pbikudG9GaXhlZCg0KSoxLFxuICAgICAgICAgICAgaGVpZ2h0OiAoY29udmVydG9yUGFyc2UueW1heCAtIGNvbnZlcnRvclBhcnNlLnltaW4pLnRvRml4ZWQoNCkqMVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIHZhciBjb252ZXJ0b3IgPSB7XG4gICAgICAgIC8v6LCD5pW05L+E572X5pav5Lic6YOo5Yiw5Zyw5Zu+5Y+z5L6n5LiO5L+E572X5pav55u46L+eXG4gICAgICAgIGZvcm1hdFBvaW50OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAoKHBbMF0gPCAtMTY4LjUgJiYgcFsxXSA+IDYzLjgpID8gcFswXSArIDM2MCA6IHBbMF0pICsgMTY4LjUsIFxuICAgICAgICAgICAgICAgIDkwIC0gcFsxXVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcbiAgICAgICAgbWFrZVBvaW50OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gc2VsZi5mb3JtYXRQb2ludChwKTtcbiAgICAgICAgICAgIC8vIGZvciBjcFxuICAgICAgICAgICAgaWYgKHNlbGYuX2Jib3gueG1pbiA+IHBbMF0pIHsgc2VsZi5fYmJveC54bWluID0gcFswXTsgfVxuICAgICAgICAgICAgaWYgKHNlbGYuX2Jib3gueG1heCA8IHBbMF0pIHsgc2VsZi5fYmJveC54bWF4ID0gcFswXTsgfVxuICAgICAgICAgICAgaWYgKHNlbGYuX2Jib3gueW1pbiA+IHBbMV0pIHsgc2VsZi5fYmJveC55bWluID0gcFsxXTsgfVxuICAgICAgICAgICAgaWYgKHNlbGYuX2Jib3gueW1heCA8IHBbMV0pIHsgc2VsZi5fYmJveC55bWF4ID0gcFsxXTsgfVxuICAgICAgICAgICAgdmFyIHggPSAocG9pbnRbMF0gLSBjb252ZXJ0b3Iub2Zmc2V0LngpICogY29udmVydG9yLnNjYWxlLnhcbiAgICAgICAgICAgICAgICAgICAgKyBjb252ZXJ0b3Iub2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICB2YXIgeSA9IChwb2ludFsxXSAtIGNvbnZlcnRvci5vZmZzZXQueSkgKiBjb252ZXJ0b3Iuc2NhbGUueVxuICAgICAgICAgICAgICAgICAgICArIGNvbnZlcnRvci5vZmZzZXQudG9wO1xuICAgICAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICAgICAgfSxcbiAgICAgICAgUG9pbnQ6IGZ1bmN0aW9uIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLm1ha2VQb2ludChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXMuam9pbignLCcpO1xuICAgICAgICB9LFxuICAgICAgICBMaW5lU3RyaW5nOiBmdW5jdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgICAgIHZhciBwb2ludDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBvaW50ID0gY29udmVydG9yLm1ha2VQb2ludChjb29yZGluYXRlc1tpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyID0gJ00nICsgcG9pbnQuam9pbignLCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArICdMJyArIHBvaW50LmpvaW4oJywnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9LFxuICAgICAgICBQb2x5Z29uOiBmdW5jdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIGNvbnZlcnRvci5MaW5lU3RyaW5nKGNvb3JkaW5hdGVzW2ldKSArICd6JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH0sXG4gICAgICAgIE11bHRpUG9pbnQ6IGZ1bmN0aW9uIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goY29udmVydG9yLlBvaW50KGNvb3JkaW5hdGVzW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICB9LFxuICAgICAgICBNdWx0aUxpbmVTdHJpbmc6IGZ1bmN0aW9uIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3RyICs9IGNvbnZlcnRvci5MaW5lU3RyaW5nKGNvb3JkaW5hdGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH0sXG4gICAgICAgIE11bHRpUG9seWdvbjogZnVuY3Rpb24gKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gJyc7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdHIgKz0gY29udmVydG9yLlBvbHlnb24oY29vcmRpbmF0ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdmFyIGNvbnZlcnRvclBhcnNlID0ge1xuICAgICAgICBmb3JtYXRQb2ludDogY29udmVydG9yLmZvcm1hdFBvaW50LFxuXG4gICAgICAgIG1ha2VQb2ludDogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHNlbGYuZm9ybWF0UG9pbnQocCk7XG4gICAgICAgICAgICB2YXIgeCA9IHBvaW50WzBdO1xuICAgICAgICAgICAgdmFyIHkgPSBwb2ludFsxXTtcbiAgICAgICAgICAgIGlmIChzZWxmLnhtaW4gPiB4KSB7IHNlbGYueG1pbiA9IHg7IH1cbiAgICAgICAgICAgIGlmIChzZWxmLnhtYXggPCB4KSB7IHNlbGYueG1heCA9IHg7IH1cbiAgICAgICAgICAgIGlmIChzZWxmLnltaW4gPiB5KSB7IHNlbGYueW1pbiA9IHk7IH1cbiAgICAgICAgICAgIGlmIChzZWxmLnltYXggPCB5KSB7IHNlbGYueW1heCA9IHk7IH1cbiAgICAgICAgfSxcbiAgICAgICAgUG9pbnQ6IGZ1bmN0aW9uIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgdGhpcy5tYWtlUG9pbnQoY29vcmRpbmF0ZXMpO1xuICAgICAgICB9LFxuICAgICAgICBMaW5lU3RyaW5nOiBmdW5jdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFrZVBvaW50KGNvb3JkaW5hdGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUG9seWdvbjogZnVuY3Rpb24gKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxpbmVTdHJpbmcoY29vcmRpbmF0ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNdWx0aVBvaW50OiBmdW5jdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuUG9pbnQoY29vcmRpbmF0ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNdWx0aUxpbmVTdHJpbmc6IGZ1bmN0aW9uIChjb29yZGluYXRlcykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5MaW5lU3RyaW5nKGNvb3JkaW5hdGVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgTXVsdGlQb2x5Z29uOiBmdW5jdGlvbiAoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb29yZGluYXRlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuUG9seWdvbihjb29yZGluYXRlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2VvSnNvbjJQYXRoKGpzb24sIHRyYW5zZm9ybSwgc3BlY2lhbEFyZWEpIHtcbiAgICAgICAgc3BlY2lhbEFyZWEgPSBzcGVjaWFsQXJlYSB8fCB7fTtcbiAgICAgICAgY29udmVydG9yLnNjYWxlID0gbnVsbDtcbiAgICAgICAgY29udmVydG9yLm9mZnNldCA9IG51bGw7XG5cbiAgICAgICAgaWYgKCFqc29uLnNyY1NpemUpIHtcbiAgICAgICAgICAgIHBhcnNlU3JjU2l6ZShqc29uLCBzcGVjaWFsQXJlYSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRyYW5zZm9ybS5vZmZzZXQgPSB7XG4gICAgICAgICAgICB4OiBqc29uLnNyY1NpemUubGVmdCxcbiAgICAgICAgICAgIHk6IGpzb24uc3JjU2l6ZS50b3AsXG4gICAgICAgICAgICBsZWZ0OiB0cmFuc2Zvcm0uT2Zmc2V0TGVmdCB8fCAwLFxuICAgICAgICAgICAgdG9wOiB0cmFuc2Zvcm0uT2Zmc2V0VG9wIHx8IDBcbiAgICAgICAgfTtcblxuICAgICAgICBjb252ZXJ0b3Iuc2NhbGUgPSB0cmFuc2Zvcm0uc2NhbGU7XG4gICAgICAgIGNvbnZlcnRvci5vZmZzZXQgPSB0cmFuc2Zvcm0ub2Zmc2V0O1xuICAgICAgICBcbiAgICAgICAgdmFyIHNoYXBlcyA9IGpzb24uZmVhdHVyZXM7XG4gICAgICAgIHZhciBnZW9tZXRyaWVzO1xuICAgICAgICB2YXIgcGF0aEFycmF5ID0gW107XG4gICAgICAgIHZhciB2YWw7XG4gICAgICAgIHZhciBzaGFwZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNoYXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgc2hhcGUgPSBzaGFwZXNbaV07XG4gICAgICAgICAgICBpZiAoc2hhcGUucHJvcGVydGllcy5uYW1lICYmIHNwZWNpYWxBcmVhW3NoYXBlLnByb3BlcnRpZXMubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAvLyDlv73nlaVzcGVjaWFsQXJlYVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNoYXBlLnR5cGUgPT0gJ0ZlYXR1cmUnKSB7XG4gICAgICAgICAgICAgICAgcHVzaEFwYXRoKHNoYXBlLmdlb21ldHJ5LCBzaGFwZSk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBpZiAoc2hhcGUudHlwZSA9PSAnR2VvbWV0cnlDb2xsZWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGdlb21ldHJpZXMgPSBzaGFwZS5nZW9tZXRyaWVzO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4yID0gZ2VvbWV0cmllcy5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gZ2VvbWV0cmllc1tqXTtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFwYXRoKHZhbCwgdmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZhciBzaGFwZVR5cGU7XG4gICAgICAgIHZhciBzaGFwZUNvb3JkaW5hdGVzO1xuICAgICAgICB2YXIgc3RyO1xuICAgICAgICBmdW5jdGlvbiBwdXNoQXBhdGgoZ20sIHNoYXBlKSB7XG4gICAgICAgICAgICBzaGFwZVR5cGUgPSBnbS50eXBlO1xuICAgICAgICAgICAgc2hhcGVDb29yZGluYXRlcyA9IGdtLmNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgY29udmVydG9yLl9iYm94ID0ge1xuICAgICAgICAgICAgICAgIHhtaW46IDM2MCxcbiAgICAgICAgICAgICAgICB4bWF4OiAtMzYwLFxuICAgICAgICAgICAgICAgIHltaW46IDE4MCxcbiAgICAgICAgICAgICAgICB5bWF4OiAtMTgwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3RyID0gY29udmVydG9yW3NoYXBlVHlwZV0oc2hhcGVDb29yZGluYXRlcyk7XG4gICAgICAgICAgICBwYXRoQXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgLy8gdHlwZTogc2hhcGVUeXBlLFxuICAgICAgICAgICAgICAgIHBhdGg6IHN0cixcbiAgICAgICAgICAgICAgICBjcDogc2hhcGUucHJvcGVydGllcy5jcFxuICAgICAgICAgICAgICAgICAgICA/IGNvbnZlcnRvci5tYWtlUG9pbnQoc2hhcGUucHJvcGVydGllcy5jcClcbiAgICAgICAgICAgICAgICAgICAgOiBjb252ZXJ0b3IubWFrZVBvaW50KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb252ZXJ0b3IuX2Jib3gueG1pbiArIGNvbnZlcnRvci5fYmJveC54bWF4KSAvIDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udmVydG9yLl9iYm94LnltaW4gKyBjb252ZXJ0b3IuX2Jib3gueW1heCkgLyAyXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogc2hhcGUucHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICBpZDogc2hhcGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGhBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlubPpnaLlnZDmoIfovaznu4/nuqzluqZcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwXG4gICAgICovXG4gICAgZnVuY3Rpb24gcG9zMmdlbyhvYmosIHApIHtcbiAgICAgICAgdmFyIHg7XG4gICAgICAgIHZhciB5O1xuICAgICAgICBpZiAocCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB4ID0gcFswXSAqIDE7XG4gICAgICAgICAgICB5ID0gcFsxXSAqIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4ID0gcC54ICogMTtcbiAgICAgICAgICAgIHkgPSBwLnkgKiAxO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB4ID0geCAvIG9iai5zY2FsZS54ICsgb2JqLm9mZnNldC54IC0gMTY4LjU7XG4gICAgICAgIHggPSB4ID4gMTgwID8geCAtIDM2MCA6IHg7XG4gICAgICAgIHkgPSA5MCAtICh5IC8gb2JqLnNjYWxlLnkgKyBvYmoub2Zmc2V0LnkpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiDnu4/nuqzluqbovazlubPpnaLlnZDmoIdcbiAgICAgKiBAcGFyYW0ge0FycmF5IHwgT2JqZWN0fSBwXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2VvMnBvcyhvYmosIHApIHtcbiAgICAgICAgY29udmVydG9yLm9mZnNldCA9IG9iai5vZmZzZXQ7XG4gICAgICAgIGNvbnZlcnRvci5zY2FsZSA9IG9iai5zY2FsZTtcbiAgICAgICAgcmV0dXJuIHAgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICAgICAgICAgPyBjb252ZXJ0b3IubWFrZVBvaW50KFtwWzBdICogMSwgcFsxXSAqIDFdKVxuICAgICAgICAgICAgICAgOiBjb252ZXJ0b3IubWFrZVBvaW50KFtwLnggKiAxLCBwLnkgKiAxXSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEJib3g6IGdldEJib3gsXG4gICAgICAgIGdlb0pzb24yUGF0aDogZ2VvSnNvbjJQYXRoLFxuICAgICAgICBwb3MyZ2VvOiBwb3MyZ2VvLFxuICAgICAgICBnZW8ycG9zOiBnZW8ycG9zXG4gICAgfTtcbn0pOyBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBFOi9Xb3Jrc3BhY2UvZ2l0aHViL2VjaGFydHMteC1leGFtcGxlczIvfi9lY2hhcnRzL3V0aWwvcHJvamVjdGlvbi9ub3JtYWwuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9
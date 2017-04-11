// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* template */
	var __vue_template__ = __webpack_require__(2)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg-performance-test/src/demo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-511f205f"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "flex": 1,
	    "paddingTop": 20,
	    "backgroundColor": "#ffffff"
	  },
	  "main": {
	    "paddingTop": 88
	  },
	  "desc": {
	    "margin": 20,
	    "fontSize": 28,
	    "textAlign": "left",
	    "color": "#444444"
	  },
	  "item": {
	    "alignItems": "center",
	    "margin": 20,
	    "padding": 10,
	    "borderBottom": "2px solid #ddd"
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('scroller', {
	    staticClass: ["main"]
	  }, [_c('div', {
	    staticClass: ["item"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "300px",
	      height: "300px"
	    },
	    attrs: {
	      "viewBox": "0 0 300 300"
	    }
	  }, [_c('path', {
	    attrs: {
	      "d": "M155.3,39.7c26.9,1.1,51.2,11.9,69.7,29l0,0c-18.5,20.2-30.2,46.8-31.4,76.1h-38.3C155.3,144.7,155.3,39.7,155.3,39.7z\n         M145.7,39.7v105.1h-38.3c-1.2-29.3-12.8-55.9-31.4-76.1l0,0C94.5,51.6,118.9,40.8,145.7,39.7z M155.3,259.3V154.3h38.3\n        c1.2,29.3,12.8,55.9,31.4,76.1l0,0C206.5,247.4,182.1,258.2,155.3,259.3z M145.7,259.3c-26.9-1.1-51.2-11.9-69.7-29\n        c18.5-20.2,30.2-46.8,31.4-76.1h38.3C145.7,154.3,145.7,259.3,145.7,259.3z M231.8,75.4c16.8,18.4,27.4,42.6,28.6,69.3l0,0h-57.2\n        C204.3,118.1,214.9,93.9,231.8,75.4L231.8,75.4L231.8,75.4L231.8,75.4z M231.8,223.6L231.8,223.6L231.8,223.6\n        c-16.8-18.4-27.4-42.6-28.6-69.3h57.2C259.2,180.9,248.6,205.1,231.8,223.6L231.8,223.6z M40.7,144.7c1.1-26.6,11.8-50.8,28.6-69.3\n        l0,0c16.8,18.4,27.4,42.6,28.6,69.3H40.7L40.7,144.7z M40.7,154.3h57.2c-1.1,26.6-11.8,50.8-28.6,69.3\n        C52.4,205.1,41.8,180.9,40.7,154.3L40.7,154.3z M150.5,269c66,0,119.5-53.5,119.5-119.5S216.5,30,150.5,30S31,83.5,31,149.5\n        S84.5,269,150.5,269L150.5,269z",
	      "fill": "#000000"
	    }
	  })], 1), _c('svg', {
	    staticStyle: {
	      width: "120px",
	      height: "120px"
	    },
	    attrs: {
	      "viewBox": "0 0 120 120"
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#f1c40f",
	      "d": "M29.2,31.2V10h61.5L69.6,31.2l21.2,21.2H33.1V110h-3.8V31.2z M33.1,13.8v34.6h48.1L63.8,31.2l17.3-17.3H33.1z"
	    }
	  })], 1)], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
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
	__vue_styles__.push(__webpack_require__(5)
	)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg-performance-test/src/test.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4c9510e4"
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	"use strict";

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {};

/***/ },
/* 7 */
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
	    }
	  }, [_c('path', {
	    attrs: {
	      "fill": "#2ECC71",
	      "d": "M189.9,182.8h-79.3l21.4,18.8l21.6,0.1l-16.2,0.1h32.2l0.2-0.2l-0.9,0L189.9,182.8L189.9,182.8z M200.6,173.3\n        l30.9-27.6v-77c0-5.3-4.3-9.6-9.5-9.6H79.1c-5.3,0-9.5,4.2-9.5,9.5v78l30.2,26.7H200.6L200.6,173.3z M118.1,49.6L150.5,21L183,49.6\n        h39c10.5,0,19,8.5,19,19v32l28.6,25.1V259c0,10.5-8.5,19-19.1,19H50.6c-10.6,0-19.1-8.5-19.1-19V125.7l28.6-25.1v-32\n        c0-10.6,8.5-19,19-19L118.1,49.6L118.1,49.6z M168.9,49.6l-18.4-16.2l-18.4,16.2C132.2,49.6,168.9,49.6,168.9,49.6z M240.9,113.1\n        v25.3l14.3-12.7L240.9,113.1z M60.1,138.4v-25.3l-14.3,12.6L60.1,138.4z M122,211.4l-66.6,57.1h190.4l-66.6-57.1H122z M257,265.9\n        L257,265.9L257,265.9c1.8-1.7,3-4.2,3-6.9V135.2L183.8,202L257,265.9z M44,265.9l73.1-63.9L41,135.2V259\n        C41,261.7,42.2,264.1,44,265.9L44,265.9L44,265.9z M88.6,87.6v9.5h123.7v-9.5H88.6z M88.6,116.2v9.5h123.7v-9.5H88.6z M88.6,144.7\n        v9.5h123.7v-9.5H88.6z"
	    }
	  })], 1), _c('image', {
	    staticStyle: {
	      width: "300px",
	      height: "300px"
	    },
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued5836d15299f51da06606b807868779c7.png"
	    }
	  })], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
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
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg-performance-test/src/testpng-icon.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-803caeaa"
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "flex": 1
	  }
	}

/***/ },
/* 12 */
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

	var d = void 0;
	module.exports = {
	  methods: {
	    load: function load() {
	      console.log(new Date().getTime() - d);
	    }
	  },
	  created: function created() {
	    d = new Date().getTime();
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('image', {
	    staticStyle: {
	      width: "300px",
	      height: "300px",
	      margin: "50px"
	    },
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued6f0e59594e6585f6b37677585de81dda.png"
	    },
	    on: {
	      "load": _vm.load
	    }
	  }), _c('image', {
	    staticStyle: {
	      width: "300px",
	      height: "300px",
	      margin: "50px"
	    },
	    attrs: {
	      "src": "http://img1.vued.vanthink.cn/vued66d48e060d2d8a4bd61214c2bdd30009.png"
	    },
	    on: {
	      "load": _vm.load
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
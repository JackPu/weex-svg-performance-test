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
	__vue_styles__.push(__webpack_require__(8)
	)

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(10)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg-performance-test/src/testpng.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-cd4890ea"
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
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "flex": 1
	  },
	  "footer": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "zIndex": 200,
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 100,
	    "lineHeight": 100,
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "rgba(0,0,0,0.15)"
	  },
	  "footer-item": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "footer-item-icon": {
	    "width": 64,
	    "height": 64
	  },
	  "btn-sm-text": {
	    "color": "#777777",
	    "fontSize": 20
	  },
	  "active": {
	    "color": "#1ba1e2"
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

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


	var d = new Date().getTime();
	var d2 = void 0;
	console.log(d);
	module.exports = {
	  props: {
	    active: {
	      default: 0
	    }
	  },
	  data: function data() {
	    return {
	      type: '',
	      items: [{
	        name: 'Home',
	        url: 'index.js',
	        icon: 'http://img1.vued.vanthink.cn/vued40a1db1fb50417e72fc59c3535de9d1f.png'
	      }, {
	        name: 'Shop',
	        url: 'shop.js',
	        icon: 'http://img1.vued.vanthink.cn/vuede3edd4e57e450d00b3fa0e0fd82bc6af.png'
	      }, {
	        name: 'Video',
	        url: 'video.js',
	        icon: 'http://img1.vued.vanthink.cn/vueda026977b63cd85ebbcc0309a2f592082.png'
	      }, {
	        name: 'Profile',
	        url: 'profile.js',
	        icon: 'http://img1.vued.vanthink.cn/vued78336017bc3e794059a4fea0fe1450f9.png'
	      }]
	    };
	  },


	  methods: {
	    load: function load() {
	      console.log(new Date().getTime() - d2);
	    }
	  },

	  created: function created() {
	    d2 = new Date().getTime();
	    console.log(d2);
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('div', {
	    staticClass: ["footer"]
	  }, [_c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('image', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "src": _vm.items[0].icon
	    },
	    on: {
	      "load": _vm.load
	    }
	  })]), _c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('image', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "src": _vm.items[1].icon
	    },
	    on: {
	      "load": _vm.load
	    }
	  })]), _c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('image', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "src": _vm.items[2].icon
	    },
	    on: {
	      "load": _vm.load
	    }
	  })]), _c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('image', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "src": _vm.items[3].icon
	    },
	    on: {
	      "load": _vm.load
	    }
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
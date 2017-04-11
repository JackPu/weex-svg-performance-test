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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg-performance-test/src/testsvg.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-45b52e46"
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

/***/ 16:
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

/***/ 17:
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
	  }
	};

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('div', {
	    staticClass: ["footer"]
	  }, [_c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('svg', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "viewBox": "0 0 64 64"
	    }
	  }, [_c('polygon', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "points": "32,3 2,33 11,33 11,63 23,63 23,47 39,47 \n\t39,63 51,63 51,33 62,33 "
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('svg', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "viewBox": "0 0 64 64"
	    }
	  }, [_c('circle', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "cx": "20",
	      "cy": "57",
	      "r": "6"
	    }
	  }), _c('circle', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "cx": "44",
	      "cy": "57",
	      "r": "6"
	    }
	  }), _c('line', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "x1": "26",
	      "y1": "57",
	      "x2": "38",
	      "y2": "57"
	    }
	  }), _c('polyline', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "points": "14,57 10,2 0,2 "
	    }
	  }), _c('polyline', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "points": "13,43 56,40 63,10 11,10 "
	    }
	  }), _c('polyline', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "points": "27,24 34,31 47,18 "
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('svg', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "viewBox": "0 0 64 64"
	    }
	  }, [_c('polygon', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "points": "27,21 41,32 \n\t\t27,43 \t"
	    }
	  }), _c('path', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "d": "M53.92,10.081\n\t\tc12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838\n\t\tC22.186-2.027,41.813-2.027,53.92,10.081z"
	    }
	  })], 1)], 1), _c('div', {
	    staticClass: ["footer-item"]
	  }, [_c('svg', {
	    staticClass: ["footer-item-icon"],
	    attrs: {
	      "viewBox": "0 0 64 64"
	    }
	  }, [_c('polygon', {
	    attrs: {
	      "fill": "none",
	      "stroke": "#000000",
	      "strokeWidth": "2",
	      "strokeMiterlimit": "10",
	      "points": "32,47 12,62 20,38 2,24 24,24 32,1 40,24 \n\t62,24 44,38 52,62 "
	    }
	  })], 1)], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });
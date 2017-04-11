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
	__vue_styles__.push(__webpack_require__(22)
	)

	/* template */
	var __vue_template__ = __webpack_require__(23)
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
	__vue_options__.__file = "/Users/ali-130257n/www/weex-svg-performance-test/src/testsvg-tree.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-06916916"
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

/***/ 22:
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "flex": 1,
	    "paddingTop": 20,
	    "backgroundColor": "#ffffff"
	  }
	}

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["page"]
	  }, [_c('svg', {
	    staticStyle: {
	      width: "400px",
	      height: "300px"
	    }
	  }, [_c('defs', [_c('linearGradient', {
	    attrs: {
	      "id": "trunkgrad",
	      "x1": "0%",
	      "y1": "0%",
	      "x2": "0%",
	      "y2": "100%"
	    }
	  }, [_c('stop', {
	    attrs: {
	      "offset": "0%",
	      "stopColor": "#996d2e"
	    }
	  }), _c('stop', {
	    attrs: {
	      "offset": "100%",
	      "stopColor": "#d5bc79"
	    }
	  })], 1), _c('radialGradient', {
	    attrs: {
	      "id": "shadow",
	      "cx": "50%",
	      "cy": "50%",
	      "r": "50%",
	      "fx": "50%",
	      "fy": "50%"
	    }
	  }, [_c('stop', {
	    attrs: {
	      "offset": "0%",
	      "stopColor": "#000000"
	    }
	  }), _c('stop', {
	    attrs: {
	      "offset": "100%",
	      "stopColor": "#666666"
	    }
	  })], 1)], 1), _c('ellipse', {
	    attrs: {
	      "cx": "188",
	      "cy": "273",
	      "rx": "80",
	      "ry": "20",
	      "fill": "url(#shadow)"
	    }
	  }), _c('ellipse', {
	    attrs: {
	      "cx": "188",
	      "cy": "273",
	      "rx": "24",
	      "ry": "5",
	      "fill": "url(#shadow)"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "182,211 187,211 187,274 180,274",
	      "fill": "url(#trunkgrad)"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,211 196,211 198,274 187,274",
	      "fill": "#996d2e"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,28 154,162 116,159",
	      "fill": "#a5df66",
	      "stroke": "#a5df66"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "154,162 116,159 155,218",
	      "fill": "#79b544",
	      "stroke": "#79b544"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,28 216,114 154,162",
	      "fill": "#619b37",
	      "stroke": "#619b37"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "187,28 216,114 264,162 204,28",
	      "fill": "#619b37",
	      "stroke": "#619b37"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 264,162 223,210",
	      "fill": "#54892f",
	      "stroke": "#54892f"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 223,210 154,162",
	      "fill": "#5c9433"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "154,162 223,210 188,211",
	      "fill": "#54892f",
	      "stroke": "#54892f"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "154,162 188,211 155,218",
	      "fill": "#54892f",
	      "stroke": "#54892f"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "200,70 216,114 185,137",
	      "fill": "#79b544",
	      "stroke": "#79b544"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 220,167 185,137",
	      "fill": "#588f32"
	    }
	  }), _c('polygon', {
	    attrs: {
	      "points": "216,114 250,148 220,167",
	      "fill": "#598d33"
	    }
	  })], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }

/******/ });
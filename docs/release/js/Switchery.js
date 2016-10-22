/*! @2016 vivaxy */
webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237);


/***/ },

/***/ 211:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _default = function _default(title) {
	  document.title = title;
	};
	
	/**
	 * @since 2016-08-13 14:38
	 * @author vivaxy
	 */

	exports.default = _default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, "default", "/Users/vivaxy/code/github/react-pianist/docs/source/library/setTitle.js");
	})();

	;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _Switchery = __webpack_require__(238);
	
	var _Switchery2 = _interopRequireDefault(_Switchery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-06 08:40
	 * @author vivaxy
	 */
	
	(0, _render2.default)(_Switchery2.default);
	
	if (false) {
	    module.hot.accept('../container/Switchery', function () {
	        var NewEntry = require('../container/Switchery').default;
	        (0, _render.renderWithEntry)(NewEntry);
	    });
	}
	;

	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	})();

	;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _connect = __webpack_require__(202);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _setTitle = __webpack_require__(211);
	
	var _setTitle2 = _interopRequireDefault(_setTitle);
	
	var _action = __webpack_require__(203);
	
	var _action2 = _interopRequireDefault(_action);
	
	var _Switchery = __webpack_require__(239);
	
	var _Switchery2 = _interopRequireDefault(_Switchery);
	
	var _Toast = __webpack_require__(195);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-06 08:40
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var SwitcheryDemo = function (_Component) {
	    _inherits(SwitcheryDemo, _Component);
	
	    function SwitcheryDemo() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, SwitcheryDemo);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SwitcheryDemo.__proto__ || Object.getPrototypeOf(SwitcheryDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            firstSwitcheryChecked: true,
	            secondSwitcheryChecked: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(SwitcheryDemo, [{
	        key: 'render',
	        value: function render() {
	
	            (0, _setTitle2.default)('Switchery');
	
	            var _props = this.props;
	            var toastShow = _props.toastShow;
	            var toastMessage = _props.toastMessage;
	            var _state = this.state;
	            var firstSwitcheryChecked = _state.firstSwitcheryChecked;
	            var secondSwitcheryChecked = _state.secondSwitcheryChecked;
	
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Switchery2.default, {
	                    checked: firstSwitcheryChecked,
	                    disabled: false,
	                    onChange: this.onChange.call(this, 'firstSwitcheryChecked') }),
	                _react2.default.createElement(_Switchery2.default, {
	                    checked: secondSwitcheryChecked,
	                    disabled: false,
	                    onChange: this.onChange.call(this, 'secondSwitcheryChecked') }),
	                _react2.default.createElement(_Switchery2.default, { checked: true, disabled: true }),
	                _react2.default.createElement(_Switchery2.default, { checked: false, disabled: true }),
	                _react2.default.createElement(
	                    _Toast.AutoHideToast,
	                    { show: toastShow },
	                    toastMessage
	                )
	            );
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(which) {
	            var _this2 = this;
	
	            return function (checked) {
	                var showToastAction = _this2.props.showToastAction;
	
	                showToastAction(String(checked));
	                _this2.setState(_defineProperty({}, which, checked));
	            };
	        }
	    }]);
	
	    return SwitcheryDemo;
	}(_react.Component);
	
	var _default = (0, _connect2.default)(function (state) {
	    return {
	        toastShow: state.toast.show,
	        toastMessage: state.toast.message
	    };
	}, {
	    showToastAction: _action2.default.toast.showToast
	})(SwitcheryDemo);
	
	exports.default = _default;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(SwitcheryDemo, 'SwitcheryDemo', '/Users/vivaxy/code/github/react-pianist/docs/source/container/Switchery.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/docs/source/container/Switchery.js');
	})();

	;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Switchery = __webpack_require__(240);
	
	var _Switchery2 = _interopRequireDefault(_Switchery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Switchery2.default; /**
	                                        * @since 2016-09-06 09:13
	                                        * @author vivaxy
	                                        */

	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-06 09:13
	                    * @author vivaxy
	                    */
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(200);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _i18n = __webpack_require__(201);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	__webpack_require__(241);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Switchery = (_temp = _class = function (_Component) {
	    _inherits(Switchery, _Component);
	
	    function Switchery() {
	        _classCallCheck(this, Switchery);
	
	        return _possibleConstructorReturn(this, (Switchery.__proto__ || Object.getPrototypeOf(Switchery)).apply(this, arguments));
	    }
	
	    _createClass(Switchery, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var checked = _props.checked;
	            var disabled = _props.disabled;
	            var style = _props.style;
	            var onChange = _props.onChange;
	
	            var otherProps = _objectWithoutProperties(_props, ['checked', 'disabled', 'style', 'onChange']);
	
	            return _react2.default.createElement('input', _extends({
	                type: 'checkbox',
	                disabled: disabled,
	                checked: checked,
	                style: style,
	                className: 'react-pianist-switchery',
	                onChange: this.onChange.bind(this)
	            }, otherProps));
	        }
	    }, {
	        key: 'onChange',
	        value: function onChange(e) {
	            var onChange = this.props.onChange;
	
	
	            return onChange(e.target.checked);
	        }
	    }]);
	
	    return Switchery;
	}(_react.Component), _class.propTypes = {
	    checked: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    onChange: _react.PropTypes.func
	}, _class.defaultProps = {
	    checked: true,
	    disabled: false,
	    onChange: function onChange() {}
	}, _temp);
	exports.default = Switchery;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(Switchery, 'Switchery', '/Users/vivaxy/code/github/react-pianist/source/Switchery/Switchery.js');
	})();

	;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(244)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(243)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * @since 2016-09-06 09:27\n * @author vivaxy\n */\n.react-pianist-switchery {\n  display: block;\n  position: relative;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  border-radius: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  width: 50px;\n  height: 30px;\n  border: 1px solid #dfdfdf;\n  background-color: #ffffff;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  transition: border 0.4s, box-shadow 0.4s;\n}\n.react-pianist-switchery:checked {\n  border-color: #4cd864;\n  background-color: #4cd864;\n  box-shadow: #4cd864 0 0 0 16px inset;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n.react-pianist-switchery:before {\n  display: block;\n  content: '';\n  position: absolute;\n  border-radius: 100%;\n  background-color: #ffffff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  transition: background-color 0.4s, left 0.2s;\n  width: 30px;\n  height: 30px;\n  top: 0;\n  left: 0;\n}\n.react-pianist-switchery:checked:before {\n  left: 20px;\n}\n.react-pianist-switchery:disabled {\n  opacity: 0.5;\n  -webkit-tap-highlight-color: transparent;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 243:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});
//# sourceMappingURL=Switchery.js.map
/*! @2016 vivaxy */
webpackJsonp([8],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(549);


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

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonGroup = exports.Button = undefined;
	
	var _Button2 = __webpack_require__(218);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	var _ButtonGroup2 = __webpack_require__(219);
	
	var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button3.default; /**
	                                    * @since 2016-09-05 13:21
	                                    * @author vivaxy
	                                    */
	
	exports.ButtonGroup = _ButtonGroup3.default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-05 13:21
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Button = (_temp = _class = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button() {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }
	
	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	
	            var PADDING = 16;
	            var BORDER = 1;
	            var HEIGHT = 36;
	
	            var defaultStyle = {
	                display: 'inline-block',
	                borderRadius: '4px',
	                padding: '0 ' + PADDING + 'px',
	                fontSize: '14px',
	                verticalAlign: 'top',
	                cursor: 'pointer'
	            };
	
	            var _props = this.props;
	            var width = _props.width;
	            var disabled = _props.disabled;
	            var primary = _props.primary;
	            var children = _props.children;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['width', 'disabled', 'primary', 'children', 'style']);
	
	            if (disabled) {
	                defaultStyle.opacity = '0.4';
	                defaultStyle.cursor = 'not-allowed';
	            }
	
	            if (primary) {
	                defaultStyle.backgroundColor = _colors2.default.PRIMARY;
	                defaultStyle.color = _colors2.default.WHITE;
	                defaultStyle.height = HEIGHT + 'px';
	                defaultStyle.lineHeight = HEIGHT + 'px';
	                if (width !== undefined) {
	                    defaultStyle.width = width - PADDING * 2 + 'px';
	                }
	            } else {
	                defaultStyle.backgroundColor = _colors2.default.ABOUT_WHITE;
	                defaultStyle.color = _colors2.default.ABOUT_BLACK;
	                defaultStyle.height = HEIGHT - BORDER * 2 + 'px';
	                defaultStyle.lineHeight = HEIGHT - BORDER * 2 + 'px';
	                defaultStyle.border = BORDER + 'px solid ' + _colors2.default.BORDER;
	                if (width !== undefined) {
	                    defaultStyle.width = width - PADDING * 2 - BORDER * 2 + 'px';
	                }
	            }
	
	            var computedStyle = _extends({}, defaultStyle, style);
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ style: computedStyle }, otherProps),
	                children
	            );
	        }
	    }]);
	
	    return Button;
	}(_react.Component), _class.propTypes = {
	    width: _react.PropTypes.number,
	    disabled: _react.PropTypes.bool,
	    primary: _react.PropTypes.bool
	}, _class.defaultProps = {
	    disabled: false,
	    primary: true
	}, _temp);
	exports.default = Button;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(Button, 'Button', '/Users/vivaxy/code/github/react-pianist/source/Button/Button.js');
	})();

	;

/***/ },

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-05 13:24
	                    * @author vivaxy
	                    */
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(200);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _i18n = __webpack_require__(201);
	
	var _i18n2 = _interopRequireDefault(_i18n);
	
	var _checkChildren = __webpack_require__(220);
	
	var _checkChildren2 = _interopRequireDefault(_checkChildren);
	
	var _childrenFilter = __webpack_require__(221);
	
	var _childrenFilter2 = _interopRequireDefault(_childrenFilter);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _Button = __webpack_require__(218);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ButtonGroup = (_temp = _class = function (_Component) {
	    _inherits(ButtonGroup, _Component);
	
	    function ButtonGroup() {
	        _classCallCheck(this, ButtonGroup);
	
	        return _possibleConstructorReturn(this, (ButtonGroup.__proto__ || Object.getPrototypeOf(ButtonGroup)).apply(this, arguments));
	    }
	
	    _createClass(ButtonGroup, [{
	        key: 'render',
	        value: function render() {
	
	            var defaultStyle = {
	                textAlign: 'center'
	            };
	
	            var _props = this.props;
	            var children = _props.children;
	            var style = _props.style;
	            var space = _props.space;
	
	            var otherProps = _objectWithoutProperties(_props, ['children', 'style', 'space']);
	
	            var computedStyle = _extends({}, defaultStyle, style);
	
	            var childWithSpace = _react.Children.map((0, _childrenFilter2.default)(children), function (child) {
	                return (0, _react.cloneElement)(child, {
	                    style: {
	                        margin: '0 ' + space + 'px'
	                    }
	                });
	            });
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ style: computedStyle }, otherProps),
	                childWithSpace
	            );
	        }
	    }]);
	
	    return ButtonGroup;
	}(_react.Component), _class.propTypes = {
	    children: (0, _checkChildren2.default)(_Button2.default),
	    space: _react.PropTypes.number
	}, _class.defaultProps = {
	    space: 20
	}, _temp);
	exports.default = ButtonGroup;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(ButtonGroup, 'ButtonGroup', '/Users/vivaxy/code/github/react-pianist/source/Button/ButtonGroup.js');
	})();

	;

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _childrenFilter = __webpack_require__(221);
	
	var _childrenFilter2 = _interopRequireDefault(_childrenFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-02 14:43
	 * @author vivaxy
	 */
	
	var _default = function _default(ChildClass) {
	    return function (props, propName, parentName) {
	        var prop = props[propName];
	        var error = null;
	        _react.Children.forEach((0, _childrenFilter2.default)(prop), function (child) {
	            if (child.type.name !== ChildClass.name) {
	                error = new Error('Component \'' + parentName + '\' should only have children of \'' + ChildClass.name + '\' type');
	            }
	        });
	        return error;
	    };
	};
	
	exports.default = _default;
	;

	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/source/library/checkChildren.js');
	})();

	;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _default = function _default(children) {
	    return _react.Children.map(children, function (child) {
	        return child;
	    });
	}; /**
	    * @since 2016-10-21 19:17
	    * @author vivaxy
	    */

	exports.default = _default;
	;

	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/source/library/childrenFilter.js');
	})();

	;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _index = __webpack_require__(550);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-06 14:36
	 * @author vivaxy
	 */
	
	(0, _render2.default)(_index2.default);
	
	if (false) {
	    module.hot.accept('../container/index', function () {
	        var NewEntry = require('../container/index').default;
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

/***/ 550:
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
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _setTitle = __webpack_require__(211);
	
	var _setTitle2 = _interopRequireDefault(_setTitle);
	
	var _sleep = __webpack_require__(551);
	
	var _sleep2 = _interopRequireDefault(_sleep);
	
	var _action = __webpack_require__(203);
	
	var _action2 = _interopRequireDefault(_action);
	
	var _Toast = __webpack_require__(195);
	
	var _Toast2 = _interopRequireDefault(_Toast);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _Button = __webpack_require__(217);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-06 14:36
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var Index = function (_Component) {
	    _inherits(Index, _Component);
	
	    function Index() {
	        _classCallCheck(this, Index);
	
	        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
	    }
	
	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.setTimeout.bind(this) },
	                    'set timeout'
	                ),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.clearTimeout.bind(this) },
	                    'clear timeout'
	                )
	            );
	        }
	    }, {
	        key: 'setTimeout',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                var _this2 = this;
	
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                console.log('0ms');
	                                _context.next = 3;
	                                return (0, _sleep2.default)(5000, function (timer) {
	                                    _this2._timer = timer;
	                                });
	
	                            case 3:
	                                console.log('5000ms');
	
	                            case 4:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function setTimeout() {
	                return _ref.apply(this, arguments);
	            }
	
	            return setTimeout;
	        }()
	    }, {
	        key: 'clearTimeout',
	        value: function (_clearTimeout) {
	            function clearTimeout() {
	                return _clearTimeout.apply(this, arguments);
	            }
	
	            clearTimeout.toString = function () {
	                return _clearTimeout.toString();
	            };
	
	            return clearTimeout;
	        }(function () {
	            console.log(this._timer);
	            clearTimeout(this._timer);
	        })
	    }]);
	
	    return Index;
	}(_react.Component);
	
	var _default = (0, _connect2.default)(function (state) {
	    return {
	        toastState: state.toast
	    };
	}, {
	    showToastAction: _action2.default.toast.showToast,
	    hideToastAction: _action2.default.toast.hideToast
	})(Index);
	
	exports.default = _default;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(Index, 'Index', '/Users/vivaxy/code/github/react-pianist/docs/source/container/index.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/docs/source/container/index.js');
	})();

	;

/***/ },

/***/ 551:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _default = function _default(timeout) {
	    var getTimer = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
	
	    return new Promise(function (resolve) {
	        var timer = setTimeout(resolve, timeout);
	        getTimer(timer);
	    });
	};
	
	/**
	 * @since 2016-08-06 15:57
	 * @author vivaxy
	 */

	exports.default = _default;
	;

	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(_default, "default", "/Users/vivaxy/code/github/react-pianist/docs/source/library/sleep.js");
	})();

	;

/***/ }

});
//# sourceMappingURL=index.js.map
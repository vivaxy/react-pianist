/*! @2016 vivaxy */
webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(234);


/***/ },

/***/ 221:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * @since 2016-08-13 14:38
	 * @author vivaxy
	 */
	
	exports.default = function (title) {
	  document.title = title;
	};

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	var _childrenFilter = __webpack_require__(231);
	
	var _childrenFilter2 = _interopRequireDefault(_childrenFilter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-02 14:43
	 * @author vivaxy
	 */
	
	exports.default = function (ChildClass) {
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

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(3);
	
	exports.default = function (children) {
	    return _react.Children.map(children, function (child) {
	        return child;
	    });
	}; /**
	    * @since 2016-10-21 19:17
	    * @author vivaxy
	    */

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _HorizontalFlex = __webpack_require__(235);
	
	var _HorizontalFlex2 = _interopRequireDefault(_HorizontalFlex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-04 11:07
	 * @author vivaxy
	 */
	
	(0, _render2.default)(_HorizontalFlex2.default);
	
	if (false) {
	    module.hot.accept('../container/HorizontalFlex', function () {
	        var NewEntry = require('../container/HorizontalFlex').default;
	        (0, _render.renderWithEntry)(NewEntry);
	    });
	}

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _connect = __webpack_require__(212);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _setTitle = __webpack_require__(221);
	
	var _setTitle2 = _interopRequireDefault(_setTitle);
	
	var _HorizontalFlex = __webpack_require__(236);
	
	var _colors = __webpack_require__(208);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-04 11:07
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var HorizontalFlex = function (_Component) {
	    _inherits(HorizontalFlex, _Component);
	
	    function HorizontalFlex() {
	        _classCallCheck(this, HorizontalFlex);
	
	        return _possibleConstructorReturn(this, (HorizontalFlex.__proto__ || Object.getPrototypeOf(HorizontalFlex)).apply(this, arguments));
	    }
	
	    _createClass(HorizontalFlex, [{
	        key: 'render',
	        value: function render() {
	
	            (0, _setTitle2.default)('HorizontalFlex');
	
	            return _react2.default.createElement(
	                _HorizontalFlex.HorizontalFlexBox,
	                { style: {
	                        width: '100%',
	                        height: '100%',
	                        position: 'absolute'
	                    } },
	                _react2.default.createElement(
	                    _HorizontalFlex.HorizontalFlexItem,
	                    {
	                        flex: 1,
	                        style: {
	                            backgroundColor: _colors2.default.TURQUOISE,
	                            color: _colors2.default.WHITE,
	                            lineHeight: '50px'
	
	                        }
	                    },
	                    'this block auto expand'
	                ),
	                _react2.default.createElement(
	                    _HorizontalFlex.HorizontalFlexItem,
	                    {
	                        flex: 1,
	                        style: {
	                            backgroundColor: _colors2.default.EMERALD,
	                            color: _colors2.default.WHITE,
	                            lineHeight: '50px'
	                        }
	                    },
	                    'this block auto expand too'
	                ),
	                _react2.default.createElement(
	                    _HorizontalFlex.HorizontalFlexItem,
	                    {
	                        width: 50,
	                        style: {
	                            backgroundColor: _colors2.default.EMERALD,
	                            color: _colors2.default.WHITE,
	                            lineHeight: '50px'
	                        }
	                    },
	                    'this block will not expand'
	                )
	            );
	        }
	    }]);
	
	    return HorizontalFlex;
	}(_react.Component);
	
	exports.default = (0, _connect2.default)(function (state) {
	    return {};
	}, {})(HorizontalFlex);

/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HorizontalFlexItem = exports.HorizontalFlexBox = undefined;
	
	var _HorizontalFlexBox2 = __webpack_require__(237);
	
	var _HorizontalFlexBox3 = _interopRequireDefault(_HorizontalFlexBox2);
	
	var _HorizontalFlexItem2 = __webpack_require__(238);
	
	var _HorizontalFlexItem3 = _interopRequireDefault(_HorizontalFlexItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.HorizontalFlexBox = _HorizontalFlexBox3.default; /**
	                                                          * @since 2016-09-03 09:02
	                                                          * @author vivaxy
	                                                          */
	
	exports.HorizontalFlexItem = _HorizontalFlexItem3.default;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _HorizontalFlexItem = __webpack_require__(238);
	
	var _HorizontalFlexItem2 = _interopRequireDefault(_HorizontalFlexItem);
	
	var _checkChildren = __webpack_require__(230);
	
	var _checkChildren2 = _interopRequireDefault(_checkChildren);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-02 14:43
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var HorizontalFlexBox = function (_Component) {
	    _inherits(HorizontalFlexBox, _Component);
	
	    function HorizontalFlexBox() {
	        _classCallCheck(this, HorizontalFlexBox);
	
	        return _possibleConstructorReturn(this, (HorizontalFlexBox.__proto__ || Object.getPrototypeOf(HorizontalFlexBox)).apply(this, arguments));
	    }
	
	    _createClass(HorizontalFlexBox, [{
	        key: 'render',
	        value: function render() {
	            var _boxStyle;
	
	            var boxStyle = (_boxStyle = {
	                display: '-webkit-box'
	            }, _defineProperty(_boxStyle, 'display', '-webkit-flex'), _defineProperty(_boxStyle, 'display', 'flex'), _boxStyle);
	
	            var _props = this.props,
	                children = _props.children,
	                style = _props.style,
	                otherProps = _objectWithoutProperties(_props, ['children', 'style']);
	
	            return _react2.default.createElement(
	                'div',
	                _extends({}, otherProps, { style: _extends({}, boxStyle, style) }),
	                children
	            );
	        }
	    }]);
	
	    return HorizontalFlexBox;
	}(_react.Component);
	
	HorizontalFlexBox.propTypes = {
	    children: (0, _checkChildren2.default)(_HorizontalFlexItem2.default)
	};
	HorizontalFlexBox.defaultProps = {};
	exports.default = HorizontalFlexBox;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _warning = __webpack_require__(210);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _i18n = __webpack_require__(211);
	
	var i18n = _interopRequireWildcard(_i18n);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-02 14:43
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var HorizontalFlexItem = function (_Component) {
	    _inherits(HorizontalFlexItem, _Component);
	
	    function HorizontalFlexItem() {
	        _classCallCheck(this, HorizontalFlexItem);
	
	        return _possibleConstructorReturn(this, (HorizontalFlexItem.__proto__ || Object.getPrototypeOf(HorizontalFlexItem)).apply(this, arguments));
	    }
	
	    _createClass(HorizontalFlexItem, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _props = this.props,
	                width = _props.width,
	                flex = _props.flex;
	
	
	            (0, _warning2.default)(flex === undefined || width === undefined, i18n.ONE_OR_THE_OTHER('flex', 'width'));
	            (0, _warning2.default)(flex !== undefined || width !== undefined, i18n.MUST_DEFINE_ONE('flex', 'width'));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props,
	                flex = _props2.flex,
	                width = _props2.width,
	                children = _props2.children,
	                style = _props2.style,
	                otherProps = _objectWithoutProperties(_props2, ['flex', 'width', 'children', 'style']);
	
	            var childStyle = {};
	
	            if (flex !== undefined) {
	                childStyle = _extends({
	                    WebkitBoxFlex: flex,
	                    WebkitFlex: flex,
	                    flex: flex,
	                    width: 0
	                }, style);
	            } else {
	                childStyle = _extends({
	                    width: width
	                }, style);
	            }
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ style: childStyle }, otherProps),
	                children
	            );
	        }
	    }]);
	
	    return HorizontalFlexItem;
	}(_react.Component);
	
	HorizontalFlexItem.propTypes = {
	    flex: _react.PropTypes.number,
	    width: _react.PropTypes.number
	};
	HorizontalFlexItem.defaultProps = {};
	exports.default = HorizontalFlexItem;

/***/ }

});
//# sourceMappingURL=HorizontalFlex.js.map
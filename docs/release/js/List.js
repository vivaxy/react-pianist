/*! @2016 vivaxy */
webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(229);


/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BorderLine = exports.BorderBox = undefined;
	
	var _BorderBox2 = __webpack_require__(213);
	
	var _BorderBox3 = _interopRequireDefault(_BorderBox2);
	
	var _BorderLine2 = __webpack_require__(214);
	
	var _BorderLine3 = _interopRequireDefault(_BorderLine2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.BorderBox = _BorderBox3.default; /**
	                                          * @since 2016-09-03 09:01
	                                          * @author vivaxy
	                                          */
	
	exports.BorderLine = _BorderLine3.default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-02 16:29
	                    * @author vivaxy
	                    */
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BorderBox = (_temp = _class = function (_Component) {
	    _inherits(BorderBox, _Component);
	
	    function BorderBox() {
	        _classCallCheck(this, BorderBox);
	
	        return _possibleConstructorReturn(this, (BorderBox.__proto__ || Object.getPrototypeOf(BorderBox)).apply(this, arguments));
	    }
	
	    _createClass(BorderBox, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['children', 'style']);
	
	            var computedStyle = _extends({
	                position: 'relative'
	            }, style);
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ style: computedStyle }, otherProps),
	                children
	            );
	        }
	    }]);
	
	    return BorderBox;
	}(_react.Component), _class.propTypes = {}, _class.defaultProps = {}, _temp);
	exports.default = BorderBox;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(BorderBox, 'BorderBox', '/Users/vivaxy/code/github/react-pianist/source/BorderBox/BorderBox.js');
	})();

	;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-02 16:22
	                    * @author vivaxy
	                    */
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TOP = 'top';
	var LEFT = 'left';
	var RIGHT = 'right';
	var BOTTOM = 'bottom';
	
	var BorderLine = (_temp = _class = function (_Component) {
	    _inherits(BorderLine, _Component);
	
	    function BorderLine() {
	        _classCallCheck(this, BorderLine);
	
	        return _possibleConstructorReturn(this, (BorderLine.__proto__ || Object.getPrototypeOf(BorderLine)).apply(this, arguments));
	    }
	
	    _createClass(BorderLine, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var position = _props.position;
	            var color = _props.color;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['position', 'color', 'style']);
	
	            var defaultStyle = {
	                position: 'absolute',
	                backgroundColor: color
	            };
	
	            var computedStyle = {};
	
	            switch (position) {
	                case LEFT:
	                    computedStyle = _extends({}, defaultStyle, {
	                        top: '0',
	                        left: '0',
	                        width: '1px',
	                        height: '100%',
	                        WebkitTransform: 'scaleX(0.5)',
	                        transform: 'scaleX(0.5)',
	                        WebkitTransformOrigin: 'left',
	                        transformOrigin: 'left'
	                    }, style);
	                    break;
	                case RIGHT:
	                    computedStyle = _extends({}, defaultStyle, {
	                        right: '0',
	                        top: '0',
	                        width: '1px',
	                        height: '100%',
	                        WebkitTransform: 'scaleX(0.5)',
	                        transform: 'scaleX(0.5)',
	                        WebkitTransformOrigin: 'right',
	                        transformOrigin: 'right'
	                    }, style);
	                    break;
	                case TOP:
	                    computedStyle = _extends({}, defaultStyle, {
	                        top: '0',
	                        left: '0',
	                        width: '100%',
	                        height: '1px',
	                        WebkitTransform: 'scaleY(0.5)',
	                        transform: 'scaleY(0.5)',
	                        WebkitTransformOrigin: 'top',
	                        transformOrigin: 'top'
	                    }, style);
	                    break;
	                case BOTTOM:
	                    computedStyle = _extends({}, defaultStyle, {
	                        bottom: '0',
	                        left: '0',
	                        width: '100%',
	                        height: '1px',
	                        WebkitTransform: 'scaleY(0.5)',
	                        transform: 'scaleY(0.5)',
	                        WebkitTransformOrigin: 'bottom',
	                        transformOrigin: 'bottom'
	                    }, style);
	                    break;
	                default:
	                    break;
	            }
	
	            return _react2.default.createElement('div', _extends({ style: computedStyle }, otherProps));
	        }
	    }]);
	
	    return BorderLine;
	}(_react.Component), _class.propTypes = {
	    position: _react.PropTypes.oneOf([TOP, LEFT, RIGHT, BOTTOM]).isRequired,
	    color: _react.PropTypes.string.isRequired
	}, _class.defaultProps = {}, _temp);
	exports.default = BorderLine;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(TOP, 'TOP', '/Users/vivaxy/code/github/react-pianist/source/BorderBox/BorderLine.js');
	
	    __REACT_HOT_LOADER__.register(LEFT, 'LEFT', '/Users/vivaxy/code/github/react-pianist/source/BorderBox/BorderLine.js');
	
	    __REACT_HOT_LOADER__.register(RIGHT, 'RIGHT', '/Users/vivaxy/code/github/react-pianist/source/BorderBox/BorderLine.js');
	
	    __REACT_HOT_LOADER__.register(BOTTOM, 'BOTTOM', '/Users/vivaxy/code/github/react-pianist/source/BorderBox/BorderLine.js');
	
	    __REACT_HOT_LOADER__.register(BorderLine, 'BorderLine', '/Users/vivaxy/code/github/react-pianist/source/BorderBox/BorderLine.js');
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

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _List = __webpack_require__(230);
	
	var _List2 = _interopRequireDefault(_List);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-04 09:19
	 * @author vivaxy
	 */
	
	(0, _render2.default)(_List2.default);
	
	if (false) {
	    module.hot.accept('../container/List', function () {
	        var NewEntry = require('../container/List').default;
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

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _List = __webpack_require__(231);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	var _connect = __webpack_require__(202);
	
	var _connect2 = _interopRequireDefault(_connect);
	
	var _redirect2 = __webpack_require__(234);
	
	var _redirect3 = _interopRequireDefault(_redirect2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-04 09:19
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ListDemo = function (_Component) {
	    _inherits(ListDemo, _Component);
	
	    function ListDemo() {
	        _classCallCheck(this, ListDemo);
	
	        return _possibleConstructorReturn(this, (ListDemo.__proto__ || Object.getPrototypeOf(ListDemo)).apply(this, arguments));
	    }
	
	    _createClass(ListDemo, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var componentList = ['VerticalFlex', 'HorizontalFlex', 'BorderBox', 'Toast', 'List', 'Button', 'Switchery'];
	
	            var itemStyle = {
	                height: '46px',
	                lineHeight: '46px',
	                textIndent: '15px',
	                color: _colors2.default.ABOUT_BLACK
	            };
	
	            return _react2.default.createElement(
	                _List.List,
	                null,
	                componentList.map(function (component, index) {
	                    return _react2.default.createElement(
	                        _List.Item,
	                        {
	                            key: 'component-' + index,
	                            onClick: _this2.redirect.call(_this2, component),
	                            style: itemStyle
	                        },
	                        component
	                    );
	                })
	            );
	        }
	    }, {
	        key: 'redirect',
	        value: function redirect(component) {
	            return function () {
	                (0, _redirect3.default)('/' + component + '.html');
	            };
	        }
	    }]);
	
	    return ListDemo;
	}(_react.Component);
	
	var _default = (0, _connect2.default)(function (state) {
	    return {};
	}, {})(ListDemo);
	
	exports.default = _default;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(ListDemo, 'ListDemo', '/Users/vivaxy/code/github/react-pianist/docs/source/container/List.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/docs/source/container/List.js');
	})();

	;

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Item = exports.List = undefined;
	
	var _List2 = __webpack_require__(232);
	
	var _List3 = _interopRequireDefault(_List2);
	
	var _Item2 = __webpack_require__(233);
	
	var _Item3 = _interopRequireDefault(_Item2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.List = _List3.default; /**
	                                * @since 2016-09-05 12:43
	                                * @author vivaxy
	                                */
	
	exports.Item = _Item3.default;
	;

	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	})();

	;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-05 12:43
	                    * @author vivaxy
	                    */
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BorderBox = __webpack_require__(212);
	
	var _Item = __webpack_require__(233);
	
	var _Item2 = _interopRequireDefault(_Item);
	
	var _checkChildren = __webpack_require__(220);
	
	var _checkChildren2 = _interopRequireDefault(_checkChildren);
	
	var _childrenFilter = __webpack_require__(221);
	
	var _childrenFilter2 = _interopRequireDefault(_childrenFilter);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var List = (_temp = _class = function (_Component) {
	    _inherits(List, _Component);
	
	    function List() {
	        _classCallCheck(this, List);
	
	        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	    }
	
	    _createClass(List, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var children = _props.children;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['children', 'style']);
	
	            var _children = (0, _childrenFilter2.default)(children);
	
	            return _react2.default.createElement(
	                _BorderBox.BorderBox,
	                _extends({}, otherProps, { style: _extends({}, style) }),
	                _react2.default.createElement(_BorderBox.BorderLine, { position: 'top', color: _colors2.default.BORDER }),
	                _react.Children.map(_children, function (child, index) {
	
	                    var _isLast = index === _children.length - 1;
	
	                    return (0, _react.cloneElement)(child, _extends({
	                        _isLast: _isLast
	                    }, child.props));
	                }),
	                _react2.default.createElement(_BorderBox.BorderLine, { position: 'bottom', color: _colors2.default.BORDER })
	            );
	        }
	    }]);
	
	    return List;
	}(_react.Component), _class.propTypes = {
	    children: (0, _checkChildren2.default)(_Item2.default)
	}, _class.defaultProps = {}, _temp);
	exports.default = List;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(List, 'List', '/Users/vivaxy/code/github/react-pianist/source/List/List.js');
	})();

	;

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _class, _temp; /**
	                    * @since 2016-09-05 12:43
	                    * @author vivaxy
	                    */
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BorderBox = __webpack_require__(212);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Item = (_temp = _class = function (_Component) {
	    _inherits(Item, _Component);
	
	    function Item() {
	        _classCallCheck(this, Item);
	
	        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
	    }
	
	    _createClass(Item, [{
	        key: 'render',
	        value: function render() {
	
	            var defaultStyle = {
	                paddingLeft: '15px'
	            };
	
	            var _props = this.props;
	            var _isLast = _props._isLast;
	            var children = _props.children;
	            var style = _props.style;
	
	            var otherProps = _objectWithoutProperties(_props, ['_isLast', 'children', 'style']);
	
	            var computedStyle = _extends({}, defaultStyle, style);
	
	            return _react2.default.createElement(
	                'div',
	                _extends({ style: computedStyle }, otherProps),
	                _react2.default.createElement(
	                    _BorderBox.BorderBox,
	                    null,
	                    _isLast ? null : _react2.default.createElement(_BorderBox.BorderLine, { position: 'bottom', color: _colors2.default.BORDER }),
	                    children
	                )
	            );
	        }
	    }]);
	
	    return Item;
	}(_react.Component), _class.propTypes = {}, _class.defaultProps = {}, _temp);
	exports.default = Item;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(Item, 'Item', '/Users/vivaxy/code/github/react-pianist/source/List/Item.js');
	})();

	;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _environment = __webpack_require__(235);
	
	var _environment2 = _interopRequireDefault(_environment);
	
	var _environment3 = __webpack_require__(236);
	
	var environment = _interopRequireWildcard(_environment3);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-04 10:36
	 * @author vivaxy
	 */
	
	var DEVELOPMENT_PATH_SUFFIX = '/docs/release/html';
	var PRODUCTION_PATH_SUFFIX = '/react-pianist/release/html';
	
	var _default = function _default(path) {
	    var realPath = void 0;
	    switch (_environment2.default) {
	        case environment.DEVELOPMENT:
	            realPath = '' + DEVELOPMENT_PATH_SUFFIX + path;
	            break;
	        default:
	            realPath = '' + PRODUCTION_PATH_SUFFIX + path;
	            break;
	    }
	    location.href = realPath;
	};
	
	exports.default = _default;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(DEVELOPMENT_PATH_SUFFIX, 'DEVELOPMENT_PATH_SUFFIX', '/Users/vivaxy/code/github/react-pianist/docs/source/library/redirect.js');
	
	    __REACT_HOT_LOADER__.register(PRODUCTION_PATH_SUFFIX, 'PRODUCTION_PATH_SUFFIX', '/Users/vivaxy/code/github/react-pianist/docs/source/library/redirect.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/docs/source/library/redirect.js');
	})();

	;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _environment = __webpack_require__(236);
	
	var environmentConstant = _interopRequireWildcard(_environment);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var env = environmentConstant.PRODUCTION; /**
	                                           * @since 2016-06-11 15:43
	                                           * @author vivaxy
	                                           */
	
	var host = location.host;
	
	if (host === '127.0.0.1:8085') {
	  env = environmentConstant.DEVELOPMENT;
	}
	
	var _default = env;
	exports.default = _default;
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(env, 'env', '/Users/vivaxy/code/github/react-pianist/docs/source/library/environment.js');
	
	  __REACT_HOT_LOADER__.register(host, 'host', '/Users/vivaxy/code/github/react-pianist/docs/source/library/environment.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/docs/source/library/environment.js');
	})();

	;

/***/ },

/***/ 236:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @since 2016-09-04 10:37
	 * @author vivaxy
	 */
	
	var DEVELOPMENT = exports.DEVELOPMENT = 'development';
	var PRODUCTION = exports.PRODUCTION = 'production';
	;
	
	(function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(DEVELOPMENT, 'DEVELOPMENT', '/Users/vivaxy/code/github/react-pianist/docs/source/config/environment.js');
	
	  __REACT_HOT_LOADER__.register(PRODUCTION, 'PRODUCTION', '/Users/vivaxy/code/github/react-pianist/docs/source/config/environment.js');
	})();

	;

/***/ }

});
//# sourceMappingURL=List.js.map
/*! @2016 vivaxy */
webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _render = __webpack_require__(2);
	
	var _render2 = _interopRequireDefault(_render);
	
	var _BorderBox = __webpack_require__(210);
	
	var _BorderBox2 = _interopRequireDefault(_BorderBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @since 2016-09-04 11:08
	 * @author vivaxy
	 */
	
	(0, _render2.default)(_BorderBox2.default);
	
	if (false) {
	    module.hot.accept('../container/BorderBox', function () {
	        var NewEntry = require('../container/BorderBox').default;
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

/***/ 210:
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
	
	var _BorderBox = __webpack_require__(212);
	
	var _colors = __webpack_require__(198);
	
	var _colors2 = _interopRequireDefault(_colors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @since 2016-09-04 11:08
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author vivaxy
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var BorderBoxDemo = function (_Component) {
	    _inherits(BorderBoxDemo, _Component);
	
	    function BorderBoxDemo() {
	        _classCallCheck(this, BorderBoxDemo);
	
	        return _possibleConstructorReturn(this, (BorderBoxDemo.__proto__ || Object.getPrototypeOf(BorderBoxDemo)).apply(this, arguments));
	    }
	
	    _createClass(BorderBoxDemo, [{
	        key: 'render',
	        value: function render() {
	
	            (0, _setTitle2.default)('BorderBox');
	
	            return _react2.default.createElement(
	                _BorderBox.BorderBox,
	                { style: {
	                        width: '100px',
	                        height: '100px',
	                        backgroundColor: _colors2.default.ABOUT_WHITE,
	                        color: _colors2.default.ABOUT_BLACK,
	                        margin: '10px auto'
	                    } },
	                _react2.default.createElement(_BorderBox.BorderLine, { color: _colors2.default.BORDER, position: 'top' }),
	                _react2.default.createElement(_BorderBox.BorderLine, { color: _colors2.default.BORDER, position: 'bottom' }),
	                _react2.default.createElement(_BorderBox.BorderLine, { color: _colors2.default.BORDER, position: 'left' }),
	                _react2.default.createElement(_BorderBox.BorderLine, { color: _colors2.default.BORDER, position: 'right' }),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'there are lines around'
	                )
	            );
	        }
	    }]);
	
	    return BorderBoxDemo;
	}(_react.Component);
	
	var _default = (0, _connect2.default)(function (state) {
	    return {};
	}, {})(BorderBoxDemo);
	
	exports.default = _default;
	;
	
	(function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(BorderBoxDemo, 'BorderBoxDemo', '/Users/vivaxy/code/github/react-pianist/docs/source/container/BorderBox.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/vivaxy/code/github/react-pianist/docs/source/container/BorderBox.js');
	})();

	;

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

/***/ }

});
//# sourceMappingURL=BorderBox.js.map
/*! @2016 vivaxy */
webpackJsonp([5],{0:function(e,t,n){e.exports=n(234)},205:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){document.title=e};t["default"]=n,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","/Users/vivaxy/code/github/react-pianist/docs/source/library/setTitle.js")}()},210:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonGroup=t.Button=void 0;var r=n(211),i=o(r),a=n(212),u=o(a);t.Button=i["default"],t.ButtonGroup=u["default"],function(){"undefined"==typeof __REACT_HOT_LOADER__}()},211:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,s,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(2),d=o(p),_=n(200),h=(o(_),n(201)),y=(o(h),n(198)),T=o(y),b=(s=l=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function(){var e=16,t=1,n=36,o={display:"inline-block",borderRadius:"4px",padding:"0 "+e+"px",fontSize:"14px",verticalAlign:"top"},i=this.props,a=i.width,u=i.disabled,l=i.primary,s=i.children,f=i.style,p=r(i,["width","disabled","primary","children","style"]);u&&(o.opacity="0.4"),l?(o.backgroundColor=T["default"].PRIMARY,o.color=T["default"].WHITE,o.height=n+"px",o.lineHeight=n+"px",void 0!==a&&(o.width=a-2*e+"px")):(o.backgroundColor=T["default"].ABOUT_WHITE,o.color=T["default"].ABOUT_BLACK,o.height=n-2*t+"px",o.lineHeight=n-2*t+"px",o.border=t+"px solid "+T["default"].BORDER,void 0!==a&&(o.width=a-2*e-2*t+"px"));var _=c({},o,f);return d["default"].createElement("div",c({style:_},p),s)}}]),t}(p.Component),l.propTypes={width:p.PropTypes.number,disabled:p.PropTypes.bool,primary:p.PropTypes.bool},l.defaultProps={disabled:!1,primary:!0},s);t["default"]=b,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(b,"Button","/Users/vivaxy/code/github/react-pianist/source/Button/Button.js")}()},212:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l,s,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),p=n(2),d=o(p),_=n(200),h=(o(_),n(201)),y=(o(h),n(213)),T=o(y),b=n(198),O=(o(b),n(211)),v=o(O),E=(s=l=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),f(t,[{key:"render",value:function(){var e={textAlign:"center"},t=this.props,n=t.children,o=t.style,i=r(t,["children","style"]),a=c({},e,o);return d["default"].createElement("div",c({style:a},i),n)}}]),t}(p.Component),l.propTypes={children:(0,T["default"])(v["default"])},l.defaultProps={},s);t["default"]=E,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(E,"ButtonGroup","/Users/vivaxy/code/github/react-pianist/source/Button/ButtonGroup.js")}()},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),r=function(e){return function(t,n,r){var i=t[n],a=null;return o.Children.forEach(i,function(t){t.type!==e&&(a=new Error("Component '"+r+"' should only have children of '"+e.name+"' type"))}),a}};t["default"]=r,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(r,"default","/Users/vivaxy/code/github/react-pianist/source/library/checkChildren.js")}()},234:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(2),f=o(c),p=n(31),d=o(p),_=n(58),h=o(_),y=n(205),T=o(y),b=n(235),O=(o(b),n(55)),v=o(O),E=n(195),A=o(E),g=n(198),w=(o(g),n(210)),m=(u=(0,d["default"])(function(e){return{toastState:e.toast}},{showToastAction:v["default"].toast.showToast,hideToastAction:v["default"].toast.hideToast}),u(l=function(e){function t(){var e,n,o,a;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={controlledToastShown:!1},a=n,i(o,a)}return a(t,e),s(t,[{key:"render",value:function(){(0,T["default"])("Toast");var e=this.state.controlledToastShown,t=this.props.toastState;return f["default"].createElement("div",null,f["default"].createElement("div",{style:{textAlign:"center",marginTop:"20px"}},f["default"].createElement(w.Button,{onClick:this.toast.bind(this)},"TOAST")),f["default"].createElement("div",{style:{textAlign:"center",marginTop:"20px"}},f["default"].createElement(w.Button,{onClick:this.toastAnother.bind(this)},"TOAST ANOTHER")),f["default"].createElement("div",{style:{textAlign:"center",marginTop:"20px"}},f["default"].createElement(w.Button,{onClick:this.showControlledToast.bind(this)},"SHOW CONTROLLED TOAST")),f["default"].createElement("div",{style:{textAlign:"center",marginTop:"20px"}},f["default"].createElement(w.Button,{onClick:this.hideControlledToast.bind(this)},"HIDE CONTROLLED TOAST")),f["default"].createElement(E.AutoHideToast,{show:t.show,onAutoHide:this.onToastHide.bind(this)},t.message),f["default"].createElement(A["default"],{show:e,style:{width:"220px",textAlign:"center"}},"THIS IS A CONTROLLED TOAST"))}},{key:"toast",value:function(){var e=this.props.showToastAction;e("TEST TOAST")}},{key:"toastAnother",value:function(){var e=this.props.showToastAction;e("TEST ANOTHER TOAST")}},{key:"showControlledToast",value:function(){this.setState({controlledToastShown:!0})}},{key:"hideControlledToast",value:function(){this.setState({controlledToastShown:!1})}},{key:"onToastHide",value:function(){var e=this.props.hideToastAction;console.log("hide"),e()}}]),t}(c.Component))||l);(0,h["default"])(m),function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(m,"ToastDemo","/Users/vivaxy/code/github/react-pianist/docs/source/entry/Toast.js")}()},235:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1];return new Promise(function(n){var o=setTimeout(n,e);t(o)})};t["default"]=n,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","/Users/vivaxy/code/github/react-pianist/docs/source/library/sleep.js")}()}});
//# sourceMappingURL=Toast.js.map
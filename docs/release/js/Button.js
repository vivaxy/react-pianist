/*! @2016 vivaxy */
webpackJsonp([1],{0:function(e,t,n){e.exports=n(209)},205:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){document.title=e};t["default"]=n,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(n,"default","/Users/vivaxy/code/github/react-pianist/docs/source/library/setTitle.js")}()},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a,c,l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),f=r(s),p=n(31),d=r(p),_=n(58),y=r(_),b=n(205),O=r(b),h=n(210),v=n(198),E=(r(v),n(214)),T=r(E),g=(a=(0,d["default"])(function(e){return{}},{}),a(c=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"render",value:function(){return(0,O["default"])("Button"),f["default"].createElement("div",null,f["default"].createElement(h.ButtonGroup,{style:{marginTop:"20px"}},f["default"].createElement(h.Button,{width:96,primary:!1},T["default"].CANCEL),f["default"].createElement(h.Button,{width:96},T["default"].CONFIRM)),f["default"].createElement(h.ButtonGroup,{style:{marginTop:"20px"}},f["default"].createElement(h.Button,{width:96,primary:!1,disabled:!0},T["default"].CANCEL),f["default"].createElement(h.Button,{width:96,disabled:!0},T["default"].CONFIRM)))}}]),t}(s.Component))||c);(0,y["default"])(g),function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(g,"ButtonDemo","/Users/vivaxy/code/github/react-pianist/docs/source/entry/Button.js")}()},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonGroup=t.Button=void 0;var o=n(211),i=r(o),u=n(212),a=r(u);t.Button=i["default"],t.ButtonGroup=a["default"],function(){"undefined"==typeof __REACT_HOT_LOADER__}()},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(2),d=r(p),_=n(200),y=(r(_),n(201)),b=(r(y),n(198)),O=r(b),h=(l=c=function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e=16,t=1,n=36,r={display:"inline-block",borderRadius:"4px",padding:"0 "+e+"px",fontSize:"14px",verticalAlign:"top",cursor:"pointer"},i=this.props,u=i.width,a=i.disabled,c=i.primary,l=i.children,f=i.style,p=o(i,["width","disabled","primary","children","style"]);a&&(r.opacity="0.4",r.cursor="not-allowed"),c?(r.backgroundColor=O["default"].PRIMARY,r.color=O["default"].WHITE,r.height=n+"px",r.lineHeight=n+"px",void 0!==u&&(r.width=u-2*e+"px")):(r.backgroundColor=O["default"].ABOUT_WHITE,r.color=O["default"].ABOUT_BLACK,r.height=n-2*t+"px",r.lineHeight=n-2*t+"px",r.border=t+"px solid "+O["default"].BORDER,void 0!==u&&(r.width=u-2*e-2*t+"px"));var _=s({},r,f);return d["default"].createElement("div",s({style:_},p),l)}}]),t}(p.Component),c.propTypes={width:p.PropTypes.number,disabled:p.PropTypes.bool,primary:p.PropTypes.bool},c.defaultProps={disabled:!1,primary:!0},l);t["default"]=h,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(h,"Button","/Users/vivaxy/code/github/react-pianist/source/Button/Button.js")}()},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c,l,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(2),d=r(p),_=n(200),y=(r(_),n(201)),b=(r(y),n(213)),O=r(b),h=n(198),v=(r(h),n(211)),E=r(v),T=(l=c=function(e){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),f(t,[{key:"render",value:function(){var e={textAlign:"center"},t=this.props,n=t.children,r=t.style,i=t.space,u=o(t,["children","style","space"]),a=s({},e,r),c=p.Children.map(n,function(e){return(0,p.cloneElement)(e,{style:{margin:"0 "+i+"px"}})});return d["default"].createElement("div",s({style:a},u),c)}}]),t}(p.Component),c.propTypes={children:(0,O["default"])(E["default"]),space:p.PropTypes.number},c.defaultProps={space:20},l);t["default"]=T,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(T,"ButtonGroup","/Users/vivaxy/code/github/react-pianist/source/Button/ButtonGroup.js")}()},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return function(t,n,o){var i=t[n],u=null;return r.Children.forEach(i,function(t){t.type!==e&&(u=new Error("Component '"+o+"' should only have children of '"+e.name+"' type"))}),u}};t["default"]=o,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(o,"default","/Users/vivaxy/code/github/react-pianist/source/library/checkChildren.js")}()},214:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(215),i=r(o),u="en-us",a={"en-us":i},c=i;t["default"]=c,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(u,"LANGUAGE","/Users/vivaxy/code/github/react-pianist/docs/source/i18n/index.js"),__REACT_HOT_LOADER__.register(a,"languages","/Users/vivaxy/code/github/react-pianist/docs/source/i18n/index.js"),__REACT_HOT_LOADER__.register(c,"default","/Users/vivaxy/code/github/react-pianist/docs/source/i18n/index.js"))}()},215:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.CANCEL="CANCEL",r=t.CONFIRM="CONFIRM";!function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"CANCEL","/Users/vivaxy/code/github/react-pianist/docs/source/i18n/en-us.js"),__REACT_HOT_LOADER__.register(r,"CONFIRM","/Users/vivaxy/code/github/react-pianist/docs/source/i18n/en-us.js"))}()}});
//# sourceMappingURL=Button.js.map
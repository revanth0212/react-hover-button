(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(n(23));t.default=l.default},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.default=function(e){var t=e.text;return l.default.createElement("div",{style:{color:"white"}},t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(n(0));t.default=function(e){var t=e.className;return l.default.createElement("i",{className:t,style:{color:"white"}})}},function(e,t,n){n(7),e.exports=n(13)},,,,,,,function(e,t,n){"use strict";n(14);var l=r(n(0)),a=n(17),o=r(n(21));function r(e){return e&&e.__esModule?e:{default:e}}(0,a.render)(l.default.createElement(o.default,null),document.querySelector("#app"))},function(e,t,n){},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),a=n(0),o=i(a),r=i(n(22)),u=i(n(24)),f=i(n(25)),d=i(n(26));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.createElement(r.default,null),s=o.default.createElement(u.default,null),p=o.default.createElement(f.default,null),y=o.default.createElement(d.default,null),m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),l(t,[{key:"render",value:function(){return o.default.createElement("div",{style:{margin:"auto",width:"fit-content"}},c,s,p,y)}}]),t}();t.default=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(0)),a=r(n(1)),o=r(n(4));function r(e){return e&&e.__esModule?e:{default:e}}var u=l.default.createElement("h3",null,"Simple"),f=l.default.createElement(o.default,{text:"Main Button"}),d=l.default.createElement(o.default,{text:"Button 1"}),i=l.default.createElement(o.default,{text:"Button 2"}),c=l.default.createElement(o.default,{text:"Button 3"});t.default=function(){return l.default.createElement("div",null,u,l.default.createElement(a.default,{node:f,options:[{node:d},{node:i},{node:c}],rootStyle:{display:"flex",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"7px"},optionStyle:{padding:"0px 5px"},optionsStyle:{display:"flex"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l,a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var f={display:"flex"},d={display:"flex",flexDirection:"row",justifyContent:"flex-start"},i=function(e){var t=e.option,n=e.style;return u.default.createElement("div",{style:n},t.node)},c=function(e){var t=e.options,n=e.style,l=void 0===n?d:n,a=e.optionStyle;return u.default.createElement("div",{style:l},t.map(function(e){return u.default.createElement(i,{option:e,style:a})}))},s=(a=l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setComponentState=function(e){console.log(e),n.setState(e)},n.onClick=function(){n.setComponentState({showOptions:!n.state.showOptions})},n.state={showOptions:e.showOptions},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.node,n=e.options,l=e.rootStyle,a=e.optionsStyle,r=e.optionStyle,d=this.state.showOptions;return u.default.createElement("div",{style:o({width:"fit-content"},l)},u.default.createElement("div",{onClick:this.onClick,style:f},t),d&&u.default.createElement(c,{options:n,optionStyle:r,style:a}))}}]),t}(),l.defaultProps={showOptions:!1},a);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(0)),a=r(n(1)),o=r(n(4));function r(e){return e&&e.__esModule?e:{default:e}}var u=l.default.createElement("h3",null,"Hierarchy"),f=l.default.createElement(o.default,{text:"Main Button"}),d=l.default.createElement(o.default,{text:"Button 1"}),i=l.default.createElement(o.default,{text:"Button 2"}),c=l.default.createElement(o.default,{text:"Button 3"}),s=l.default.createElement(o.default,{text:"Button 4"}),p=l.default.createElement(o.default,{text:"Button 4.1"}),y=l.default.createElement(o.default,{text:"Button 4.2"});t.default=function(){return l.default.createElement("div",null,u,l.default.createElement(a.default,{node:f,options:[{node:d},{node:i},{node:c},{node:l.default.createElement(a.default,{node:s,options:[{node:p},{node:y}],rootStyle:{display:"block"},optionStyle:{padding:"0px 5px"},optionsStyle:{display:"block"}})}],rootStyle:{display:"flex",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"7px"},optionStyle:{padding:"0px 5px"},optionsStyle:{display:"flex"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(0)),a=r(n(1)),o=r(n(5));function r(e){return e&&e.__esModule?e:{default:e}}var u=l.default.createElement("h3",null,"Icons"),f=l.default.createElement(o.default,{className:"fas fa-share"}),d=l.default.createElement(o.default,{className:"fab fa-facebook-f"}),i=l.default.createElement(o.default,{className:"fab fa-twitter"}),c=l.default.createElement(o.default,{className:"far fa-envelope"}),s=l.default.createElement(o.default,{className:"fas fa-link"});t.default=function(){return l.default.createElement("div",null,u,l.default.createElement(a.default,{node:f,options:[{node:d},{node:i},{node:c},{node:s}],rootStyle:{display:"flex",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"7px"},optionStyle:{padding:"0px 5px"},optionsStyle:{display:"flex"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(0)),a=r(n(1)),o=r(n(5));function r(e){return e&&e.__esModule?e:{default:e}}var u=l.default.createElement("h3",null,"Hierarchy of Icons"),f=l.default.createElement(o.default,{className:"fas fa-share"}),d=l.default.createElement(o.default,{className:"fab fa-facebook-f"}),i=l.default.createElement(o.default,{className:"fab fa-twitter"}),c=l.default.createElement(o.default,{className:"fab fa-linkedin-in"}),s=l.default.createElement(o.default,{className:"fas fa-ellipsis-h"}),p=l.default.createElement(o.default,{className:"far fa-envelope"}),y=l.default.createElement(o.default,{className:"fas fa-link"});t.default=function(){return l.default.createElement("div",null,u,l.default.createElement(a.default,{node:f,options:[{node:d},{node:i},{node:c},{node:l.default.createElement(a.default,{node:s,options:[{node:p},{node:y}],rootStyle:{display:"block"},optionStyle:{padding:"0px 5px"},optionsStyle:{display:"block"}})}],rootStyle:{display:"flex",backgroundColor:"rgba(0, 0, 0, 0.7)",padding:"7px"},optionStyle:{padding:"0px 5px"},optionsStyle:{display:"flex"}}))}}],[[6,2,1]]]);
//# sourceMappingURL=app.60a0eeac.js.map
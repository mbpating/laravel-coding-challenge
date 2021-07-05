(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Referrals_index_tsx"],{

/***/ "./resources/js/Pages/Referrals/index.tsx":
/*!************************************************!*\
  !*** ./resources/js/Pages/Referrals/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var layout_1 = __importDefault(__webpack_require__(/*! ../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));

var react_multi_email_1 = __webpack_require__(/*! react-multi-email */ "./node_modules/react-multi-email/commonjs/index.js");

__webpack_require__(/*! react-multi-email/style.css */ "./node_modules/react-multi-email/style.css");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ReferralsPage = function ReferralsPage(_a) {
  var emails = _a.emails;
  var errors = inertia_react_1.usePage().props.errors;

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    inertia_1.Inertia.post('refer', {
      emails: JSON.stringify(emails)
    }, {
      errorBag: 'referForm'
    });
  };

  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row justify-content-center"
  }, react_1["default"].createElement("div", {
    className: "col-md-8"
  }, react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header"
  }, react_1["default"].createElement("h3", null, "Refer a Friend"), react_1["default"].createElement("h5", null, "Invite your friends to use ContactOut. Enter email addresses below")), react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit
  }, react_1["default"].createElement("div", {
    className: "form-group row"
  }, react_1["default"].createElement("div", {
    className: "col-md-10"
  }, react_1["default"].createElement(react_multi_email_1.ReactMultiEmail, {
    emails: emails,
    onChange: function onChange(_emails) {
      emails = _emails;
    },
    validateEmail: function validateEmail(email) {
      return react_multi_email_1.isEmail(email); // return boolean
    },
    getLabel: function getLabel(email, index, removeEmail) {
      return react_1["default"].createElement("div", {
        "data-tag": true,
        key: index
      }, email, react_1["default"].createElement("span", {
        "data-tag-handle": true,
        onClick: function onClick() {
          return removeEmail(index);
        }
      }, "\xD7"));
    }
  }), errors.referForm && react_1["default"].createElement("span", null, errors.referForm.emails)), react_1["default"].createElement("div", {
    className: "col-md-2"
  }, react_1["default"].createElement("button", {
    type: "submit"
  }, "Send")))))))));
};

exports.default = ReferralsPage;

/***/ }),

/***/ "./resources/js/components/common/layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/layout/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement("div", {
    className: "container"
  }, children);
};

exports.default = Layout;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/react-multi-email/style.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/react-multi-email/style.css ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".react-multi-email {\n  margin: 0;\n  max-width: 100%;\n  flex: 1 0 auto;\n  outline: 0;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  text-align: left;\n  line-height: 1.21428571em;\n  padding: 0.4em 0.5em;\n  background: #fff;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 0.28571429rem;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  font-size: 13px;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  align-content: flex-start;\n}\n.react-multi-email > span[data-placeholder] {\n  display: none;\n  position: absolute;\n  left: 0.5em;\n  top: 0.4em;\n  padding: 0.4em;\n  line-height: 1.21428571em;\n}\n.react-multi-email.focused {\n  border-color: #85b7d9;\n  background: #fff;\n}\n\n.react-multi-email.empty > span[data-placeholder] {\n  display: inline;\n  color: #ccc;\n}\n.react-multi-email.focused > span[data-placeholder] {\n  display: none;\n}\n\n.react-multi-email > input {\n  width: auto !important;\n  outline: none !important;\n  border: 0 none !important;\n  display: inline-block !important;\n  line-height: 1;\n  vertical-align: baseline !important;\n  padding: 0.4em 0.1em !important;\n}\n\n.react-multi-email [data-tag] {\n  line-height: 1;\n  vertical-align: baseline;\n  margin: 0.14285714em;\n  background-color: #f3f3f3;\n  background-image: none;\n  padding: 0.5833em 0.833em;\n  color: rgba(0, 0, 0, 0.6);\n  text-transform: none;\n  font-weight: 600;\n  border: 0 solid transparent;\n  border-radius: 0.28571429rem;\n  transition: background 0.1s ease;\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  max-width: 100%;\n\n}\n.react-multi-email [data-tag] [data-tag-item] {\n  max-width: 100%;\n  overflow: hidden;\n}\n.react-multi-email [data-tag]:first-child {\n  margin-left: 0;\n}\n.react-multi-email [data-tag] [data-tag-handle] {\n  margin-left: 0.833em;\n  cursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/react-multi-email/commonjs/ReactMultiEmail.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-multi-email/commonjs/ReactMultiEmail.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var isEmail_1 = __webpack_require__(/*! ./isEmail */ "./node_modules/react-multi-email/commonjs/isEmail.js");
var ReactMultiEmail = /** @class */ (function (_super) {
    __extends(ReactMultiEmail, _super);
    function ReactMultiEmail(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            focused: false,
            emails: [],
            inputValue: '',
        };
        _this.findEmailAddress = function (value, isEnter) {
            var validateEmail = _this.props.validateEmail;
            var validEmails = [];
            var inputValue = '';
            var re = /[ ,;]/g;
            var isEmail = validateEmail || isEmail_1.default;
            var addEmails = function (email) {
                var emails = _this.state.emails;
                for (var i = 0, l = emails.length; i < l; i++) {
                    if (emails[i] === email) {
                        return false;
                    }
                }
                validEmails.push(email);
                return true;
            };
            if (value !== '') {
                if (re.test(value)) {
                    var arr = value.split(re).filter(function (n) {
                        return n !== '' && n !== undefined && n !== null;
                    });
                    do {
                        if (isEmail('' + arr[0])) {
                            addEmails('' + arr.shift());
                        }
                        else {
                            if (arr.length === 1) {
                                /// 마지막 아이템이면 inputValue로 남겨두기
                                inputValue = '' + arr.shift();
                            }
                            else {
                                arr.shift();
                            }
                        }
                    } while (arr.length);
                }
                else {
                    if (isEnter) {
                        if (isEmail(value)) {
                            addEmails(value);
                        }
                        else {
                            inputValue = value;
                        }
                    }
                    else {
                        inputValue = value;
                    }
                }
            }
            _this.setState({
                emails: _this.state.emails.concat(validEmails),
                inputValue: inputValue,
            });
            if (validEmails.length && _this.props.onChange) {
                _this.props.onChange(_this.state.emails.concat(validEmails));
            }
        };
        _this.onChangeInputValue = function (value) {
            _this.findEmailAddress(value);
        };
        _this.removeEmail = function (index) {
            _this.setState(function (prevState) {
                return {
                    emails: prevState.emails.slice(0, index).concat(prevState.emails.slice(index + 1)),
                };
            }, function () {
                if (_this.props.onChange) {
                    _this.props.onChange(_this.state.emails);
                }
            });
        };
        _this.handleOnKeydown = function (e) {
            switch (e.which) {
                case 13:
                case 9:
                    e.preventDefault();
                    break;
                case 8:
                    if (!e.currentTarget.value) {
                        _this.removeEmail(_this.state.emails.length - 1);
                    }
                    break;
                default:
            }
        };
        _this.handleOnKeyup = function (e) {
            switch (e.which) {
                case 13:
                case 9:
                    _this.findEmailAddress(e.currentTarget.value, true);
                    break;
                default:
            }
        };
        _this.handleOnChange = function (e) {
            return _this.onChangeInputValue(e.currentTarget.value);
        };
        _this.handleOnBlur = function (e) {
            _this.setState({ focused: false });
            _this.findEmailAddress(e.currentTarget.value, true);
        };
        _this.handleOnFocus = function () {
            return _this.setState({
                focused: true,
            });
        };
        _this.emailInputRef = React.createRef();
        return _this;
    }
    ReactMultiEmail.getDerivedStateFromProps = function (nextProps, prevState) {
        if (prevState.propsEmails !== nextProps.emails) {
            return {
                propsEmails: nextProps.emails || [],
                emails: nextProps.emails || [],
                inputValue: '',
                focused: false,
            };
        }
        return null;
    };
    ReactMultiEmail.prototype.render = function () {
        var _this = this;
        var _a = this.state, focused = _a.focused, emails = _a.emails, inputValue = _a.inputValue;
        var _b = this.props, style = _b.style, getLabel = _b.getLabel, _c = _b.className, className = _c === void 0 ? '' : _c, noClass = _b.noClass, placeholder = _b.placeholder;
        // removeEmail
        return (React.createElement("div", { className: className + " " + (noClass ? '' : 'react-multi-email') + " " + (focused ? 'focused' : '') + " " + (inputValue === '' && emails.length === 0 ? 'empty' : ''), style: style, onClick: function () {
                if (_this.emailInputRef.current) {
                    _this.emailInputRef.current.focus();
                }
            } },
            placeholder ? React.createElement("span", { "data-placeholder": true }, placeholder) : null,
            emails.map(function (email, index) {
                return getLabel(email, index, _this.removeEmail);
            }),
            React.createElement("input", { ref: this.emailInputRef, type: "text", value: inputValue, onFocus: this.handleOnFocus, onBlur: this.handleOnBlur, onChange: this.handleOnChange, onKeyDown: this.handleOnKeydown, onKeyUp: this.handleOnKeyup })));
    };
    return ReactMultiEmail;
}(React.Component));
exports.default = ReactMultiEmail;


/***/ }),

/***/ "./node_modules/react-multi-email/commonjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-email/commonjs/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var isEmail_1 = __webpack_require__(/*! ./isEmail */ "./node_modules/react-multi-email/commonjs/isEmail.js");
exports.isEmail = isEmail_1.default;
var ReactMultiEmail_1 = __webpack_require__(/*! ./ReactMultiEmail */ "./node_modules/react-multi-email/commonjs/ReactMultiEmail.js");
exports.ReactMultiEmail = ReactMultiEmail_1.default;


/***/ }),

/***/ "./node_modules/react-multi-email/commonjs/isEmail.js":
/*!************************************************************!*\
  !*** ./node_modules/react-multi-email/commonjs/isEmail.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// forked from https://github.com/chriso/validator.js
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var defaultFqdnOptions = {
    requireTld: true,
    allowUnderscores: false,
    allowTrailingDot: false,
};
var defaultEmailOptions = {
    allowDisplayName: false,
    requireDisplayName: false,
    allowUtf8LocalPart: true,
    requireTld: true,
};
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
    var min = 0;
    var max;
    var len = encodeURI(str).split(/%..|./).length - 1;
    if (options) {
        min = Number(options.min) || 0;
        max = Number(options.max);
    }
    return len >= min && (typeof max === 'undefined' || len <= max);
}
function isFQDN(str, options) {
    options = __assign({}, defaultFqdnOptions, options);
    /* Remove the optional trailing dot before checking validity */
    if (options.allowTrailingDot && str[str.length - 1] === '.') {
        str = str.substring(0, str.length - 1);
    }
    var parts = str.split('.');
    if (options.requireTld) {
        var tld = '' + parts.pop();
        if (!parts.length ||
            !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
            return false;
        }
        // disallow spaces
        if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
            return false;
        }
    }
    for (var part = void 0, i = 0; i < parts.length; i++) {
        part = parts[i];
        if (options.allowUnderscores) {
            part = part.replace(/_/g, '');
        }
        if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
            return false;
        }
        // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) {
            return false;
        }
        if (part[0] === '-' || part[part.length - 1] === '-') {
            return false;
        }
    }
    return true;
}
function isEmail(str, options) {
    options = __assign({}, defaultEmailOptions, options);
    if (options.requireDisplayName || options.allowDisplayName) {
        var displayEmail = str.match(displayName);
        if (displayEmail) {
            str = displayEmail[1];
        }
        else if (options.requireDisplayName) {
            return false;
        }
    }
    var parts = str.split('@');
    var domain = '' + parts.pop();
    var lowerDomain = domain.toLowerCase();
    var user = parts.join('@');
    if (lowerDomain === 'gmail.com' || lowerDomain === 'googlemail.com') {
        user = user.replace(/\./g, '').toLowerCase();
    }
    if (!isByteLength(user, { max: 64 }) || !isByteLength(domain, { max: 254 })) {
        return false;
    }
    if (!isFQDN(domain, { requireTld: options.requireTld })) {
        return false;
    }
    if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allowUtf8LocalPart
            ? quotedEmailUserUtf8.test(user)
            : quotedEmailUser.test(user);
    }
    var pattern = options.allowUtf8LocalPart
        ? emailUserUtf8Part
        : emailUserPart;
    var userParts = user.split('.');
    for (var i = 0; i < userParts.length; i++) {
        if (!pattern.test(userParts[i])) {
            return false;
        }
    }
    return true;
}
exports.default = isEmail;


/***/ }),

/***/ "./node_modules/react-multi-email/style.css":
/*!**************************************************!*\
  !*** ./node_modules/react-multi-email/style.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./node_modules/react-multi-email/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

}]);
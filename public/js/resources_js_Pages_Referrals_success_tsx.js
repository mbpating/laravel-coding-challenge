(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Referrals_success_tsx"],{

/***/ "./resources/js/Pages/Referrals/success.tsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Referrals/success.tsx ***!
  \**************************************************/
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

var ReferralSuccessPage = function ReferralSuccessPage() {
  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row justify-content-center"
  }, react_1["default"].createElement("div", {
    className: "col-md-8"
  }, react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header"
  }, react_1["default"].createElement("h3", null, "Referral Succesful!")), react_1["default"].createElement("div", {
    className: "card-body justify-content-center"
  }, react_1["default"].createElement("h5", null, "An email is submitted to your referral and you will be informed when they register to the ContactOut"), react_1["default"].createElement("div", {
    className: "col-md-6 offset-md-4"
  }, react_1["default"].createElement("button", {
    className: "btn btn-primary"
  }, "Make New Referrals")))))));
};

exports.default = ReferralSuccessPage;

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

/***/ })

}]);
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_index_tsx"],{

/***/ "./resources/js/Pages/Admin/index.tsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Admin/index.tsx ***!
  \********************************************/
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

var ReferralsPage = function ReferralsPage(_a) {
  var referrals = _a.referrals;
  return react_1["default"].createElement(layout_1["default"], null, react_1["default"].createElement("div", {
    className: "row justify-content-center"
  }, react_1["default"].createElement("div", {
    className: "col-md-8"
  }, react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header"
  }, react_1["default"].createElement("h3", null, "Referral Listing")), react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("table", {
    style: {
      width: '100%'
    }
  }, react_1["default"].createElement("thead", null, react_1["default"].createElement("tr", null, react_1["default"].createElement("th", null, "Referrer"), react_1["default"].createElement("th", null, "Email"), react_1["default"].createElement("th", null, "Date"), react_1["default"].createElement("th", null, "Status"))), react_1["default"].createElement("tbody", null, referrals.length > 0 && referrals.map(function (referral, index) {
    return react_1["default"].createElement("tr", null, react_1["default"].createElement("td", null, referral.referrer.name), react_1["default"].createElement("td", null, referral.email), react_1["default"].createElement("td", null, referral.created_at), react_1["default"].createElement("td", null, referral.status));
  }))))))));
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

/***/ })

}]);
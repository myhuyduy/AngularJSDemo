webpackJsonp([1],{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
var hello_1 = __webpack_require__(9);
angular.module("mainApp", ["ngRoute", "ngResource"])
    .component("helloWorld", (hello_1.helloWorldComponent()));


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldComponent = function () {
    var component = {
        template: '<span>Hello World! </span><span>Hello Again!</span>'
    };
    return component;
};


/***/ })

},[8]);
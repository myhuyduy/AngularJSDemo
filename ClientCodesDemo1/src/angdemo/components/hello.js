"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helloController_1 = require("./helloController");
var HelloWorldComponent = (function () {
    function HelloWorldComponent() {
        this.template = require("./hello.html");
        this.controller = helloController_1.default;
        this.bindings = {
            fullName: '@',
            testObject: '<'
        };
    }
    return HelloWorldComponent;
}());
exports.default = HelloWorldComponent;
//# sourceMappingURL=hello.js.map
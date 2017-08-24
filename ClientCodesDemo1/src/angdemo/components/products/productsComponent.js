"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productsController_1 = require("./productsController");
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.template = require("./productsView.html");
        this.controller = productsController_1.default;
        this.bindings = {
            item: '<'
        };
    }
    return ProductsComponent;
}());
exports.default = ProductsComponent;
//# sourceMappingURL=productsComponent.js.map
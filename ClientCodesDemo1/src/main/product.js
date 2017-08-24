"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(productId, productName) {
        var _this = this;
        this.productId = productId;
        this.productName = productName;
        this.getProductName = function () {
            return _this.productName;
        };
    }
    return Product;
}());
exports.default = Product;
//# sourceMappingURL=product.js.map
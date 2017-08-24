"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductsController = (function () {
    function ProductsController($http) {
        var _this = this;
        this.getProducts = function () {
            return _this.http.get("http://localhost:9000/api/product");
        };
        this.$onInit = function () {
            _this.getProducts()
                .then(function (response) {
                _this.products = response.data;
            }), function (error) {
                alert(error.message);
            };
        };
        this.http = $http;
    }
    return ProductsController;
}());
ProductsController.$inject = ["$http"];
exports.default = ProductsController;
//# sourceMappingURL=productsController.js.map
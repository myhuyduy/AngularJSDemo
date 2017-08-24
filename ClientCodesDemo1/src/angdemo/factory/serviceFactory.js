"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceFactory = (function () {
    function ServiceFactory($http) {
        var _this = this;
        this.$http = $http;
        this.getProducts = function () {
            return _this.$http.get("http://localhost:9000/api/product/");
        };
    }
    return ServiceFactory;
}());
exports.default = ServiceFactory;
//# sourceMappingURL=serviceFactory.js.map
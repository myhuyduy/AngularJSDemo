"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-resource");
require("angular-route");
var tilesComponent_1 = require("./components/tiles/tilesComponent");
var productsComponent_1 = require("./components/products/productsComponent");
var serviceFactory_1 = require("./factory/serviceFactory");
require('../styles/main.scss');
angular.module("mainApp", ["ngRoute", "ngResource"])
    .factory("serviceFactory", serviceFactory_1.default)
    .component("tiles", new tilesComponent_1.default())
    .component("products", new productsComponent_1.default())
    .factory("serviceFactory", function ($http) {
    var dataFactory = {
        getProducts: function () {
            return $http.get("http://localhost:9000/api/product");
        }
    };
    return dataFactory;
})
    .controller("mainCtrl", function ($scope, serviceFactory) {
    $scope.products = null;
    getProducts();
    function getProducts() {
        serviceFactory.getProducts()
            .then(function (response) {
            $scope.products = response.data;
        }), function (error) {
            alert(error.message);
        };
    }
    ;
});
//# sourceMappingURL=main.js.map
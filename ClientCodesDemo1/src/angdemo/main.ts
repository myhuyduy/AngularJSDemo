import * as angular from 'angular';
import { IModule, IComponentOptions } from 'angular';
import 'angular-resource';
import 'angular-route';
import HelloWorldComponent from "./components/hello";
import TilesComponent from "./components/tiles/tilesComponent";
import ProductsComponent from "./components/products/productsComponent";
import ServiceFactory from "./factory/serviceFactory";

declare var require: (filename: string) => any;

// Stylesheets
require('../styles/main.scss');

angular.module("mainApp", ["ngRoute", "ngResource"])
        .factory("serviceFactory", ServiceFactory)
        .component("tiles", new TilesComponent())
        .component("products", new ProductsComponent())

        .factory("serviceFactory", ($http): any => {
            var dataFactory =
                {
                    getProducts: (): any => {
                        return $http.get("http://localhost:9000/api/product");
                    }
                };

            return dataFactory;
    })
    .controller("mainCtrl", ($scope, serviceFactory) => {
        $scope.products = null;

        getProducts();

        function getProducts() {
            serviceFactory.getProducts()
                .then((response) => {
                    $scope.products = response.data;
                }), (error) => {
                alert(error.message);
            }
        };
    });

webpackJsonp([1],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
var product_1 = __webpack_require__(7);
var mainApp = angular.module("mainApp", ["ngRoute", "ngResource"]);
mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/user1', {
            templateUrl: 'user1.htm', controller: 'AddUser1Controller'
        }).
            when('/user2', {
            templateUrl: 'user2.htm', controller: 'AddUser2Controller'
        }).
            otherwise({
            redirectTo: '/user1'
        });
    }]);
mainApp.factory("UserService", function () {
    var users = ["Peter", "Daniel", "Nina"];
    return {
        all: function () {
            return users;
        },
        first: function () {
            return users[0];
        }
    };
});
mainApp.factory("UserServiceTest", function () {
    var users = ["Peter1", "Daniel2", "Nina3"];
    return {
        all: function () {
            return users;
        },
        first: function () {
            return users[0];
        }
    };
});
mainApp.service("blogService", function ($http) {
    this.get = function () {
        return $http.get("http://cphamltw7/WebApiDemo/api/user");
    };
});
mainApp.factory("blogServiceFactory", function ($http) {
    var dataFactory = {
        getBlog: function () {
            return $http.get("http://cphamltw7/WebApiDemo/api/user");
        },
        saveBlog: function (blog) {
            return $http.post("http://cphamltw7/WebApiDemo/api/user", blog);
        }
    };
    return dataFactory;
});
mainApp.controller("MyCtrl", function ($scope, UserService, UserServiceTest) {
    $scope.name = UserService.first();
    $scope.password = "";
    $scope.visible = false;
    $scope.book = {
        name: "Book Test",
        author: "Author test"
    };
    $scope.getAlert = function () {
        alert($scope.name + " - " + UserService.first() + " - " + UserServiceTest.first());
        $scope.visible = true;
    };
    $scope.$watch("book.name", function (newvalue, oldValue) {
        if (newvalue !== oldValue) {
            alert("New Value: " + newvalue);
            alert("Old Value: " + oldValue);
        }
    });
});
mainApp.controller("Navigation", function ($scope) {
    $scope.getAlert = function () {
        alert('got me');
    };
});
mainApp.controller("AddUser1Controller", function ($scope) {
    $scope.message = "Add User 1";
});
mainApp.controller("AddUser2Controller", function ($scope) {
    $scope.message = "Add User 2";
});
mainApp.controller("BlogController", function ($scope, blogServiceFactory) {
    $scope.blogs;
    $scope.status;
    getBlogs();
    function getBlogs() {
        blogServiceFactory.getBlog()
            .then(function (response) {
            $scope.blogs = response.data;
        }, function (error) {
            $scope.status = 'Unable to load blog data: ' + error.message;
        });
    }
    $scope.save = function () {
        blogServiceFactory.saveBlog({ BlogId: "36c26d7d-73f6-498d-bc42-ba2382477700", Name: "Update from UI 1", Posts: [{ Title: "Post from UI" }] });
    };
});
var product = new product_1.default(1, "Car");
alert(product.getProductName());


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

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


/***/ })

},[3]);
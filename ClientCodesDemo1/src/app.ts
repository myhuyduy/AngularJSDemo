import * as angular from 'angular';
import 'angular-resource';
import 'angular-route';
import Product from './main/product';

var mainApp = angular.module("mainApp", ["ngRoute", "ngResource"]);

mainApp.config(['$routeProvider', ($routeProvider) => {
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

mainApp.factory("UserService", (): any => {
    var users = ["Peter", "Daniel", "Nina"];
    return {
        all: (): any => {
            return users;
        },

        first: (): any => {
            return users[0];
        }
    };
});

mainApp.factory("UserServiceTest", () : any => {
    var users = ["Peter1", "Daniel2", "Nina3"];
    return {
        all: (): any => {
            return users;
        },

        first: (): any => {
            return users[0];
        }
    };
});

mainApp.service("blogService",
    function ($http) {
        this.get = (): any => {
            return $http.get("http://cphamltw7/WebApiDemo/api/user");
        };
    });

mainApp.factory("blogServiceFactory", ($http): any => {
    var dataFactory =
    {
        getBlog: (): any => {
            return $http.get("http://cphamltw7/WebApiDemo/api/user");
            },

        saveBlog: (blog: string): any => {
            return $http.post("http://cphamltw7/WebApiDemo/api/user", blog);
        }
    };

    return dataFactory;
});

mainApp.controller("MyCtrl", ($scope, UserService, UserServiceTest) => {
    $scope.name = UserService.first();
    $scope.password = "";

    $scope.visible = false;
    $scope.book = {
        name: "Book Test",
        author: "Author test"
    };

    $scope.getAlert = () => {
        alert($scope.name + " - " + UserService.first() + " - " + UserServiceTest.first());
        $scope.visible = true;
    };

    $scope.$watch("book.name", (newvalue, oldValue) => {
        if (newvalue !== oldValue) {
            alert("New Value: " + newvalue);
            alert("Old Value: " + oldValue);
        }

    });
});

mainApp.controller("Navigation", ($scope) => {
    $scope.getAlert = () => {
        alert('got me');
    };
});

mainApp.controller("AddUser1Controller", ($scope) => {
    $scope.message = "Add User 1";
});

mainApp.controller("AddUser2Controller", ($scope) => {
    $scope.message = "Add User 2";
});

mainApp.controller("BlogController", ($scope, blogServiceFactory) => {
    $scope.blogs;
    $scope.status;

    getBlogs();

    function getBlogs() {
        blogServiceFactory.getBlog()
            .then((response) => {
                $scope.blogs = response.data;
            }, (error) => {
                $scope.status = 'Unable to load blog data: ' + error.message;
            });
    }

    $scope.save = () => {
        blogServiceFactory.saveBlog({ BlogId: "36c26d7d-73f6-498d-bc42-ba2382477700", Name: "Update from UI 1", Posts: [{ Title: "Post from UI" }] });
    };
});
const product: Product = new Product(1, "Car");

alert(product.getProductName());
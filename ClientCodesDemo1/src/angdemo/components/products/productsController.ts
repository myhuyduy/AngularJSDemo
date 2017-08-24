import { IController, IOnChangesObject, Injectable } from 'angular';

export default class ProductsController implements IController {
    private http: Injectable<any>;
    private products: any;

    static $inject = ["$http"];

    constructor($http: Injectable<any>) {
        this.http = $http;
    }

    private getProducts = (): any => {
        return this.http.get("http://localhost:9000/api/product");
    }

    public $onInit = () => {
        this.getProducts()
            .then((response) => {
                this.products = response.data;
            }), (error) => {
            alert(error.message);
        }
    }

    //$onChanges = (onChangesObj: IOnChangesObject) => {
    //    alert('onChanges');
    //    if (onChangesObj.fullName) {
    //        alert(onChangesObj.fullName.currentValue);
    //    }

    //    if (onChangesObj.testObject) {
    //        alert(onChangesObj.testObject.currentValue.description);
    //    }
    //};
}
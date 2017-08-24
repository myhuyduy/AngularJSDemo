import { IComponentOptions, IController, IControllerConstructor } from 'angular';
declare var require: (filename: string) => any;
import ProductsController from './productsController';

export default class ProductsComponent implements IComponentOptions {
    template: string = require("./productsView.html");
    controller: any = ProductsController;
    bindings: any = {
        item: '<'
    }
}
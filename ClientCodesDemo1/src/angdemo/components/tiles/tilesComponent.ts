import { IComponentOptions, IController, IControllerConstructor } from 'angular';
declare var require: (filename: string) => any;
import TilesController from './tilesController';

export default class TilesComponent implements IComponentOptions {
    template: string = require("./tilesView.html");
    controller: any = TilesController;
    bindings: any = {
        item: '<'
    }
}
import { IComponentOptions, IController, IControllerConstructor } from 'angular';
declare var require: (filename: string) => any;
import HelloController from './helloController';

export default class HelloWorldComponent implements IComponentOptions {
    template: string = require("./hello.html");
    controller: any = HelloController;
    bindings: any =  {
        fullName: '@',
        testObject: '<'
    }
}
import { IController, IOnChangesObject } from 'angular';

export default class HelloController implements IController {
    state: string;
    name: string;
    fullName: string;
    testObject: any;

    $onInit = () => {
        //alert('onInit');
        this.state = 'Not loaded';
        this.name = 'Chau Pham';
    };

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
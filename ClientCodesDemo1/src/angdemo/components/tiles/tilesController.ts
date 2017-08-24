import { IController, IOnChangesObject } from 'angular';
import Title from './tile';

export default class TilesController implements IController {
    item: Title;

    ////$onInit = () => {
    ////    alert(this.item);
    ////};

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
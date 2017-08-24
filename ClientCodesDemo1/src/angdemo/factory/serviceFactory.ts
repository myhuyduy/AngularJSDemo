export default class ServiceFactory {

    constructor(private $http: any) {      
    }

    getProducts = (): any => {
        return this.$http.get("http://localhost:9000/api/product/");
    }
   
}
export default class Product {
    constructor(private productId: number, private productName: string) {
    }

    getProductName = () : string => {
        return this.productName;
    }
}
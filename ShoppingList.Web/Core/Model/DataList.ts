module ShoppingList.Model {
    export class DataList {
        public name: KnockoutObservable<string> = ko.observable("");
        public products: KnockoutObservableArray<DataProduct> =
        ko.observableArray<DataProduct>();

        constructor(name: string) {
            this.name(name);
        }
    }
}
module ShoppingList.Model {
    export class DataProduct {
        public name: KnockoutObservable<string> = ko.observable("");
        public amount: KnockoutObservable<string> = ko.observable("");
        public bought: KnockoutObservable<boolean> = ko.observable(false);

        constructor(name: string, amount: string, bought: boolean) {
            this.name(name);
            this.amount(amount);
            this.bought(bought);
        }
    }
}
module ShoppingList.ViewModel {
    export class AddProductViewModel extends ViewModelBase {
        // Properties
        public name = ko.observable<string>();
        public amount = ko.observable<string>();
        public selectedList = ko.observable<Model.DataList>();

        // Actions
        public addProduct(): void {
            var product = new ShoppingList.Model.DataProduct(
                this.name(), this.amount(), false);

            this.selectedList().products.push(product);

            this.name("");
            this.amount("");

            Services.ServiceLocator.NavigationService.
                navigateBack("AddProductView");
        }

        // Message actions
        private selectedListChangedMessageAction(list: Model.DataList): void {
            this.selectedList(list);
        }

        // constructor
        constructor() {
            super();

            Services.ServiceLocator.MessagingService.register(
                Services.Messaging.MessagingToken.SelectedListChanged,
                this.selectedListChangedMessageAction);
        }
    }
}
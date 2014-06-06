module ShoppingList.ViewModel {
    export class ProductsViewModel extends ViewModelBase {

        // Properties
        public selectedList = ko.observable<Model.DataList>();

        // Actions
        public buyProduct(product: Model.DataProduct) {
            product.bought(!product.bought());
        }

        public addProduct() {
            Services.ServiceLocator.NavigationService.
                navigateTo("AddProductView");
        }

        public cleanup() {
            Services.ServiceLocator.NotificationService.showMessageBox(
                "Cleanup", "Remove all bought products?", (result) => {
                    if (result == Services.MessageBoxResult.Ok) {
                        var products = this.selectedList().products;

                        for (var p = 0; p < products().length; p++) {
                            if (products()[p].bought()) {
                                products.splice(p, 1);
                                p--;
                            }
                        }
                    }
                });
        }

        // Message actions
        private selectedListChangedMessageAction(list: Model.DataList) {
            this.selectedList(list);
        }

        //Constructor
        constructor() {
            super();
            Services.ServiceLocator.MessagingService.register(
                Services.Messaging.MessagingToken.SelectedListChanged,
                this.selectedListChangedMessageAction);
        }
    }
}
module ShoppingList {
    export class AppBase {
        public initialize() {
            this.registerCommonServices();
            this.registerServices();

            var views = ["Lists", "Products", "AddProduct"];
            this.applyBindings(views);
        }

        public registerCommonServices(): void {
            ShoppingList.Services.ServiceLocator.MessagingService =
            new ShoppingList.Services.Messaging.MessagingService();
        }

        public registerServices(): void {
        }

        public applyBindings(names: Array<string>): void {
            var outstanding = names.length;

            ViewModel.ViewModelLocator.initialize();

            for (var i in names) {
                var viewContainer = $("div[data-view = '" +
                    names[i] + "View']")[0];
                var viewModel = ShoppingList.ViewModel.
                    ViewModelLocator[names[i] + "ViewModel"];
                ko.applyBindings(viewModel, viewContainer);
            }

            var model: Model.IDataModel = new Model.DataModel;

            Services.ServiceLocator.MessagingService.publish(
                Services.Messaging.MessagingToken.ListsChanged, model.lists);
        }
    }
}
module ShoppingList.ViewModel {
    export class ListsViewModel extends ViewModelBase {
        // Properties
        public lists = ko.observable<Array<Model.DataList>>();
        public selectedList = ko.observable<Model.DataList>();

        // Actions
        public selectList(list: Model.DataList) {
            Services.ServiceLocator.MessagingService.publish(
                Services.Messaging.MessagingToken.SelectedListChanged, list);

            Services.ServiceLocator.NavigationService.
                navigateTo("ProductsView");
        }

        // Message actions
        private listsChangedMessageAction(lists: Array<Model.DataList>) {
            this.lists(lists);
        }

        private selectedListChangedMessageAction(list: Model.DataList) {
            this.selectedList(list);
        }

        // Constructor
        constructor() {
            super();

            Services.ServiceLocator.MessagingService.register(
                Services.Messaging.MessagingToken.ListsChanged,
                this.listsChangedMessageAction);

            Services.ServiceLocator.MessagingService.register(
                Services.Messaging.MessagingToken.SelectedListChanged,
                this.selectedListChangedMessageAction);
        }
    }
}
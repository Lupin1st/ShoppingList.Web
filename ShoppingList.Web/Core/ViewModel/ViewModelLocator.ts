module ShoppingList.ViewModel {
    export class ViewModelLocator {
        public static ListsViewModel: ListsViewModel;
        public static ProductsViewModel: ProductsViewModel;
        public static AddProductViewModel: AddProductViewModel;

        public static initialize() {
            ViewModelLocator.ListsViewModel = new ListsViewModel();
            ViewModelLocator.ProductsViewModel = new ProductsViewModel();
            ViewModelLocator.AddProductViewModel = new AddProductViewModel();
        }
    }
}
module ShoppingList.Tests {
test("AddProductTest", ()=> {
    ShoppingList.Services.ServiceLocator.MessagingService =
    new ShoppingList.Services.Messaging.MessagingService();
    var navigationService = new Services.NavigationServiceTest();
    navigationService.NavigationStack = ["addProductView"];

    ShoppingList.Services.ServiceLocator.NavigationService =
    navigationService;

    var addProductViewModel =
        new ShoppingList.ViewModel.AddProductViewModel();

    var list1 = new Model.DataList("ListTest");
    list1.products.push(
        new Model.DataProduct("TestProduct1", "1", false));

    ShoppingList.Services.ServiceLocator.MessagingService.publish(
        ShoppingList.Services.Messaging.MessagingToken.SelectedListChanged, list1);

    addProductViewModel.name("TestProduct2");
    addProductViewModel.amount("2");

    addProductViewModel.addProduct();

    QUnit.ok(list1.products().length == 2);
    QUnit.ok(list1.products()[1].name() == "TestProduct2");
    QUnit.ok(list1.products()[1].amount() == "2");

    QUnit.ok(navigationService.NavigationStack.length == 0);
});
}
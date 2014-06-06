module ShoppingList {
    export class AppMobile extends AppBase {
        public registerServices(): void {
            ShoppingList.Services.ServiceLocator.NavigationService =
            new ShoppingList.Services.NavigationServiceJQueryMobile();
            ShoppingList.Services.ServiceLocator.NotificationService =
            new ShoppingList.Services.NotificationServiceJQueryMobile();
        }
    }
}
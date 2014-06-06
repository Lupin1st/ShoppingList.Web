module ShoppingList {
    export class AppDesktop extends AppBase {
        public registerServices(): void {
            ShoppingList.Services.ServiceLocator.NavigationService =
            new ShoppingList.Services.NavigationServiceJQueryUi();
            ShoppingList.Services.ServiceLocator.NotificationService =
            new ShoppingList.Services.NotificationServiceJQueryUi();
        }
    }
} 
module ShoppingList.Services {
    export class ServiceLocator {
        public static MessagingService: Services.Messaging.IMessagingService;

        public static NavigationService: Services.INavigationService;

        public static NotificationService: Services.INotificationService;
    }
}
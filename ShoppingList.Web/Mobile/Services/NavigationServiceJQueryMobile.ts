module ShoppingList.Services {
    export class NavigationServiceJQueryMobile implements INavigationService {
        navigateTo(containerId: string): void {
            $.mobile.navigate("#" + containerId);
        }

        navigateBack(containerId: string): void {
            window.history.back();
        }
    }
}
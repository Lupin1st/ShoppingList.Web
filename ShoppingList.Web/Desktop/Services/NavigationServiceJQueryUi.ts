module ShoppingList.Services {
    export class NavigationServiceJQueryUi implements INavigationService {
        navigateTo(containerId: string): void {
            $("#" + containerId).dialog();
        }

        navigateBack(containerId: string): void {
            $("#" + containerId).dialog("close");
        }
    }
}
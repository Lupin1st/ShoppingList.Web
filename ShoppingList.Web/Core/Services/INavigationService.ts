module ShoppingList.Services {
    export interface INavigationService {
        navigateTo(containerId: string): void;
        navigateBack(containerId: string): void;
    }
}
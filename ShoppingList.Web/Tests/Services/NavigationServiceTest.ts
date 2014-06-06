module ShoppingList.Tests.Services {
    export class NavigationServiceTest implements ShoppingList.Services.INavigationService {
        private _navigationStack: Array<string>;
        get NavigationStack() { return this._navigationStack; }
        set NavigationStack(value) { this._navigationStack = value; }

        navigateTo(containerId: string): void {
            this._navigationStack.push(containerId);
        }

        navigateBack(containerId: string): void {
            this._navigationStack.pop();
        }
    }
}
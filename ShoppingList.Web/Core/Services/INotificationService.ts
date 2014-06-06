module ShoppingList.Services {

    export interface MessageBoxFinishedCallback {
        (result: MessageBoxResult): void;
    }

    export enum MessageBoxResult { Ok, Cancel }

    export interface INotificationService {
        showMessageBox(title: string, content: string,
            callback: MessageBoxFinishedCallback): void;
    }
}
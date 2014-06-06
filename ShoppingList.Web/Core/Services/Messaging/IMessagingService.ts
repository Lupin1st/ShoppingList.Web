module ShoppingList.Services.Messaging {
    export interface MessageRecievedCallback {
        (content: any): void;
    }

    export interface IMessagingService {
        register(token: MessagingToken,
            messageRecievedCallback: MessageRecievedCallback): void;

        publish(token: MessagingToken, content: any): void;
    }
}
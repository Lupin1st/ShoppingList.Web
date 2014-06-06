module ShoppingList.Services.Messaging {
    export class MessagingService implements IMessagingService {
        private _recievers: Map<MessagingToken, Map<MessageRecievedCallback, any>>;

        public register(token: MessagingToken, messageRecievedCallback: MessageRecievedCallback): void {
            if (!this._recievers.has(token))
                this._recievers.set(token, new Map<MessageRecievedCallback, any>())

                if (!this._recievers.get(token).has(messageRecievedCallback))
                this._recievers.get(token).set(messageRecievedCallback, null);
        }

        public publish(token: MessagingToken, content: any): void {
            if (!this._recievers.has(token))
                return;

            var recievers = this._recievers.get(token);
            recievers.forEach((unused, callback) => {
                callback(content);
            });
        }

        public constructor() {
            this._recievers = new Map<MessagingToken, Map<MessageRecievedCallback, any>>();
        }
    }
}
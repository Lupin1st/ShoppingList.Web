module ShoppingList.Services {
    export class NotificationServiceJQueryMobile implements INotificationService {
        showMessageBox(title: string, content: string,
            callback: MessageBoxFinishedCallback): void {
            $("#MessageBox [data-field=HeaderContent]").html(title);
            $("#MessageBox [data-field=BodyContent]").html(content);

            $("#MessageBox [data-button=ButtonOk]").unbind('click');
            $("#MessageBox [data-button=ButtonOk]").click(() => {
                callback(MessageBoxResult.Ok);
                window.history.back();
            });

            $("#MessageBox [data-button=ButtonCancel]").unbind('click');
            $("#MessageBox [data-button=ButtonCancel]").click(() => {
                callback(MessageBoxResult.Cancel);
                window.history.back();
            });

            $.mobile.navigate("#MessageBox");
        }
    }
}
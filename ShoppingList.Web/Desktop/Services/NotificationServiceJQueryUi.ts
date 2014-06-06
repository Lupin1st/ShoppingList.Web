module ShoppingList.Services {
    export class NotificationServiceJQueryUi implements INotificationService {
        showMessageBox(title: string, content: string,
            callback: MessageBoxFinishedCallback): void {

            $("#messageBox").attr("title", title);
            $("#messageBox #messageBoxContent").html(content);

            $("#messageBox").dialog({
                resizable: false, height: 250, modal: true,
                buttons: {
                    "Ok": function () {
                        callback(MessageBoxResult.Ok);
                        $(this).dialog("close");
                    },
                    Cancel: function () {
                        callback(MessageBoxResult.Cancel);
                        $(this).dialog("close");
                    }
                }
            });
        }
    }
}
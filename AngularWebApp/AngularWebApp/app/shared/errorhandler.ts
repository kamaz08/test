import { ErrorHandler, Component } from '@angular/core';
import { MdDialog } from '@angular/material';

export default class AppErrorHandler extends ErrorHandler {

    constructor() {
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an error happens. If we do not rethrow, bootstrap will always succeed.
        super(true);
    }

    handleError(error: any) {
        alert(error);
        super.handleError(error);
    }
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog { }
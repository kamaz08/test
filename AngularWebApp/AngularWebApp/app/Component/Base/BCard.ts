import { Component, Input } from '@angular/core';

import { BCardProperty } from './BCardProperty';

@Component({
    selector: 'BCard',
    templateUrl: 'app/Component/Base/bcard.html',
    styleUrls: ['app/Component/Base/bcard.css'],
})
export class BCard {
    @Input() bcardProperty: BCardProperty = null;
}
import { NgModule } from '@angular/core';

import { AmyappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AmyappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AmyappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AmyappSharedCommonModule {}

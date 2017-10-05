import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

import { AppRoutes } from './app.routing';
import { MinValidatorDirective } from './min-validator.directive';
import { MaxValidatorDirective } from './max-validator.directive';

@NgModule({
    imports:      [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule

    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        MinValidatorDirective,
        MaxValidatorDirective
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

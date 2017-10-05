import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';

import { AnalysisComponent } from './analysis.component';
import { AnalysisRoutes } from './analysis.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AnalysisRoutes),
        FormsModule,
        MdModule
    ],
    declarations: [AnalysisComponent]
})

export class AnalysisModule {}

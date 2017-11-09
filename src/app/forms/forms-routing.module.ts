import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {ModelDrivenComponent} from "./model-driven/model-driven.component";

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }, {
      path: 'template-forms',
      component: TemplateDrivenComponent
    }, {
      path: 'model-forms',
      component: ModelDrivenComponent
    }]),
    FormsModule,
    CommonModule
  ],
  declarations: [TemplateDrivenComponent, ModelDrivenComponent],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InterfaceTestComponent } from './interface-test/interface-test.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    }, {
      path: 'interface-test',
      component: InterfaceTestComponent
    }]),
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [InterfaceTestComponent],
  exports: [RouterModule]
})
export class InterfaceRoutingModule { }

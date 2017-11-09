import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReduxExampleComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      redirectTo: '/redux',
      pathMatch: 'full'
    },{
      path: 'redux',
      component: ReduxExampleComponent,
    }])
  ],
  declarations: [ReduxExampleComponent],
  exports: [RouterModule]
})
export class ReduxRoutingModule { }

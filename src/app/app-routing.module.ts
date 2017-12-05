import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReduxRoutingModule } from './redux/redux-routing.module';
import { AppComponent } from './app.component';
import { FormsRoutingModule } from './forms/forms-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout.component';
import { InterfaceRoutingModule } from './interface/interface-routing.module';

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: 'home',
      component: AppComponent
    }, {
      path: '', redirectTo: 'home', pathMatch: 'full'
    }]),
    ReduxRoutingModule,
    FormsRoutingModule,
    InterfaceRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    LayoutComponent
  ],
  exports: [
    RouterModule,
    HeaderComponent,
    NavBarComponent,
    LayoutComponent
  ]
})
export class AppRoutingModule { }

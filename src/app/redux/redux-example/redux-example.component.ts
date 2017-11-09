import { Component } from '@angular/core';
import { NgRedux } from "ng2-redux";
import {IAppState} from "../store";
import { INCREMENT } from "../index";

@Component({
  selector: 'app-redux-example',
  templateUrl: './redux-example.component.html',
  styleUrls: ['./redux-example.component.css']
})
export class ReduxExampleComponent {
  title: string = 'Lets start with redux';
  counter: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}

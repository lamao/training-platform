import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserInterface } from '../user-interface';

@Component({
  selector: 'app-interface-test',
  templateUrl: './interface-test.component.html',
  styleUrls: ['./interface-test.component.scss']
})

export class InterfaceTestComponent implements OnInit {
  user_list: UserInterface[] = [];
  user_form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  addUser(form) {
    var ctrl = form.controls;
    this.user_list.push({
      name: ctrl.name.value,
      surname: ctrl.surname.value,
      age: ctrl.age.value
    });
    this.initForm();
  }

  clearUserList() {
    this.user_list = [];
  }

  initForm() {
    this.user_form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      age: new FormControl()
    });
  }
}

import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {User} from '../user.model';
import {NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-template-driven',
  templateUrl: 'template-driven.component.html',
  styleUrls: ['../../../../node_modules/bootstrap/dist/css/bootstrap.css',
              '../forms.scss',
              'template-driven.component.scss']
})

export class TemplateDrivenComponent implements OnInit, AfterViewInit {

  model: User = new User(0, '', '', 0);
  roles: string[] = ['Admin', 'User', 'Guest'];
  submitted: boolean = false;

  formErrors = {
    age: ''
  };

  validationMessages = {
    age: {
      required: 'This field is required',
      maxlength: 'Sorry, too big age, check it one more time'
    }
  };

  constructor() { }

  /* decorator ViewChild is used to get access to component and its methods */
  @ViewChild('userForm') userForm: NgForm;

  ngOnInit() { }

  ngAfterViewInit() {
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  /* bad example */
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    let form = this.userForm.form;

    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);
      console.log(control)

      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];
        for(let key in control.errors) {
          this.formErrors[field] += message[key] + " ";
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }
}

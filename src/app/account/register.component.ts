import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  validationMessage = {
    'email':{
      'required' : 'Username / Email required'
    },
    'password':{
      'required' : 'Password required'
    }
  };

  formErrors = {
    'email': '',
    'password': ''
  };

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void{
    console.log(this.loginForm.value);
  }
}

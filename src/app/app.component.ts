import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  submittedSignup = false;

  title = 'Angular_Materials_v1';

  constructor (private fb:FormBuilder) {}

  hide = true;
  signuphide = true;
  loginForm = this.fb.group({
    Email:['',[Validators.required,Validators.email]],
    Password:['',Validators.required]
  })

  onSubmit(values:any) {
    this.submitted = true;
    console.log({values})
  }

  onSubmitSignup(values:any) {
    this.submittedSignup = true;
    console.log({values})
  }

  get AllControls() {
    return this.loginForm.controls;
  }

  get AllSignupControls() {
    return this.signupForm.controls;
  }

  signupForm:any = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    age:[null,[Validators.required,Validators.min(0),Validators.max(100)]],
    gender:['',[Validators.required]],
    DOB:['',[Validators.required]],
    role:[null,[Validators.required]],
    password1:['',[Validators.required]],
    password2:['',[Validators.required]],
  },{
    validator: () => {
      
      if ( (this.signupForm?.controls?.['password1'].value) != (this.signupForm?.controls?.['password2'].value) ) {
        console.log('hello');  
        console.log('Inside condition')
        this.signupForm?.controls?.['password2'].setErrors({passwordMismatch:true})
      }
    }
  })

  passwordConfirming() {

  }

  roles:any = [
    {id:1,name:'Manager'},
    {id:2,name:'HR'},
    {id:3,name:'CEO'},
    {id:4,name:'Tech Lead'},
    {id:5,name:'Client'}
  ];
}

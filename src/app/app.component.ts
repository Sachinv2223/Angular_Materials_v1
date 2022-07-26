import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  title = 'Angular_Materials_v1';

  constructor (private fb:FormBuilder) {}

  hide = true;
  loginForm = this.fb.group({
    Email:['',[Validators.required,Validators.email]],
    Password:['',Validators.required]
  })

  onSubmit(values:any) {
    this.submitted = true;
    console.log({values})
  }

  get AllControls() {
    return this.loginForm.controls;
  }

  
}

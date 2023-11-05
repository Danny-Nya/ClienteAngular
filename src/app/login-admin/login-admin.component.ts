import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{

  userForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder){

    this.userForm = this.formBuilder.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }



  ngOnInit(){}

  onSubmit(){

    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(userData)

  }

}
}

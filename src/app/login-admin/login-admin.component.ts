import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenAuthService } from '../autenticacionYRegistro/token-auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{

  userForm: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder, private tokenService: TokenAuthService){

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  ngOnInit(){}

  onSubmit(){

    let jwtToken = null;

    if (this.userForm.valid) {
      const { username, password } = this.userForm.value;
      console.log(username + password)
      this.tokenService.createAdminToken(username, password).subscribe(
        (response) => {
          console.log('se creo el token')
          jwtToken = response.token;
          console.log('Token received:', response.token); // Print the token to the console

          localStorage.setItem('jwtToken', jwtToken);},
          (error) => {
            console.error('error fetching data:')
            console.error('Status:', error.status);
            console.error('Status Text:', error.statusText);
            console.error('Error Response:', error.error);
            console.error('Error Response:', error.message);

            });

}
}}

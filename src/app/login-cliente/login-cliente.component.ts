import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenAuthService } from '../token-auth.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  userForm: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder, private tokenService: TokenAuthService){

    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  ngOnInit(): void {}

  onSubmit(){

    if (this.userForm.valid) {
      const { username, password } = this.userForm.value;
      console.log(username + password)
      this.tokenService.createToken(username, password).subscribe(
        (response) => {
          console.log('se creo el token')
          this.router.navigate([''])
        },
        (error) => {
        console.error('error fetching data:')
        console.error('Status:', error.status);
        console.error('Status Text:', error.statusText);
        console.error('Error Response:', error.error);
        console.error('Error Response:', error.message);

        }
      );
    }

  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();


}


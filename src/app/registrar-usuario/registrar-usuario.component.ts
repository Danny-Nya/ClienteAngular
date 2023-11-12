import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  userForm: FormGroup;

  showRegistrarUsuario: boolean = true

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router){
    this.userForm = this.formBuilder.group({
      nombre:['',Validators.required],
      correo:['',Validators.compose([Validators.required,Validators.email])],
      contrasena:['',Validators.required],
      nombrePerfil:['',Validators.required]

    });
  }
  ngOnInit(){}

   onSubmit(){

    if (this.userForm.valid) {
      const userData = this.userForm.value;
      console.log(userData)
      this.usuarioService.save(userData).subscribe(
        (response) => {
          console.log('se agrego en usuario')
          this.router.navigate([''])
        },
        (error) => {
        console.error('error fetching data')
        }
      );
    }
  }

}



import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: [
  ]
})
export class UserCreateComponent implements OnInit {

  bandera!: boolean;
  user!: User;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router
             ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    correo: ['',[Validators.required]],
    celular: ['',[Validators.required]],

  })

  createUser() {
    this.bandera= true;
    setTimeout(() => {
      console.log(this.miFormulario.value);
    const {nombre, apellido, correo, celular} = this.miFormulario.value;
    this.userService.createUser(nombre, apellido, correo, celular )
      .subscribe(resp => {
        this.user = resp;
        this.bandera = false;
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new user has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('usuarios/user-read')
      })
    }, 2500);
    
        
  }

}

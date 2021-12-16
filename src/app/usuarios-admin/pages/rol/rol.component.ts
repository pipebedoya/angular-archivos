import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Rol } from '../../interfaces/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styles: [
  ]
})
export class RolComponent implements OnInit {

  id!: number;
  selectedRol!: Rol;
  rol: Rol[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private userService: UserService,
               private fb: FormBuilder,
               private router: Router ) { 
                 
               }

  ngOnInit(): void {
   
    this.userService.getRol()
      .subscribe( (roles) => {
        this.rol = roles;
        console.log('hablame',this.rol);
      })
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.userService.getUserById(id) )
      )
      .subscribe( usuario => {
        this.id = usuario.id
        console.log(usuario.id);})
  }

  miFormulario: FormGroup = this.fb.group({
    rol:['',Validators.required]
  })

  asignar(){
    //console.log('formulario',this.miFormulario.value.rol);
    //console.log(this.id);
    const rolsito: number = +this.miFormulario.value.rol
    const idU = this.id
    //console.log('rolsito',rolsito);
    return this.userService.createUserxRol(rolsito,idU)
      
      .subscribe( resp => { 
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'You add a new Rol',
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(() => {
          this.router.navigateByUrl('/usuarios/user-read');
        }, 1500);
       })
  }

  

}

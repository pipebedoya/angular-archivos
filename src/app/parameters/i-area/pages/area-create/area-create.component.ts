import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styles: [
  ]
})
export class AreaCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private areaService: AreaService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createArea(){
    const {nombre}=this.miFormulario.value;
    this.areaService.createArea(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new Area has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/investigation/rea-read')
      })
  }

}

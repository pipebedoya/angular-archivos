import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DepartamentService } from '../../services/departament.service';
import { FacultyService } from 'src/app/parameters/faculty/services/faculty.service';
import { Faculty } from '../../../faculty/interfaces/faculty.interface';

@Component({
  selector: 'app-departament-create',
  templateUrl: './departament-create.component.html',
  styles: [
  ]
})
export class DepartamentCreateComponent implements OnInit {

  faculty:Faculty[]=[] 

  constructor( private fb: FormBuilder,
               private departamentService: DepartamentService,
               private facultyService: FacultyService,
               private router: Router ) { }

  ngOnInit(): void {
    this.facultyService.getFaculty()
      .subscribe( faculties => {
        console.log(faculties);
        this.faculty = faculties
      })
  }


  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    idfacultad:['',[Validators.required]]
  })
  

  createDepartament(){
    const {nombre}=this.miFormulario.value;
    const facultad: number = +this.miFormulario.value.idfacultad;
    this.departamentService.createDepartament(nombre,facultad)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new Departament has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/departaments/departament-read')
      })
  }

  

}

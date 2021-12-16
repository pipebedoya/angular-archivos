import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from '../../services/faculty.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-create',
  templateUrl: './faculty-create.component.html',
  styles: [
  ]
})
export class FacultyCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private facultyService: FacultyService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createFaculty(){
    const {nombre}=this.miFormulario.value;
    this.facultyService.createFaculty(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new faculty has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/faculties/faculty-read')
      })
  }

}

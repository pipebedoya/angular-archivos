import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FacultyService } from 'src/app/parameters/faculty/services/faculty.service';
import Swal from 'sweetalert2';
import { DepartamentService } from '../../services/departament.service';
import { Faculty } from '../../../faculty/interfaces/faculty.interface';
import { Departament } from '../../interfaces/departament.interface';

@Component({
  selector: 'app-departament-update',
  templateUrl: './departament-update.component.html',
  styles: [
  ]
})
export class DepartamentUpdateComponent implements OnInit {

  faculty:Faculty[]=[];
  departament!: Departament

  constructor( private fb: FormBuilder,
               private router: Router,
               private departamentService: DepartamentService,
               private facultyService: FacultyService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.departamentService.getDepartamentById(id))
      )
      .subscribe( departaments => {
        console.log('que me traes',departaments);
        this.miFormulario.patchValue(departaments)
      }),

      this.facultyService.getFaculty()
      .subscribe( faculties => {
        console.log(faculties);
        this.faculty = faculties
      })
  }

  miFormulario: FormGroup = this.fb.group({
    id:[],
    nombre:[],
    id_facultad:[],
    idfacultad:this.fb.group({
      id:[],
      nombre:[{value:'',disabled:true}]
    }),
    facultad: []
  });


  updateDepartament(){
    /* console.log(this.miFormulario.value);
    console.log('que nombre',this.miFormulario.value.nombre);
    console.log('que id',this.miFormulario.value.id);
    console.log('que facultad',this.miFormulario.value.facultad); */

    const formData = this.miFormulario.getRawValue();
    console.log('formulario Objeto',formData);

    /* const nombre = this.miFormulario.value.nombre
    const id = this.miFormulario.value.id;
    const id_facultad: number = +this.miFormulario.value.facultad */
      this.departamentService.updateDepartaments({
        nombre: formData.nombre, 
        id: formData.id,
        id_facultad: parseInt(formData.id_facultad)
      })
        .subscribe( Departament => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'Departament has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/departaments/Departament-read')
        })
  }
}

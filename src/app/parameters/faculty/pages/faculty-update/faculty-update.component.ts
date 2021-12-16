import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyService } from '../../services/faculty.service';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-faculty-update',
  templateUrl: './faculty-update.component.html',
  styles: [
  ]
})
export class FacultyUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private facultyService: FacultyService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.facultyService.getFacultyById(id))
      )
      .subscribe( faculties => {
        console.log(faculties);
        this.miFormulario.setValue(faculties)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    id:['',[Validators.required]]
  })

  updateFaculty(){
    const faculty = this.miFormulario.value
      this.facultyService.updateFaculty(faculty)
        .subscribe( faculty => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'Faculty has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/faculties/faculty-read')
        })
  }
}

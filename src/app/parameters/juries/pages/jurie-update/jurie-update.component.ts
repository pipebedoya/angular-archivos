import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { JurieService } from '../../services/jurie.service';

@Component({
  selector: 'app-jurie-update',
  templateUrl: './jurie-update.component.html',
  styles: [
  ]
})
export class JurieUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private jurieService: JurieService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.jurieService.getJurieById(id))
      )
      .subscribe( faculties => {
        console.log(faculties);
        this.miFormulario.setValue(faculties)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    id:['',[Validators.required]],
    nombre:['',[Validators.required,Validators.minLength(3)]],
    celular:['',[Validators.required,Validators.minLength(3)]],
    correo:['',[Validators.required,Validators.minLength(3)]],
    entidad:['',[Validators.required,Validators.minLength(3)]],
  })

  updateJurie(){
    const Jurie = this.miFormulario.value
      this.jurieService.updateJurie(Jurie)
        .subscribe( Jurie => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'Jurie has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/juries/jurie-read')
        })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ModalityService } from '../../services/modality.service';

@Component({
  selector: 'app-modality-update',
  templateUrl: './modality-update.component.html',
  styles: [
  ]
})
export class ModalityUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private modalityService: ModalityService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.modalityService.getModalityById(id))
      )
      .subscribe( modalities => {
        console.log(modalities);
        this.miFormulario.setValue(modalities)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    id:['',[Validators.required]]
  })

  updateModality(){
    const Modality = this.miFormulario.value
      this.modalityService.updateModality(Modality)
        .subscribe( Modality => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'Modality has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/modalities/modality-read')
        })
  }

}

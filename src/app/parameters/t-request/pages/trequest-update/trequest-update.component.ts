import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TRequestService } from '../../services/t-request.service';

@Component({
  selector: 'app-trequest-update',
  templateUrl: './trequest-update.component.html',
  styles: [
  ]
})
export class TRequestUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private tRequestService: TRequestService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.tRequestService.getTRequestById(id))
      )
      .subscribe( request => {
        console.log(request);
        this.miFormulario.patchValue(request)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    id:['',[Validators.required]]
  })

  updateTRequest(){
    const tRequest = this.miFormulario.value
      this.tRequestService.updateTRequest(tRequest)
        .subscribe( request => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'Type request has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/types-requests/typerequest-read')
        })
  }

}

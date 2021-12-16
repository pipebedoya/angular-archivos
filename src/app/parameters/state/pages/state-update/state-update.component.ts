import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-state-update',
  templateUrl: './state-update.component.html',
  styles: [
  ]
})
export class StateUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private stateService: StateService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.stateService.getStateById(id))
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

  updateState(){
    const State = this.miFormulario.value
      this.stateService.updateState(State)
        .subscribe( State => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'State has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/status/state-read')
        })
  }

}

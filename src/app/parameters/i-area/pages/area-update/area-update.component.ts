import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-update',
  templateUrl: './area-update.component.html',
  styles: [
  ]
})
export class AreaUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private areaService: AreaService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.areaService.getAreaById(id))
      )
      .subscribe( investigation => {
        console.log(investigation);
        this.miFormulario.setValue(investigation)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    id:['',[Validators.required]]
  })

  updateArea(){
    const Area = this.miFormulario.value
      this.areaService.updateArea(Area)
        .subscribe( Area => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'Area has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/investigation/area-read')
        })
  }
}

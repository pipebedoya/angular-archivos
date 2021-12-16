import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CommitteeService } from '../../services/committee.service';

@Component({
  selector: 'app-committee-update',
  templateUrl: './committee-update.component.html',
  styles: [
  ]
})
export class CommitteeUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private committeeService: CommitteeService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.committeeService.getCommitteeById(id))
      )
      .subscribe( committees => {
        console.log(committees);
        this.miFormulario.setValue(committees)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    id:['',[Validators.required]]
  })

  updateCommittee(){
    const committee = this.miFormulario.value
      this.committeeService.updateCommittee(committee)
        .subscribe( committee => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'committee has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/committees/committee-read')
        })
  }

}

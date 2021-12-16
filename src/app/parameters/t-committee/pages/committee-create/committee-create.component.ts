import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommitteeService } from '../../services/committee.service';

@Component({
  selector: 'app-committee-create',
  templateUrl: './committee-create.component.html',
  styles: [
  ]
})
export class CommitteeCreateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private committeeService: CommitteeService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]]
  })

  createCommittee(){
    const {nombre}=this.miFormulario.value;
    this.committeeService.createCommittee(nombre)
      .subscribe( resp =>{
        Swal.fire({
          icon: 'success',
          title: 'Good job!',
          text:'new faculty has been created',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl('/parameters/committees/committee-read')
      })
  }

}

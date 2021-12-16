import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BondingService } from '../../services/bonding.service';

@Component({
  selector: 'app-bonding-update',
  templateUrl: './bonding-update.component.html',
  styles: [
  ]
})
export class BondingUpdateComponent implements OnInit {

  constructor( private fb: FormBuilder,
               private router: Router,
               private bondingService: BondingService,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.bondingService.getBondingById(id))
      )
      .subscribe( bonding => {
        console.log(bonding);
        this.miFormulario.setValue(bonding)
      })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    id:['',[Validators.required]]
  })

  updateBonding(){
    const bonding = this.miFormulario.value
      this.bondingService.updateBonding(bonding)
        .subscribe( bonding => {
          Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text:'bonding has been update',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigateByUrl('/parameters/bonding/bonding-read')
        })
  }

}

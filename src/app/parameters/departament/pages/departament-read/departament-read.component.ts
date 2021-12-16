import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentService } from '../../services/departament.service';
import { Departament } from '../../interfaces/departament.interface';

@Component({
  selector: 'app-departament-read',
  templateUrl: './departament-read.component.html',
  styles: [
  ]
})
export class DepartamentReadComponent implements OnInit {

  departament!: Departament[]

  constructor( private departamentService: DepartamentService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getDepartament()
  }

  getDepartament (){
    this.departamentService.getDepartament()
      .subscribe( departaments => {
        this.departament = departaments
        
      })
  }
}

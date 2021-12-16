import { Component, OnInit } from '@angular/core';
import { Modality } from '../../interfaces/modality.interface';
import { ModalityService } from '../../services/modality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modality-read',
  templateUrl: './modality-read.component.html',
  styles: [
  ]
})
export class ModalityReadComponent implements OnInit {

  modality!: Modality[]

  constructor( private modalityService: ModalityService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getModality()
  }

  getModality (){
    this.modalityService.getModality()
      .subscribe( modalities => {
        this.modality = modalities
        
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { Proponent } from '../../interfaces/proponent.interface';
import { ProponentService } from '../../services/proponent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proponent-read',
  templateUrl: './proponent-read.component.html',
  styles: [
  ]
})
export class ProponentReadComponent implements OnInit {

  loading!: boolean;
  proponent!: Proponent[];

  constructor( private proponentService: ProponentService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getProponent();
  }

  getProponent (){
    this.loading = true
    this.proponentService.getProponent()
      .subscribe( proponents => {
        setTimeout(() => {
          this.loading= false
          this.proponent = proponents
        }, 1200);
        console.log(proponents);
        
      } )
  }
 

}

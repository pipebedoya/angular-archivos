import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jurie } from '../../interfaces/jurie.interface';
import { JurieService } from '../../services/jurie.service';

@Component({
  selector: 'app-jurie-read',
  templateUrl: './jurie-read.component.html',
  styles: [
  ]
})
export class JurieReadComponent implements OnInit {

  jurie!: Jurie[]

  constructor( private jurieService: JurieService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getJurie()
  }

  getJurie (){
    this.jurieService.getJurie()
      .subscribe( juries => {
        this.jurie = juries
        
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area } from '../../interfaces/area.interface';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-area-read',
  templateUrl: './area-read.component.html',
  styles: [
  ]
})
export class AreaReadComponent implements OnInit {

  area!: Area[]

  constructor( private areaService: AreaService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getArea()
  }

  getArea (){
    this.areaService.getArea()
      .subscribe( areas => {
        this.area = areas
        
      })
  }

}

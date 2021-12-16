import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TRequest } from '../../interfaces/t_request.interface';
import { TRequestService } from '../../services/t-request.service';

@Component({
  selector: 'app-trequest-read',
  templateUrl: './trequest-read.component.html',
  styles: [
  ]
})
export class TRequestReadComponent implements OnInit {

  typeRequest!: TRequest[]

  constructor( private tRequestService: TRequestService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getTRequest()
  }

  getTRequest (){
    this.tRequestService.getTRequest()
      .subscribe( typesRequests => {
        this.typeRequest = typesRequests
        
      })
  }

}

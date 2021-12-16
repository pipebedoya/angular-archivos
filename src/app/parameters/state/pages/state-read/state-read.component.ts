import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { State } from '../../interfaces/state.interface';
import { StateService } from '../../services/state.service';
@Component({
  selector: 'app-state-read',
  templateUrl: './state-read.component.html',
  styles: [
  ]
})
export class StateReadComponent implements OnInit {

  state!: State[]

  constructor( private stateService: StateService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getState()
  }

  getState (){
    this.stateService.getState()
      .subscribe( status => {
        this.state = status
        
      })
  }

}

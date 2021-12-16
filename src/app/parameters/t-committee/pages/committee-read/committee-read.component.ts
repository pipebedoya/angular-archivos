import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { committee } from '../../interfaces/committee.interface';
import { CommitteeService } from '../../services/committee.service';

@Component({
  selector: 'app-committee-read',
  templateUrl: './committee-read.component.html',
  styles: [
  ]
})
export class CommitteeReadComponent implements OnInit {

  committee!: committee[]

  constructor( private committeeService: CommitteeService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getCommittee()
  }

  getCommittee (){
    this.committeeService.getCommittee()
      .subscribe( committees => {
        this.committee = committees
        
      })
  }

}

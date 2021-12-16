import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bonding } from '../../interfaces/bonding.interface';
import { BondingService } from '../../services/bonding.service';

@Component({
  selector: 'app-bonding-read',
  templateUrl: './bonding-read.component.html',
  styles: [
  ]
})
export class BondingReadComponent implements OnInit {

  bonding!: Bonding[]

  constructor( private bondingService: BondingService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getBonding()
  }

  getBonding (){
    this.bondingService.getBonding()
      .subscribe( bonding => {
        this.bonding = bonding
        
      })
  }

}

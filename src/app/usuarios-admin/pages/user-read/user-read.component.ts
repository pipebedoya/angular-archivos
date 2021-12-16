import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styles: [
  ]
})
export class UserReadComponent implements OnInit {

  user!: User[];
  loading!:boolean
  constructor( private userService: UserService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser (){
    this.loading=true;
    
    this.userService.getUser()
      .subscribe( usuarios => {
        setTimeout(() => {
          this.user = usuarios
          this.loading=false;
        }, 1200);
      } )
  }
 

}

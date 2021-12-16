import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  get usuario(){
    return this.authService.usuario;
  }

  items: MenuItem[] = [];

  constructor( private router: Router,
              private authService: AuthService ) { }

  ngOnInit(): void {

  }

  get user(){
    return this.authService.usuario;
  }

  logout() {
    
    this.router.navigateByUrl('/auth')
    this.authService.logout();
  }

  

}

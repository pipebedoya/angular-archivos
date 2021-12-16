import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../services/faculty.service';
import { Router } from '@angular/router';
import { Faculty } from '../../interfaces/faculty.interface';


@Component({
  selector: 'app-faculty-read',
  templateUrl: './faculty-read.component.html',
  styles: [
  ]
})
export class FacultyReadComponent implements OnInit {

  faculty!: Faculty[]

  constructor( private facultyService: FacultyService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getFaculty()
  }

  getFaculty (){
    this.facultyService.getFaculty()
      .subscribe( faculties => {
        this.faculty = faculties
        
      })
  }
 

}

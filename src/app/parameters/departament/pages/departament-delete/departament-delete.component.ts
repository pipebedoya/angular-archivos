import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';
import { DepartamentService } from '../../services/departament.service';

@Component({
  selector: 'app-departament-delete',
  templateUrl: './departament-delete.component.html',
  styles: [
  ]
})
export class DepartamentDeleteComponent implements OnInit {

  msgs: Message[] = [];
  position: string = "";
  id!: number;

  constructor( private confirmationService: ConfirmationService, 
              private messageService: MessageService,
              private departamentService: DepartamentService,
              private activatedRoute: ActivatedRoute,
              private router: Router

   ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.departamentService.getDepartamentById(id) )
      )
      .subscribe( Departament => {
        this.id = Departament.id
        //console.log(Departament.id);
      } )
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.departamentService.deleteDepartament(this.id)
            .pipe(
              // tal vez pueda disparar algun efecto
            )
            .subscribe( resp => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              setTimeout(() => {
                
                this.router.navigateByUrl('parameters/departaments/departament-read')
              }, 2000);

            })
                  },
        reject: (type:any) => {
          this.router.navigateByUrl('parameters/departaments/departament-read')
            }
        }
    );
  }
}

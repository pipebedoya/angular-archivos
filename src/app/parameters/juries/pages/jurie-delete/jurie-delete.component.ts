import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';
import { JurieService } from '../../services/jurie.service';

@Component({
  selector: 'app-jurie-delete',
  templateUrl: './jurie-delete.component.html',
  styles: [
  ]
})
export class JurieDeleteComponent implements OnInit {

  msgs: Message[] = [];
  position: string = "";
  id!: number;

  constructor( private confirmationService: ConfirmationService, 
              private messageService: MessageService,
              private jurieService: JurieService,
              private activatedRoute: ActivatedRoute,
              private router: Router

   ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.jurieService.getJurieById(id) )
      )
      .subscribe( Jurie => {
        this.id = Jurie.id
        //console.log(Jurie.id);
      } )
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.jurieService.deleteJurie(this.id)
            .pipe(
              // tal vez pueda disparar algun efecto
            )
            .subscribe( resp => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              setTimeout(() => {
                
                this.router.navigateByUrl('parameters/juries/jurie-read')
              }, 2000);

            })
                  },
        reject: (type:any) => {
          this.router.navigateByUrl('parameters/juries/jurie-read')
            }
        }
    );
  }

}

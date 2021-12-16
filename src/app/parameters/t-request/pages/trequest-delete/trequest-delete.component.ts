import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';
import { TRequestService } from '../../services/t-request.service';

@Component({
  selector: 'app-trequest-delete',
  templateUrl: './trequest-delete.component.html',
  styles: [
  ]
})
export class TRequestDeleteComponent implements OnInit {

  msgs: Message[] = [];
  position: string = "";
  id!: number;

  constructor( private confirmationService: ConfirmationService, 
              private messageService: MessageService,
              private tRequestService: TRequestService,
              private activatedRoute: ActivatedRoute,
              private router: Router

   ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.tRequestService.getTRequestById(id) )
      )
      .subscribe( TRequest => {
        this.id = TRequest.id
        //console.log(TRequest.id);
      } )
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.tRequestService.deleteTRequest(this.id)
            .pipe(
              // tal vez pueda disparar algun efecto
            )
            .subscribe( resp => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              setTimeout(() => {
                
                this.router.navigateByUrl('parameters/types-requests/trequest-read')
              }, 2000);

            })
                  },
        reject: (type:any) => {
          this.router.navigateByUrl('parameters/types-requests/trequest-read')
            }
        }
    );
  }

}

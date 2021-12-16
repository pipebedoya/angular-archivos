import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-state-delete',
  templateUrl: './state-delete.component.html',
  styles: [
  ]
})
export class StateDeleteComponent implements OnInit {

  msgs: Message[] = [];
  position: string = "";
  id!: number;

  constructor( private confirmationService: ConfirmationService, 
              private messageService: MessageService,
              private stateService: StateService,
              private activatedRoute: ActivatedRoute,
              private router: Router

   ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.stateService.getStateById(id) )
      )
      .subscribe( State => {
        this.id = State.id
        //console.log(State.id);
      } )
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.stateService.deleteState(this.id)
            .pipe(
              // tal vez pueda disparar algun efecto
            )
            .subscribe( resp => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              setTimeout(() => {
                
                this.router.navigateByUrl('parameters/status/state-read')
              }, 2000);

            })
                  },
        reject: (type:any) => {
          this.router.navigateByUrl('parameters/status/state-read')
            }
        }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { switchMap } from 'rxjs';
import { ModalityService } from '../../services/modality.service';

@Component({
  selector: 'app-modality-delete',
  templateUrl: './modality-delete.component.html',
  styles: [
  ]
})
export class ModalityDeleteComponent implements OnInit {

  msgs: Message[] = [];
  position: string = "";
  id!: number;

  constructor( private confirmationService: ConfirmationService, 
              private messageService: MessageService,
              private modalityService: ModalityService,
              private activatedRoute: ActivatedRoute,
              private router: Router

   ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.modalityService.getModalityById(id) )
      )
      .subscribe( modality => {
        this.id = modality.id
        //console.log(modality.id);
      } )
  }

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.modalityService.deleteModality(this.id)
            .pipe(
              // tal vez pueda disparar algun efecto
            )
            .subscribe( resp => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              setTimeout(() => {
                
                this.router.navigateByUrl('parameters/modalities/modality-read')
              }, 2000);

            })
                  },
        reject: (type:any) => {
          this.router.navigateByUrl('parameters/modalities/modality-read')
            }
        }
    );
  }

}

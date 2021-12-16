import { Component, OnInit } from '@angular/core';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService, ConfirmEventType} from 'primeng/api';
import {Message} from 'primeng/api';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styles: [
  ],
  providers: [ConfirmationService,MessageService]
})
export class UserDeleteComponent implements OnInit {

  msgs: Message[] = [];
  position: string = "";
  id!: number;
  

  constructor( private confirmationService: ConfirmationService, 
               private messageService: MessageService,
               private userService: UserService,
               private activatedRoute: ActivatedRoute,
               private router: Router
                ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.userService.getUserById(id) )
      )
      .subscribe( usuario => {
        this.id = usuario.id
        console.log(usuario.id);} )
  }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.userService.deleteUser(this.id)
            .pipe(
              // tal vez pueda disparar algun efecto
            )
            .subscribe( resp => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have accepted'});
              setTimeout(() => {
                
                this.router.navigateByUrl('usuarios/user-read')
              }, 2000);

            })
                  },
        reject: (type:any) => {
          this.router.navigateByUrl('usuarios/user-read')
            }
        }
    );
}

  
}



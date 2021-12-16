import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


/* import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
 */
import {DialogModule} from 'primeng/dialog';
import {Dropdown, DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';

import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';

import {RadioButton, RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';

import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
// modulos
import { ConfirmDialog } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    DropdownModule
  ],
  exports:[
    // exportarlos
    CardModule,
    ButtonModule,
    CheckboxModule,
    ConfirmDialogModule,
    ConfirmDialog,
    Dropdown,
    DropdownModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    MenubarModule,
    MessagesModule,
    ProgressSpinnerModule,
    PanelMenuModule,
    RadioButton,
    RadioButtonModule,
    TagModule,
    TableModule,
    ToolbarModule,
    
  ],

  providers:[ ConfirmationService,MessageService ]
  
})
export class PrimeNgModule { }

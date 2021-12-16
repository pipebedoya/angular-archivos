import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalityCreateComponent } from './pages/modality-create/modality-create.component';
import { ModalityDeleteComponent } from './pages/modality-delete/modality-delete.component';
import { ModalityReadComponent } from './pages/modality-read/modality-read.component';
import { ModalityUpdateComponent } from './pages/modality-update/modality-update.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'modality-create', component: ModalityCreateComponent },
      { path:'modality-read', component: ModalityReadComponent },
      { path:'modality-update/:id', component: ModalityUpdateComponent },
      { path:'modality-delete/:id', component: ModalityDeleteComponent },
      { path:'**', redirectTo:'modality-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalityRoutingModule { }

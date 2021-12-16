import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitteeCreateComponent } from './pages/committee-create/committee-create.component';
import { CommitteeReadComponent } from './pages/committee-read/committee-read.component';
import { CommitteeUpdateComponent } from './pages/committee-update/committee-update.component';
import { CommitteeDeleteComponent } from './pages/committee-delete/committee-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'committee-create', component: CommitteeCreateComponent },
      { path:'committee-read', component: CommitteeReadComponent },
      { path:'committee-update/:id', component: CommitteeUpdateComponent },
      { path:'committee-delete/:id', component: CommitteeDeleteComponent },
      { path:'**', redirectTo:'committee-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TCommitteeRoutingModule { }

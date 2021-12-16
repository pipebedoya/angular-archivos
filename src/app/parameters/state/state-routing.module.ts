import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateCreateComponent } from './pages/state-create/state-create.component';
import { StateDeleteComponent } from './pages/state-delete/state-delete.component';
import { StateReadComponent } from './pages/state-read/state-read.component';
import { StateUpdateComponent } from './pages/state-update/state-update.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'state-read', component: StateReadComponent },
      { path:'state-create', component: StateCreateComponent },
      { path:'state-update/:id', component: StateUpdateComponent },
      { path:'state-delete/:id', component: StateDeleteComponent },
      { path:'**', redirectTo:'state-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }

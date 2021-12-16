import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProponentCreateComponent } from './pages/proponent-create/proponent-create.component';
import { ProponentReadComponent } from './pages/proponent-read/proponent-read.component';
import { ProponentUpdateComponent } from './pages/proponent-update/proponent-update.component';
import { ProponentDeleteComponent } from './pages/proponent-delete/proponent-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'proponent-create', component: ProponentCreateComponent },
      { path:'proponent-read', component: ProponentReadComponent },
      { path:'proponent-update/:id', component: ProponentUpdateComponent },
      { path:'proponent-delete/:id', component: ProponentDeleteComponent },
      { path:'**', redirectTo:'proponent-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProponentRoutingModule { }

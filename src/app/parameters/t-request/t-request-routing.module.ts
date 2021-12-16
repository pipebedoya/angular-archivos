import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TRequestCreateComponent } from './pages/trequest-create/trequest-create.component';
import { TRequestReadComponent } from './pages/trequest-read/trequest-read.component';
import { TRequestUpdateComponent } from './pages/trequest-update/trequest-update.component';
import { TRequestDeleteComponent } from './pages/trequest-delete/trequest-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'typerequest-create', component: TRequestCreateComponent },
      { path:'typerequest-read', component: TRequestReadComponent },
      { path:'typerequest-update/:id', component: TRequestUpdateComponent },
      { path:'typerequest-delete/:id', component: TRequestDeleteComponent },
      { path:'**', redirectTo:'typerequest-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TRequestRoutingModule { }

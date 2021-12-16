import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCreateComponent } from './pages/request-create/request-create.component';
import { RequestReadComponent } from './pages/request-read/request-read.component';
import { RequestUpdateComponent } from './pages/request-update/request-update.component';
import { RequestDeleteComponent } from './pages/request-delete/request-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'request-read', component: RequestReadComponent },
      { path:'request-create/:id', component: RequestCreateComponent },
      { path:'request-update/:id', component: RequestUpdateComponent },
      { path:'request-delete/:id', component: RequestDeleteComponent },
      { path:'**', redirectTo:'request-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestRoutingModule { }

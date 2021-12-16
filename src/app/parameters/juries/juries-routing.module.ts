import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/protected/dashboard/dashboard.component';
import { JurieCreateComponent } from './pages/jurie-create/jurie-create.component';
import { JurieDeleteComponent } from './pages/jurie-delete/jurie-delete.component';
import { JurieReadComponent } from './pages/jurie-read/jurie-read.component';
import { JurieUpdateComponent } from './pages/jurie-update/jurie-update.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'jurie-create', component: JurieCreateComponent },
      { path:'jurie-read', component: JurieReadComponent },
      { path:'jurie-update/:id', component: JurieUpdateComponent },
      { path:'jurie-delete/:id', component: JurieDeleteComponent },
      { path:'**', redirectTo:'jurie-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuriesRoutingModule { }

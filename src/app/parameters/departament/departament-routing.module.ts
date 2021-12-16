import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentCreateComponent } from './pages/departament-create/departament-create.component';
import { DepartamentDeleteComponent } from './pages/departament-delete/departament-delete.component';
import { DepartamentReadComponent } from './pages/departament-read/departament-read.component';
import { DepartamentUpdateComponent } from './pages/departament-update/departament-update.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'departament-create', component: DepartamentCreateComponent },
      { path:'departament-read', component: DepartamentReadComponent },
      { path:'departament-update/:id', component: DepartamentUpdateComponent },
      { path:'departament-delete/:id', component: DepartamentDeleteComponent },
      { path:'**', redirectTo:'departament-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentRoutingModule { }

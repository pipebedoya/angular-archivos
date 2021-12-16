import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyCreateComponent } from './pages/faculty-create/faculty-create.component';
import { FacultyReadComponent } from './pages/faculty-read/faculty-read.component';
import { FacultyUpdateComponent } from './pages/faculty-update/faculty-update.component';
import { FacultyDeleteComponent } from './pages/faculty-delete/faculty-delete.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'faculty-create', component: FacultyCreateComponent },
      { path:'faculty-read', component: FacultyReadComponent },
      { path:'faculty-update/:id', component: FacultyUpdateComponent },
      { path:'faculty-delete/:id', component: FacultyDeleteComponent },
      { path:'**', redirectTo:'faculty-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }

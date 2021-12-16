import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaCreateComponent } from './pages/area-create/area-create.component';
import { AreaDeleteComponent } from './pages/area-delete/area-delete.component';
import { AreaReadComponent } from './pages/area-read/area-read.component';
import { AreaUpdateComponent } from './pages/area-update/area-update.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'area-create', component: AreaCreateComponent },
      { path:'area-read', component: AreaReadComponent },
      { path:'area-update/:id', component: AreaUpdateComponent },
      { path:'area-delete/:id', component: AreaDeleteComponent },
      { path:'**', redirectTo:'area-read' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IAreaRoutingModule { }

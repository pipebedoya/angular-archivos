import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MainComponent } from '../auth/pages/main/main.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserDeleteComponent } from './pages/user-delete/user-delete.component';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { UserReadComponent } from './pages/user-read/user-read.component';
import { DashboardComponent } from '../protected/dashboard/dashboard.component';
import { RolComponent } from './pages/rol/rol.component';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children:[
      { path: 'user-create', component: UserCreateComponent },
      { path: 'user-delete/:id', component: UserDeleteComponent },
      { path: 'user-update/:id', component: UserUpdateComponent },
      { path: 'user-read', component: UserReadComponent },
      { path: 'rol/:id', component: RolComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosAdminRoutingModule { }
